/**
 * @file threeD.ts
 * @description '3D & 아이소메트릭' 카테고리에 해당하는 예제 케이스 데이터 목록입니다.
 *              3D 렌더링, 아이소메트릭 뷰 등 입체적인 시각 효과를 활용하는 사례를 포함합니다.
 */

import type { Case } from '../../types';

export const threeDAndIsometricCases: Case[] = [
   {
    id: 2,
    title: '지도 화살표로 실제 풍경 생성',
    category: '3D & 아이소메트릭',
    author: '@tokumin',
    sourceUrl: 'https://x.com/tokumin/status/1960583251460022626',
    inputImages: ['/images/cases/2/input.jpg'],
    outputImage: '/images/cases/2/output.jpg',
    prompt: 'draw what the red arrow sees',
    prompt_ko: '빨간 화살표가 보는 것을 그려주세요.'
  },
  {
    id: 4,
    title: '3D 건물 추출/아이소메트릭 모델 제작',
    category: '3D & 아이소메트릭',
    author: '@Zieeett',
    sourceUrl: 'https://x.com/Zieeett/status/1960420874806247762',
    inputImages: ['/images/cases/4/input.jpg'],
    outputImage: '/images/cases/4/output.jpg',
    prompt: 'Make Image Daytime and Isometric [Building Only]',
    prompt_ko: '이미지를 낮 시간으로 만들고 아이소메트릭 [건물만]으로 만들어주세요.'
  },
   {
    id: 23,
    title: '다중 뷰 결과 생성',
    category: '3D & 아이소메트릭',
    author: '@Error_HTTP_404',
    sourceUrl: 'https://x.com/Error_HTTP_404/status/1960405116701303294',
    inputImages: ['/images/cases/23/input.jpg'],
    outputImage: '/images/cases/23/output.jpg',
    prompt: 'Generate the Front, Rear, Left, Right, Top, Bottom views on white. Evenly spaced. Consistent subject. Isometric Perspective Equivalence.',
    prompt_ko: '흰색 배경에 전면, 후면, 왼쪽, 오른쪽, 상단, 하단 뷰를 생성해주세요. 균등한 간격으로 일관된 대상을 표현하고, 아이소메트릭 원근 등가를 적용해주세요.'
  },
  {
    id: 33,
    title: '지도를 아이소메트릭 빌딩으로',
    category: '3D & 아이소메트릭',
    author: '@demishassabis',
    sourceUrl: 'https://x.com/demishassabis/status/1961077016830083103',
    inputImages: ['/images/cases/33/input.jpg'],
    outputImage: '/images/cases/33/output.jpg',
    prompt: 'Take this location and make the landmark an isometric image (building only), in the style of the game Theme Park',
    prompt_ko: '이 장소를 가져와서 랜드마크를 게임 \'테마파크\' 스타일의 아이소메트릭 이미지(건물만)로 만들어주세요.'
  },
  {
    id: 47,
    title: '하드웨어 분해도',
    category: '3D & 아이소메트릭',
    author: '@AIimagined',
    sourceUrl: 'https://x.com/AIimagined/status/1961431851245211958',
    inputImages: [],
    outputImage: '/images/cases/47/output.jpg',
    prompt: 'Exploded view of a DSLR showing all its accessories and internal components such as lens, filter, internal components, lens, sensor, screws, buttons, viewfinder, housing, and circuit board. Maintain red accents of the DSLR',
    prompt_ko: 'DSLR의 모든 액세서리와 렌즈, 필터, 내부 부품, 센서, 나사, 버튼, 뷰파인더, 하우징, 회로 기판과 같은 내부 구성 요소를 보여주는 분해도. DSLR의 빨간색 악센트를 유지해주세요.'
  },
  {
    id: 58,
    title: '아이소메트릭 홀로그램 와이어프레임',
    category: '3D & 아이소메트릭',
    author: '@tetumemo',
    sourceUrl: 'https://x.com/tetumemo/status/1964574226155000312',
    inputImages: ['/images/cases/58/input.jpg'],
    outputImage: '/images/cases/58/output.jpg',
    prompt: 'Based on the uploaded image, convert it into a holographic depiction using wireframe lines only.',
    prompt_ko: '업로드된 이미지를 기반으로 와이어프레임 선만 사용하여 홀로그램 묘사로 변환해주세요.'
  },
  {
    id: 59,
    title: '마인크래프트 스타일 장면 생성',
    category: '3D & 아이소메트릭',
    author: '@tetumemo',
    sourceUrl: 'https://x.com/tetumemo/status/1964860047705743700',
    inputImages: ['/images/cases/59/input.jpg'],
    outputImage: '/images/cases/59/output.jpg',
    prompt: 'Using this location, create an isometric HD-2D Minecraft-style image of the landmark (buildings only).',
    prompt_ko: '이 위치를 사용하여 랜드마크(건물만)의 아이소메트릭 HD-2D 마인크래프트 스타일 이미지를 만들어주세요.'
  },
  {
    id: 61,
    title: '평면도를 3D 렌더링으로',
    category: '3D & 아이소메트릭',
    author: '@op7418',
    sourceUrl: 'https://x.com/op7418/status/1961329148271513695',
    inputImages: ['/images/cases/61/input.jpg'],
    outputImage: '/images/cases/61/output.jpg',
    prompt: 'Convert this residential floor plan into an isometric, photo-realistic 3D rendering of the house.',
    prompt_ko: '이 주거용 평면도를 아이소메트릭, 사실적인 3D 렌더링 주택으로 변환해주세요.'
  },
   {
    id: 69,
    title: '모델 홀로그램 프로젝션',
    category: '3D & 아이소메트릭',
    author: '@UNIBRACITY',
    sourceUrl: 'https://x.com/UNIBRACITY/status/1966122746288681461',
    inputImages: ['/images/cases/69/input.png'],
    outputImage: '/images/cases/69/output.png',
    prompt: 'Ultra-realistic product photo. Subject: virtual holographic character [CHARACTER], floating above a circular hologram projector Ø120 mm placed on a modern desk. Projection source rules: - If input reference is a 3D object → show a desktop 3D scanner beside the projector. Place the reference object on the scanner plate. The hologram above the projector is generated from this scanned object. - If input reference is a 2D image → show a modern PC with monitor on the desk. Display the reference image on the monitor screen. The hologram above the projector is generated from this screen content. Hologram rendering rules: - Character always appears as a semi-transparent volumetric image, background faintly visible through. - No beams, no particles, no solid statue surfaces. - Balanced anatomy (1/7–1/8 head-to-body ratio), correct proportions. - Natural pose with clear silhouette. - Hair, outfit folds, and accessories visible but translucent. - Face crisp and expressive, readable at 1000 px crop. - No copyrighted characters, no branded designs, no IP logos. Environment: modern desk with projector base + conditional device (scanner or monitor). Camera: 85–100 mm lens, 3/4 hero angle, eye-level, f/11–f/16, ISO100, tripod. Lighting: desk softly illuminated; holographic figure defined only by volumetric light. Background: seamless black studio with subtle reflections. Output: 4:5, 2048×2560. Negative: text-free, watermark-free, logo-free, brand-free, copyrighted characters, franchise IP, trademarked designs, resin, PVC, physical statue, opaque surfaces, toy gloss, beams, scanlines, dots, distortion, extra digits. Sampling: deterministic, seed=12345, temperature=0.',
    prompt_ko: '초현실적인 제품 사진. 주제: 현대적인 책상 위에 놓인 직경 120mm 원형 홀로그램 프로젝터 위에 떠 있는 가상 홀로그램 캐릭터 [캐릭터]. 프로젝션 소스 규칙: - 입력 참조가 3D 개체인 경우 → 프로젝터 옆에 데스크톱 3D 스캐너를 보여주세요. 참조 개체를 스캐너 플레이트에 놓습니다. 프로젝터 위의 홀로그램은 이 스캔된 개체에서 생성됩니다. - 입력 참조가 2D 이미지인 경우 → 책상 위에 모니터가 있는 최신 PC를 보여주세요. 모니터 화면에 참조 이미지를 표시합니다. 프로젝터 위의 홀로그램은 이 화면 내용에서 생성됩니다. 홀로그램 렌더링 규칙: - 캐릭터는 항상 반투명 볼륨 이미지로 나타나며 배경이 희미하게 보입니다. - 빔, 입자, 단단한 조각상 표면이 없습니다. - 균형 잡힌 해부학(머리 대 몸 비율 1/7–1/8), 올바른 비율. - 선명한 실루엣의 자연스러운 포즈. - 머리카락, 의상 주름, 액세서리는 보이지만 반투명합니다. - 얼굴은 선명하고 표현력이 풍부하며 1000px 자르기에서 읽을 수 있습니다. - 저작권이 있는 캐릭터, 브랜드 디자인, IP 로고가 없습니다. 환경: 프로젝터 베이스 + 조건부 장치(스캐너 또는 모니터)가 있는 현대적인 책상. 카메라: 85–100mm 렌즈, 3/4 영웅 각도, 눈높이, f/11–f/16, ISO100, 삼각대. 조명: 책상은 부드럽게 조명됩니다. 홀로그램 인물은 체적 조명으로만 정의됩니다. 배경: 미묘한 반사가 있는 매끄러운 검은색 스튜디오. 출력: 4:5, 2048×2560. 부정적인 요소: 텍스트 없음, 워터마크 없음, 로고 없음, 브랜드 없음, 저작권이 있는 캐릭터, 프랜차이즈 IP, 상표가 있는 디자인, 수지, PVC, 물리적 조각상, 불투명한 표면, 장난감 광택, 빔, 스캔라인, 점, 왜곡, 추가 숫자. 샘플링: 결정론적, 시드=12345, 온도=0.'
  },
  {
    id: 71,
    title: '원격 탐사 이미지에서 건물 추출',
    category: '3D & 아이소메트릭',
    author: '@lehua555',
    sourceUrl: 'https://x.com/lehua555/status/1966124995949863310',
    inputImages: ['/images/cases/71/input.png'],
    outputImage: '/images/cases/71/output.png',
    prompt: 'Remove everything in the image except the buildings.',
    prompt_ko: '이미지에서 건물을 제외한 모든 것을 제거해주세요.'
  },
  {
    id: 72,
    title: '구성 요소 추출',
    category: '3D & 아이소메트릭',
    author: '@tetumemo',
    sourceUrl: 'https://x.com/tetumemo/status/1965721026849018141',
    inputImages: ['/images/cases/72/input.png'],
    outputImage: '/images/cases/72/output.png',
    prompt: 'Cut out each component and create a model sheet that retains the hologram.',
    prompt_ko: '각 구성 요소를 잘라내어 홀로그램을 유지하는 모델 시트를 만들어주세요.'
  },
  {
    id: 75,
    title: '이미지로 미니어처 장면 생성',
    category: '3D & 아이소메트릭',
    author: '@techhalla',
    sourceUrl: 'https://x.com/techhalla/status/1962088250199163285',
    inputImages: ['/images/cases/75/input.png'],
    outputImage: '/images/cases/75/output.png',
    prompt: 'Convert the image to isometric view',
    prompt_ko: '이미지를 아이소메트릭 뷰로 변환해주세요.'
  },
  {
    id: 80,
    title: '모델 단면도',
    category: '3D & 아이소메트릭',
    author: '@old_pgmrs_will',
    sourceUrl: 'https://x.com/old_pgmrs_will/status/1966053092371444029',
    inputImages: ['/images/cases/80/input.png'],
    outputImage: '/images/cases/80/output.png',
    prompt: 'Create a cutaway visualization of this car, show exterior intact on one side, and interior engine + seats exposed on the other side. Keep proportions accurate and details realistic.',
    prompt_ko: '이 자동차의 단면도를 만들어 한쪽은 외관을 그대로 보여주고, 다른 쪽은 내부 엔진과 좌석을 노출시켜 주세요. 비율을 정확하게 유지하고 디테일을 사실적으로 표현해주세요.'
  },
  {
    id: 92,
    title: '원근 3D 팝업 효과',
    category: '3D & 아이소메트릭',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1920355982703509588',
    inputImages: ['/images/cases/92/input.png'],
    outputImage: '/images/cases/92/perspective-3d-pop-out-effect.png',
    prompt: 'Hyperrealistic, top-down bird\'s-eye view shot, a beautiful Instagram model Anne Hathaway, with exquisite and beautiful makeup and fashionable styling, standing on the screen of a smartphone held up by someone. The image creates a strong perspective illusion. Emphasize the 3D effect of the girl standing out from the phone. She wears black-rimmed glasses, high-street fashion, and strikes a cute, playful pose. The phone screen is treated as a dark floor, like a small stage. The scene uses strong forced perspective to show the proportional difference between the hand, the phone, and the girl. The background is clean gray, using soft indoor light, shallow depth of field, and the overall style is surrealistic photorealistic compositing. Very strong perspective.',
    prompt_ko: '초현실적인 탑다운 조감도 샷, 정교하고 아름다운 메이크업과 패셔너블한 스타일링을 한 아름다운 인스타그램 모델 앤 해서웨이가 누군가 들고 있는 스마트폰 화면 위에 서 있습니다. 이미지는 강한 원근 착시를 만듭니다. 소녀가 전화기에서 튀어나오는 3D 효과를 강조하세요. 그녀는 검은 뿔테 안경을 쓰고 하이스트리트 패션을 선보이며 귀엽고 장난스러운 포즈를 취합니다. 전화기 화면은 작은 무대처럼 어두운 바닥으로 처리됩니다. 이 장면은 손, 전화기, 소녀 사이의 비례 차이를 보여주기 위해 강한 강제 원근법을 사용합니다. 배경은 깨끗한 회색이며, 부드러운 실내 조명, 얕은 피사계 심도를 사용하고 전체적인 스타일은 초현실적인 포토리얼리스틱 합성입니다. 매우 강한 원근법.'
  },
  {
    id: 112,
    title: '3D 폴라로이드 브레이크아웃 효과',
    category: '3D & 아이소메트릭',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1908238003169903060',
    inputImages: ['/images/cases/112/input.jpg'],
    outputImage: '/images/cases/112/example_polaroid_breakout.png',
    prompt: 'Convert the character in the scene into a 3D chibi-style figure, placed inside a Polaroid photo. The photo paper is being held by a human hand. The character is stepping out of the Polaroid frame, creating a visual effect of breaking through the two-dimensional photo border and entering the real-world 3D space.',
    prompt_ko: '장면 속 캐릭터를 3D 치비 스타일 피규어로 변환하여 폴라로이드 사진 안에 배치해주세요. 사진 용지는 사람의 손에 들려 있습니다. 캐릭터는 폴라로이드 프레임 밖으로 걸어 나오며, 2차원 사진 경계를 허물고 현실 세계 3D 공간으로 들어오는 시각적 효과를 만들어냅니다.'
  },
  {
    id: 113,
    title: '사진을 3D Q-버전 스타일로',
    category: '3D & 아이소메트릭',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1908194518345678865',
    inputImages: ['/images/cases/113/input.jpg'],
    outputImage: '/images/cases/113/example_photo_to_3d_q.png',
    prompt: 'Transform the characters in the scene into 3D chibi-style figures, while keeping the original scene layout and their clothing exactly the same.',
    prompt_ko: '장면 속 캐릭터들을 원래의 장면 구성과 의상을 그대로 유지하면서 3D 치비 스타일 피규어로 변환해주세요.'
  },
  {
    id: 124,
    title: '3D 커플 보석함 피규어',
    category: '3D & 아이소메트릭',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1909332895115714835',
    inputImages: ['/images/cases/124/input.jpg'],
    outputImage: '/images/cases/124/example_3d_collectible_couple_box.png',
    prompt: 'Create a finely crafted, adorably charming 3D-rendered collectible figure based on the subjects in the photo, displayed inside a pastel-toned, warm and romantic presentation box. The box is designed in a soft cream color with gentle gold accents, resembling an elegant portable jewelry case. When opened, the box reveals a heartwarming romantic scene: two chibi-style characters gazing sweetly at each other. The lid is engraved with the words “FOREVER TOGETHER,” surrounded by delicate star and heart motifs. Inside the box stands the female from the photo, holding a small bouquet of white flowers. Beside her is her partner, the male from the photo. Both characters have large, expressive, sparkling eyes and soft, warm smiles that radiate affection and charm. Behind them is a round window, through which a sunny skyline of a traditional Chinese town can be seen, along with gently drifting clouds. The interior is softly lit with warm ambient lighting, and petals float in the background to enhance the atmosphere. The overall color scheme of both the display box and the characters is elegant and harmonious, creating a luxurious and dreamlike miniature keepsake. Aspect ratio: 9:16',
    prompt_ko: '사진 속 인물들을 바탕으로 섬세하고 사랑스러운 3D 렌더링 수집용 피규어를 만들어 파스텔 톤의 따뜻하고 로맨틱한 프레젠테이션 상자 안에 전시해주세요. 상자는 부드러운 크림색에 은은한 금색 악센트로 디자인되어 우아한 휴대용 보석함처럼 보입니다. 상자를 열면 두 명의 치비 스타일 캐릭터가 서로를 달콤하게 바라보는 따뜻한 로맨틱 장면이 펼쳐집니다. 뚜껑에는 섬세한 별과 하트 모티브로 둘러싸인 "FOREVER TOGETHER"라는 문구가 새겨져 있습니다. 상자 안에는 사진 속 여성이 작은 흰 꽃다발을 들고 서 있고, 그 옆에는 그녀의 파트너인 남성이 있습니다. 두 캐릭터 모두 크고 표현력 있으며 반짝이는 눈과 부드럽고 따뜻한 미소로 애정과 매력을 발산합니다. 그들 뒤에는 둥근 창문이 있고, 그 너머로 화창한 전통 중국 마을의 스카이라인과 부드럽게 떠다니는 구름을 볼 수 있습니다. 내부는 따뜻한 주변 조명으로 부드럽게 비춰지고, 배경에는 꽃잎이 떠다니며 분위기를 더합니다. 디스플레이 상자와 캐릭터의 전체적인 색 구성은 우아하고 조화로워 고급스럽고 꿈같은 미니어처 기념품을 만듭니다. 종횡비: 9:16'
  },
  {
    id: 132,
    title: '3D 종이 공예 팝업북',
    category: '3D & 아이소메트릭',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1923264349050675329',
    inputImages: [],
    outputImage: '/images/cases/132/3d_papercraft_popup_book.png',
    prompt: 'Multi-layered foldable paper sculpture pop-up book, placed on a desk, with a clean background highlighting the main subject. The book presents a 3D flip-book style, with a 2:3 vertical aspect ratio. The open pages display the scene of [Nezha Demon Child version battling Ao Bing]. All elements are finely foldable and assembled, showcasing a realistic and delicate texture of folded paper. The composition uniformly adopts a frontal perspective, with an overall dreamy and beautiful visual style, vibrant and gorgeous colors, full of a fantastical and lively story atmosphere.',
    prompt_ko: '여러 겹으로 접을 수 있는 종이 조각 팝업북을 책상 위에 놓고, 깨끗한 배경으로 주제를 강조합니다. 이 책은 2:3 세로 비율의 3D 플립북 스타일을 보여줍니다. 펼쳐진 페이지에는 [나타 마동강세 버전이 오병과 싸우는] 장면이 표시됩니다. 모든 요소는 섬세하게 접고 조립할 수 있으며, 접힌 종이의 사실적이고 섬세한 질감을 보여줍니다. 구성은 전체적으로 정면 시점을 채택하며, 꿈같고 아름다운 시각적 스타일, 생생하고 화려한 색상, 환상적이고 활기찬 이야기 분위기가 가득합니다.'
  },
   {
    id: 136,
    title: '미니멀리스트 3D 일러스트레이션 (마크다운 형식)',
    category: '3D & 아이소메트릭',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1907131027253772399',
    inputImages: [],
    outputImage: '/images/cases/136/example_minimalist_3d_toilet_txt.png',
    prompt: `Draw a Toilet\n\n## 🎨 Art Style: Minimalist 3D Illustration\n\n### 🟢 Shape Language\n- Rounded edges and smooth, soft forms using simplified geometric shapes.\n\n### 🎨 Colors\n- **Primary palette:** soft beige, light gray, warm orange.\n- **Accent color:** warm orange for focal elements.\n- **Shading:** gentle gradients and smooth transitions, avoiding harsh shadows and highlights.\n\n### 💡 Lighting\n- **Type:** soft, diffuse lighting.\n- **Light source direction:** from above, slightly to the right.\n- **Shadow style:** subtle and diffused, without sharp or high-contrast shadows.\n\n### 🧱 Materials\n- **Surface texture:** matte and smooth with subtle light variation.\n- **Reflectivity:** low to none, avoiding noticeable gloss.\n\n### 🖼️ Composition\n- **Object presentation:** a single, centered object with generous negative space around it.\n- **Perspective:** slight tilt to suggest depth, but no strong depth-of-field effects.\n- **Background:** flat color, low saturation, harmonious with the subject and non-distracting.\n\n### ✒️ Typography\n- **Font style:** minimalist sans-serif.\n- **Text placement:** bottom left corner, small and unobtrusive.\n- **Font color:** gray, low contrast with the background.\n\n### 🖥️ Rendering Style\n- **Technique:** 3D rendering in a simplified low-poly style.\n- **Detail level:** medium — focus on shape and color, avoiding complex textures or fine details.\n\n## 🎯 Style Goal\n> Create a clean and aesthetically pleasing visual that emphasizes simplicity, approachability, and modernity.`,
    prompt_ko: `화장실 그리기\n\n## 🎨 아트 스타일: 미니멀리스트 3D 일러스트레이션\n\n### 🟢 모양 언어\n- 단순화된 기하학적 모양을 사용하여 둥근 모서리와 부드러운 형태.\n\n### 🎨 색상\n- **기본 팔레트:** 부드러운 베이지, 밝은 회색, 따뜻한 주황색.\n- **강조 색상:** 초점 요소를 위한 따뜻한 주황색.\n- **음영:** 거친 그림자나 하이라이트를 피하고 부드러운 그라데이션과 부드러운 전환.\n\n### 💡 조명\n- **유형:** 부드러운 확산 조명.\n- **광원 방향:** 위에서 약간 오른쪽으로.\n- **그림자 스타일:** 날카롭거나 고대비 그림자 없이 미묘하고 확산됨.\n\n### 🧱 재료\n- **표면 질감:** 미묘한 빛 변화가 있는 무광택의 부드러운 표면.\n- **반사율:** 눈에 띄는 광택을 피하고 낮거나 없음.\n\n### 🖼️ 구성\n- **개체 표현:** 주변에 충분한 여백이 있는 단일 중앙 개체.\n- **원근법:** 깊이를 암시하는 약간의 기울기, 그러나 강한 피사계 심도 효과 없음.\n- **배경:** 단색, 낮은 채도, 피사체와 조화를 이루며 방해되지 않음.\n\n### ✒️ 타이포그래피\n- **글꼴 스타일:** 미니멀리스트 산세리프.\n- **텍스트 배치:** 왼쪽 하단 모서리, 작고 눈에 띄지 않음.\n- **글꼴 색상:** 회색, 배경과 낮은 대비.\n\n### 🖥️ 렌더링 스타일\n- **기법:** 단순화된 로우폴리 스타일의 3D 렌더링.\n- **디테일 수준:** 중간 — 복잡한 질감이나 미세한 디테일을 피하고 모양과 색상에 중점.\n\n## 🎯 스타일 목표\n> 단순함, 친근함, 현대성을 강조하는 깨끗하고 미학적으로 만족스러운 시각 자료 만들기.`
  },
  {
    id: 137,
    title: '파스텔 파워 3D 광고',
    category: '3D & 아이소메트릭',
    author: '@aziz4ai',
    sourceUrl: 'https://x.com/aziz4ai/status/1925301120252924356',
    inputImages: [],
    outputImage: '/images/cases/137/pastel_power_3d_ads.png',
    prompt: 'a soft 3D cartoon-style sculpture of [brand product], made of smooth clay-like textures and vibrant pastel colors, placed in a minimalist isometric scene that complements the product’s nature, clean composition, gentle lighting, subtle shadows, with the product’s logo and a 3-word slogan displayed clearly below',
    prompt_ko: '[브랜드 제품]의 부드러운 3D 만화 스타일 조각. 부드러운 점토 같은 질감과 생생한 파스텔 색상으로 만들어졌으며, 제품의 특성을 보완하는 미니멀리스트 아이소메트릭 장면에 배치됩니다. 깔끔한 구성, 부드러운 조명, 미묘한 그림자, 제품 로고와 3단어 슬로건이 아래에 명확하게 표시됩니다.'
  },
  {
    id: 142,
    title: '미니어처 3차원 장면 프레젠테이션',
    category: '3D & 아이소메트릭',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1911609122547449886',
    inputImages: [],
    outputImage: '/images/cases/142/example_miniature_journey_west.png',
    prompt: 'Miniature three-dimensional scene presentation using tilt-shift photography techniques, depicting a chibi-style version of the scene {Sun Wukong’s Three Battles with the White Bone Demon}',
    prompt_ko: '틸트-시프트 사진 기술을 사용한 미니어처 3차원 장면 프레젠테이션, {손오공이 백골정과 세 번 싸우는} 장면의 치비 스타일 버전을 묘사합니다.'
  },
  {
    id: 147,
    title: '개인화된 방 디자인',
    category: '3D & 아이소메트릭',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1910698005193515370',
    inputImages: [],
    outputImage: '/images/cases/147/example_personalized_room.png',
    prompt: 'Design a cozy bedroom in a cute 3D style with C4D-quality rendering, presented in an isometric view. The room includes a bed, bookshelf, sofa, green plants, a computer desk, and a computer setup. A framed painting hangs on the wall. Outside the window, a nighttime cityscape is visible with glowing buildings and a dark sky. All furniture and objects should have a soft, rounded, stylized design to match the cute 3D aesthetic. Lighting should be warm and inviting, creating a comfortable nighttime indoor atmosphere.',
    prompt_ko: 'C4D 품질 렌더링으로 귀여운 3D 스타일의 아늑한 침실을 아이소메트릭 뷰로 디자인해주세요. 방에는 침대, 책장, 소파, 녹색 식물, 컴퓨터 책상 및 컴퓨터 설정이 포함됩니다. 벽에는 액자 그림이 걸려 있습니다. 창밖으로는 빛나는 건물과 어두운 하늘이 있는 야경이 보입니다. 모든 가구와 물건은 귀여운 3D 미학에 맞게 부드럽고 둥글며 스타일화된 디자인이어야 합니다. 조명은 따뜻하고 매력적이어야 하며 편안한 야간 실내 분위기를 조성해야 합니다.'
  },
  {
    id: 156,
    title: '미니어처 3D 건물',
    category: '3D & 아이소메트릭',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1913759515700285569',
    inputImages: [],
    outputImage: '/images/cases/156/example_miniature_starbucks_cup_building.png',
    prompt: '3D chibi-style miniature design of a whimsical Starbucks café, shaped like an oversized takeaway coffee cup complete with a lid and straw. The building has two floors, with large glass windows that clearly reveal a cozy and refined interior: wooden furniture, warm lighting, and busy baristas at work. On the street, cute little figurines are strolling or sitting, surrounded by benches, street lamps, and potted plants, creating a charming corner of the city. The overall aesthetic follows a detailed and realistic miniature cityscape style, with soft lighting that evokes a relaxing afternoon atmosphere.',
    prompt_ko: '뚜껑과 빨대가 완비된 대형 테이크아웃 커피컵 모양의 기발한 스타벅스 카페의 3D 치비 스타일 미니어처 디자인. 건물은 2층으로 되어 있으며, 큰 유리창을 통해 아늑하고 세련된 내부가 선명하게 보입니다: 나무 가구, 따뜻한 조명, 바쁜 바리스타들. 거리에는 귀여운 작은 피규어들이 벤치, 가로등, 화분으로 둘러싸여 산책하거나 앉아 있어 매력적인 도시의 한 구석을 만듭니다. 전체적인 미학은 상세하고 사실적인 미니어처 도시 풍경 스타일을 따르며, 부드러운 조명으로 편안한 오후 분위기를 자아냅니다.'
  },
  {
    id: 171,
    title: '미니어처 사이버펑크 틸트-시프트 풍경',
    category: '3D & 아이소메트릭',
    author: 'terry623',
    sourceUrl: 'https://github.com/terry623',
    inputImages: [],
    outputImage: '/images/cases/171/example_cyberpunk_tilt_shift_miniature.jpg',
    prompt: 'A highly detailed miniature [Cyberpunk] landscape viewed from above, using a tilt-shift lens effect. The scene is filled with toy-like elements, all rendered in high-resolution CG. Dramatic lighting creates a cinematic atmosphere, with vivid colors and strong contrast, emphasizing depth of field and a realistic micro-perspective, making the viewer feel as if overlooking a toy world. The image contains many visual jokes and details worth repeated viewing.',
    prompt_ko: '틸트-시프트 렌즈 효과를 사용하여 위에서 본 매우 상세한 미니어처 [사이버펑크] 풍경. 장면은 장난감 같은 요소로 가득 차 있으며, 모두 고해상도 CG로 렌더링되었습니다. 극적인 조명은 생생한 색상과 강한 대비로 영화 같은 분위기를 조성하며, 피사계 심도와 사실적인 미시적 관점을 강조하여 시청자가 장난감 세계를 내려다보는 것처럼 느끼게 합니다. 이미지에는 반복해서 볼 가치가 있는 많은 시각적 농담과 디테일이 포함되어 있습니다.'
  },
  {
    id: 178,
    title: '레고 도시 풍경 (상하이 번드)',
    category: '3D & 아이소메트릭',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1917713810346872902',
    inputImages: [],
    outputImage: '/images/cases/178/example_lego_shanghai_bund.png',
    prompt: 'Create a highly detailed and vividly colored LEGO-style scene of the Shanghai Bund. The foreground features the iconic historical buildings of the Bund, meticulously recreated with LEGO bricks in Western and neoclassical architectural styles — including clock towers, domes, and colonnades. LEGO minifigures are seen strolling along the riverfront, taking photos, and sightseeing, with classic LEGO-style cars parked along the street. In the background lies the spectacular Huangpu River, assembled with translucent blue LEGO bricks. On the water, LEGO ferries and tour boats sail along. Across the river stands the skyline of Lujiazui in Pudong, including the Oriental Pearl Tower, Shanghai Tower, Jin Mao Tower, and Shanghai World Financial Center — all rendered as vibrant, lifelike LEGO skyscrapers. The sky is LEGO’s signature bright blue, adorned with a few white LEGO brick clouds, creating a visual full of energy and modernity.',
    prompt_ko: '상하이 와이탄의 매우 상세하고 생생한 색상의 레고 스타일 장면을 만들어 주세요. 전경에는 시계탑, 돔, 열주를 포함하여 서양 및 신고전주의 건축 양식의 레고 블록으로 꼼꼼하게 재현된 와이탄의 상징적인 역사적 건물이 있습니다. 레고 미니피규어들이 강변을 따라 산책하고, 사진을 찍고, 관광하는 모습이 보이며, 거리에는 클래식한 레고 스타일 자동차가 주차되어 있습니다. 배경에는 반투명 파란색 레고 블록으로 조립된 장엄한 황푸강이 있습니다. 물 위에서는 레고 페리와 관광 보트가 항해합니다. 강 건너편에는 동방명주탑, 상하이 타워, 진마오 타워, 상하이 세계 금융 센터를 포함한 푸동 루자쭈이의 스카이라인이 서 있으며, 모두 생생하고 실물과 같은 레고 고층 빌딩으로 렌더링되었습니다. 하늘은 레고의 시그니처인 밝은 파란색이며, 몇 개의 흰색 레고 블록 구름으로 장식되어 에너지와 현대성으로 가득 찬 시각을 연출합니다.'
  },
  {
    id: 181,
    title: '3D 반투명 유리 변환',
    category: '3D & 아이소메트릭',
    author: '@azed_ai',
    sourceUrl: 'https://x.com/azed_ai/status/1917948899098243407',
    inputImages: ['/images/cases/181/input.jpg'],
    outputImage: '/images/cases/181/example.png',
    prompt: 'A soft, 3D translucent glass of the attached image with a frosty matte finish and detailed texture, original colors, centered on a light gray background, floats gently in space, soft shadows, natural lighting',
    prompt_ko: '서리가 내린 무광택 마감과 상세한 질감을 가진 첨부 이미지의 부드러운 3D 반투명 유리, 원래 색상, 밝은 회색 배경 중앙에 위치, 공간에 부드럽게 떠 있으며, 부드러운 그림자, 자연광'
  },
];
