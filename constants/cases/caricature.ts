/**
 * @file caricature.ts
 * @description '캐리커쳐' 카테고리에 대한 예제 케이스 데이터입니다.
 */
import type { Case } from '../../types';

export const caricatureCases: Case[] = [
  {
    id: 1101,
    title: '기본 캐리커처 (단순 & 직접적)',
    category: '캐리커쳐',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/caricature/output_1.jpg',
    prompt: 'Caricature portrait of a smiling woman with short hair, exaggerated features, cartoon style, vibrant colors.',
    prompt_ko: '단발머리의 웃는 여성의 캐리커처 초상화, 과장된 특징, 만화 스타일, 생생한 색상.'
  },
  {
    id: 1102,
    title: '특징 강조 캐리커쳐',
    category: '캐리커쳐',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/caricature/output_2.jpg',
    prompt: 'Funny caricature of a man, exaggerating the big eyes and wide smile, bold line art, simple background.',
    prompt_ko: '남자의 재미있는 캐리커처, 큰 눈과 환한 미소를 과장하고, 굵은 선으로 그리고, 단순한 배경.'
  },
  {
    id: 1103,
    title: '유명 작가 스타일 캐리커쳐',
    category: '캐리커쳐',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/caricature/output_3.jpg',
    prompt: 'Caricature of a woman in the style of Sebastian Krüger, highly detailed, humorous portrait.',
    prompt_ko: '세바스찬 크뤼거 스타일의 여성 캐리커처, 매우 디테일하고 유머러스한 초상화.'
  },
  {
    id: 1104,
    title: '귀여운 대두 스타일 캐리커쳐',
    category: '캐리커쳐',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/caricature/output_4.jpg',
    prompt: 'Whimsical and cute caricature of a child, big head small body style, playful expression, digital painting.',
    prompt_ko: '기발하고 귀여운 아이 캐리커처, 큰 머리에 작은 몸 스타일, 장난스러운 표정, 디지털 페인팅.'
  }
];
