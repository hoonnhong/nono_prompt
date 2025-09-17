/**
 * @file ImageUploader.tsx
 * @description 사용자가 이미지를 업로드하고 미리 볼 수 있는 UI 컴포넌트입니다.
 *              클릭하여 파일 선택, 드래그 앤 드롭 기능을 모두 지원합니다.
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { UploadIcon } from './icons/UploadIcon';
import { fileToBase64 } from '../utils/fileUtils';

interface ImageUploaderProps {
  initialImage: string; // 갤러리에서 선택한 예제의 초기 이미지 URL
  onImageUpload: (base64: string, mimeType: string) => void; // 이미지가 업로드되면 호출될 콜백
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ initialImage, onImageUpload }) => {
  // 화면에 보여줄 이미지 URL을 관리하는 상태 (초기값은 props로 받은 이미지)
  const [imagePreview, setImagePreview] = useState(initialImage);
  // 파일이 컴포넌트 위로 드래그되고 있는지 여부를 관리하는 상태
  const [isDragging, setIsDragging] = useState(false);
  
  // 숨겨진 file input 요소에 접근하기 위한 ref
  const fileInputRef = useRef<HTMLInputElement>(null);
  // 사용자가 업로드한 파일로 생성한 Blob URL을 저장하기 위한 ref (메모리 누수 방지용)
  const blobUrlRef = useRef<string | null>(null);

  /**
   * 선택되거나 드롭된 파일을 처리하는 핵심 함수.
   * 파일을 Base64로 변환하고, 미리보기를 업데이트하며, 부모 컴포넌트로 데이터를 전달합니다.
   */
  const processFile = useCallback(async (file: File | null | undefined) => {
    if (file && file.type.startsWith('image/')) {
      try {
        // 파일을 Base64 문자열로 비동기 변환
        const base64 = await fileToBase64(file);
        // 부모 컴포넌트(App)로 Base64 데이터와 MIME 타입 전달
        onImageUpload(base64, file.type);
        
        // 이전에 생성된 Blob URL이 있다면 메모리에서 해제하여 누수를 방지
        if (blobUrlRef.current) {
          URL.revokeObjectURL(blobUrlRef.current);
        }

        // 새 파일에 대한 Blob URL을 생성하여 미리보기 이미지로 설정
        const newBlobUrl = URL.createObjectURL(file);
        blobUrlRef.current = newBlobUrl;
        setImagePreview(newBlobUrl);
      } catch (error) {
        console.error("파일을 Base64로 변환하는 중 오류 발생:", error);
      }
    }
  }, [onImageUpload]);

  // 숨겨진 파일 입력(input) 요소의 변경 이벤트를 처리하는 핸들러
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    processFile(event.target.files?.[0]);
  }, [processFile]);

  // 다른 예제를 선택하여 initialImage prop이 변경될 때마다 실행되는 effect
  useEffect(() => {
    // 컴포넌트가 언마운트되거나 예제가 변경될 때 기존 Blob URL을 해제
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }
    // 이미지 미리보기를 새로운 초기 이미지로 리셋
    setImagePreview(initialImage);

    // cleanup 함수: 컴포넌트가 완전히 사라질 때 마지막으로 Blob URL을 해제
    return () => {
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
    };
  }, [initialImage]);

  // '이미지 교체' 버튼 클릭 시 숨겨진 파일 입력을 트리거
  const handleButtonClick = () => {
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
    e.preventDefault(); // 이 부분이 없으면 drop 이벤트가 발생하지 않음
    e.stopPropagation();
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    // 드롭된 파일 중 첫 번째 파일을 처리
    processFile(e.dataTransfer.files?.[0]);
  }, [processFile]);


  return (
    <div
      className="relative aspect-square w-full group rounded-md"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src={imagePreview} alt="Input" className="w-full h-full object-cover rounded-md" />
      {/* 실제 파일 선택은 이 숨겨진 input을 통해 이루어짐 */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
      />
      
      {/* 마우스를 올렸을 때 나타나는 '이미지 교체' 버튼 오버레이 */}
      <button
        onClick={handleButtonClick}
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 rounded-md"
      >
        <UploadIcon className="w-8 h-8 mb-1" />
        <span className="text-sm font-semibold text-center">이미지 교체</span>
      </button>

      {/* 파일을 드래그하고 있을 때 나타나는 오버레이 */}
      {isDragging && (
        <div className="absolute inset-0 bg-gray-900/80 border-4 border-dashed border-yellow-400 rounded-md flex flex-col items-center justify-center text-white p-2 pointer-events-none transition-all">
          <UploadIcon className="w-10 h-10 mb-2" />
          <span className="text-lg font-semibold text-center">여기에 이미지 놓기</span>
        </div>
      )}
    </div>
  );
};
