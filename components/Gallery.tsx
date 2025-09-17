/**
 * @file Gallery.tsx
 * @description 예제 케이스 목록을 카테고리별로 그룹화하여 보여주는 UI 컴포넌트입니다.
 *              사용자는 이 컴포넌트를 통해 예제를 탐색하고 선택할 수 있습니다.
 */

import React, { useMemo } from 'react';
import type { Case } from '../types';

interface GalleryProps {
  cases: Case[]; // 모든 예제 케이스 배열
  categories: string[]; // 모든 카테고리 이름 배열
  onSelectCase: (caseItem: Case) => void; // 케이스 선택 시 호출될 콜백 함수
  selectedCaseId: number | undefined | null; // 현재 선택된 케이스의 ID
}

export const Gallery: React.FC<GalleryProps> = ({ cases, categories, onSelectCase, selectedCaseId }) => {
  
  // cases나 categories가 변경될 때만 카테고리별로 그룹화된 데이터를 다시 계산합니다.
  const groupedCases = useMemo(() => {
    // 정해진 카테고리 순서대로 그룹을 만듭니다.
    const categoryOrder = categories;
    const groups: Record<string, Case[]> = {};
    
    // 각 카테고리에 대한 빈 배열을 초기화합니다.
    categoryOrder.forEach(cat => {
      groups[cat] = [];
    });

    // 모든 케이스를 순회하며 해당하는 카테고리 배열에 추가합니다.
    cases.forEach(caseItem => {
      if (groups[caseItem.category]) {
        groups[caseItem.category].push(caseItem);
      }
    });

    // 최종적으로 렌더링할 [{ name: '카테고리명', cases: [...] }] 형태의 배열로 변환합니다.
    // 케이스가 없는 카테고리는 필터링하여 제외합니다.
    return categoryOrder
      .map(name => ({ name, cases: groups[name] }))
      .filter(group => group.cases.length > 0);
  }, [cases, categories]);

  return (
    // sticky 속성을 사용하여 스크롤 시에도 화면에 고정되도록 합니다.
    <div className="flex flex-col h-full bg-gray-800/50 rounded-xl border border-gray-700/50 p-4 sticky top-24">
      <h2 className="text-lg font-semibold mb-3 px-2 text-yellow-300">예제 갤러리</h2>
      {/* 갤러리 목록이 길어지면 내부에서만 스크롤되도록 설정합니다. */}
      <div className="flex-1 overflow-y-auto pr-2 -mr-2" style={{ maxHeight: 'calc(100vh - 10rem)' }}>
        <nav>
          <ul>
            {/* 그룹화된 데이터를 순회하며 카테고리 제목과 케이스 목록을 렌더링합니다. */}
            {groupedCases.map(group => (
              <li key={group.name} className="mb-4 last:mb-0">
                <h3 className="text-md font-bold text-gray-300 mb-2 px-2 capitalize">{group.name}</h3>
                <ul>
                  {/* 각 카테고리 내의 케이스들을 버튼으로 렌더링합니다. */}
                  {group.cases.map(caseItem => (
                    <li key={caseItem.id}>
                      <button
                        onClick={() => onSelectCase(caseItem)}
                        // 현재 선택된 케이스에 따라 다른 스타일을 적용합니다.
                        className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors text-ellipsis overflow-hidden whitespace-nowrap ${
                          selectedCaseId === caseItem.id
                            ? 'bg-yellow-400/20 text-yellow-300 font-semibold'
                            : 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
                        }`}
                        title={caseItem.title} // 말줄임표(...) 처리된 경우 전체 제목을 툴팁으로 보여줍니다.
                      >
                        {caseItem.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
