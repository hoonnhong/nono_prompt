/**
 * @file creativeTools.ts
 * @description '창의적 도구' 카테고리에 대한 예제 케이스 데이터입니다.
 */
import type { Case } from '../../types';

export const creativeToolsCases: Case[] = [
  {
    id: 21,
    title: 'OOTD 의상 코디',
    category: '창의적 도구',
    author: '@302.AI',
    sourceUrl: 'https://medium.com/%40302.AI/google-nano-banana-vs-qwen-gpt-flux-topping-the-image-editing-leaderboard-96038b01bdcd',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case21/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case21/output.jpg',
    prompt: "Choose the person in Image 1 and dress them in all the clothing and accessories from Image 2. Shoot a series of realistic OOTD-style photos outdoors, using natural lighting, a stylish street style, and clear full-body shots. Keep the person's identity and pose from Image 1, but show the complete outfit and accessories from Image 2 in a cohesive, stylish way.",
    prompt_ko: "이미지 1의 인물을 선택하여 이미지 2의 모든 의류와 액세서리를 입혀주세요. 자연광, 스타일리시한 스트리트 스타일, 선명한 전신 샷을 사용하여 야외에서 사실적인 OOTD 스타일 사진 시리즈를 촬영해주세요. 이미지 1의 인물의 정체성과 포즈는 유지하되, 이미지 2의 전체 의상과 액세서리를 조화롭고 스타일리시하게 보여주세요."
  },
  {
    id: 56,
    title: '만화 구성',
    category: '창의적 도구',
    author: '@namaedousiyoka',
    sourceUrl: 'https://x.com/namaedousiyoka/status/1962461786181161340',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case56/input.jpg', 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case56/input2.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case56/output.jpg',
    prompt: 'Compose a manga scene with the character from image 1 in the setting of image 2.',
    prompt_ko: '이미지 1의 캐릭터를 이미지 2의 배경에 넣어 만화 장면을 구성해주세요.'
  },
  {
    id: 139,
    title: '35mm 필름 스타일 부유섬',
    category: '창의적 도구',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1905020833451348283',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/30/example_35mm_moscow_flying_island.png',
    prompt: "35 mm photo of Moscow floating in the sky on a flying islands.",
    prompt_ko: "하늘에 떠 있는 섬 위에 떠 있는 모스크바의 35mm 사진."
  },
  {
    id: 171,
    title: '단어 의미를 글자에 통합하기',
    category: '창의적 도구',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1918529055340576812',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/87/case.png',
    prompt: `Integrate the meaning of the word into the letters, cleverly blending graphics and letters.\nWord: {beautify}\nAdd a brief explanation of the word below.`,
    prompt_ko: `단어의 의미를 글자에 통합하여 그래픽과 글자를 교묘하게 혼합하세요.\n단어: {beautify}\n아래에 단어에 대한 간략한 설명을 추가하세요.`
  },
  {
    id: 195,
    title: '패턴 생성기',
    category: '창의적 도구',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: ['https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/creative_tools/input_1.png'],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/creative_tools/output_1.png',
    prompt: 'Generate a seamless pattern based on this doodle.',
    prompt_ko: '이 낙서를 기반으로 끊김 없는 패턴을 생성해줘.',
  },
  {
    id: 196,
    title: '컬러 팔레트 제안',
    category: '창의적 도구',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: ['https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/creative_tools/input_2.jpg'],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/creative_tools/output_2.png',
    prompt: 'Generate a color palette based on the mood of this image.',
    prompt_ko: '이 이미지의 분위기를 바탕으로 컬러 팔레트를 생성해줘.',
  }
];
