import React, { useState, useMemo, useCallback } from 'react';
import { Gallery } from './components/Gallery';
import { Playground } from './components/Playground';
import { Header } from './components/Header';
import { categorizedCases } from './constants/cases';
import type { Case, UserImage } from './types';
import { editImageWithNanoBanana, translateToEnglish } from './services/geminiService';

const App: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [userImages, setUserImages] = useState<UserImage[]>([]);
  const [prompt, setPrompt] = useState<string>('');
  const [editablePrompt, setEditablePrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [generatedText, setGeneratedText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const allCases = useMemo(() => Object.values(categorizedCases).flat(), []);
  const categories = useMemo(() => Object.keys(categorizedCases), []);


  const handleSelectCase = useCallback((caseItem: Case) => {
    setSelectedCase(caseItem);
    setPrompt(caseItem.prompt_ko);
    setEditablePrompt(caseItem.prompt_ko);
    setUserImages(caseItem.inputImages.map(url => ({ url, base64: null, mimeType: null })));
    setGeneratedImage(null);
    setGeneratedText(null);
    setError(null);
  }, []);

  const handleGenerate = async () => {
    if (!editablePrompt || userImages.some(img => !img.base64 && img.url)) {
      setError("프롬프트와 모든 입력 이미지를 제공해주세요.");
      const hasMissingImages = userImages.some(img => !img.base64 && img.url);
      if(hasMissingImages) {
        setError("예시를 실행하려면 먼저 이미지를 업로드하거나, 이미지가 있는 다른 예시를 선택해주세요.");
        return;
      }
    }
    
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);
    setGeneratedText(null);

    try {
      // 1. Translate the user-edited Korean prompt to English
      const englishPrompt = await translateToEnglish(editablePrompt);

      // 2. Prepare images
      const imagesToProcess = userImages
        .filter(img => img.base64 && img.mimeType)
        .map(img => ({ data: img.base64!, mimeType: img.mimeType! }));

      // 3. Call image generation with the translated English prompt
      const result = await editImageWithNanoBanana(englishPrompt, imagesToProcess);
      
      if (result.image) {
        setGeneratedImage(`data:image/png;base64,${result.image}`);
      }
      if(result.text) {
        setGeneratedText(result.text);
      }
      if(!result.image && !result.text) {
        setError("AI가 이미지를 생성하지 못했습니다. 다른 프롬프트를 시도해보세요.");
      }

    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-screen-2xl mx-auto">
        <div className="lg:col-span-4 xl:col-span-3">
          <Gallery
            cases={allCases}
            categories={categories}
            onSelectCase={handleSelectCase}
            selectedCaseId={selectedCase?.id}
          />
        </div>
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