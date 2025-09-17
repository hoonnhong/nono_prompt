import type { Case } from '../../types';

export const creativeToolsCases: Case[] = [
  {
    id: 27,
    title: '이미지에 워터마크 추가',
    category: '창의적 도구',
    author: '@AiMachete',
    sourceUrl: 'https://x.com/AiMachete/status/1963038793705128219',
    inputImages: ['/images/cases/27/input.jpg'],
    outputImage: '/images/cases/27/output.jpg',
    prompt: 'Watermark the word ‘TRUMP’ over and over again across the whole image.',
    prompt_ko: '이미지 전체에 \'TRUMP\'라는 단어를 반복해서 워터마크로 넣어주세요.'
  },
  {
    id: 55,
    title: '이타샤 차량 만들기',
    category: '창의적 도구',
    author: '@riddi0908',
    sourceUrl: 'https://x.com/riddi0908/status/1963422536819249239',
    inputImages: ['/images/cases/55/input.jpg'],
    outputImage: '/images/cases/55/output.jpg',
    prompt: 'Create a professional photograph of a sporty car with anime-style character artwork as itasha (painted car) design, shot at a famous tourist destination or scenic landmark.',
    prompt_ko: '유명 관광지나 경치 좋은 랜드마크에서 촬영한, 애니메이션 스타일 캐릭터 아트워크가 이타샤(페인팅카) 디자인으로 적용된 스포티한 자동차의 전문적인 사진을 만들어주세요.'
  },
  {
    id: 62,
    title: '카메라 파라미터 재설정',
    category: '창의적 도구',
    author: '@hckinz',
    sourceUrl: 'https://x.com/hckinz/status/1962803203063586895',
    inputImages: ['/images/cases/62/input.jpg'],
    outputImage: '/images/cases/62/output.jpg',
    prompt: 'RAW-ISO [100] - [F2.8-1/200 24mm] settings',
    prompt_ko: 'RAW-ISO [100] - [F2.8-1/200 24mm] 설정'
  },
  {
    id: 86,
    title: '다크 고딕 타로 카드',
    category: '창의적 도구',
    author: '@ImperfectEngel',
    sourceUrl: 'https://x.com/ImperfectEngel/status/1961833518163481001',
    inputImages: ['/images/cases/86/input.png'],
    outputImage: '/images/cases/86/output.png',
    prompt: 'Generate a dark gothic tarot card featuring me from this image. Include “AI Artist - Shira” and [coffee, white fluffy chubby cat with pink bow, laptop, phone, headphones] as symbols, with moody shadows, intricate gothic borders, and mystical dark fantasy vibes.',
    prompt_ko: '이 이미지 속 나를 주인공으로 한 어두운 고딕 타로 카드를 생성해주세요. "AI 아티스트 - 시라"와 [커피, 핑크 리본을 단 통통한 흰 털 고양이, 노트북, 휴대폰, 헤드폰]을 상징으로 포함하고, 분위기 있는 그림자, 복잡한 고딕 테두리, 신비로운 다크 판타지 분위기를 더해주세요.'
  },
  {
    id: 95,
    title: '셀카로 버블헤드 만들기',
    category: '창의적 도구',
    author: '@thisdudelikesAI',
    sourceUrl: 'https://x.com/thisdudelikesAI/status/1920433372243136730',
    inputImages: ['/images/cases/95/input.png'],
    outputImage: '/images/cases/95/selfie-to-bobblehead-generator.png',
    prompt: 'Turn this photo into a bobblehead: enlarge the head slightly, keep the face accurate and cartoonify the body. Place it on a bookshelf.',
    prompt_ko: '이 사진을 버블헤드로 만들어주세요: 머리를 약간 크게 하고, 얼굴은 정확하게 유지하며 몸은 만화처럼 만들어주세요. 책장에 놓아주세요.'
  },
];
