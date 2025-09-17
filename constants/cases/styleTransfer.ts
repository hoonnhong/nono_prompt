import type { Case } from '../../types';

export const styleTransferCases: Case[] = [
  {
    id: 51,
    title: '고대 지도를 역사적 풍경 사진으로',
    category: '스타일 변환',
    author: '@levelsio',
    sourceUrl: 'https://x.com/levelsio/status/1961595333034598487',
    inputImages: ['/images/cases/51/input.jpg'],
    outputImage: '/images/cases/51/output.jpg',
    prompt: 'full colour photograph. New Amsterdam in 1660. make sure it\'s full modern colors as if it\'s a photograph taken today.',
    prompt_ko: '풀 컬러 사진. 1660년의 뉴암스테르담. 오늘날 찍은 사진처럼 현대적인 풀 컬러로 만들어주세요.'
  },
  {
    id: 57,
    title: '만화 스타일 변환',
    category: '스타일 변환',
    author: '@nobisiro_2023',
    sourceUrl: 'https://x.com/nobisiro_2023/status/1961231347986698371',
    inputImages: ['/images/cases/57/input.jpg'],
    outputImage: '/images/cases/57/output.jpg',
    prompt: 'Convert the input photo into a black-and-white manga-style line drawing.',
    prompt_ko: '입력 사진을 흑백 만화 스타일의 선화로 변환해주세요.'
  },
  {
    id: 84,
    title: '선화를 낙서 그림으로',
    category: '스타일 변환',
    author: '@hAru_mAki_ch',
    sourceUrl: 'https://x.com/hAru_mAki_ch/status/1966877088365113722',
    inputImages: ['/images/cases/84/input.png'],
    outputImage: '/images/cases/84/output.png',
    prompt: 'Make the uploaded picture book look as if it was drawn by a five-year-old child.',
    prompt_ko: '업로드된 그림책을 다섯 살 아이가 그린 것처럼 만들어주세요.'
  },
  {
    id: 93,
    title: '유리 재질 변경',
    category: '스타일 변환',
    author: '@egeberkina',
    sourceUrl: 'https://x.com/egeberkina/status/1920448389960909085',
    inputImages: ['/images/cases/93/input.png'],
    outputImage: '/images/cases/93/glass_retexturing.png',
    prompt: 'retexture the image attached based on the JSON aesthetic below { "style": "photorealistic 3D render", "material": "glass with transparent and iridescent effects", "surface_texture": "smooth, polished with subtle reflections and refractive effects", "lighting": { "type": "studio HDRI", "intensity": "high", "direction": "angled top-left key light and ambient fill", "accent_colors": ["blue", "green", "purple"], "reflections": true, "refractions": true, "dispersion_effects": true, "bloom": true }, "color_scheme": { "primary": "transparent with iridescent blue, green, and purple hues", "secondary": "crystal-clear with subtle chromatic shifts", "highlights": "soft, glowing accents reflecting rainbow-like effects", "rim_light": "soft reflective light around edges" }, "background": { "color": "black", "vignette": true, "texture": "none" }, "post_processing": { "chromatic_aberration": true, "glow": true, "high_contrast": true, "sharp_details": true } }',
    prompt_ko: '아래 JSON 미학을 기반으로 첨부된 이미지의 텍스처를 변경해주세요 { "스타일": "포토리얼리스틱 3D 렌더", "재질": "투명하고 무지갯빛 효과가 있는 유리", "표면 텍스처": "미묘한 반사와 굴절 효과가 있는 부드럽고 광택 나는 표면", "조명": { "유형": "스튜디오 HDRI", "강도": "높음", "방향": "비스듬한 왼쪽 상단 키 라이트 및 주변 채우기", "강조 색상": ["파란색", "녹색", "보라색"], "반사": true, "굴절": true, "분산 효과": true, "블룸": true }, "색상 구성표": { "기본": "무지갯빛 파란색, 녹색, 보라색 색조가 있는 투명", "보조": "미묘한 색상 변화가 있는 수정처럼 맑음", "하이라이트": "무지개 같은 효과를 반사하는 부드럽고 빛나는 악센트", "림 라이트": "가장자리 주변의 부드러운 반사광" }, "배경": { "색상": "검은색", "비네트": true, "텍스처": "없음" }, "후처리": { "색수차": true, "글로우": true, "고대비": true, "선명한 디테일": true } }'
  },
  {
    id: 119,
    title: '픽사 3D 스타일',
    category: '스타일 변환',
    author: 'AnimeAI',
    sourceUrl: 'https://animeai.online/#demo-gallery',
    inputImages: ['/images/cases/119/input.jpg'],
    outputImage: '/images/cases/119/pixar-style-godfather-scene.png',
    prompt: 'Redraw this photo in Pixar 3D style',
    prompt_ko: '이 사진을 픽사 3D 스타일로 다시 그려주세요.'
  },
  {
    id: 120,
    title: '지브리 스타일',
    category: '스타일 변환',
    author: 'AnimeAI',
    sourceUrl: 'https://animeai.online/#demo-gallery',
    inputImages: ['/images/cases/120/input.jpg'],
    outputImage: '/images/cases/120/ghibli-style-mona-lisa.png',
    prompt: 'Redraw this photo in Ghibli style',
    prompt_ko: '이 사진을 지브리 스타일로 다시 그려주세요.'
  },
  {
    id: 123,
    title: '레고 수집용 피규어',
    category: '스타일 변환',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1910644499354968091',
    inputImages: ['/images/cases/123/input.jpg'],
    outputImage: '/images/cases/123/example_lego_collectible.png',
    prompt: 'Generate a vertically-oriented image based on my uploaded photo, using the following prompt: Classic LEGO minifigure style in a miniature scene — an animal stands beside me. The color palette of the animal should match mine. Please design the animal based on your understanding of me. You may choose any creature — real, surreal, or fantastical — that you feel best reflects my personality. The entire scene is set within a transparent glass cube, with a minimalist interior design. The base of the miniature is matte black with silver accents, following a clean and modern aesthetic. On the base, there is an elegantly engraved nameplate in a refined serif font, displaying the name of the animal. The lower part of the base subtly incorporates finely etched biological classification details, similar to a natural history museum display. The overall composition should resemble a high-end collectible artwork: meticulously crafted, curated in style, and lit with refined lighting. Balance is key to the layout. The background should feature a smooth gradient transition from dark to light tones, selected to match the dominant color theme.',
    prompt_ko: '업로드한 사진을 기반으로 세로 방향 이미지를 생성해주세요. 다음 프롬프트를 사용하세요: 클래식 레고 미니피규어 스타일의 미니어처 장면 — 동물 한 마리가 내 옆에 서 있습니다. 동물의 색상 팔레트는 내 것과 일치해야 합니다. 나에 대한 당신의 이해를 바탕으로 동물을 디자인해주세요. 내 성격을 가장 잘 반영한다고 생각하는 실제, 초현실적 또는 환상적인 생물을 선택할 수 있습니다. 전체 장면은 미니멀한 인테리어 디자인의 투명한 유리 큐브 안에 설정됩니다. 미니어처의 베이스는 무광 검정색에 은색 악센트가 있어 깨끗하고 현대적인 미학을 따릅니다. 베이스에는 세련된 세리프 글꼴로 우아하게 새겨진 명판이 있으며 동물의 이름이 표시됩니다. 베이스 하단에는 자연사 박물관 전시와 유사하게 미세하게 에칭된 생물학적 분류 세부 정보가 미묘하게 통합되어 있습니다. 전체적인 구성은 세심하게 제작되고 스타일이 선별되었으며 세련된 조명으로 비춰진 고급 수집용 예술 작품과 유사해야 합니다. 레이아웃의 핵심은 균형입니다. 배경은 지배적인 색상 테마와 일치하도록 선택된 어두운 톤에서 밝은 톤으로 부드러운 그라데이션 전환을 특징으로 해야 합니다.'
  },
  {
    id: 135,
    title: '솜털 같은 잭오랜턴',
    category: '스타일 변환',
    author: 'gizakdag',
    sourceUrl: 'https://x.com/gizakdag/status/1911075302941622512',
    inputImages: [],
    outputImage: '/images/cases/135/example_fluffy_pumpkin.png',
    prompt: 'Transform a simple flat vector icon of [🎃] into a soft, 3D fluffy object. The shape is fully covered in fur, with hyperrealistic hair texture and soft shadows. The object is centered on a clean, light gray background and floats gently in space. The style is surreal, tactile, and modern, evoking a sense of comfort and playfulness. Studio lighting, high-resolution render.',
    prompt_ko: '[🎃]의 단순한 플랫 벡터 아이콘을 부드러운 3D 솜털 개체로 변환하세요. 모양은 털로 완전히 덮여 있으며, 초현실적인 머리카락 질감과 부드러운 그림자가 있습니다. 개체는 깨끗한 밝은 회색 배경 중앙에 위치하며 공간에 부드럽게 떠 있습니다. 스타일은 초현실적이고, 촉각적이며, 현대적이어서 편안함과 장난기를 불러일으킵니다. 스튜디오 조명, 고해상도 렌더링.'
  },
  {
    id: 153,
    title: '유리 재질 변경',
    category: '스타일 변환',
    author: '@egeberkina',
    sourceUrl: 'https://x.com/egeberkina/status/1917631056980721743',
    inputImages: ['/images/cases/153/input.jpg'],
    outputImage: '/images/cases/153/example_retexture_glass_phone.png',
    prompt: 'retexture the image attached based on the json below: { "style": "photorealistic", "material": "glass", "background": "plain white", "object_position": "centered", "lighting": "soft, diffused studio lighting", "camera_angle": "eye-level, straight-on", "resolution": "high", "aspect_ratio": "2:3", "details": { "reflections": true, "shadows": false, "transparency": true } }',
    prompt_ko: '아래 json을 기반으로 첨부된 이미지의 텍스처를 변경해주세요: { "스타일": "포토리얼리스틱", "재질": "유리", "배경": "단색 흰색", "개체 위치": "중앙", "조명": "부드러운 확산 스튜디오 조명", "카메라 각도": "눈높이, 정면", "해상도": "높음", "종횡비": "2:3", "세부 정보": { "반사": true, "그림자": false, "투명도": true } }'
  },
];
