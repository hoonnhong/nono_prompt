/**
 * @file design.ts
 * @description '디자인 & 브랜딩' 카테고리에 대한 예제 케이스 데이터입니다.
 */
import type { Case } from '../../types';

export const designAndBrandingCases: Case[] = [
    {
        id: 27,
        title: '이미지에 워터마크 추가하기',
        category: '디자인 & 브랜딩',
        author: '@AiMachete',
        sourceUrl: 'https://x.com/AiMachete/status/1963038793705128219',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case27/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case27/output.jpg',
        prompt: 'Watermark the word ‘TRUMP’ over and over again across the whole image.',
        prompt_ko: '이미지 전체에 ‘TRUMP’라는 단어를 반복해서 워터마크로 새겨주세요.'
    },
    {
        id: 60,
        title: '로고에 재질 구체 적용',
        category: '디자인 & 브랜딩',
        author: '@ZHO_ZHO_ZHO',
        sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1964995347505352794',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case60/case.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case60/case.jpg',
        prompt: 'Apply the material from Image 2 to the logo in Image 1, present it as a 3D object, render in a C4D-like style, with a solid-color background.',
        prompt_ko: '이미지 2의 재질을 이미지 1의 로고에 적용하고, 3D 객체로 표현하여 C4D 스타일로 렌더링해주세요. 배경은 단색으로 해주세요.'
    },
    {
        id: 118,
        title: '미니멀리스트 미래주의 포스터',
        category: '디자인 & 브랜딩',
        author: '@ZHO_ZHO_ZHO',
        sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1921906728763105394',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/9/minimalist_futurist_poster.png',
        prompt: `A vertical (3:4) 4K-resolution minimalist futurist exhibition poster with an ultra-light cool gray background (#f4f4f4).\n\nAt the center of the poster is a fluid 3D metaball shaped like a classic Coca-Cola bottle in full form, rendered in frosted glass with delicate grainy noise.\nThe fluid gradient transitions from Coca-Cola Red (#E41C23) to Pearl White (#FFFFFF), giving it a silky glass-like appearance.\n\nHigh-position softbox lighting casts long, soft colored shadows and a subtle halo.\n\nThe fluid overlaps with the text: letters obscured by the frosted glass appear with a gentle Gaussian blur.\n•The main title, the classic red “Coca-Cola” logo, is centered and partially obscured by the fluid. The covered letters are slightly blurred through the frosted glass.\n•The subtitle, in bold all-caps modern sans-serif pure black font, reads: “TASTE THE FEELING”, placed below the main title. It is also partially overlapped by the fluid and blurred in those areas, while the rest remains sharp.\n\nThe overall layout is clean with generous whitespace, balanced composition, sharp focus, and HDR high dynamic range.`,
        prompt_ko: `세로(3:4) 4K 해상도의 미니멀리스트 미래주의 전시 포스터, 매우 밝은 시원한 회색 배경(#f4f4f4).\n\n포스터 중앙에는 섬세하고 거친 노이즈가 있는 반투명 유리로 렌더링된 클래식 코카콜라 병 모양의 유동적인 3D 메타볼이 전체 형태로 있습니다.\n유체 그라데이션은 코카콜라 레드(#E41C23)에서 펄 화이트(#FFFFFF)로 전환되어 비단 같은 유리 느낌을 줍니다.\n\n높은 위치의 소프트박스 조명은 길고 부드러운 색상의 그림자와 미묘한 후광을 만듭니다.\n\n유체는 텍스트와 겹칩니다: 반투명 유리로 가려진 글자는 부드러운 가우시안 블러로 나타납니다.\n•메인 제목인 클래식 레드 '코카콜라' 로고는 중앙에 위치하며 유체에 의해 부분적으로 가려집니다. 덮인 글자는 반투명 유리를 통해 약간 흐릿하게 보입니다.\n•부제는 굵은 대문자 현대 산세리프 순수 검정 글꼴로 'TASTE THE FEELING'이라고 쓰여 있으며 메인 제목 아래에 위치합니다. 이 또한 유체에 의해 부분적으로 겹쳐져 해당 부분은 흐릿하게 처리되고 나머지는 선명하게 유지됩니다.\n\n전체적인 레이아웃은 넓은 여백, 균형 잡힌 구성, 선명한 초점 및 HDR 고다이내믹 레인지로 깨끗합니다.`
    },
    {
        id: 159,
        title: '창의적인 로고 모양 책장',
        category: '디자인 & 브랜딩',
        author: '@umesh_ai',
        sourceUrl: 'https://x.com/umesh_ai/status/1916517976414495161',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/74/example_logo_bookshelves.png',
        prompt: "Create a photograph of a modern bookshelf inspired by the shape of [LOGO]. The bookshelf features flowing, interconnected curves forming multiple sections of varying sizes. It is made of sleek matte black metal with wooden shelves inside the loops. Soft, warm LED lighting outlines the inner curves. The bookshelf is mounted on a neutral-toned wall and holds a mix of colorful books, small plants, and minimalistic art pieces. The overall vibe is creative, elegant, and slightly futuristic",
        prompt_ko: "[로고] 모양에서 영감을 받은 현대적인 책장 사진을 만들어 주세요. 이 책장은 흐르는 듯한 상호 연결된 곡선이 다양한 크기의 여러 섹션을 형성하는 특징을 가집니다. 매끈한 무광 검정 금속으로 만들어졌으며 고리 안에는 나무 선반이 있습니다. 부드럽고 따뜻한 LED 조명이 내부 곡선을 따라 비춥니다. 책장은 중간 톤의 벽에 설치되어 있으며 다채로운 책, 작은 식물, 미니멀리즘 예술 작품이 섞여 있습니다. 전체적인 분위기는 창의적이고 우아하며 약간 미래 지향적입니다."
    },
    {
        id: 165,
        title: '브랜드 기계식 키캡',
        category: '디자인 & 브랜딩',
        author: '@egeberkina',
        sourceUrl: 'https://x.com/egeberkina/status/1918291652210311278',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/90/case.png',
        prompt: `ultra-realistic 3D render of four mechanical keyboard keycaps in a tight 2x2 grid, all keys touching. View from an isometric angle. One key is transparent with the word “{just}” printed in {white}. The other three colors are: {black, purple, and white}. One key features the {Github} logo. The other two say "{fork}" and "{it}". Realistic plastic texture, rounded sculpted keycaps, soft shadows, clean light-gray background.`,
        prompt_ko: `모든 키가 서로 닿아있는 빽빽한 2x2 그리드에 있는 4개의 기계식 키보드 키캡의 초현실적인 3D 렌더링. 아이소메트릭 각도에서 본 모습. 한 키는 투명하며 '{just}'라는 단어가 '{white}'로 인쇄되어 있습니다. 다른 세 가지 색상은 '{black, purple, and white}'입니다. 한 키에는 '{Github}' 로고가 있습니다. 다른 두 키에는 '{fork}'와 '{it}'이라고 쓰여 있습니다. 사실적인 플라스틱 질감, 둥글게 조각된 키캡, 부드러운 그림자, 깨끗한 연회색 배경.`
    },
    {
        id: 197,
        title: '미니멀리스트 로고 디자인',
        category: '디자인 & 브랜딩',
        author: 'Gemini',
        sourceUrl: '#',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/design/output_1.png',
        prompt: 'A minimalist logo for a coffee shop named "Orbit Coffee", featuring a planet and a coffee cup.',
        prompt_ko: '"Orbit Coffee"라는 커피숍을 위한 행성과 커피컵이 특징인 미니멀리스트 로고.',
    },
    {
        id: 198,
        title: '앱 아이콘 디자인',
        category: '디자인 & 브랜딩',
        author: 'Gemini',
        sourceUrl: '#',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/design/output_2.png',
        prompt: 'Design a modern, flat app icon for a weather application. It should feature a sun and a cloud.',
        prompt_ko: '날씨 앱을 위한 현대적이고 플랫한 앱 아이콘을 디자인해줘. 해와 구름이 특징이어야 해.',
    }
];
