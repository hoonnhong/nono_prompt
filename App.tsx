import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';
import { Playground } from './components/Playground';
import { categorizedCases } from './constants/cases';
import type { Case, UserImage } from './types';
import { translateToEnglish, editImageWithNanoBanana } from './services/geminiService';

/**
 * @file App.tsx
 * @description 애플리케이션의 최상위 메인 컴포넌트입니다.
 *              모든 상태 관리(선택된 예제, 사용자 이미지, 로딩 상태 등)와
 *              핵심 로직(이미지 생성, API 호출 처리)을 담당합니다.
 *              하위 컴포넌트인 Header, Gallery, Playground를 조합하여 전체 UI를 구성합니다.
 */
const App: React.FC = () => {
  // --- 상태 관리 (State Management) ---

  // 사용자가 갤러리에서 선택한 예제 케이스를 저장하는 상태
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  
  // 사용자가 플레이그라운드에 업로드하거나, 예제에 포함된 기본 이미지들을 관리하는 상태
  const [userImages, setUserImages] = useState<UserImage[]>([]);

  // 사용자가 수정할 수 있는 프롬프트 입력값을 관리하는 상태
  const [editablePrompt, setEditablePrompt] = useState('');
  
  // API 호출과 같은 비동기 작업의 진행 상태를 관리 (로딩 인디케이터 표시 여부 결정)
  const [isLoading, setIsLoading] = useState(false);
  
  // AI가 생성한 최종 이미지 URL(Base64)을 저장하는 상태
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  
  // AI가 이미지와 함께 생성한 텍스트 응답을 저장하는 상태
  const [generatedText, setGeneratedText] = useState<string | null>(null);

  // 작업 중 발생한 오류 메시지를 저장하는 상태
  const [error, setError] = useState<string | null>(null);

  // 갤러리 필터링을 위한 상태
  const [selectedCategory, setSelectedCategory] = useState<string>('전체 보기');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // --- 데이터 파생 및 메모이제이션 ---

  // 전체 예제 목록을 하나의 배열로 평탄화합니다.
  // useMemo를 사용하여 categorizedCases가 변경될 때만 재계산합니다.
  const allCases = useMemo(() => Object.values(categorizedCases).flat(), []);
  
  // 갤러리 필터 드롭다운에 표시할 카테고리 목록을 생성합니다.
  const categories = useMemo(() => ['전체 보기', ...Object.keys(categorizedCases)], []);

  // 선택된 카테고리와 검색어에 따라 갤러리에 표시될 예제를 필터링합니다.
  // useMemo를 사용하여 필터링 조건이 변경될 때만 목록을 재생성하여 성능을 최적화합니다.
  const filteredCases = useMemo(() => {
    let cases = allCases;
    
    // 카테고리 필터링: '전체 보기'가 아닐 경우, 해당 카테고리에 속한 예제만 필터링합니다.
    if (selectedCategory && selectedCategory !== '전체 보기') {
      cases = cases.filter(c => c.category === selectedCategory);
    }

    // 검색어 필터링: 검색어가 있을 경우, 예제 제목 또는 카테고리 이름에 검색어가 포함된 예제만 필터링합니다. (대소문자 구분 없음)
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

  /**
   * 사용자가 갤러리에서 예제를 선택했을 때 호출되는 함수입니다.
   * 플레이그라운드의 상태를 선택된 예제 데이터로 초기화합니다.
   * @param {Case} caseItem - 사용자가 선택한 예제 객체
   */
  const handleSelectCase = (caseItem: Case) => {
    setSelectedCase(caseItem); // 선택된 케이스 업데이트
    setEditablePrompt(caseItem.prompt_ko); // 한국어 프롬프트로 편집창 초기화

    // 플레이그라운드 결과 영역 초기화
    setGeneratedImage(null);
    setGeneratedText(null);
    setError(null);

    // 예제에 포함된 입력 이미지가 있다면, 상태를 즉시 업데이트하여 UI에 표시
    const initialUserImages = caseItem.inputImages.map(url => ({
      url,
      base64: null,
      mimeType: null,
    }));
    setUserImages(initialUserImages);
    
    // API 호출에 사용할 이미지 데이터를 Base64 형식으로 비동기적으로 미리 로드합니다.
    if (caseItem.inputImages.length > 0) {
      const fetchInitialImages = async () => {
        const imagePromises = caseItem.inputImages.map(async (url) => {
          try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`이미지 로드 실패: ${url}`);
            const blob = await response.blob();
            const reader = new FileReader();
            // FileReader를 Promise로 감싸 비동기 처리를 용이하게 합니다.
            return new Promise<{ url: string; base64: string; mimeType: string }>((resolve, reject) => {
              reader.onloadend = () => {
                const base64String = (reader.result as string).split(',')[1];
                resolve({ url, base64: base64String, mimeType: blob.type });
              };
              reader.onerror = reject;
              reader.readAsDataURL(blob);
            });
          } catch (e) {
            console.error(e);
            setError(`${url.split('/').pop()} 이미지 로딩에 실패했습니다.`);
            return { url, base64: null, mimeType: null }; // 실패 시 null 반환
          }
        });
        const loadedImages = await Promise.all(imagePromises);
        setUserImages(loadedImages);
      };
      fetchInitialImages();
    }
  };

  /**
   * '이미지 생성하기' 버튼을 클릭했을 때 실행되는 비동기 함수입니다.
   * 입력된 프롬프트를 영어로 번역하고, 이미지와 함께 Gemini API로 전송하여 결과를 받아옵니다.
   */
  const handleGenerate = async () => {
    // 유효성 검사
    if (!selectedCase || !editablePrompt) {
      setError("예제를 선택하고 프롬프트를 입력해주세요.");
      return;
    }
    const imagesToProcess = userImages.filter(img => img.base64 && img.mimeType);
    if (userImages.length > 0 && imagesToProcess.length !== userImages.length) {
      setError("모든 이미지가 로드될 때까지 기다려주세요.");
      return;
    }

    // 로딩 상태 시작 및 이전 결과 초기화
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    setGeneratedText(null);

    try {
      // 1. 한국어 프롬프트를 영어로 번역
      const englishPrompt = await translateToEnglish(editablePrompt);
      // 2. Base64 이미지 데이터를 API 포맷에 맞게 준비
      const imageData = imagesToProcess.map(img => ({ data: img.base64!, mimeType: img.mimeType! }));
      // 3. Nano-banana 모델로 이미지 편집/생성 요청
      const result = await editImageWithNanoBanana(englishPrompt, imageData);

      // 4. 결과 처리
      if (result.image) {
        setGeneratedImage(`data:image/png;base64,${result.image}`);
      }
      if (result.text) {
        setGeneratedText(result.text);
      }
      // 결과가 아무것도 없을 경우 에러 메시지 표시
      if (!result.image && !result.text) {
        setError("AI가 이미지나 텍스트를 반환하지 않았습니다. 다른 프롬프트를 시도해보세요.");
      }
    } catch (e: any) {
      setError(e.message || "알 수 없는 오류가 발생했습니다.");
    } finally {
      // 로딩 상태 종료
      setIsLoading(false);
    }
  };
  
  
  // --- 렌더링 ---
  
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      <Header />
      <main className="max-w-screen-2xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* 왼쪽 사이드바: 갤러리 */}
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
            />
          </aside>
          {/* 메인 콘텐츠: 플레이그라운드 */}
          <section className="lg:col-span-2 xl:col-span-3">
            <Playground
              selectedCase={selectedCase}
              userImages={userImages}
              setUserImages={setUserImages}
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