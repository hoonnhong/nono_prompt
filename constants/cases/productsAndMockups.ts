/**
 * @file productsAndMockups.ts
 * @description '제품 & 목업' 카테고리에 대한 예제 케이스 데이터입니다.
 */
import type { Case } from '../../types';

export const productsAndMockupsCases: Case[] = [
  {
    id: 32,
    title: '액션 피규어',
    category: '제품 & 목업',
    author: '@icreatelife',
    sourceUrl: 'https://x.com/icreatelife/status/1961653618529935720',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case32/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case32/output.jpg',
    prompt: 'make an action figure of me that says [“AI Evangelist - Kris”] and features [coffee, turtle, laptop, phone and headphones]',
    prompt_ko: '[“AI Evangelist - Kris”]라고 쓰여 있고 [커피, 거북이, 노트북, 휴대폰, 헤드폰]이 특징인 제 액션 피규어를 만들어 주세요.'
  },
  {
    id: 41,
    title: '제품 포장 생성',
    category: '제품 & 목업',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1962763864875167971',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case41/case.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case41/case.jpg',
    prompt: 'Apply the design from Image 1 to the can in Image 2, and place it in a minimalist design setting, professional photography',
    prompt_ko: '이미지 1의 디자인을 이미지 2의 캔에 적용하고, 미니멀한 디자인 배경에 전문적인 사진처럼 배치해주세요.'
  },
  {
    id: 46,
    title: '건담 모델 피규어',
    category: '제품 & 목업',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1961412823340265509',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case46/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case46/output.jpg',
    prompt: 'Transform the person in the photo into a Gundam model kit packaging box style, presented in isometric perspective. Label the box with the title "ZHOGUE". Inside the box, display a Gundam-style mechanical version of the person from the photo, along with their essentials (such as makeup, bags, or other items) redesigned as futuristic mechanical accessories. The packaging should resemble real Gunpla boxes, including technical illustrations, instruction manual-style details, and sci-fi fonts. Beside the box, also display the actual Gundam-style mechanical figure itself, outside the packaging, rendered in a realistic and lifelike style, similar to official Bandai promotional renders.',
    prompt_ko: '사진 속 인물을 건담 모델 키트 포장 상자 스타일로 변환하여 아이소메트릭 뷰로 보여주세요. 상자에는 "ZHOGUE"라는 제목을 붙여주세요. 상자 안에는 사진 속 인물의 건담 스타일 기계 버전과 함께, 그들의 필수품(화장품, 가방 등)을 미래적인 기계 액세서리로 재디자인하여 전시해주세요. 포장은 기술 일러스트, 사용 설명서 스타일의 디테일, 공상 과학 폰트를 포함하여 실제 건프라 상자와 유사해야 합니다. 상자 옆에는 포장되지 않은 실제 건담 스타일 기계 피규어도 공식 반다이 프로모션 렌더링과 유사하게 사실적이고 생생한 스타일로 렌더링하여 보여주세요.'
  },
  {
    id: 53,
    title: '섬세하고 귀여운 제품 사진',
    category: '제품 & 목업',
    author: '@azed_ai',
    sourceUrl: 'https://x.com/azed_ai/status/1962878353784066342',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case53/output.jpg',
    prompt: 'A high-resolution advertising photograph of a realistic, miniature [PRODUCT] held delicately between a person\'s thumb and index finger.  clean and white background, studio lighting, soft shadows. The hand is well-groomed, natural skin tone, and positioned to highlight the product’s shape and details. The product appears extremely small but hyper-detailed and brand-accurate, centered in the frame with a shallow depth of field. Emulates luxury product photography and minimalist commercial style.',
    prompt_ko: '사람의 엄지와 검지 사이에 섬세하게 들려 있는 사실적인 미니어처 [제품]의 고해상도 광고 사진. 깨끗하고 흰색 배경, 스튜디오 조명, 부드러운 그림자. 손은 잘 관리되어 있고 자연스러운 피부 톤이며 제품의 모양과 디테일을 강조하도록 위치해 있습니다. 제품은 매우 작지만 초정밀하고 브랜드와 정확하며, 얕은 피사계 심도로 프레임 중앙에 위치합니다. 고급 제품 사진과 미니멀한 상업 스타일을 모방합니다.'
  },
  {
    id: 64,
    title: '장면 A6 접이식 카드',
    category: '제품 & 목업',
    author: '@Gdgtify',
    sourceUrl: 'https://x.com/Gdgtify/status/19649795223709287319',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case64/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case64/output.jpg',
    prompt: 'Draw an A6 folding card: when opened, it reveals a complete 3D spherical tiny house with a miniature paper garden and a bonsai tree inside.',
    prompt_ko: 'A6 접이식 카드를 그려주세요: 펼치면 내부에 미니어처 종이 정원과 분재 나무가 있는 완전한 3D 구형의 작은 집이 나타납니다.'
  },
  {
    id: 67,
    title: '주얼리 컬렉션 디자인',
    category: '제품 & 목업',
    author: '@Gdgtify',
    sourceUrl: 'https://x.com/Gdgtify/status/1964419331342909777',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case67/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case67/output.jpg',
    prompt: 'Transform this image into a 5-piece jewelry collection.',
    prompt_ko: '이 이미지를 5피스 주얼리 컬렉션으로 변환해주세요.'
  },
  {
    id: 68,
    title: '상품 디자인',
    category: '제품 & 목업',
    author: '@0xFramer',
    sourceUrl: 'https://x.com/0xFramer/status/1964992117324886349',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case68/input.jpg'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case68/output.jpg',
    prompt: 'Create merchandise using this character image.',
    prompt_ko: '이 캐릭터 이미지를 사용하여 상품을 만들어주세요.'
  },
  {
    id: 82,
    title: '상품 진열대',
    category: '제품 & 목업',
    author: '@tokyo_Valentine',
    sourceUrl: 'https://x.com/tokyo_Valentine/status/1966888938838298727',
    inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case82/input.png'],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case82/output.png',
    prompt: "Remove the background from this illustration and turn it into merchandise like figurines.\nImage: Photorealistic\nLocation:\nThe shelves of a fictional convenience store that doesn't exist in Japan. The cute, pop atmosphere is complemented by neatly arranged merchandise featuring the illustration. The store's interior is dreamily bright and special, creating a special space that excites fans.\n\nCharacters:\nThese merchandise are displayed on the shelves.\n\nMerchandise Lineup:\nTwo large, approximately 50cm-long figures in the center of the screen (for a striking display)\nAcrylic stands (deformed versions of the original artwork)\n\nChibi figures (deformed versions of the original artwork)\n\nDakimakura pillows (large prints for a striking presence)\n\nJigsaw puzzles (visual art of the characters)\n\nStationery (notebooks, pens, clear files, etc., deformed versions of the original artwork)\n\nCardboards (deformed versions of the original artwork)\n\nPlush toys (deformed versions of the original artwork)\n\nDisplay:\nThe merchandise are neatly arranged on the shelves, maintaining the atmosphere of a convenience store while still filling the space with love for the characters. They're arranged in a way that teenage female fans can't help but want to pick them up.\n\nOverall tone:\nA dreamlike merchandise sales space. Cuteness and pop are at the forefront, and despite being a convenience store, it's presented as a 'holy land for fan activities.'\nResolution: 4K, 4000px: 3000px",
    prompt_ko: "이 일러스트에서 배경을 제거하고 피규어 같은 상품으로 만들어주세요.\n이미지: 사실적\n장소:\n일본에 존재하지 않는 가상의 편의점 선반. 귀엽고 팝적인 분위기는 일러스트가 그려진 깔끔하게 정돈된 상품들로 보완됩니다. 가게 내부는 꿈결처럼 밝고 특별하여 팬들을 설레게 하는 특별한 공간을 만듭니다.\n\n캐릭터:\n이 상품들은 선반에 진열되어 있습니다.\n\n상품 라인업:\n화면 중앙에 있는 약 50cm 길이의 대형 피규어 2개(인상적인 전시용)\n아크릴 스탠드(원본 아트워크의 변형 버전)\n\n꼬마 피규어(원본 아트워크의 변형 버전)\n\n다키마쿠라 베개(인상적인 존재감을 위한 대형 프린트)\n\n직소 퍼즐(캐릭터의 시각 예술)\n\n문구류(노트, 펜, 클리어 파일 등, 원본 아트워크의 변형 버전)\n\n판지(원본 아트워크의 변형 버전)\n\n봉제 인형(원본 아트워크의 변형 버전)\n\n전시:\n상품들은 선반에 깔끔하게 정돈되어 편의점 분위기를 유지하면서도 캐릭터에 대한 사랑으로 공간을 가득 채웁니다. 10대 여성 팬들이 집어 들고 싶어 할 수밖에 없도록 배열되어 있습니다.\n\n전체적인 톤:\n꿈같은 상품 판매 공간. 귀여움과 팝이 전면에 있으며, 편의점임에도 불구하고 '팬 활동의 성지'로 제시됩니다.\n해상도: 4K, 4000px: 3000px"
  },
  {
    id: 88,
    title: '유리병 기념품',
    category: '제품 & 목업',
    author: '@NanoBanana_labs',
    sourceUrl: 'https://x.com/NanoBanana_labs/status/1967191346017673334',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case88/output.png',
    prompt: 'A 1/7 scale commercialized collectible figure of the character from the photo, crafted in a highly realistic style. The figure is placed in a detailed beach environment with sand, seashells, and gentle ocean waves. The entire toy display is enclosed inside a clear souvenir glass bottle, giving it a premium miniature diorama look, with realistic lighting and shadows',
    prompt_ko: '사진 속 캐릭터를 1/7 스케일로 상업화한 수집용 피규어로, 매우 사실적인 스타일로 제작되었습니다. 피규어는 모래, 조개껍질, 잔잔한 파도가 있는 섬세한 해변 환경에 배치되어 있습니다. 전체 장난감 디스플레이는 투명한 기념품 유리병 안에 들어 있어, 사실적인 조명과 그림자와 함께 고급스러운 미니어처 디오라마 느낌을 줍니다.'
  },
  {
    id: 89,
    title: '미니어처 상점',
    category: '제품 & 목업',
    author: '@NanoBanana_labs',
    sourceUrl: 'https://x.com/NanoBanana_labs/status/1966791308321910922',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case89/output.png',
    prompt: 'Tiny diorama shop for [BRAND]. Roof made of oversized [PRODUCT], big [BRAND] logo sign above the window, vendor handing a [PRODUCT] to a customer, ground covered with many [PRODUCT]. Hand-made polymer-clay look, studio macro photo, soft light, shallow depth of field, vertical 3:4',
    prompt_ko: '[브랜드]를 위한 작은 디오라마 상점. 거대한 [제품]으로 만든 지붕, 창문 위의 큰 [브랜드] 로고 간판, 고객에게 [제품]을 건네주는 상인, 많은 [제품]으로 덮인 땅. 손으로 만든 폴리머 클레이 느낌, 스튜디오 매크로 사진, 부드러운 조명, 얕은 피사계 심도, 세로 3:4'
  },
  {
    id: 117,
    title: '레고 수집용 피규어',
    category: '제품 & 목업',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1910644499354968091',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/8/example_lego_collectible.png',
    prompt: "Generate a vertically-oriented image based on my uploaded photo, using the following prompt:\nClassic LEGO minifigure style in a miniature scene — an animal stands beside me. The color palette of the animal should match mine.\nPlease design the animal based on your understanding of me. You may choose any creature — real, surreal, or fantastical — that you feel best reflects my personality.\nThe entire scene is set within a transparent glass cube, with a minimalist interior design.\nThe base of the miniature is matte black with silver accents, following a clean and modern aesthetic.\nOn the base, there is an elegantly engraved nameplate in a refined serif font, displaying the name of the animal.\nThe lower part of the base subtly incorporates finely etched biological classification details, similar to a natural history museum display.\nThe overall composition should resemble a high-end collectible artwork: meticulously crafted, curated in style, and lit with refined lighting.\nBalance is key to the layout. The background should feature a smooth gradient transition from dark to light tones, selected to match the dominant color theme.",
    prompt_ko: "업로드한 사진을 기반으로 세로 방향 이미지를 생성해주세요. 다음 프롬프트를 사용하세요:\n클래식 레고 미니피규어 스타일의 미니어처 장면 — 동물 한 마리가 제 옆에 서 있습니다. 동물의 색상 팔레트는 제 것과 일치해야 합니다.\n저에 대한 이해를 바탕으로 동물을 디자인해주세요. 제 성격을 가장 잘 반영한다고 생각하는 실제, 초현실적 또는 환상적인 생물을 선택할 수 있습니다.\n전체 장면은 미니멀리스트 인테리어 디자인의 투명한 유리 큐브 안에 설정됩니다.\n미니어처의 베이스는 무광 검정색에 은색 악센트가 있으며, 깨끗하고 현대적인 미학을 따릅니다.\n베이스에는 세련된 세리프 글꼴로 우아하게 새겨진 이름표가 있으며, 동물의 이름이 표시됩니다.\n베이스 하단에는 자연사 박물관 전시와 유사하게 미세하게 새겨진 생물학적 분류 세부 정보가 미묘하게 통합되어 있습니다.\n전체적인 구성은 고급 수집용 예술 작품을 닮아야 합니다: 세심하게 제작되고, 스타일리시하게 큐레이팅되었으며, 세련된 조명으로 비춰집니다.\n레이아웃의 균형이 중요합니다. 배경은 지배적인 색상 테마와 일치하도록 선택된 어두운 톤에서 밝은 톤으로 부드러운 그라데이션 전환을 특징으로 해야 합니다."
  },
  {
    id: 127,
    title: '펀코 팝 피규어 제작',
    category: '제품 & 목업',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1909047283485671924',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/24/funko-pop-james-bond-figure-and-box.png',
    prompt: "Transform the person in the photo into the style of a Funko Pop figure box, presented in isometric view.\nThe packaging is labeled with the title “JAMES BOND.”\nInside the box, display a chibi-style figure based on the person in the photo, along with their essential accessories: a pistol, a wristwatch, a suit, and other signature items.\nNext to the box, show a realistic rendering of the actual figure outside the packaging, with detailed textures and lighting to achieve a lifelike product display.",
    prompt_ko: "사진 속 인물을 아이소메트릭 뷰로 표현된 펀코 팝 피규어 상자 스타일로 변환하세요.\n포장에는 'JAMES BOND'라는 제목이 붙어 있습니다.\n상자 안에는 사진 속 인물을 바탕으로 한 꼬마 스타일 피규어와 함께 권총, 손목시계, 정장 등 필수 액세서리와 기타 시그니처 아이템을 전시하세요.\n상자 옆에는 포장 밖 실제 피규어의 사실적인 렌더링을 보여주세요. 실물과 같은 제품 디스플레이를 위해 상세한 질감과 조명을 사용하세요."
  },
  {
    id: 135,
    title: '유명 회화 캐릭터 시리얼 광고',
    category: '제품 & 목업',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1909542765857587310',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/26/example_master_oats_ad.png',
    prompt: `“Master Oats”: Based on the visual features of the person in the uploaded photo, generate a custom oatmeal mix that reflects their personality traits — for example, using vegetables, fruits, yogurt, whole grains, etc.\n\nDesign a unique cereal box and package aesthetic that aligns with this tailored mix.\n\nThen, create an advertising cover featuring the person as the mascot on the cereal box. The character should retain their recognizable features but be transformed into a cute chibi-style 3D figure with a C4D-quality rendering.\n\nThe oatmeal and packaging should be presented in a setting that matches the mood — such as a minimalist kitchen, a sleek supermarket display, or a clean design counter.\n\nThe process includes:\n– Character analysis and oat mix pairing\n– Cereal box concept and design\n– Display environment selection\n– Final image with mascot figure, packaging, and styled scene composition\n\nAll visuals should be balanced, modern, and appealing, reflecting a premium and fun oat brand identity.`,
    prompt_ko: `“마스터 오트”: 업로드된 사진 속 인물의 시각적 특징을 바탕으로, 그들의 성격 특성을 반영하는 맞춤형 오트밀 믹스를 생성하세요 — 예를 들어, 채소, 과일, 요거트, 통곡물 등을 사용합니다.\n\n이 맞춤형 믹스와 어울리는 독특한 시리얼 상자와 포장 미학을 디자인하세요.\n\n그런 다음, 시리얼 상자에 그 사람을 마스코트로 한 광고 표지를 만드세요. 캐릭터는 알아볼 수 있는 특징을 유지하되, C4D 품질의 렌더링으로 귀여운 꼬마 스타일의 3D 피규어로 변환되어야 합니다.\n\n오트밀과 포장은 미니멀리스트 주방, 세련된 슈퍼마켓 진열대, 또는 깨끗한 디자인 카운터와 같이 분위기에 맞는 환경에 제시되어야 합니다.\n\n과정은 다음과 같습니다:\n– 캐릭터 분석 및 오트 믹스 페어링\n– 시리얼 상자 컨셉 및 디자인\n– 디스플레이 환경 선택\n– 마스코트 피규어, 포장, 스타일링된 장면 구성을 포함한 최종 이미지\n\n모든 시각 자료는 균형 있고, 현대적이며, 매력적이어야 하며, 프리미엄하고 재미있는 오트 브랜드 아이덴티티를 반영해야 합니다.`
  },
  {
    id: 155,
    title: '해피 캡슐 제작',
    category: '제품 & 목업',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1911724629460455896',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/46/example_happy_capsule.png',
    prompt: `Title (large text): Fast-Acting Happiness Capsule\nA capsule pill with a green top in Starbucks green and a transparent bottom, printed with the Starbucks logo. Inside the capsule are numerous coffee beans.\nDescription (small text): Take when feeling sad or down. Three times a day, two capsules per dose.\nBuy button: Same color as the capsule.\nBelow the button, display the price: $9.\nPlease follow medical advice and purchase as needed.`,
    prompt_ko: `제목(큰 글씨): 즉효성 행복 캡슐\n스타벅스 녹색의 녹색 상단과 투명한 하단을 가진 캡슐 알약으로, 스타벅스 로고가 인쇄되어 있습니다. 캡슐 안에는 수많은 커피 원두가 들어 있습니다.\n설명(작은 글씨): 슬프거나 우울할 때 복용하세요. 하루 세 번, 한 번에 두 캡슐씩.\n구매 버튼: 캡슐과 같은 색상.\n버튼 아래에 가격 표시: $9.\n의사의 조언을 따르고 필요에 따라 구매하세요.`
  },
  {
    id: 160,
    title: '귀여운 식물 화분',
    category: '제품 & 목업',
    author: '@azed_ai',
    sourceUrl: 'https://x.com/azed_ai/status/1923739813414568075',
    inputImages: [],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/55/cute_plant_planter.png',
    prompt: `A high-quality photo of a cute ceramic [object/animal]-shaped planter with a glossy finish, filled with a variety of vibrant succulents and greenery including a spiky Haworthia, a rosette-shaped Echeveria, and delicate white flowers. The planter has a friendly face and sits on a soft, neutral background with diffused natural lighting, showcasing fine textures and color contrast in a clean, minimalistic composition`,
    prompt_ko: `광택 마감 처리된 귀여운 세라믹 [물건/동물] 모양의 화분에 가시가 있는 하월시아, 장미 모양의 에케베리아, 섬세한 흰 꽃 등 다양하고 생생한 다육 식물과 녹색 식물이 가득 담긴 고품질 사진. 화분은 친근한 얼굴을 하고 있으며, 부드럽고 중성적인 배경에 확산된 자연광 아래 놓여 있어, 깨끗하고 미니멀한 구성으로 미세한 질감과 색상 대비를 보여줍니다.`
  },
  {
    id: 203,
    title: '제품 목업 생성',
    category: '제품 & 목업',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: ['https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/product/input_1.png'],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/product/output_1.jpg',
    prompt: 'Place this logo on a black coffee mug, realistic mockup.',
    prompt_ko: '이 로고를 검은색 커피 머그컵에 배치해줘, 사실적인 목업으로.',
  },
  {
    id: 204,
    title: '책 표지 목업',
    category: '제품 & 목업',
    author: 'Gemini',
    sourceUrl: '#',
    inputImages: ['https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/product/input_2.png'],
    outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/product/output_2.jpg',
    prompt: 'Create a mockup of a book with this cover design.',
    prompt_ko: '이 표지 디자인으로 된 책의 목업을 만들어줘.',
  }
];
