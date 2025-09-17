/**
 * @file photoEditing.ts
 * @description '사진 편집 & 복원' 카테고리에 해당하는 예제 케이스 데이터 목록입니다.
 *              기존 사진을 수정, 개선, 복원하는 사례를 포함합니다.
 */

import type { Case } from '../../types';

export const photoEditingAndRestorationCases: Case[] = [
  {
    id: 7,
    title: '자동 사진 편집',
    category: '사진 편집 & 복원',
    author: '@op7418',
    sourceUrl: 'https://x.com/op7418/status/1960528616573558864',
    inputImages: ['/images/cases/7/input.jpg'],
    outputImage: '/images/cases/7/output.jpg',
    prompt: 'This photo is very boring and plain. Enhance it! Increase the contrast, boost the colors, and improve the lighting to make it richer. You can crop and delete details that affect the composition.',
    prompt_ko: '이 사진은 너무 지루하고 평범해요. 개선해주세요! 대비를 높이고, 색상을 강화하고, 조명을 개선하여 더 풍부하게 만들어주세요. 구도에 영향을 주는 디테일은 잘라내거나 삭제해도 좋습니다.'
  },
  {
    id: 20,
    title: '오래된 사진 복원 및 채색',
    category: '사진 편집 & 복원',
    author: '@GeminiApp',
    sourceUrl: 'https://x.com/GeminiApp/status/1960347483021959197',
    inputImages: ['/images/cases/20/input.jpg'],
    outputImage: '/images/cases/20/output.jpg',
    prompt: 'restore and colorize this photo.',
    prompt_ko: '이 사진을 복원하고 채색해주세요.'
  },
  {
    id: 49,
    title: '배경에서 피사체 추출',
    category: '사진 편집 & 복원',
    author: '@nglprz',
    sourceUrl: 'https://x.com/nglprz/status/1961494974555394068',
    inputImages: ['/images/cases/49/input.jpg'],
    outputImage: '/images/cases/49/output.jpg',
    prompt: 'extract the samurai and put transparent background',
    prompt_ko: '사무라이를 추출하고 배경을 투명하게 만들어주세요.'
  },
  {
    id: 50,
    title: '이미지 아웃페인팅 복구',
    category: '사진 편집 & 복원',
    author: '@bwabbage',
    sourceUrl: 'https://x.com/bwabbage/status/1962903212937130450',
    inputImages: ['/images/cases/50/input.jpg'],
    outputImage: '/images/cases/50/output.jpg',
    prompt: 'Repair the checkerboard (transparent) parts of the image and restore a complete, coherent photo.',
    prompt_ko: '이미지의 체크무늬(투명) 부분을 복구하여 완전하고 일관성 있는 사진으로 복원해주세요.'
  },
  {
    id: 73,
    title: '햄버거 재료 제거',
    category: '사진 편집 & 복원',
    author: '@bind_lux',
    sourceUrl: 'https://x.com/bind_lux/status/1965869157125402654',
    inputImages: ['/images/cases/73/input.jpg'],
    outputImage: '/images/cases/73/output.jpg',
    prompt: 'Remove all the ingredients from the burger and keep only the top and bottom buns. Leave a gap between them, keeping the same spacing as if the fillings were still inside.',
    prompt_ko: '햄버거에서 모든 재료를 제거하고 위아래 빵만 남겨주세요. 속이 여전히 들어있는 것처럼 간격을 유지해주세요.'
  },
  {
    id: 74,
    title: '고해상도 이미지 복원',
    category: '사진 편집 & 복원',
    author: '@op7418',
    sourceUrl: 'https://x.com/op7418/status/1960540798573011209',
    inputImages: ['/images/cases/74/input.png'],
    outputImage: '/images/cases/74/output.png',
    prompt: 'Enhance the resolution of this old image and add the appropriate texture details, reinterpreting it with modern anime techniques.',
    prompt_ko: '이 오래된 이미지의 해상도를 높이고 적절한 질감 디테일을 추가하여 현대적인 애니메이션 기법으로 재해석해주세요.'
  },
  {
    id: 78,
    title: '먹다 남은 음식 복원',
    category: '사진 편집 & 복원',
    author: '@googlejapan',
    sourceUrl: 'https://x.com/googlejapan/status/1965762180688584916',
    inputImages: ['/images/cases/78/input.png'],
    outputImage: '/images/cases/78/output.png',
    prompt: 'Restore this half-eaten cake back to its original uneaten state.',
    prompt_ko: '이 반쯤 먹은 케이크를 원래의 먹지 않은 상태로 복원해주세요.'
  },
];
