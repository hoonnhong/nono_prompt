/**
 * @file Modal.tsx
 * @description 이미지 확대 보기 및 다운로드를 위한 모달 UI 컴포넌트입니다.
 */

import React, { useEffect } from 'react';
import { CloseIcon } from './icons/CloseIcon';
import { DownloadIcon } from './icons/DownloadIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  imageTitle?: string;
  onDownload: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  imageTitle = '이미지 상세보기',
  onDownload,
}) => {
  // ESC 키를 눌렀을 때 모달을 닫는 useEffect
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  // isOpen이 false이거나 imageUrl이 없으면 아무것도 렌더링하지 않음
  if (!isOpen || !imageUrl) return null;

  return (
    <div
      // 전체 화면을 덮는 반투명 배경 (Backdrop)
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose} // 배경 클릭 시 모달 닫기
    >
      <div
        // 모달 컨텐츠 컨테이너. 이벤트 버블링을 막아 컨텐츠 클릭 시 모달이 닫히지 않게 함.
        className="bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달 헤더: 제목과 닫기 버튼 */}
        <header className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-gray-200 truncate pr-8">{imageTitle}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <CloseIcon className="w-6 h-6" />
          </button>
        </header>
        
        {/* 모달 본문: 확대된 이미지 */}
        <div className="flex-grow p-4 overflow-auto">
          <img src={imageUrl} alt={imageTitle} className="w-full h-auto object-contain mx-auto" style={{ maxHeight: 'calc(90vh - 140px)' }}/>
        </div>
        
        {/* 모달 푸터: 다운로드 버튼 */}
        <footer className="flex justify-end p-4 border-t border-gray-700">
          <button
            onClick={onDownload}
            className="flex items-center justify-center bg-yellow-400 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            <span>이미지 다운로드</span>
          </button>
        </footer>
      </div>
    </div>
  );
};