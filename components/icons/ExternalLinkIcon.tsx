/**
 * @file ExternalLinkIcon.tsx
 * @description 외부 링크를 나타내는 SVG 아이콘을 React 컴포넌트로 만든 것입니다.
 */

import React from 'react';

export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    {...props}
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5 0V6m0 0L18 10.5M13.5 6l-6 6" 
    />
  </svg>
);
