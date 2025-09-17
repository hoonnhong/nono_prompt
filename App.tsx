/**
 * @file App.tsx
 * @description 애플리케이션의 최상위 메인 컴포넌트입니다.
 * 모든 상태 관리, 데이터 흐름, 비즈니스 로직을 총괄하며,
 * Header, Gallery, Playground 컴포넌트를 조합하여 전체 UI를 구성합니다.
 */

import React, { useState, useMemo, useCallback } from 'react';
import { Gallery } from './components/Gallery';
import { Playground } from './components/Playground';
import { Header } from './components/Header';
import { categorizedCases } from './constants/cases';
import type { Case, UserImage } from './types';
import { editImageWithNanoBanana, translateToEnglish } from './services/geminiService';

const App: React.FC = () => {
  // --- 상태 관리 (State Management) ---

  // 사용자가 갤러리에서 선택한 예제 케이스를 저장합니다.
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  // 사용자가 업로드한 이미지 파일 정보를 관리합니다. (URL, Base64 데이터, MIME 타입)
  const [userImages, setUserImages] = useState<UserImage[]>([]);
  // 선택된 예제의 원본 한국어 프롬프트 (UI 표기용, 현재는 사용되지 않음)
  const [prompt, setPrompt] = useState<string>('');
  // 사용자가 직접 수정할 수 있는 프롬프트 (초기값은 예제의 한국어 프롬프트)
  const [editablePrompt, setEditablePrompt] = useState<string>('');
  // API 호출 등 비동기 작업 진행 상태를 나타냅니다. (로딩 스피너 표시용)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // AI가 생성한 결과 이미지 (Base64 데이터 URL 형식)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  // AI가 생성한 텍스트 결과
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  // 작업 중 발생한 오류 메시지
  const [error, setError] = useState<string | null>(null);

  // --- 메모이제이션 (Memoization) ---

  // categorizedCases 데이터가 변경되지 않는 한, 모든 케이스 목록을 다시 계산하지 않도록 메모이제이션합니다.
  const allCases = useMemo(() => Object.values(categorizedCases).flat(), []);
  // 카테고리 목록을 메모이제이션합니다.
  const categories = useMemo(() => Object.keys(categorizedCases), []);


  // --- 이벤트 핸들러 (Event Handlers) ---

  /**
   * 사용자가 갤러리에서 특정 예제를 선택했을 때 호출되는 콜백 함수입니다.
   * 선택된 예제에 맞춰 앱의 상태를 초기화합니다.
   */
  const handleSelectCase = useCallback((caseItem: Case) => {
    setSelectedCase(caseItem); // 선택된 케이스 업데이트
    setPrompt(caseItem.prompt_ko); // 원본 프롬프트 상태 업데이트
    setEditablePrompt(caseItem.prompt_ko); // 편집 가능한 프롬프트 초기화
    // 입력 이미지 슬롯을 예제 이미지로 초기화
    setUserImages(caseItem.inputImages.map(url => ({ url, base64: null, mimeType: null })));
    setGeneratedImage(null); // 이전 생성 결과 초기화
    setGeneratedText(null);
    setError(null); // 이전 오류 메시지 초기화
  }, []);

  /**
   * '이미지 생성하기' 버튼 클릭 시 실행되는 메인 로직입니다.
   * 1. 한국어 프롬프트를 영어로 번역합니다.
   * 2. 업로드된 이미지를 API 요청 형식에 맞게 준비합니다.
   * 3. Gemini API를 호출하여 이미지/텍스트 생성을 요청합니다.
   * 4. 결과를 상태에 저장하여 UI에 표시합니다.
   */
  const handleGenerate = async () => {
    // 필수 입력값(프롬프트, 이미지) 검증
    if (!editablePrompt || userImages.some(img => !img.base64 && img.url)) {
      setError("프롬프트와 모든 입력 이미지를 제공해주세요.");
      const hasMissingImages = userImages.some(img => !img.base64 && img.url);
      if(hasMissingImages) {
        setError("예시를 실행하려면 먼저 이미지를 업로드하거나, 이미지가 있는 다른 예시를 선택해주세요.");
        return;
      }
    }
    
    // 로딩 상태 시작 및 이전 결과/오류 초기화
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    setGeneratedText(null);

    try {
      // 1. 사용자가 수정한 한국어 프롬프트를 영어로 번역합니다.
      const englishPrompt = await translateToEnglish(editablePrompt);

      // 2. Base64로 인코딩된 이미지 데이터만 필터링하여 API 요청 형식에 맞게 준비합니다.
      const imagesToProcess = userImages
        .filter(img => img.base64 && img.mimeType)
        .map(img => ({ data: img.base64!, mimeType: img.mimeType! }));

      // 3. 번역된 영어 프롬프트와 이미지 데이터로 Gemini API를 호출합니다.
      const result = await editImageWithNanoBanana(englishPrompt, imagesToProcess);
      
      // 4. API 응답 결과 처리
      if (result.image) {
        setGeneratedImage(`data:image/png;base64,${result.image}`);
      }
      if(result.text) {
        setGeneratedText(result.text);
      }
      // 이미지와 텍스트 둘 다 없는 경우 오류 처리
      if(!result.image && !result.text) {
        setError("AI가 이미지를 생성하지 못했습니다. 다른 프롬프트를 시도해보세요.");
      }

    } catch (err) {
      // 오류 발생 시 처리
      console.error(err);
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      // 로딩 상태 종료
      setIsLoading(false);
    }
  };

  // --- 렌더링 (Rendering) ---
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-screen-2xl mx-auto">
        {/* 왼쪽: 예제 갤러리 */}
        <div className="lg:col-span-4 xl:col-span-3">
          <Gallery
            cases={allCases}
            categories={categories}
            onSelectCase={handleSelectCase}
            selectedCaseId={selectedCase?.id}
          />
        </div>
        {/* 오른쪽: 인터랙티브 플레이그라운드 */}
        <div className="lg:col-span-8 xl:col-span-9">
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
        </div>
      </main>
    </div>
  );
};

export default App;
