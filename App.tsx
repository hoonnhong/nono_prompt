/**
 * @file App.tsx
 * @description 애플리케이션의 최상위 메인 컴포넌트입니다.
 *              모든 상태 관리(선택된 예제, 사용자 이미지, 로딩 상태 등)와
 *              핵심 로직(이미지 생성, API 호출 처리)을 담당합니다.
 *              하위 컴포넌트인 Header, Gallery, Playground를 조합하여 전체 UI를 구성합니다.
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { Playground } from './components/Playground';
import { categorizedCases } from './constants/cases';
import type { Case, UserImage } from './types';
import { translateToEnglish, editImageWithNanoBanana } from './services/geminiService';

const App: React.FC = () => {
  // --- 상태 관리 (State Management) ---

  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [userImages, setUserImages] = useState<UserImage[]>([]);
  const [editablePrompt, setEditablePrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('전체 보기');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // 사용자가 업로드한 이미지를 예제 변경 시에도 유지하기 위한 상태
  const [persistedUserImage, setPersistedUserImage] = useState<{ base64: string; mimeType: string } | null>(null);

  // --- 데이터 파생 및 메모이제이션 ---

  const allCases = useMemo(() => Object.values(categorizedCases).flat(), []);
  const categories = useMemo(() => ['전체 보기', ...Object.keys(categorizedCases)], []);

  const filteredCases = useMemo(() => {
    let cases = allCases;
    
    if (selectedCategory && selectedCategory !== '전체 보기') {
      cases = cases.filter(c => c.category === selectedCategory);
    }

    if (searchTerm.trim() !== '') {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      cases = cases.filter(c => 
        c.title.toLowerCase().includes(lowercasedSearchTerm) ||
        c.category.toLowerCase().includes(lowercasedSearchTerm)
      );
    }
    
    return cases;
  }, [allCases, selectedCategory, searchTerm]);


  // --- 이벤트 핸들러 및 로직 ---

  const loadCaseImages = async (caseItem: Case, persistedImg: { base64: string; mimeType: string } | null) => {
      // 1. UI에 표시할 이미지 목록을 준비합니다.
      const imagesForUI = caseItem.inputImages.map((url, index) => {
        // 사용자가 업로드한 이미지가 있고, 첫 번째 이미지 슬롯이라면, 그 이미지를 사용합니다.
        if (index === 0 && persistedImg) {
          return {
            url,
            base64: persistedImg.base64,
            mimeType: persistedImg.mimeType,
          };
        }
        // 그렇지 않으면, 예제의 기본 이미지를 로드할 준비를 합니다.
        return { url, base64: null, mimeType: null };
      });
      setUserImages(imagesForUI);
  
      // 2. Base64로 변환해야 할 이미지들(사용자 업로드 이미지를 제외한 나머지)을 비동기 로드합니다.
      const imagePromises = imagesForUI.map(async (imageState) => {
        // 이미 Base64 데이터가 있는 경우(사용자 업로드 이미지)는 건너뜁니다.
        if (imageState.base64) {
          return imageState;
        }
        try {
          const response = await fetch(imageState.url);
          if (!response.ok) throw new Error(`이미지 로드 실패: ${imageState.url}`);
          const blob = await response.blob();
          const reader = new FileReader();
          return new Promise<UserImage>((resolve, reject) => {
            reader.onloadend = () => {
              const base64String = (reader.result as string).split(',')[1];
              resolve({ url: imageState.url, base64: base64String, mimeType: blob.type });
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
        } catch (e) {
          console.error(e);
          setError(`${imageState.url.split('/').pop()} 이미지 로딩에 실패했습니다.`);
          return { url: imageState.url, base64: null, mimeType: null };
        }
      });
      
      const loadedImages = await Promise.all(imagePromises);
      setUserImages(loadedImages);
  };
  

  const handleSelectCase = (caseItem: Case) => {
    setSelectedCase(caseItem);
    setEditablePrompt(caseItem.prompt_ko);
    // 예제 선택 시, 결과 영역에 예제 결과 이미지를 바로 표시합니다.
    setGeneratedImage(caseItem.outputImage); 
    setGeneratedText(null);
    setError(null);
    loadCaseImages(caseItem, persistedUserImage);
  };

  /**
   * 사용자가 이미지를 업로드했을 때 호출되는 함수입니다.
   * 현재 뷰와 유지되는 상태(persistedUserImage)를 모두 업데이트합니다.
   */
  const handleUserImageUpload = (index: number, base64: string, mimeType: string) => {
    // 첫 번째 이미지 슬롯에 업로드된 경우에만 이미지를 유지합니다.
    if (index === 0) {
      setPersistedUserImage({ base64, mimeType });
    }
    // 현재 뷰의 userImages 상태를 업데이트합니다.
    setUserImages(currentImages => {
      const newImages = [...currentImages];
      // 새 케이스 선택 시 url이 바뀔 수 있으므로 현재 상태를 기반으로 업데이트합니다.
      const currentUrl = newImages[index]?.url || `user-upload-${index}`; 
      newImages[index] = { url: currentUrl, base64, mimeType };
      return newImages;
    });
  };
  
  /**
   * 예제 선택 없이 새로 시작하기 위한 함수입니다.
   * 모든 관련 상태를 초기화하고 빈 플레이그라운드를 준비합니다.
   */
  const handleStartNew = useCallback(() => {
    setSelectedCase(null);
    // 사용자가 이미지를 직접 올릴 수 있도록 하나의 빈 이미지 슬롯을 준비합니다.
    setUserImages([{ url: 'new-image-slot-1', base64: null, mimeType: null }]);
    setEditablePrompt('');
    setGeneratedImage(null);
    setGeneratedText(null);
    setError(null);
    setPersistedUserImage(null);
    // 갤러리 필터도 초기화합니다.
    setSelectedCategory('전체 보기');
    setSearchTerm('');
  }, []);

  // 앱이 처음 로드될 때 '새로 시작하기' 상태로 시작합니다.
  useEffect(() => {
    handleStartNew();
  }, [handleStartNew]);


  const handleGenerate = async () => {
    if (!editablePrompt) {
      setError("프롬프트를 입력해주세요.");
      return;
    }
    const imagesToProcess = userImages.filter(img => img.base64 && img.mimeType);
    if (userImages.some(img => !img.base64) && userImages.length > 0 && selectedCase?.inputImages.length > 0) {
       if(persistedUserImage === null){
         setError("이미지를 업로드하거나 모든 예제 이미지가 로드될 때까지 기다려주세요.");
         return;
       }
    }


    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    setGeneratedText(null);

    try {
      const englishPrompt = await translateToEnglish(editablePrompt);
      const imageData = imagesToProcess.map(img => ({ data: img.base64!, mimeType: img.mimeType! }));
      const result = await editImageWithNanoBanana(englishPrompt, imageData);

      if (result.image) {
        setGeneratedImage(`data:image/png;base64,${result.image}`);
      }
      if (result.text) {
        setGeneratedText(result.text);
      }
      if (!result.image && !result.text) {
        setError("AI가 이미지나 텍스트를 반환하지 않았습니다. 다른 프롬프트를 시도해보세요.");
      }
    } catch (e: any) {
      setError(e.message || "알 수 없는 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      <Header />
      <main className="max-w-screen-2xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 xl:col-span-1">
            <Gallery 
              categorizedCases={categorizedCases}
              filteredCases={filteredCases}
              categories={categories}
              onCaseSelect={handleSelectCase}
              selectedCaseId={selectedCase?.id ?? null}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onStartNew={handleStartNew}
            />
          </aside>
          <section className="lg:col-span-2 xl:col-span-3">
            <Playground
              selectedCase={selectedCase}
              userImages={userImages}
              onImageUpload={handleUserImageUpload}
              prompt={editablePrompt}
              setPrompt={setEditablePrompt}
              isLoading={isLoading}
              onGenerate={handleGenerate}
              generatedImage={generatedImage}
              generatedText={generatedText}
              error={error}
            />
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;