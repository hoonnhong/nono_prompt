
import React from 'react';

export const Loader: React.FC<{ simple?: boolean }> = ({ simple = false }) => {
  if (simple) {
    return (
      <div className="w-5 h-5 border-2 border-t-transparent border-gray-900 rounded-full animate-spin"></div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center text-center text-gray-400">
      <div className="w-12 h-12 border-4 border-t-transparent border-yellow-400 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold">AI가 생각 중입니다...</p>
      <p className="text-sm">잠시만 기다려주세요.</p>
    </div>
  );
};
