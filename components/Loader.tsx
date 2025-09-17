/**
 * @file Loader.tsx
 * @description 비동기 작업이 진행 중임을 사용자에게 시각적으로 알려주는 로딩 인디케이터 컴포넌트입니다.
 *              상황에 따라 상세 버전과 단순 버전을 선택하여 사용할 수 있습니다.
 */

import React from 'react';

interface LoaderProps {
  simple?: boolean; // true일 경우 작은 스피너만, false일 경우 텍스트가 포함된 큰 로더를 표시
}

export const Loader: React.FC<LoaderProps> = ({ simple = false }) => {
  // 'simple' prop이 true이면, 버튼 내부에 들어갈 작은 스피너를 렌더링합니다.
  if (simple) {
    return (
      <div className="w-5 h-5 border-2 border-t-transparent border-gray-900 rounded-full animate-spin"></div>
    );
  }

  // 기본값(false)일 경우, 화면 중앙에 표시될 상세 정보를 포함한 로더를 렌더링합니다.
  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-400">
      <div className="w-12 h-12 border-4 border-t-transparent border-yellow-400 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold">AI가 생각 중입니다...</p>
      <p className="text-sm">잠시만 기다려주세요.</p>
    </div>
  );
};
