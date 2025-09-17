/**
 * @file conceptAndIllustration.ts
 * @description '콘셉트 & 일러스트' 카테고리에 대한 예제 케이스 데이터입니다.
 */
import type { Case } from '../../types';

export const conceptAndIllustrationCases: Case[] = [
  {
    id: 35,
    title: '일러스트 드로잉 과정 4컷 만화',
    category: '콘셉트 & 일러스트',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1961772524611768452',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case35/case.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case35/case.jpg',
    prompt: 'Generate a four-panel drawing process for the character: Step 1: Line art, Step 2: Flat colors, Step 3: Add shadows, Step 4: Refine and complete. No text.',
    prompt_ko: '캐릭터의 4단계 그리기 과정을 생성해주세요: 1단계: 선화, 2단계: 단색 채색, 3단계: 그림자 추가, 4단계: 다듬고 완성. 텍스트는 넣지 마세요.'
  },
  {
    id: 39,
    title: '타이포그래피 일러스트 생성',
    category: '콘셉트 & 일러스트',
    author: '@Umesh',
    sourceUrl: 'https://x.com/umesh_ai/status/1961110485543371145',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case39/output.jpg',
    prompt: "Create a minimalist black-and-white typographic illustration of the scene riding a bicycle using only the letters in the phrase ['riding a bicycle'] . Each letter should be creatively shaped or positioned to form the rider, the bicycle, and a sense of motion. The design should be clean, ultra-minimalist, and entirely composed of the modified ['riding a bicycle'] letters without adding any extra shapes or lines. The letters should flow or curve to mimic the natural form of the scene, while still remaining legible.",
    prompt_ko: "['자전거 타기']라는 문구의 글자만을 사용하여 자전거를 타는 장면의 미니멀한 흑백 타이포그래피 일러스트를 만들어 주세요. 각 글자는 창의적으로 모양을 만들거나 배치하여 라이더, 자전거, 그리고 움직이는 느낌을 형성해야 합니다. 디자인은 깔끔하고, 극도로 미니멀하며, 추가적인 모양이나 선 없이 오직 수정된 ['자전거 타기'] 글자로만 구성되어야 합니다. 글자들은 장면의 자연스러운 형태를 모방하도록 흐르거나 구부러져야 하면서도 여전히 읽을 수 있어야 합니다."
  },
  {
    id: 51,
    title: '고대 지도 → 역사적 장면 사진',
    category: '콘셉트 & 일러스트',
    author: '@levelsio',
    sourceUrl: 'https://x.com/levelsio/status/1961595333034598487',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case51/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case51/output.jpg',
    prompt: "full colour photograph. New Amsterdam in 1660. make sure it's full modern colors as if it's a photograph taken today.",
    prompt_ko: "풀 컬러 사진. 1660년의 뉴암스테르담. 오늘날 찍은 사진처럼 완전한 현대적인 색상으로 만들어 주세요."
  },
  {
    id: 148,
    title: '판타지 만화 일러스트',
    category: '콘셉트 & 일러스트',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1905103477879267823',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/39/example_fantasy_computer_head_portal.png',
    prompt: "A cartoon-style character with a smiling computer monitor as its head, wearing gloves and boots, happily jumping through a glowing, blue, circular portal in a lush, fantasy forest landscape. The forest is detailed with large trees, mushrooms, flowers, a serene river, floating islands, and an atmospheric starry night sky with multiple moons. Bright, vibrant colors with soft lighting, fantasy illustration style.",
    prompt_ko: "웃는 컴퓨터 모니터를 머리로 한 만화 스타일의 캐릭터가 장갑과 부츠를 신고, 무성한 판타지 숲 풍경 속에서 빛나는 파란색 원형 포털을 즐겁게 뛰어넘고 있습니다. 숲은 큰 나무, 버섯, 꽃, 고요한 강, 떠다니는 섬들, 그리고 여러 개의 달이 있는 분위기 있는 별이 빛나는 밤하늘로 상세하게 묘사되어 있습니다. 밝고 생생한 색상과 부드러운 조명, 판타지 일러스트 스타일."
  },
  {
    id: 172,
    title: '더블 익스포저',
    category: '콘셉트 & 일러스트',
    author: 'rezzycheck (Sora)',
    sourceUrl: 'https://sora.com/g/gen_01jtc9btfzef080z31v8w9rtbw',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/86/double_exposure.png',
    prompt: `Double exposure, Midjourney style, merging, blending, overlay double exposure image, Double Exposure style, An exceptional masterpiece by Yukisakura revealing a fantastic double exposure composition of Aragorn son of Arathorn's silhouette harmoniously intertwined with the visually striking, rugged landscapes of Middle Earth during a lively spring season. Sun-bathed pine forests, mountain peaks, and a lone horse cutting through the trail echo outward through the fabric of his figure, adding layers of narrative and solitude. Beautiful tension builds as the stark monochrome background maintains razor-sharp contrast, drawing all focus to the richly layered double exposure. Characterized by its vibrant full-color scheme within Aragorn's silhouette and crisp, deliberate lines that trace every contour with emotional precision. (Detailed:1.45). (Detailed background:1.4).`,
    prompt_ko: `더블 익스포저, 미드저니 스타일, 병합, 블렌딩, 오버레이 더블 익스포저 이미지, 더블 익스포저 스타일, 유키사쿠라의 뛰어난 걸작으로, 아라곤 아들 아라손의 실루엣이 활기찬 봄 시즌 동안 중간계의 시각적으로 인상적이고 험준한 풍경과 조화롭게 얽혀 있는 환상적인 더블 익스포저 구성을 보여줍니다. 햇살 가득한 소나무 숲, 산봉우리, 그리고 길을 가로지르는 외로운 말은 그의 모습을 통해 울려 퍼지며 서사와 고독의 층을 더합니다. 뚜렷한 흑백 배경이 날카로운 대비를 유지하면서 아름다운 긴장감을 조성하여 모든 초점을 풍부하게 레이어드된 더블 익스포저에 맞춥니다. 아라곤의 실루엣 내의 생생한 풀 컬러 구성과 감정적인 정밀함으로 모든 윤곽을 추적하는 선명하고 의도적인 선이 특징입니다. (상세:1.45). (상세 배경:1.4).`
  },
  {
    id: 173,
    title: '초현실적인 상호작용 장면',
    category: '콘셉트 & 일러스트',
    author: '@umesh_ai',
    sourceUrl: 'https://x.com/umesh_ai/status/1917444534239191544',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/85/case.png',
    prompt: `A pencil sketch of [Subject 1] interacting with [Subject 2], where [Subject 2] is rendered as a realistic, full-color object, creating a surreal contrast against the hand-drawn style of [Subject 1] and the background`,
    prompt_ko: `[주제 1]과 [주제 2]가 상호작용하는 연필 스케치. 여기서 [주제 2]는 사실적인 풀컬러 객체로 렌더링되어 [주체 1]과 배경의 손으로 그린 스타일과 초현실적인 대조를 이룹니다.`
  },
  {
    id: 201,
    title: '미래 도시 컨셉 아트',
    category: '콘셉트 & 일러스트',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/concept/output_1.jpg',
    prompt: 'A sprawling futuristic city with flying vehicles and towering bio-luminescent skyscrapers, digital painting, concept art.',
    prompt_ko: '하늘을 나는 자동차와 거대한 바이오-루미네센트 초고층 빌딩이 있는 거대한 미래 도시, 디지털 페인팅, 컨셉 아트.',
  },
  {
    id: 202,
    title: '마법 숲 일러스트',
    category: '콘셉트 & 일러스트',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: ['https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/concept/input_2.jpg'],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/concept/output_2.jpg',
    prompt: 'Illustrate an enchanted forest with glowing mushrooms and mystical creatures, storybook style.',
    prompt_ko: '빛나는 버섯과 신비로운 생물이 있는 마법에 걸린 숲을 동화책 스타일로 그려줘.',
  }
];
