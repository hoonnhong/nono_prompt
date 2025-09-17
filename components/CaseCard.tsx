
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
      className={`relative group cursor-pointer aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
        isSelected ? 'ring-4 ring-yellow-400' : 'ring-2 ring-transparent hover:ring-yellow-400'
      }`}
    >
      <img
        src={caseItem.outputImage}
        alt={caseItem.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-2">
        <h3 className="text-white text-xs sm:text-sm font-semibold leading-tight">{caseItem.title}</h3>
      </div>
    </div>
  );
};
