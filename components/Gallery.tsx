
import React, { useMemo } from 'react';
import type { Case } from '../types';

interface GalleryProps {
  cases: Case[];
  categories: string[];
  onSelectCase: (caseItem: Case) => void;
  selectedCaseId: number | undefined | null;
}

export const Gallery: React.FC<GalleryProps> = ({ cases, categories, onSelectCase, selectedCaseId }) => {
  const groupedCases = useMemo(() => {
    const categoryOrder = categories.filter(c => c !== '전체');
    const groups: Record<string, Case[]> = {};
    
    categoryOrder.forEach(cat => {
      groups[cat] = [];
    });

    cases.forEach(caseItem => {
      if (groups[caseItem.category]) {
        groups[caseItem.category].push(caseItem);
      }
    });

    return categoryOrder
      .map(name => ({ name, cases: groups[name] }))
      .filter(group => group.cases.length > 0);
  }, [cases, categories]);

  return (
    <div className="flex flex-col h-full bg-gray-800/50 rounded-xl border border-gray-700/50 p-4 sticky top-24">
      <h2 className="text-lg font-semibold mb-3 px-2 text-yellow-300">예제 갤러리</h2>
      <div className="flex-1 overflow-y-auto pr-2 -mr-2" style={{ maxHeight: 'calc(100vh - 10rem)' }}>
        <nav>
          <ul>
            {groupedCases.map(group => (
              <li key={group.name} className="mb-4 last:mb-0">
                <h3 className="text-md font-bold text-gray-300 mb-2 px-2 capitalize">{group.name}</h3>
                <ul>
                  {group.cases.map(caseItem => (
                    <li key={caseItem.id}>
                      <button
                        onClick={() => onSelectCase(caseItem)}
                        className={`w-full text-left px-4 py-2 text-sm rounded-md transition-colors text-ellipsis overflow-hidden whitespace-nowrap ${
                          selectedCaseId === caseItem.id
                            ? 'bg-yellow-400/20 text-yellow-300 font-semibold'
                            : 'text-gray-400 hover:bg-gray-700/50 hover:text-gray-200'
                        }`}
                        title={caseItem.title}
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
