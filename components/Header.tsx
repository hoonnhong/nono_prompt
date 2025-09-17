/**
 * @file Header.tsx
 * @description 애플리케이션의 상단 헤더 영역을 담당하는 UI 컴포넌트입니다.
 *              앱의 제목과 아이콘을 표시하여 브랜드 아이덴티티를 나타냅니다.
 */

import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

export const Header: React.FC = () => {
  return (
    // 상단에 고정되는 반투명 헤더 스타일
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10 p-4 md:px-8 border-b border-gray-700/50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-center md:justify-start">
        <SparklesIcon className="h-8 w-8 text-yellow-300" />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-100 ml-3 tracking-tight">
          <span className="text-yellow-300">🍌 Nano-banana</span> 이미지 갤러리 & 플레이그라운드
        </h1>
      </div>
    </header>
  );
};
