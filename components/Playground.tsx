/**
 * @file Playground.tsx
 * @description 이미지와 프롬프트를 입력하고, AI가 생성한 결과를 확인하는 메인 인터페이스 UI 컴포넌트입니다.
 *              입력 영역(이미지 업로더, 프롬프트 에디터)과 결과 영역(생성된 이미지, 텍스트)으로 구성되며,
 *              사용자가 두 영역의 너비를 조절할 수 있는 기능을 포함합니다.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import type { Case, UserImage } from '../types';
import { ImageUploader } from './ImageUploader';
import { Loader } from './Loader';
import { DownloadIcon } from './icons/DownloadIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';
import { Modal } from './Modal';

interface PlaygroundProps {
  selectedCase: Case | null;
  userImages: UserImage[];
  onImageUpload: (index: number, base64: string, mimeType: string) => void;
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
  onImageUpload,
  prompt,
  setPrompt,
  isLoading,
  onGenerate,
  generatedImage,
  generatedText,
  error,
}) => {
  // --- 너비 조절 기능 상태 및 로직 ---
  const [isResizing, setIsResizing] = useState(false);
  const [inputWidth, setInputWidth] = useState(50); // 입력 패널의 너비를 % 단위로 관리 (초기값 50%)
  const playgroundRef = useRef<HTMLDivElement>(null); // 전체 플레이그라운드 컨테이너 참조
  
  // --- 이미지 상세보기 모달 상태 ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 마우스 이동에 따라 너비를 조절하는 핸들러
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // 리사이징 중이 아니거나, 컨테이너 참조가 없으면 아무것도 하지 않음
    if (!isResizing || !playgroundRef.current) return;
    
    const container = playgroundRef.current;
    const rect = container.getBoundingClientRect();
    
    // 컨테이너 내에서 마우스의 X좌표를 기준으로 새 너비(%) 계산
    let newWidthPercent = ((e.clientX - rect.left) / rect.width) * 100;

    // 패널이 너무 작거나 커지는 것을 방지하기 위한 최소/최대 너비 제한
    if (newWidthPercent < 25) newWidthPercent = 25;
    if (newWidthPercent > 75) newWidthPercent = 75;

    setInputWidth(newWidthPercent);
  }, [isResizing]); // isResizing 상태가 변경될 때마다 함수를 재생성

  // 마우스 버튼을 놓았을 때 리사이징을 종료하는 핸들러
  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  // isResizing 상태에 따라 window에 mousemove, mouseup 이벤트를 동적으로 추가/제거
  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      // 리사이징 중 텍스트가 선택되는 것을 방지
      document.body.style.userSelect = 'none'; 
    }
    
    // 클린업 함수: 컴포넌트가 언마운트되거나 isResizing이 false가 되면 이벤트 리스너 제거
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);
  
  // --- 다운로드 핸들러 ---
  const handleDownloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = `${(selectedCase?.title || 'custom_generation').replace(/\s+/g, '_')}_output.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  
  const handleDownloadText = () => {
    if (generatedText) {
      const blob = new Blob([generatedText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${(selectedCase?.title || 'custom_generation').replace(/\s+/g, '_')}_text.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  // --- 렌더링 ---
  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-4 sm:p-6 lg:p-8 flex flex-col h-full">
      {/* 헤더: 예제 제목 및 정보 */}
      <div className="flex-shrink-0 mb-6">
        <h2 className="text-3xl font-bold text-gray-100">
          {selectedCase ? selectedCase.title : '새 이미지 생성'}
        </h2>
        {selectedCase && (
          <div className="text-sm text-gray-400 mt-1 flex items-center flex-wrap gap-x-3 gap-y-1">
            <span>카테고리: {selectedCase.category}</span>
            <span className="hidden sm:inline">|</span>
            <span>출처: {selectedCase.author}</span>
            {selectedCase.sourceUrl && selectedCase.sourceUrl !== '#' && (
               <a 
                href={selectedCase.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-yellow-300/80 hover:text-yellow-300 hover:underline"
                title="원본 페이지에서 실제 사용법 보기"
              >
                <span>웹페이지에서 사용법 보기</span>
                <ExternalLinkIcon className="w-4 h-4 ml-1" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* 메인 컨텐츠 영역: 입력과 결과를 담는 컨테이너 */}
      <div ref={playgroundRef} className="flex-grow flex flex-col md:flex-row min-h-0">
        {/* --- 왼쪽: 입력 영역 --- */}
        <div 
          className="flex flex-col gap-6"
          // 데스크톱 뷰에서만 동적 너비 스타일 적용
          style={{ width: `${inputWidth}%`, flexShrink: 0 }}
        >
          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-3">입력</h3>
            <div className="grid grid-cols-2 gap-4">
              {userImages.map((img, index) => (
                <div key={img.url || index}>
                  <ImageUploader 
                    uploadedImagePreview={img.base64 ? `data:${img.mimeType};base64,${img.base64}` : null}
                    initialImage={img.url}
                    onImageUpload={(base64, mimeType) => onImageUpload(index, base64, mimeType)}
                  />
                  {selectedCase && selectedCase.inputImages.length > 0 &&(
                    <p className="text-xs text-center text-gray-400 mt-1">입력 이미지 {index + 1}</p>
                  )}
                </div>
              ))}
              {userImages.length === 0 && (
                <div className="col-span-2 text-center py-10 border-2 border-dashed border-gray-600 rounded-md">
                   <p className="text-gray-500">이미지를 업로드하거나 예제를 선택하세요.</p>
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="prompt" className="block text-xl font-semibold text-gray-200 mb-3">
              프롬프트
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="프롬프트를 입력하거나 수정하세요..."
              className="w-full h-48 bg-gray-900 border border-gray-600 rounded-md p-3 text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none resize-none"
              disabled={isLoading}
            />
          </div>
          <button
            onClick={onGenerate}
            disabled={isLoading}
            className="w-full mt-auto bg-yellow-400 text-gray-900 font-bold py-3 px-4 rounded-md hover:bg-yellow-500 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center text-lg"
          >
            {isLoading ? <Loader simple /> : '✨ 이미지 생성하기'}
          </button>
        </div>

        {/* --- 분할자 (Splitter) --- */}
        <div
          className="hidden md:flex w-4 flex-shrink-0 cursor-col-resize items-center justify-center"
          // 마우스 버튼을 누르면 리사이징 시작
          onMouseDown={(e) => { e.preventDefault(); setIsResizing(true); }}
        >
          <div className="w-1 h-20 bg-gray-600 rounded-full hover:bg-yellow-400 transition-colors"></div>
        </div>

        {/* --- 오른쪽: 결과 영역 --- */}
        <div className="flex flex-col flex-1 min-w-0">
          <h3 className="text-xl font-semibold text-gray-200 mb-3">결과</h3>
          <div className="flex-grow bg-gray-900 rounded-md flex items-center justify-center p-4 relative border border-gray-700 min-h-[300px]">
            {isLoading ? (
              <Loader />
            ) : error ? (
              <div className="text-red-400 text-center p-4">
                <p className="font-semibold text-lg">오류 발생</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            ) : generatedImage || generatedText ? (
              <div className="w-full flex flex-col">
                {generatedImage && (
                  <div className="relative group">
                    <img 
                      src={generatedImage} 
                      alt="Generated result" 
                      className="w-full h-auto object-contain rounded-md max-h-[400px] cursor-pointer hover:opacity-90 transition-opacity" 
                      onClick={() => setIsModalOpen(true)}
                    />
                    <button 
                      onClick={handleDownloadImage}
                      className="absolute top-2 right-2 bg-gray-800/70 p-2 rounded-full text-white hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="이미지 다운로드"
                    >
                      <DownloadIcon className="w-5 h-5" />
                    </button>
                  </div>
                )}
                {generatedText && (
                  <div className={`relative group ${generatedImage ? 'mt-4' : ''}`}>
                    <div className="p-3 bg-gray-800 border border-gray-700 rounded-md max-h-32 overflow-y-auto">
                      <p className="text-sm text-gray-300 whitespace-pre-wrap">{generatedText}</p>
                    </div>
                    <button 
                      onClick={handleDownloadText}
                      className="absolute top-2 right-2 bg-gray-900/70 p-1.5 rounded-full text-white hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="텍스트 다운로드"
                    >
                      <DownloadIcon className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p className="font-semibold">생성된 결과가 여기에 표시됩니다.</p>
                <p className="text-sm mt-1">예제에 따라 이미지와 텍스트가 함께 나올 수 있습니다.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageUrl={generatedImage}
        imageTitle={selectedCase?.title || '생성된 이미지'}
        onDownload={handleDownloadImage}
      />
    </div>
  );
};