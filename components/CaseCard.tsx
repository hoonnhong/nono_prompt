/**
 * @file CaseCard.tsx
 * @description 갤러리에서 단일 예제 케이스를 시각적으로 표시하는 카드 형태의 UI 컴포넌트입니다.
 *              (참고: 현재 갤러리는 텍스트 목록 형태로 변경되어 이 컴포넌트는 사용되지 않고 있습니다.)
 */

import React from 'react';
import type { Case } from '../types';

interface CaseCardProps {
  caseItem: Case;
  onClick: () => void;
  isSelected: boolean;
}

export const CaseCard: React.FC<CaseCardProps> = ({ caseItem, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      // 선택되었을 때와 마우스 호버 시 시각적 피드백을 제공합니다.
      className={`relative group cursor-pointer aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
        isSelected ? 'ring-4 ring-yellow-400' : 'ring-2 ring-transparent hover:ring-yellow-400'
      }`}
    >
      <img
        src={caseItem.outputImage}
        alt={caseItem.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy" // 이미지가 뷰포트에 가까워질 때 로드하여 초기 로딩 성능을 최적화합니다.
      />
      {/* 이미지 위에 제목을 표시하기 위한 오버레이 */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-2">
        <h3 className="text-white text-xs sm:text-sm font-semibold leading-tight">{caseItem.title}</h3>
      </div>
    </div>
  );
};
