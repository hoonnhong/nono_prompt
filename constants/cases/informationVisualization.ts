/**
 * @file informationVisualization.ts
 * @description '정보 시각화' 카테고리에 해당하는 예제 케이스 데이터 목록입니다.
 *              데이터나 정보를 시각적으로 표현하는 사례를 포함합니다.
 */

import type { Case } from '../../types';

export const informationVisualizationCases: Case[] = [
  {
    id: 3,
    title: '실세계 AR 정보',
    category: '정보 시각화',
    author: '@bilawalsidhu',
    sourceUrl: 'https://x.com/bilawalsidhu/status/1960529167742853378',
    inputImages: ['/images/cases/3/input.jpg'],
    outputImage: '/images/cases/3/output.jpg',
    prompt: 'you are a location-based AR experience generator. highlight [point of interest] in this image and annotate relevant information about it.',
    prompt_ko: '당신은 위치 기반 AR 경험 생성기입니다. 이 이미지에서 [관심 지점]을 강조하고 관련 정보를 주석으로 달아주세요.'
  },
  {
    id: 16,
    title: '모델 주석 설명 다이어그램',
    category: '정보 시각화',
    author: '@berryxia_ai',
    sourceUrl: 'https://x.com/berryxia_ai/status/1960708465586004305',
    inputImages: ['/images/cases/16/input.jpg'],
    outputImage: '/images/cases/16/output.jpg',
    prompt: 'Draw [3D human organ model display example heart] for academic presentation, with annotations and explanations, suitable for showcasing its principles and [each organ\'s] functions, very realistic, highly detailed, with extremely fine design.',
    prompt_ko: '학술 발표를 위해 [3D 인체 장기 모델 전시 예시 심장]을 그려주세요. 주석과 설명을 포함하여 그 원리와 [각 장기]의 기능을 보여주기에 적합하며, 매우 사실적이고 세밀하며, 극도로 정교한 디자인이어야 합니다.'
  },
  {
    id: 19,
    title: '수학 문제 추론',
    category: '정보 시각화',
    author: '@Gorden Sun',
    sourceUrl: 'https://www.xiaohongshu.com/explore/68ade0e7000000001d036677',
    inputImages: ['/images/cases/19/input.jpg'],
    outputImage: '/images/cases/19/output.jpg',
    prompt: 'Write the answer to the problem in the corresponding position based on the question',
    prompt_ko: '문제에 따라 해당하는 위치에 문제의 답을 작성해주세요.'
  },
  {
    id: 29,
    title: '빨간 펜 주석',
    category: '정보 시각화',
    author: '@AiMachete',
    sourceUrl: 'https://x.com/AiMachete/status/1962356993550643355',
    inputImages: ['/images/cases/29/input.jpg'],
    outputImage: '/images/cases/29/output.jpg',
    prompt: 'Analyze this image. Use red pen to denote where you can improve.',
    prompt_ko: '이 이미지를 분석해주세요. 개선할 수 있는 부분을 빨간 펜으로 표시해주세요.'
  },
  {
    id: 37,
    title: '메이크업 분석',
    category: '정보 시각화',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1962784384693739621',
    inputImages: ['/images/cases/37/input.jpg'],
    outputImage: '/images/cases/37/output.jpg',
    prompt: 'Analyze this image. Use a red pen to mark areas that can be improved',
    prompt_ko: '이 이미지를 분석해주세요. 개선할 수 있는 부분을 빨간 펜으로 표시해주세요.'
  },
  {
    id: 48,
    title: '음식 칼로리 주석',
    category: '정보 시각화',
    author: '@icreatelife',
    sourceUrl: 'https://x.com/icreatelife/status/1963646757222715516',
    inputImages: ['/images/cases/48/input.jpg'],
    outputImage: '/images/cases/48/output.jpg',
    prompt: 'annotate this meal with names of food and calorie density and approximate calories',
    prompt_ko: '이 식사에 음식 이름, 칼로리 밀도, 대략적인 칼로리를 주석으로 달아주세요.'
  },
  {
    id: 138,
    title: '손으로 그린 인포그래픽 카드 (인지)',
    category: '정보 시각화',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1907903480678985784',
    inputImages: [],
    outputImage: '/images/cases/138/example_hand_drawn_infographic_cognition.png',
    prompt: 'Create a hand-drawn style infographic card in vertical 9:16 ratio. The card should have a clear theme, with a beige or off-white paper-textured background. The overall design should convey a rustic, friendly, and handmade aesthetic. At the top of the card, feature a bold, eye-catching title in large Chinese cursive brush calligraphy using contrasting red and black colors. All text content should be in Chinese cursive script, and the layout should be divided into 2 to 4 clear sections. Each section expresses a core idea with brief and concise Chinese phrases. The cursive font should retain a smooth, rhythmic flow, remaining legible while carrying artistic appeal. The card should include simple, playful hand-drawn illustrations or icons, such as figures or symbolic elements, to enhance visual interest and spark reader reflection or emotional resonance. The overall layout should maintain visual balance, with ample white space reserved to ensure clarity, simplicity, and ease of reading and understanding. “Cognition” defines your ceiling “Circle” defines your opportunities – You can’t earn money beyond your level of cognition, – Nor encounter opportunities beyond your social circle.',
    prompt_ko: '세로 9:16 비율의 손으로 그린 스타일 인포그래픽 카드를 만들어 주세요. 카드는 명확한 테마를 가져야 하며, 베이지색 또는 미색의 종이 질감 배경을 사용합니다. 전체적인 디자인은 소박하고 친근하며 수제 느낌을 전달해야 합니다. 카드 상단에는 대조적인 빨간색과 검은색을 사용한 대담하고 눈길을 끄는 큰 중국어 초서체 브러시 서예 제목을 특징으로 합니다. 모든 텍스트 내용은 중국어 초서체로 작성되어야 하며, 레이아웃은 2~4개의 명확한 섹션으로 나누어져야 합니다. 각 섹션은 간결하고 간결한 중국어 구문으로 핵심 아이디어를 표현합니다. 초서체 글꼴은 부드럽고 리드미컬한 흐름을 유지하면서도 읽기 쉽고 예술적인 매력을 지녀야 합니다. 카드에는 인물이나 상징적 요소와 같은 단순하고 재미있는 손으로 그린 일러스트나 아이콘이 포함되어 시각적 흥미를 높이고 독자의 성찰이나 감정적 공명을 불러일으켜야 합니다. 전체적인 레이아웃은 시각적 균형을 유지해야 하며, 명확성, 단순성, 읽고 이해하기 쉬움을 보장하기 위해 충분한 여백을 확보해야 합니다. "인식"이 당신의 한계를 정의하고 "인맥"이 당신의 기회를 정의합니다 – 당신은 당신의 인식 수준을 넘어서는 돈을 벌 수 없으며, – 당신의 사회적 관계망을 넘어서는 기회를 만날 수도 없습니다.'
  },
  {
    id: 141,
    title: '손으로 그린 인포그래픽 카드',
    category: '정보 시각화',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1907870919852179850',
    inputImages: [],
    outputImage: '/images/cases/141/example_hand_drawn_infographic.png',
    prompt: 'Create a hand-drawn style infographic card in a 9:16 vertical format. The card should have a clear theme, with a beige or off-white paper-textured background. The overall design should reflect a simple, warm, and handmade aesthetic. At the top of the card, use large, eye-catching brush-style Chinese cursive calligraphy in red and black for the title, creating strong visual contrast. All text should be in Chinese cursive script. The layout should be divided into 2 to 4 clear sections, each conveying a core idea through concise and refined Chinese phrases. The calligraphy should maintain a fluid, rhythmic style that is both legible and artistically expressive. Leave appropriate blank space around the text. The card should be accented with simple and fun hand-drawn illustrations or icons — such as figures or symbolic elements — to enhance visual appeal and spark thought or emotional resonance. The overall layout should emphasize visual balance and include ample whitespace, ensuring the design is clean, clear, and easy to read. “Building a personal brand (IP) is long-term compounding. Keep updating daily, and results will come — because 99% of people can’t keep it up!”',
    prompt_ko: '9:16 세로 형식의 손으로 그린 스타일 인포그래픽 카드를 만들어 주세요. 카드는 명확한 테마를 가져야 하며, 베이지색 또는 미색의 종이 질감 배경을 사용합니다. 전체적인 디자인은 단순하고 따뜻하며 수제 느낌을 반영해야 합니다. 카드 상단에는 크고 눈길을 끄는 브러시 스타일의 중국어 초서체 서예 제목을 빨간색과 검은색으로 사용하여 강한 시각적 대비를 만듭니다. 모든 텍스트는 중국어 초서체로 작성되어야 합니다. 레이아웃은 2~4개의 명확한 섹션으로 나누어져야 하며, 각 섹션은 간결하고 세련된 중국어 구문을 통해 핵심 아이디어를 전달합니다. 서예는 유동적이고 리드미컬한 스타일을 유지하면서도 읽기 쉽고 예술적으로 표현력이 있어야 합니다. 텍스트 주위에 적절한 공백을 남겨주세요. 카드는 인물이나 상징적 요소와 같은 단순하고 재미있는 손으로 그린 일러스트나 아이콘으로 강조하여 시각적 매력을 높이고 생각이나 감정적 공감을 불러일으켜야 합니다. 전체적인 레이아웃은 시각적 균형을 강조하고 충분한 공백을 포함하여 디자인이 깨끗하고 명확하며 읽기 쉽도록 해야 합니다. "개인 브랜드(IP) 구축은 장기적인 복리입니다. 매일 업데이트를 계속하면 결과가 나올 것입니다 — 99%의 사람들은 그것을 계속할 수 없기 때문입니다!"'
  },
  {
    id: 182,
    title: '도시 날씨 예보',
    category: '정보 시각화',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1917988595228438771',
    inputImages: [],
    outputImage: '/images/cases/182/example.png',
    prompt: 'Show a clear 45-degree bird’s-eye view of an isometric miniature city scene featuring Shanghai’s iconic buildings, such as the Oriental Pearl Tower and the Bund. The weather effect—cloudy—blends softly into the city, interacting gently with the architecture. Use physically based rendering (PBR) and realistic lighting. Solid color background, crisp and clean. Centered composition to highlight the precision and detail of the 3D model. Display “Shanghai Cloudy 20°C” and a cloudy weather icon at the top of the image.',
    prompt_ko: '동방명주탑과 와이탄 등 상하이의 상징적인 건물을 특징으로 하는 아이소메트릭 미니어처 도시 장면을 선명한 45도 조감도로 보여주세요. 흐린 날씨 효과가 도시에 부드럽게 어우러져 건축물과 부드럽게 상호 작용합니다. 물리 기반 렌더링(PBR)과 사실적인 조명을 사용하세요. 단색 배경, 선명하고 깨끗합니다. 3D 모델의 정밀도와 디테일을 강조하기 위해 중앙에 배치된 구성. 이미지 상단에 "상하이 흐림 20°C"와 흐린 날씨 아이콘을 표시하세요.'
  },
];
