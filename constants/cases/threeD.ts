/**
 * @file threeD.ts
 * @description '3D & 아이소메트릭' 카테고리에 대한 예제 케이스 데이터입니다.
 */
import type { Case } from '../../types';

export const threeDAndIsometricCases: Case[] = [
  {
    id: 4,
    title: '3D 건물 추출/아이소메트릭 모델 제작',
    category: '3D & 아이소메트릭',
    author: '@Zieeett',
    sourceUrl: 'https://x.com/Zieeett/status/1960420874806247762',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case4/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case4/output.jpg',
    prompt: 'Make Image Daytime and Isometric [Building Only]',
    prompt_ko: '이미지를 낮 시간으로 만들고 [건물만] 아이소메트릭으로 표현해주세요.'
  },
  {
    id: 33,
    title: '지도를 아이소메트릭 건물로',
    category: '3D & 아이소메트릭',
    author: '@demishassabis',
    sourceUrl: 'https://x.com/demishassabis/status/1961077016830083103',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case33/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case33/output.jpg',
    prompt: 'Take this location and make the landmark an isometric image (building only), in the stvle of the game Theme Park',
    prompt_ko: '이 위치를 가지고 랜드마크를 게임 테마파크 스타일의 아이소메트릭 이미지(건물만)로 만들어 주세요.'
  },
  {
    id: 58,
    title: '아이소메트릭 홀로그래픽 와이어프레임',
    category: '3D & 아이소메트릭',
    author: '@tetumemo',
    sourceUrl: 'https://x.com/tetumemo/status/1964574226155000312',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case58/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case58/output.jpg',
    prompt: 'Based on the uploaded image, convert it into a holographic depiction using wireframe lines only.',
    prompt_ko: '업로드된 이미지를 기반으로 와이어프레임 선만을 사용하여 홀로그래픽 묘사로 변환해주세요.'
  },
  {
    id: 61,
    title: '평면도를 3D 렌더링으로',
    category: '3D & 아이소메트릭',
    author: '@op7418',
    sourceUrl: 'https://x.com/op7418/status/1961329148271513695',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case61/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case61/output.jpg',
    prompt: 'Convert this residential floor plan into an isometric, photo-realistic 3D rendering of the house.',
    prompt_ko: '이 주거용 평면도를 집의 아이소메트릭, 사실적인 3D 렌더링으로 변환해주세요.'
  },
  {
    id: 69,
    title: '모델 홀로그래픽 프로젝션',
    category: '3D & 아이소메트릭',
    author: '@UNIBRACITY',
    sourceUrl: 'https://x.com/UNIBRACITY/status/1966122746288681461',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case69/output.png',
    prompt: 'Ultra-realistic product photo.  \nSubject: virtual holographic character [CHARACTER], floating above a circular hologram projector Ø120 mm placed on a modern desk.  \n\nProjection source rules:  \n- If input reference is a 3D object → show a desktop 3D scanner beside the projector.  \n  Place the reference object on the scanner plate.  \n  The hologram above the projector is generated from this scanned object.  \n- If input reference is a 2D image → show a modern PC with monitor on the desk.  \n  Display the reference image on the monitor screen.  \n  The hologram above the projector is generated from this screen content.  \n\nHologram rendering rules:  \n- Character always appears as a semi-transparent volumetric image, background faintly visible through.  \n- No beams, no particles, no solid statue surfaces.  \n- Balanced anatomy (1/7–1/8 head-to-body ratio), correct proportions.  \n- Natural pose with clear silhouette.  \n- Hair, outfit folds, and accessories visible but translucent.  \n- Face crisp and expressive, readable at 1000 px crop.  \n- No copyrighted characters, no branded designs, no IP logos.  \n\nEnvironment: modern desk with projector base + conditional device (scanner or monitor).  \nCamera: 85–100 mm lens, 3/4 hero angle, eye-level, f/11–f/16, ISO100, tripod.  \nLighting: desk softly illuminated; holographic figure defined only by volumetric light.  \nBackground: seamless black studio with subtle reflections.  \n\nOutput: 4:5, 2048×2560.  \n\nNegative: text-free, watermark-free, logo-free, brand-free, copyrighted characters, franchise IP, trademarked designs, resin, PVC, physical statue, opaque surfaces, toy gloss, beams, scanlines, dots, distortion, extra digits.  \nSampling: deterministic, seed=12345, temperature=0.',
    prompt_ko: '초현실적인 제품 사진.\n주제: 가상 홀로그래픽 캐릭터 [캐릭터], 현대적인 책상 위에 놓인 원형 홀로그램 프로젝터(Ø120mm) 위에 떠 있음.\n\n프로젝션 소스 규칙:\n- 입력 참조가 3D 객체인 경우 → 프로젝터 옆에 데스크톱 3D 스캐너를 보여줍니다.\n  참조 객체를 스캐너 플레이트에 놓습니다.\n  프로젝터 위의 홀로그램은 이 스캔된 객체에서 생성됩니다.\n- 입력 참조가 2D 이미지인 경우 → 책상 위에 모니터가 있는 현대적인 PC를 보여줍니다.\n  참조 이미지를 모니터 화면에 표시합니다.\n  프로젝터 위의 홀로그램은 이 화면 내용에서 생성됩니다.\n\n홀로그램 렌더링 규칙:\n- 캐릭터는 항상 반투명한 볼륨 이미지로 나타나며, 배경이 희미하게 보입니다.\n- 빔, 입자, 단단한 조각상 표면 없음.\n- 균형 잡힌 해부학(머리-몸 비율 1/7–1/8), 올바른 비율.\n- 선명한 실루엣의 자연스러운 포즈.\n- 머리카락, 의상 주름, 액세서리는 보이지만 반투명.\n- 얼굴은 선명하고 표현력이 풍부하며 1000px 자르기에서 읽을 수 있음.\n- 저작권 있는 캐릭터, 브랜드 디자인, IP 로고 없음.\n\n환경: 프로젝터 베이스 + 조건부 장치(스캐너 또는 모니터)가 있는 현대적인 책상.\n카메라: 85–100mm 렌즈, 3/4 영웅 각도, 눈높이, f/11–f/16, ISO100, 삼각대.\n조명: 책상은 부드럽게 조명되고, 홀로그래픽 인물은 볼륨 조명으로만 정의됩니다.\n배경: 미묘한 반사가 있는 매끄러운 검은색 스튜디오.\n\n출력: 4:5, 2048×2560.\n\n제외: 텍스트 없음, 워터마크 없음, 로고 없음, 브랜드 없음, 저작권 있는 캐릭터, 프랜차이즈 IP, 상표 등록된 디자인, 레진, PVC, 물리적 조각상, 불투명한 표면, 장난감 광택, 빔, 스캔라인, 점, 왜곡, 추가 숫자.\n샘플링: 결정론적, 시드=12345, 온도=0.'
  },
  {
    id: 111,
    title: '3D 꼬마 폴라로이드 탈출 효과',
    category: '3D & 아이소메트릭',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1908238003169903060',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/2/example_polaroid_breakout.png',
    prompt: "Convert the character in the scene into a 3D chibi-style figure, placed inside a Polaroid photo. The photo paper is being held by a human hand. The character is stepping out of the Polaroid frame, creating a visual effect of breaking through the two-dimensional photo border and entering the real-world 3D space.",
    prompt_ko: "장면 속 캐릭터를 3D 꼬마 스타일 피규어로 변환하여 폴라로이드 사진 안에 배치해주세요. 사진 용지는 사람의 손에 들려 있습니다. 캐릭터는 폴라로이드 프레임 밖으로 걸어 나오며, 2차원 사진 경계를 뚫고 현실 세계의 3D 공간으로 들어오는 시각적 효과를 연출합니다."
  },
  {
    id: 116,
    title: '개인화된 방 디자인',
    category: '3D & 아이소메트릭',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1910698005193515370',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/7/example_personalized_room.png',
    prompt: "Design a cozy bedroom in a cute 3D style with C4D-quality rendering, presented in an isometric view. The room includes a bed, bookshelf, sofa, green plants, a computer desk, and a computer setup. A framed painting hangs on the wall. Outside the window, a nighttime cityscape is visible with glowing buildings and a dark sky. All furniture and objects should have a soft, rounded, stylized design to match the cute 3D aesthetic. Lighting should be warm and inviting, creating a comfortable nighttime indoor atmosphere.",
    prompt_ko: "C4D 품질의 렌더링으로 귀여운 3D 스타일의 아늑한 침실을 아이소메트릭 뷰로 디자인해주세요. 방에는 침대, 책장, 소파, 녹색 식물, 컴퓨터 책상, 컴퓨터 세트가 있습니다. 벽에는 액자 그림이 걸려 있습니다. 창밖으로는 빛나는 건물과 어두운 하늘이 있는 야경이 보입니다. 모든 가구와 물건은 귀여운 3D 미학에 맞게 부드럽고 둥글며 스타일화된 디자인을 가져야 합니다. 조명은 따뜻하고 매력적이어야 하며, 편안한 야간 실내 분위기를 연출해야 합니다."
  },
  {
    id: 119,
    title: '3D 커플 주얼리 박스 피규어',
    category: '3D & 아이소메트릭',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1909332895115714835',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/12/example_3d_collectible_couple_box.png',
    prompt: "Create a finely crafted, adorably charming 3D-rendered collectible figure based on the subjects in the photo, displayed inside a pastel-toned, warm and romantic presentation box. The box is designed in a soft cream color with gentle gold accents, resembling an elegant portable jewelry case.\n\nWhen opened, the box reveals a heartwarming romantic scene: two chibi-style characters gazing sweetly at each other. The lid is engraved with the words “FOREVER TOGETHER,” surrounded by delicate star and heart motifs.\n\nInside the box stands the female from the photo, holding a small bouquet of white flowers. Beside her is her partner, the male from the photo. Both characters have large, expressive, sparkling eyes and soft, warm smiles that radiate affection and charm.\n\nBehind them is a round window, through which a sunny skyline of a traditional Chinese town can be seen, along with gently drifting clouds. The interior is softly lit with warm ambient lighting, and petals float in the background to enhance the atmosphere.\n\nThe overall color scheme of both the display box and the characters is elegant and harmonious, creating a luxurious and dreamlike miniature keepsake.\n\nAspect ratio: 9:16",
    prompt_ko: "사진 속 인물들을 바탕으로 정교하게 제작된 사랑스럽고 매력적인 3D 렌더링 수집용 피규어를 파스텔 톤의 따뜻하고 로맨틱한 프레젠테이션 상자 안에 전시하여 만들어 주세요. 상자는 부드러운 크림색에 은은한 금색 악센트로 디자인되어 우아한 휴대용 보석함처럼 보입니다.\n\n상자를 열면 마음 따뜻해지는 로맨틱한 장면이 펼쳐집니다: 두 명의 꼬마 스타일 캐릭터가 서로를 달콤하게 바라보고 있습니다. 뚜껑에는 'FOREVER TOGETHER'라는 문구가 섬세한 별과 하트 모티브에 둘러싸여 새겨져 있습니다.\n\n상자 안에는 사진 속 여성이 작은 흰 꽃 부케를 들고 서 있습니다. 그녀 옆에는 그녀의 파트너인 사진 속 남성이 있습니다. 두 캐릭터 모두 크고 표현력 있으며 반짝이는 눈과 부드럽고 따뜻한 미소를 지으며 애정과 매력을 발산합니다.\n\n그들 뒤에는 둥근 창문이 있고, 그 창문을 통해 화창한 전통 중국 마을의 스카이라인과 부드럽게 떠다니는 구름을 볼 수 있습니다. 내부는 따뜻한 주변 조명으로 부드럽게 비춰지며, 분위기를 더하기 위해 배경에 꽃잎이 떠다닙니다.\n\n디스플레이 상자와 캐릭터 모두의 전체적인 색 구성은 우아하고 조화로워 고급스럽고 꿈같은 미니어처 기념품을 만듭니다.\n\n가로세로 비율: 9:16"
  },
  {
    id: 147,
    title: '미니멀리스트 3D 일러스트',
    category: '3D & 아이소메트릭',
    author: '@0xdlk',
    sourceUrl: 'https://x.com/0xdlk/status/1906843247432929642',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/25/example_minimalist_3d_toilet.png',
    prompt: `Generate a toilet with the following JSON profile:\n{\n  "art_style_profile": {\n    "style_name": "Minimalist 3D Illustration",\n    "visual_elements": {\n      "shape_language": "Rounded edges, smooth and soft forms with simplified geometry",\n      "colors": {\n        "primary_palette": ["Soft beige, light gray, warm orange"],\n        "accent_colors": ["Warm orange for focal elements"],\n        "shading": "Soft gradients with smooth transitions, avoiding harsh shadows or highlights"\n      },\n      "lighting": {\n        "type": "Soft, diffused lighting",\n        "source_direction": "Above and slightly to the right",\n        "shadow_style": "Subtle and diffused, no sharp or high-contrast shadows"\n      },\n      "materials": {\n        "surface_texture": "Matte, smooth surfaces with subtle shading",\n        "reflectivity": "Low to none, avoiding glossiness"\n      },\n      "composition": {\n        "object_presentation": "Single, central object displayed in isolation with ample negative space",\n        "perspective": "Slightly angled, giving a three-dimensional feel without extreme depth",\n        "background": "Solid, muted color that complements the object without distraction"\n      },\n      "typography": {\n        "font_style": "Minimalistic, sans-serif",\n        "text_placement": "Bottom-left corner with small, subtle text",\n        "color": "Gray, low-contrast against the background"\n      },\n      "rendering_style": {\n        "technique": "3D render with simplified, low-poly aesthetics",\n        "detail_level": "Medium detail, focusing on form and color over texture or intricacy"\n      }\n    },\n    "purpose": "To create clean, aesthetically pleasing visuals that emphasize simplicity, approachability, and modernity."\n  }\n}`,
    prompt_ko: `다음 JSON 프로필을 사용하여 변기를 생성하세요:\n{\n  "art_style_profile": {\n    "style_name": "미니멀리스트 3D 일러스트",\n    "visual_elements": {\n      "shape_language": "둥근 모서리, 단순화된 기하학을 사용한 부드럽고 유연한 형태",\n      "colors": {\n        "primary_palette": ["부드러운 베이지, 밝은 회색, 따뜻한 주황색"],\n        "accent_colors": ["초점 요소에 따뜻한 주황색"],\n        "shading": "거친 그림자나 하이라이트를 피한 부드러운 그라데이션과 매끄러운 전환"\n      },\n      "lighting": {\n        "type": "부드럽고 확산된 조명",\n        "source_direction": "위쪽 및 약간 오른쪽",\n        "shadow_style": "날카롭거나 고대비 그림자 없는 미묘하고 확산된 그림자"\n      },\n      "materials": {\n        "surface_texture": "미묘한 음영이 있는 무광택의 매끄러운 표면",\n        "reflectivity": "광택을 피한 낮은 반사율 또는 반사율 없음"\n      },\n      "composition": {\n        "object_presentation": "충분한 여백을 두고 고립되어 표시되는 단일 중앙 객체",\n        "perspective": "약간 기울어져 극단적인 깊이감 없이 3차원 느낌을 줌",\n        "background": "객체를 방해하지 않고 보완하는 단색의 차분한 색상"\n      },\n      "typography": {\n        "font_style": "미니멀리스트 산세리프",\n        "text_placement": "작고 미묘한 텍스트가 있는 왼쪽 하단 모서리",\n        "color": "배경과 저대비인 회색"\n      },\n      "rendering_style": {\n        "technique": "단순화된 로우폴리 미학의 3D 렌더링",\n        "detail_level": "질감이나 복잡함보다 형태와 색상에 초점을 맞춘 중간 디테일"\n      }\n    },\n    "purpose": "단순함, 친근함, 현대성을 강조하는 깨끗하고 미학적으로 만족스러운 시각 자료를 만들기 위함입니다."\n  }\n}`
  },
  {
    id: 195,
    title: '아이소메트릭 방',
    category: '3D & 아이소메트릭',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/3d/output_1.png',
    prompt: 'A cozy isometric room with a computer desk, a bed, and a lot of plants, 3D render, clay style.',
    prompt_ko: '컴퓨터 책상, 침대, 그리고 많은 식물이 있는 아늑한 아이소메트릭 방, 3D 렌더, 클레이 스타일.',
  },
  {
    id: 196,
    title: '3D 캐릭터 모델',
    category: '3D & 아이소메트릭',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: ['https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/3d/input_2.jpg'],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/3d/output_2.png',
    prompt: 'Create a 3D model of this character in a low-poly style.',
    prompt_ko: '이 캐릭터를 로우폴리 스타일의 3D 모델로 만들어줘.',
  }
];
