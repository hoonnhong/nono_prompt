import React from 'react';
import type { Case, UserImage } from '../types';
import { ImageUploader } from './ImageUploader';
import { Loader } from './Loader';
import { SparklesIcon } from './icons/SparklesIcon';

interface PlaygroundProps {
  selectedCase: Case | null;
  userImages: UserImage[];
  setUserImages: React.Dispatch<React.SetStateAction<UserImage[]>>;
  prompt: string;
  setPrompt: (prompt: string) => void;
  isLoading: boolean;
  onGenerate: () => void;
  generatedImage: string | null;
  generatedText: string | null;
  error: string | null;
}

export const Playground: React.FC<PlaygroundProps> = ({
  selectedCase,
  userImages,
  setUserImages,
  prompt,
  setPrompt,
  isLoading,
  onGenerate,
  generatedImage,
  generatedText,
  error
}) => {
  if (!selectedCase) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-gray-800/50 rounded-xl border-2 border-dashed border-gray-700/50 p-8 text-center">
        <SparklesIcon className="w-16 h-16 text-gray-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-200">플레이그라운드</h2>
        <p className="text-gray-400 mt-2">왼쪽 갤러리에서 예제를 선택하여 시작하세요!</p>
      </div>
    );
  }

  const handleImageChange = (index: number, base64: string, mimeType: string) => {
    setUserImages(currentImages =>
      currentImages.map((img, i) =>
        i === index ? { ...img, base64, mimeType } : img
      )
    );
  };

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-4 sm:p-6 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-gray-100">{selectedCase.title}</h2>
      <p className="text-sm text-gray-400 mb-4">by {selectedCase.author} | <a href={selectedCase.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-yellow-300">원본 보기</a></p>
      
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto pr-2 -mr-2" style={{maxHeight: 'calc(100vh - 18rem)'}}>
        {/* Left Column: Inputs */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-yellow-300">입력</h3>
            <div className="grid grid-cols-2 gap-3">
              {userImages.map((image, index) => (
                <ImageUploader key={image.url} initialImage={image.url} onImageUpload={(b64, mime) => handleImageChange(index, b64, mime)} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-yellow-300">프롬프트</h3>
            <div>
              <label htmlFor="editable-prompt" className="font-semibold text-gray-200 mb-1 block">
                생성 프롬프트 (한국어 - 수정 가능)
              </label>
              <textarea
                id="editable-prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="생성을 위해 프롬프트를 입력하거나 수정하세요..."
                className="w-full h-32 p-3 bg-gray-900/80 border border-gray-500 rounded-md resize-none text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Output */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">결과</h3>
          <div className="flex-grow relative aspect-square bg-gray-900/50 rounded-md border border-gray-600 flex items-center justify-center overflow-hidden">
            {isLoading ? (
              <Loader />
            ) : error ? (
              <div className="p-4 text-red-400 text-center">
                <p className="font-semibold">오류 발생</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            ) : generatedImage ? (
              <img src={generatedImage} alt="Generated result" className="w-full h-full object-contain" />
            ) : (
              <img src={selectedCase.outputImage} alt="Example output" className="w-full h-full object-contain" />
            )}
          </div>
           {generatedText && (
             <div className="mt-2 p-3 bg-gray-900/50 border border-gray-600 rounded-md text-sm text-gray-300">
               <p className="font-semibold text-yellow-300 mb-1">AI 텍스트 응답:</p>
               {generatedText}
             </div>
           )}
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-700/50">
        <button
          onClick={onGenerate}
          disabled={isLoading}
          className="w-full bg-yellow-400 text-gray-900 font-bold py-3 px-4 rounded-md hover:bg-yellow-300 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader simple={true} />
              생성 중...
            </>
          ) : (
             <>
              <SparklesIcon className="w-5 h-5" />
              나만의 이미지 생성하기
             </>
          )}
        </button>
      </div>
    </div>
  );
};