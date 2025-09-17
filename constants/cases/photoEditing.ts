/**
 * @file photoEditing.ts
 * @description '사진 편집 & 복원' 카테고리에 대한 예제 케이스 데이터입니다.
 */
import type { Case } from '../../types';

export const photoEditingAndRestorationCases: Case[] = [
    {
        id: 7,
        title: '자동 사진 보정',
        category: '사진 편집 & 복원',
        author: '@op7418',
        sourceUrl: 'https://x.com/op7418/status/1960528616573558864',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case7/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case7/output.jpg',
        prompt: 'This photo is very boring and plain. Enhance it! Increase the contrast, boost the colors, and improve the lighting to make it richer,You can crop and delete details that affect the composition.',
        prompt_ko: '이 사진은 매우 지루하고 평범합니다. 개선해주세요! 대비를 높이고, 색상을 강화하며, 조명을 개선하여 더 풍부하게 만들어주세요. 구도에 영향을 주는 디테일은 잘라내거나 삭제해도 좋습니다.'
    },
    {
        id: 20,
        title: '오래된 사진 컬러화',
        category: '사진 편집 & 복원',
        author: '@GeminiApp',
        sourceUrl: 'https://x.com/GeminiApp/status/1960347483021959197',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case20/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case20/output.jpg',
        prompt: 'restore and colorize this photo.',
        prompt_ko: '이 사진을 복원하고 색을 입혀주세요.'
    },
    {
        id: 29,
        title: '빨간 펜 주석 달기',
        category: '사진 편집 & 복원',
        author: '@AiMachete',
        sourceUrl: 'https://x.com/AiMachete/status/1962356993550643355',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case29/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case29/output.jpg',
        prompt: 'Analyze this image. Use red pen to denote where you can improve.',
        prompt_ko: '이 이미지를 분석해주세요. 개선할 수 있는 부분을 빨간 펜으로 표시해주세요.'
    },
    {
        id: 37,
        title: '메이크업 분석',
        category: '사진 편집 & 복원',
        author: '@ZHO_ZHO_ZHO',
        sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1962784384693739621',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case37/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case37/output.jpg',
        prompt: 'Analyze this image. Use a red pen to mark areas that can be improved\nAnalyze this image. Use a red pen to denote where you can improve',
        prompt_ko: '이 이미지를 분석해주세요. 개선할 수 있는 부분을 빨간 펜으로 표시해주세요.'
    },
    {
        id: 44,
        title: '조명 제어',
        category: '사진 편집 & 복원',
        author: '@ZHO_ZHO_ZHO',
        sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1961779457372602725',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case44/case.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case44/case.jpg',
        prompt: 'Change the character from Image 1 to the lighting from Image 2, with dark areas as shadows',
        prompt_ko: '이미지 1의 캐릭터를 이미지 2의 조명으로 바꾸고, 어두운 부분을 그림자로 처리해주세요.'
    },
    {
        id: 49,
        title: '피사체 추출하여 투명 레이어에 배치',
        category: '사진 편집 & 복원',
        author: '@nglprz',
        sourceUrl: 'https://x.com/nglprz/status/1961494974555394068',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case49/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case49/output.jpg',
        prompt: 'extract the [samurai] and put transparent background',
        prompt_ko: '[사무라이]를 추출하여 투명 배경으로 만들어주세요.'
    },
    {
        id: 50,
        title: '이미지 아웃페인팅 복원',
        category: '사진 편집 & 복원',
        author: '@bwabbage',
        sourceUrl: 'https://x.com/bwabbage/status/1962903212937130450',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case50/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case50/output.jpg',
        prompt: 'Repair the checkerboard (transparent) parts of the image and restore a complete, coherent photo.',
        prompt_ko: '이미지의 체크무늬(투명) 부분을 복구하여 완전하고 일관성 있는 사진으로 복원해주세요.'
    },
    {
        id: 62,
        title: '카메라 파라미터 재설정',
        category: '사진 편집 & 복원',
        author: '@hckinz',
        sourceUrl: 'https://x.com/hckinz/status/1962803203063586895',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case62/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case62/output.jpg',
        prompt: 'RAW-ISO [100] - [F2.8-1/200 24mm] settings',
        prompt_ko: 'RAW-ISO [100] - [F2.8-1/200 24mm] 설정'
    },
    {
        id: 73,
        title: '햄버거 재료 제거하기',
        category: '사진 편집 & 복원',
        author: '@bind_lux',
        sourceUrl: 'https://x.com/bind_lux/status/1965869157125402654',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case73/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case73/output.jpg',
        prompt: 'Remove all the ingredients from the burger and keep only the top and bottom buns. Leave a gap between them, keeping the same spacing as if the fillings were still inside.',
        prompt_ko: '햄버거에서 모든 재료를 제거하고 위아래 빵만 남겨주세요. 속이 아직 들어있는 것처럼 같은 간격을 유지하면서 그들 사이에 틈을 남겨주세요.'
    },
    {
        id: 74,
        title: '고해상도 이미지 복원',
        category: '사진 편집 & 복원',
        author: '@op7418',
        sourceUrl: 'https://x.com/op7418/status/1960540798573011209',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case74/input.png'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case74/output.png',
        prompt: 'Enhance the resolution of this old image and add the appropriate texture details, reinterpreting it with modern anime techniques.',
        prompt_ko: '이 오래된 이미지의 해상도를 높이고 적절한 질감 디테일을 추가하여 현대 애니메이션 기법으로 재해석해주세요.'
    },
    {
        id: 78,
        title: '먹다 남은 음식 복원하기',
        category: '사진 편집 & 복원',
        author: '@googlejapan',
        sourceUrl: 'https://x.com/googlejapan/status/1965762180688584916',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case78/input.png'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case78/output.png',
        prompt: 'Restore this half-eaten [XX] back to its original uneaten state.',
        prompt_ko: '이 반쯤 먹은 [XX]를 원래 먹지 않은 상태로 복원해주세요.'
    },
    {
        id: 193,
        title: '오래된 사진 복원',
        category: '사진 편집 & 복원',
        author: 'Gemini',
        sourceUrl: '#',
        inputImages: ['https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/photo_editing/input_1.jpg'],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/photo_editing/output_1.jpg',
        prompt: 'Restore this old, scratched, and faded photograph.',
        prompt_ko: '이 오래되고 긁히고 빛바랜 사진을 복원해줘.',
    },
    {
        id: 194,
        title: '배경 제거',
        category: '사진 편집 & 복원',
        author: 'Gemini',
        sourceUrl: '#',
        inputImages: ['https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/photo_editing/input_2.jpg'],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/photo_editing/output_2.png',
        prompt: 'Remove the background from this image.',
        prompt_ko: '이 이미지에서 배경을 제거해줘.',
    }
];
