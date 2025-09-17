/**
 * @file index.tsx
 * @description React 애플리케이션의 최상위 진입점입니다.
 * 이 파일은 DOM에서 'root' 요소를 찾아 React 앱의 메인 컴포넌트인 <App />을 렌더링합니다.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// HTML 문서에서 React 앱을 마운트할 DOM 요소를 찾습니다.
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// React 18의 createRoot API를 사용하여 루트를 생성합니다.
const root = ReactDOM.createRoot(rootElement);

// React.StrictMode는 잠재적인 문제를 감지하고 경고하기 위한 개발 모드용 래퍼입니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
