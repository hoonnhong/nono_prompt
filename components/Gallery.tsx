/**
 * @file Gallery.tsx
 * @description 갤러리 영역을 담당하는 UI 컴포넌트입니다.
 *              카테고리별로 정리된 예제 케이스 목록을 표시하고, 사용자가 선택할 수 있게 합니다.
 *              카테고리 필터링과 검색 기능을 제공합니다.
 */

import React from 'react';
import type { Case } from '../types';

interface GalleryProps {
  categorizedCases: Record<string, Case[]>; // 카테고리별로 그룹핑된 전체 케이스 데이터
  filteredCases: Case[]; // 필터링된 케이스 목록
  categories: string[]; // 카테고리 목록 (필터 드롭다운용)
  onCaseSelect: (caseItem: Case) => void; // 케이스 선택 시 호출될 콜백 함수
  selectedCaseId: number | null; // 현재 선택된 케이스의 ID
  searchTerm: string; // 현재 검색어
  onSearchChange: (term: string) => void; // 검색어 변경 시 호출될 콜백 함수
  selectedCategory: string; // 현재 선택된 카테고리
  onCategoryChange: (category: string) => void; // 카테고리 변경 시 호출될 콜백 함수
  onStartNew: () => void; // '새로 시작하기' 클릭 시 호출될 콜백 함수
}

export const Gallery: React.FC<GalleryProps> = ({
  categorizedCases,
  filteredCases,
  categories,
  onCaseSelect,
  selectedCaseId,
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onStartNew
}) => {
  // 필터링된 케이스들을 다시 카테고리별로 그룹핑합니다.
  // 검색 결과가 카테고리 구조를 유지하며 표시되도록 하기 위함입니다.
  const displayedCasesGrouped = filteredCases.reduce((acc, caseItem) => {
    const category = caseItem.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(caseItem);
    return acc;
  }, {} as Record<string, Case[]>);

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-4 sm:p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-100">갤러리</h2>
        <button
          onClick={onStartNew}
          className="text-sm bg-gray-700 hover:bg-gray-600 text-yellow-300 font-semibold py-1 px-3 rounded-md transition-colors"
        >
          새로 시작하기
        </button>
      </div>
      
      {/* 필터링 및 검색 UI */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <div className="flex-1">
          <label htmlFor="category-filter" className="sr-only">카테고리</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full bg-gray-700/80 border border-gray-600 rounded-md p-2 text-gray-200 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="case-search" className="sr-only">예제 검색</label>
          <input
            type="search"
            id="case-search"
            placeholder="제목 또는 카테고리 검색..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-gray-700/80 border border-gray-600 rounded-md p-2 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />
        </div>
      </div>
      
      {/* 갤러리 목록 (스크롤 가능 영역) */}
      <div className="flex-grow overflow-y-auto pr-2 -mr-2" style={{maxHeight: 'calc(100vh - 20rem)'}}>
        <nav>
          {Object.keys(displayedCasesGrouped).length > 0 ? (
            <ul>
              {/*
                Object.keys(categorizedCases)를 순회하여 원래의 카테고리 순서를 유지합니다.
                이렇게 하지 않으면 검색 결과에 따라 카테고리 순서가 바뀔 수 있습니다.
              */}
              {Object.keys(categorizedCases).map((category) => {
                const cases = displayedCasesGrouped[category];
                if (!cases || cases.length === 0) return null; // 해당 카테고리에 표시할 케이스가 없으면 렌더링하지 않음
                
                return (
                  <li key={category} className="mb-6">
                    <h3 className="text-lg font-semibold text-yellow-300 mb-3 sticky top-0 bg-gray-800/80 backdrop-blur-sm py-2">
                      {category}
                    </h3>
                    <ul>
                      {cases.map((caseItem) => (
                        <li key={caseItem.id}>
                          <button
                            onClick={() => onCaseSelect(caseItem)}
                            className={`w-full text-left p-2 rounded-md transition-colors text-sm ${
                              selectedCaseId === caseItem.id
                                ? 'bg-yellow-400/20 text-yellow-300 font-semibold' // 선택된 항목 스타일
                                : 'text-gray-300 hover:bg-gray-700/50' // 기본 및 호버 스타일
                            }`}
                          >
                            {caseItem.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          ) : (
            // 검색 결과가 없을 때 메시지를 표시합니다.
            <p className="text-gray-400 text-center mt-8">검색 결과가 없습니다.</p>
          )}
        </nav>
      </div>
    </div>
  );
};