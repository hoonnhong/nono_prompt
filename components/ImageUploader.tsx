/**
 * @file ImageUploader.tsx
 * @description 사용자가 이미지를 업로드하고 미리 볼 수 있는 UI 컴포넌트입니다.
 *              클릭하여 파일 선택, 드래그 앤 드롭 기능을 모두 지원합니다.
 *              사용자가 이미지를 업로드하기 전에는 플레이스홀더를 표시합니다.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { UploadIcon } from './icons/UploadIcon';
import { fileToBase64 } from '../utils/fileUtils';

interface ImageUploaderProps {
  initialImage: string; 
  onImageUpload: (base64: string, mimeType: string) => void;
  // 부모 컴포넌트로부터 현재 표시해야 할 이미지 미리보기 URL을 받습니다.
  uploadedImagePreview: string | null;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ 
  initialImage, 
  onImageUpload, 
  uploadedImagePreview 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * 선택되거나 드롭된 파일을 처리하는 핵심 함수.
   */
  const processFile = useCallback(async (file: File | null | undefined) => {
    if (file && file.type.startsWith('image/')) {
      try {
        const base64 = await fileToBase64(file);
        onImageUpload(base64, file.type);
      } catch (error) {
        console.error("파일을 Base64로 변환하는 중 오류 발생:", error);
      }
    }
  }, [onImageUpload]);

  // input 요소의 변경 이벤트를 처리
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    processFile(event.target.files?.[0]);
  }, [processFile]);
  
  // '이미지 교체' 또는 플레이스홀더 클릭 시 숨겨진 파일 입력을 트리거
  const handleTriggerClick = () => {
    fileInputRef.current?.click();
  };
  
  // --- 드래그 앤 드롭 이벤트 핸들러 ---
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    processFile(e.dataTransfer.files?.[0]);
  }, [processFile]);

  return (
    <div
      className="relative aspect-square w-full"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
      />

      {uploadedImagePreview ? (
        // --- 이미지 미리보기 화면 ---
        <div className="relative w-full h-full group">
          <img src={uploadedImagePreview} alt="Uploaded preview" className="w-full h-full object-cover rounded-md" />
          <button
            onClick={handleTriggerClick}
            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 rounded-md cursor-pointer"
          >
            <UploadIcon className="w-8 h-8 mb-1" />
            <span className="text-sm font-semibold text-center">이미지 교체</span>
          </button>
          {isDragging && (
            <div className="absolute inset-0 bg-gray-900/80 border-4 border-dashed border-yellow-400 rounded-md flex flex-col items-center justify-center text-white p-2 pointer-events-none">
              <UploadIcon className="w-10 h-10 mb-2" />
              <span className="text-lg font-semibold text-center">여기에 놓아 교체</span>
            </div>
          )}
        </div>
      ) : (
        // --- 플레이스홀더 화면 ---
        <div
          onClick={handleTriggerClick}
          className={`w-full h-full flex flex-col items-center justify-center text-center p-4 border-2 border-dashed rounded-md cursor-pointer transition-colors ${
            isDragging
              ? 'border-yellow-400 bg-gray-700/50'
              : 'border-gray-600 hover:border-gray-500 hover:bg-gray-700/30'
          }`}
        >
          <UploadIcon className="w-10 h-10 mb-2 text-gray-500" />
          <p className="text-sm font-semibold text-gray-400">
            그림을 끌어서 놓거나<br/>클릭하여 파일을 선택하세요
          </p>
        </div>
      )}
    </div>
  );
};
