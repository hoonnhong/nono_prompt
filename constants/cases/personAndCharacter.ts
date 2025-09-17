/**
 * @file personAndCharacter.ts
 * @description '인물 & 캐릭터' 카테고리에 해당하는 예제 케이스 데이터 목록입니다.
 *              사람이나 캐릭터 생성, 변형, 스타일링 관련 사례를 포함합니다.
 */

import type { Case } from '../../types';

export const personAndCharacterCases: Case[] = [
  {
    id: 1,
    title: '일러스트를 피규어로',
    category: '인물 & 캐릭터',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1958539464994959715',
    inputImages: ['/images/cases/1/input0.jpg'],
    outputImage: '/images/cases/1/output0.jpg',
    prompt: 'turn this photo into a character figure. Behind it, place a box with the character\'s image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. set the scene indoors if possible',
    prompt_ko: '이 사진을 캐릭터 피규어로 만들어주세요. 뒤에는 캐릭터 이미지가 인쇄된 상자를 놓고, 컴퓨터 화면에는 블렌더 모델링 과정이 보이게 해주세요. 상자 앞에는 둥근 플라스틱 받침대를 놓고 그 위에 캐릭터 피규어를 세워주세요. 가능하면 실내 배경으로 설정해주세요.'
  },
  {
    id: 5,
    title: '시대를 초월한 내 모습',
    category: '인물 & 캐릭터',
    author: '@AmirMushich',
    sourceUrl: 'https://x.com/AmirMushich/status/1960810850224091439',
    inputImages: ['/images/cases/5/input.jpg'],
    outputImage: '/images/cases/5/output.jpg',
    prompt: 'Change the character\'s style to 1970\'s classical male style. Add long curly hair, long mustache, change the background to the iconic californian summer landscape. Don\'t change the character\'s face',
    prompt_ko: '캐릭터 스타일을 1970년대 클래식 남성 스타일로 바꿔주세요. 긴 곱슬머리와 긴 콧수염을 추가하고, 배경을 상징적인 캘리포니아 여름 풍경으로 변경해주세요. 캐릭터의 얼굴은 바꾸지 마세요.'
  },
  {
    id: 8,
    title: '손그림으로 캐릭터 포즈 제어',
    category: '인물 & 캐릭터',
    author: '@op7418',
    sourceUrl: 'https://x.com/op7418/status/1960536717242573181',
    inputImages: ['/images/cases/8/input1.jpg', '/images/cases/8/input2.jpg', '/images/cases/8/input3.jpg'],
    outputImage: '/images/cases/8/output.jpg',
    prompt: 'Have these two characters fight using the pose from Figure 3. Add appropriate visual backgrounds and scene interactions, Generated image ratio is 16:9',
    prompt_ko: '이 두 캐릭터가 세 번째 그림의 포즈를 사용하여 싸우게 해주세요. 적절한 시각적 배경과 장면 상호작용을 추가하고, 생성될 이미지 비율은 16:9로 해주세요.'
  },
  {
    id: 11,
    title: '애니메이션 캐릭터를 현실 코스어로',
    category: '인물 & 캐릭터',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1960946893971706306',
    inputImages: ['/images/cases/11/input.jpg'],
    outputImage: '/images/cases/11/output.jpg',
    prompt: 'Generate a photo of a girl cosplaying this illustration, with the background set at Comiket',
    prompt_ko: '이 일러스트를 코스프레하는 소녀의 사진을 생성해주세요. 배경은 코미케로 설정해주세요.'
  },
  {
    id: 12,
    title: '캐릭터 디자인 시트 생성',
    category: '인물 & 캐릭터',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1960669234276753542',
    inputImages: ['/images/cases/12/input.jpg'],
    outputImage: '/images/cases/12/output.jpg',
    prompt: 'Generate character design for me (Character Design)\n\nProportion design (different height comparisons, head-to-body ratio, etc.)\n\nThree views (front, side, back)\n\nExpression design (Expression Sheet)\n\nPose design (Pose Sheet)\n\nCostume design (Costume Design)',
    prompt_ko: '캐릭터 디자인을 생성해주세요 (캐릭터 디자인)\n\n비율 디자인 (다양한 키 비교, 신체 비율 등)\n\n삼면도 (앞, 옆, 뒤)\n\n표정 디자인 (표정 시트)\n\n포즈 디자인 (포즈 시트)\n\n의상 디자인 (의상 디자인)'
  },
  {
    id: 15,
    title: '다양한 헤어스타일 변경',
    category: '인물 & 캐릭터',
    author: '@balconychy',
    sourceUrl: 'https://x.com/balconychy/status/1960665038504779923',
    inputImages: ['/images/cases/15/input.jpg'],
    outputImage: '/images/cases/15/output.jpg',
    prompt: 'Generate avatars of this person with different hairstyles in a 3x3 grid format',
    prompt_ko: '이 인물의 다양한 헤어스타일을 3x3 그리드 형식의 아바타로 생성해주세요.'
  },
  {
    id: 21,
    title: 'OOTD 의상 체인지',
    category: '인물 & 캐릭터',
    author: '@302.AI',
    sourceUrl: 'https://medium.com/%40302.AI/google-nano-banana-vs-qwen-gpt-flux-topping-the-image-editing-leaderboard-96038b01bdcd',
    inputImages: ['/images/cases/21/input1.jpg', '/images/cases/21/input2.jpg'],
    outputImage: '/images/cases/21/output.jpg',
    prompt: 'Choose the person in Image 1 and dress them in all the clothing and accessories from Image 2. Shoot a series of realistic OOTD-style photos outdoors, using natural lighting, a stylish street style, and clear full-body shots. Keep the person\'s identity and pose from Image 1, but show the complete outfit and accessories from Image 2 in a cohesive, stylish way.',
    prompt_ko: '이미지 1의 인물을 선택하여 이미지 2의 모든 의류와 액세서리를 입혀주세요. 자연광, 스타일리시한 스트리트 스타일, 선명한 전신 샷을 사용하여 야외에서 현실적인 OOTD 스타일 사진 시리즈를 촬영해주세요. 이미지 1의 인물 정체성과 포즈는 유지하되, 이미지 2의 전체 의상과 액세서리를 통일성 있고 스타일리시하게 보여주세요.'
  },
   {
    id: 22,
    title: '캐릭터 의상 변경',
    category: '인물 & 캐릭터',
    author: '@skirano',
    sourceUrl: 'https://x.com/skirano/status/1960343968320737397',
    inputImages: ['/images/cases/22/input1.jpg', '/images/cases/22/input2.jpg'],
    outputImage: '/images/cases/22/output.jpg',
    prompt: 'Replace the person\'s clothing in the input image with the target clothing shown in the reference image. Keep the person\'s pose, facial expression, background, and overall realism unchanged. Make the new outfit look natural, well-fitted, and consistent with lighting and shadows. Do not alter the person\'s identity or the environment — only change the clothes.',
    prompt_ko: '입력 이미지 속 인물의 옷을 참조 이미지에 나온 옷으로 바꿔주세요. 인물의 포즈, 표정, 배경, 전반적인 사실감은 그대로 유지해주세요. 새 의상이 자연스럽고 잘 맞으며 조명 및 그림자와 일관되게 보이도록 해주세요. 인물의 정체성이나 환경은 바꾸지 말고 옷만 변경해주세요.'
  },
  {
    id: 25,
    title: '캐릭터 포즈 수정',
    category: '인물 & 캐릭터',
    author: '@arrakis_ai',
    sourceUrl: 'https://x.com/arrakis_ai/status/1955901155726516652',
    inputImages: ['/images/cases/25/input.jpg'],
    outputImage: '/images/cases/25/output.jpg',
    prompt: 'Have the person in the picture look straight ahead',
    prompt_ko: '사진 속 인물이 정면을 바라보게 해주세요.'
  },
  {
    id: 26,
    title: '라인 드로잉으로 이미지 생성',
    category: '인물 & 캐릭터',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1961024423596872184',
    inputImages: ['/images/cases/26/input1.jpg', '/images/cases/26/input2.jpg'],
    outputImage: '/images/cases/26/output.jpg',
    prompt: 'Change the pose of the person in Figure 1 to that of Figure 2, and shoot in a professional studio',
    prompt_ko: '그림 1의 인물 포즈를 그림 2의 포즈로 바꾸고, 전문 스튜디오에서 촬영해주세요.'
  },
  {
    id: 34,
    title: '참조 이미지로 표정 제어',
    category: '인물 & 캐릭터',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1963156830458085674',
    inputImages: ['/images/cases/34/input1.jpg', '/images/cases/34/input2.jpg'],
    outputImage: '/images/cases/34/case.jpg',
    prompt: 'Character reference from Image 1 / Change to the expression from Image 2',
    prompt_ko: '이미지 1의 캐릭터를 참고하여 이미지 2의 표정으로 바꿔주세요.'
  },
  {
    id: 36,
    title: '가상 메이크업 체험',
    category: '인물 & 캐릭터',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1962778069242126824',
    inputImages: ['/images/cases/36/input1.jpg', '/images/cases/36/input2.jpg'],
    outputImage: '/images/cases/36/case.jpg',
    prompt: 'Apply the makeup from Image 2 to the character in Image 1, while maintaining the pose from Image 1.',
    prompt_ko: '이미지 1의 포즈를 유지하면서, 이미지 2의 메이크업을 이미지 1의 캐릭터에게 적용해주세요.'
  },
  {
    id: 40,
    title: '다양한 캐릭터 포즈 생성',
    category: '인물 & 캐릭터',
    author: '@tapehead_Lab',
    sourceUrl: 'https://x.com/tapehead_Lab/status/1960878455299694639',
    inputImages: ['/images/cases/40/input.jpg'],
    outputImage: '/images/cases/40/case.jpg',
    prompt: 'Please create a pose sheet for this illustration, making various poses!',
    prompt_ko: '이 일러스트를 위한 포즈 시트를 만들어 다양한 포즈를 취하게 해주세요!'
  },
  {
    id: 43,
    title: '캐릭터 얼굴형 제어',
    category: '인물 & 캐릭터',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1961802767493939632',
    inputImages: ['/images/cases/43/input1.jpg', '/images/cases/43/input2.jpg'],
    outputImage: '/images/cases/43/case.jpg',
    prompt: 'Design the character from Image 1 as a chibi version according to the face shape from Image 2',
    prompt_ko: '이미지 2의 얼굴형에 맞춰 이미지 1의 캐릭터를 치비 버전으로 디자인해주세요.'
  },
  {
    id: 63,
    title: '증명사진 만들기',
    category: '인물 & 캐릭터',
    author: '@songguoxiansen',
    sourceUrl: 'https://x.com/songguoxiansen/status/1963602241610551609',
    inputImages: ['/images/cases/63/input.jpg'],
    outputImage: '/images/cases/63/output.jpg',
    prompt: 'Crop the head and create a 2-inch ID photo with: 1. Blue background 2. Professional business attire 3. Frontal face 4. Slight smile',
    prompt_ko: '머리를 잘라 2인치 증명사진을 만들어주세요: 1. 파란색 배경 2. 전문적인 비즈니스 복장 3. 정면 얼굴 4. 살짝 미소'
  },
  {
    id: 70,
    title: '거대 피규어와 비계',
    category: '인물 & 캐릭터',
    author: '@songguoxiansen',
    sourceUrl: 'https://x.com/songguoxiansen/status/1965960484684968234',
    inputImages: ['/images/cases/70/input.png'],
    outputImage: '/images/cases/70/output.png',
    prompt: 'A hyper-realistic 3D render of the person in the image standing and taking a selfie. The giant figure is surrounded by massive scaffolding, with many tiny construction workers working on it. The scene is set in a city square, surrounded by modern buildings, moving vehicles (cars, buses), pedestrians, and a bright clear blue sky. The overall details are rich, presenting a photo-realistic texture with cinematic lighting effects.',
    prompt_ko: '이미지 속 인물이 서서 셀카를 찍는 모습을 초현실적인 3D 렌더링으로 표현해주세요. 거대한 피규어는 거대한 비계로 둘러싸여 있고, 많은 작은 건설 노동자들이 작업하고 있습니다. 배경은 현대적인 건물, 움직이는 차량(자동차, 버스), 보행자, 밝고 맑은 푸른 하늘로 둘러싸인 도시 광장입니다. 전반적인 디테일이 풍부하며, 영화 같은 조명 효과와 함께 사실적인 질감을 보여줍니다.'
  },
  {
    id: 77,
    title: '캐릭터 이모티콘 팩 생성',
    category: '인물 & 캐릭터',
    author: '@vista8',
    sourceUrl: 'https://x.com/vista8/status/1966164427243458977',
    inputImages: ['/images/cases/77/input1.png', '/images/cases/77/input2.png'],
    outputImage: '/images/cases/77/output.png',
    prompt: 'Using the character from Image 2, generate 9 emoji stickers based on various poses from Image 1.',
    prompt_ko: '이미지 2의 캐릭터를 사용하여 이미지 1의 다양한 포즈를 기반으로 9개의 이모티콘 스티커를 생성해주세요.'
  },
  {
    id: 81,
    title: '해적 현상수배 포스터',
    category: '인물 & 캐릭터',
    author: '@AI_Kei75',
    sourceUrl: 'https://x.com/old_pgmrs_will/status/1966053092371444029',
    inputImages: ['/images/cases/81/input.png'],
    outputImage: '/images/cases/81/output.png',
    prompt: 'Using the original image, recreate a pirate\'s wanted poster drawn on parchment. Brown monochrome, with the texture of aged parchment. Retain the style and character design of the original image down to the smallest detail, and paste it large at the top of the wanted poster. A close-up of the face. Have the character wear a pirate hat. Write the bounty amount at the bottom of the poster. The bounty amount will be random, and a fictitious currency unit will be used. Below the bounty amount, write the crime in small letters. Use a fictitious language. English or Chinese characters may not be used.',
    prompt_ko: '원본 이미지를 사용하여 양피지에 그린 해적의 현상수배 포스터를 재현해주세요. 갈색 모노크롬으로, 오래된 양피지의 질감을 살려주세요. 원본 이미지의 스타일과 캐릭터 디자인을 아주 작은 디테일까지 유지하고, 현상수배 포스터 상단에 크게 붙여주세요. 얼굴 클로즈업. 캐릭터에게 해적 모자를 씌워주세요. 포스터 하단에 현상금을 적어주세요. 현상금은 무작위이며, 가상의 화폐 단위를 사용합니다. 현상금 아래에는 작은 글씨로 죄목을 적어주세요. 가상의 언어를 사용하고, 영어나 한자는 사용하지 마세요.'
  },
  {
    id: 90,
    title: 'Vtuber가 되어보기',
    category: '인물 & 캐릭터',
    author: '@AI_Kei75',
    sourceUrl: 'https://x.com/AI_Kei75/status/1967490141578236329',
    inputImages: ['/images/cases/90/input.png'],
    outputImage: '/images/cases/90/output.png',
    prompt: 'Create a fictional Vtuber and their streaming screen using the original image. The Vtuber\'s hairstyle and clothing will be faithfully reproduced from the original image. The Vtuber image will be 2.5D-like, so it is not necessary to perfectly reproduce the style of the original image. A moderate sense of three-dimensionality is also necessary. The Vtuber\'s facial expression and pose may be changed from the original image. Have the Vtuber hold a game controller. Place only the Vtuber\'s upper body in the bottom right of the screen. Place the streaming screen of the game being played in the center of the screen. Place the chat screen on the left side of the screen. The screen ratio is set to a larger size for the game screen, and the upper half of the Vtuber\'s body is displayed smaller. The background of the original image is completely ignored, as well as the original image pose. Add a fictional streaming platform and browser UI to the top and bottom of the screen. The aspect ratio of the generated image is independent of that of the original image.',
    prompt_ko: '원본 이미지를 사용하여 가상의 Vtuber와 방송 화면을 만들어주세요. Vtuber의 헤어스타일과 의상은 원본 이미지를 충실히 재현합니다. Vtuber 이미지는 2.5D 스타일이므로 원본 이미지 스타일을 완벽하게 재현할 필요는 없지만, 적당한 입체감이 필요합니다. Vtuber의 표정과 포즈는 원본 이미지와 다를 수 있습니다. Vtuber에게 게임 컨트롤러를 들려주세요. 화면 오른쪽 하단에는 Vtuber의 상반신만 배치하고, 중앙에는 플레이 중인 게임 화면을, 왼쪽에는 채팅 화면을 배치합니다. 화면 비율은 게임 화면을 더 크게 설정하고 Vtuber의 상반신은 작게 표시합니다. 원본 이미지의 배경과 포즈는 완전히 무시합니다. 화면 상단과 하단에 가상의 스트리밍 플랫폼과 브라우저 UI를 추가해주세요. 생성된 이미지의 가로세로 비율은 원본 이미지와 무관합니다.'
  },
  {
    id: 97,
    title: '귀여운 니트 인형',
    category: '인물 & 캐릭터',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1921148024861938077',
    inputImages: ['/images/cases/97/input.png'],
    outputImage: '/images/cases/97/output.png',
    prompt: 'A close-up, professionally composed photograph showcasing a hand-crocheted yarn doll gently cradled by two hands. The doll has a rounded shape, featuring the cute chibi image of the character in the image, with vivid contrasting colors and rich details.',
    prompt_ko: '손으로 뜬 뜨개질 인형을 두 손으로 부드럽게 감싸고 있는 전문적으로 구성된 클로즈업 사진입니다. 인형은 둥근 모양이며, 이미지 속 캐릭터의 귀여운 치비 이미지를 특징으로 하고, 생생한 대조 색상과 풍부한 디테일을 가지고 있습니다.'
  },
  {
    id: 99,
    title: '흑백 인물 사진',
    category: '인물 & 캐릭터',
    author: '@ZHO_ZHO_ZHO',
    sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1922150692145283299',
    inputImages: [],
    outputImage: '/images/cases/99/harry-potter-black-white-portrait-art.png',
    prompt: 'A high-resolution black and white portrait artwork, in an editorial and fine art photography style. The background features a soft gradient, transitioning from mid-gray to almost pure white, creating a sense of depth and tranquility. Fine film grain adds a tactile, analog-like softness to the image, reminiscent of classic black and white photography. On the right side of the frame, a blurred yet striking face of Harry Potter subtly emerges from the shadows, not in a traditional pose, but as if caught in a moment of thought or breath. Only a part of his face is visible: perhaps an eye, a cheekbone, the contour of his lips, evoking a sense of mystery, intimacy, and elegance. His features are delicate yet profound, exuding a melancholic and poetic beauty without being overly dramatic. A gentle, directional light, softly diffused, caresses the curve of his cheek or glints in his eye—this is the emotional core of the image. The rest of the composition is dominated by ample negative space, intentionally kept simple, allowing the image to breathe. There are no texts, no logos in the image—only an interplay of light, shadow, and emotion. The overall atmosphere is abstract yet deeply human, like a fleeting glance or a half-remembered dream: intimate, timeless, and poignantly beautiful.',
    prompt_ko: '편집 및 미술 사진 스타일의 고해상도 흑백 인물 사진 작품입니다. 배경은 중간 회색에서 거의 순수한 흰색으로 부드럽게 전환되는 그라데이션으로 깊이와 평온함을 만듭니다. 고운 필름 그레인은 클래식 흑백 사진을 연상시키는 촉각적이고 아날로그적인 부드러움을 더합니다. 프레임 오른쪽에는 해리포터의 흐릿하지만 인상적인 얼굴이 그림자 속에서 미묘하게 나타납니다. 전통적인 포즈가 아니라 생각이나 숨을 고르는 순간처럼 포착되었습니다. 눈, 광대뼈, 입술 윤곽 등 얼굴의 일부만 보여 신비감, 친밀함, 우아함을 자아냅니다. 그의 이목구비는 섬세하면서도 깊이가 있으며, 지나치게 극적이지 않으면서도 우울하고 시적인 아름다움을 발산합니다. 부드럽게 확산된 은은한 방향성 조명이 그의 뺨 곡선을 어루만지거나 눈에서 반짝이며 이미지의 감성적 핵심을 이룹니다. 나머지 구성은 의도적으로 단순하게 유지된 넓은 여백이 지배하여 이미지가 숨 쉴 공간을 줍니다. 텍스트나 로고 없이 오직 빛, 그림자, 감정의 상호작용만 존재합니다. 전체적인 분위기는 추상적이면서도 깊이 인간적이며, 스쳐 지나가는 시선이나 반쯤 기억나는 꿈처럼 친밀하고 시대를 초월하며 애틋하게 아름답습니다.'
  },
  {
    id: 116,
    title: '액션 피규어와 실제 인물 동시 프레임',
    category: '인물 & 캐릭터',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1920994118580183316',
    inputImages: [],
    outputImage: '/images/cases/116/action_figure_and_real_person_in_frame.png',
    prompt: 'In a casual, everyday style as if shot on a mobile phone, an anime figure of [Jackie Chan] is placed on a desk, striking an exaggerated and cool pose, fully equipped. Simultaneously, the corresponding real-life person also appears in the frame, striking a similar pose to the figure, creating an interesting visual contrast with the figure and the real person in the same frame. The overall composition is harmonious and natural, delivering a warm and vibrant, true-to-life visual experience.',
    prompt_ko: '마치 휴대폰으로 찍은 듯한 평범하고 일상적인 스타일로, [성룡]의 애니메이션 피규어가 책상 위에 놓여 과장되고 멋진 포즈를 취하고 있습니다. 동시에, 실제 인물도 프레임에 등장하여 피규어와 비슷한 포즈를 취하며 피규어와 실제 인물 간의 흥미로운 시각적 대비를 만듭니다. 전체적인 구성은 조화롭고 자연스러우며, 따뜻하고 생동감 넘치는 현실적인 시각적 경험을 제공합니다.'
  },
  {
    id: 117,
    title: '치비 캐릭터 스티커 팩',
    category: '인물 & 캐릭터',
    author: '@leon_yuan2001',
    sourceUrl: 'https://x.com/leon_yuan2001/status/1923712069209293014',
    inputImages: ['/images/cases/117/input.png'],
    outputImage: '/images/cases/117/chibi_character_sticker_pack.png',
    prompt: 'Please create a set of 9 Chibi stickers featuring [the character in the reference image], arranged in a 3x3 grid. Design requirements: - Transparent background. - 1:1 square aspect ratio. - Consistent Chibi Ghibli cartoon style with vibrant colors. - Each sticker must have a unique action, expression, and theme, reflecting diverse emotions like "sassy, mischievous, cute, frantic" (e.g., rolling eyes, laughing hysterically on the floor, soul leaving body, petrified, throwing money, foodie mode, social anxiety attack). Incorporate elements related to office workers and internet memes. - Each character depiction must be complete, with no missing parts. - Each sticker must have a uniform white outline, giving it a sticker-like appearance. - No extraneous or detached elements in the image. - Strictly no text, or ensure any text is 100% accurate (no text preferred).',
    prompt_ko: '[참고 이미지 속 캐릭터]를 주인공으로 한 9개의 치비 스티커 세트를 3x3 격자로 만들어주세요. 디자인 요구사항: - 투명 배경. - 1:1 정사각형 비율. - 일관된 치비 지브리 카툰 스타일과 생생한 색상. - 각 스티커는 "건방진, 장난기 많은, 귀여운, 정신없는" 등 다양한 감정을 반영하는 독특한 동작, 표정, 테마를 가져야 합니다(예: 눈알 굴리기, 바닥에서 미친 듯이 웃기, 영혼 이탈, 석화, 돈 던지기, 먹방 모드, 사회 불안 발작). 직장인 및 인터넷 밈과 관련된 요소를 포함해주세요. - 각 캐릭터 묘사는 완전해야 하며 빠진 부분이 없어야 합니다. - 각 스티커는 스티커처럼 보이도록 균일한 흰색 윤곽선을 가져야 합니다. - 이미지에 불필요하거나 분리된 요소가 없어야 합니다. - 텍스트는 절대 넣지 마시거나, 100% 정확해야 합니다(텍스트 없는 것을 선호).'
  },
  {
    id: 118,
    title: '3D 치비 커플 제안 장면',
    category: '인물 & 캐릭터',
    author: '@balconychy',
    sourceUrl: 'https://x.com/balconychy/status/1909417750587486469',
    inputImages: ['/images/cases/118/input.jpg'],
    outputImage: '/images/cases/118/example_proposal_scene_q_realistic.png',
    prompt: 'Transform the two people in the photo into chibi-style 3D cartoon characters. Change the scene to a proposal setting, with a soft pastel-colored floral arch in the background. Use romantic tones for the overall background. Rose petals are scattered on the ground. While the characters are rendered in cute chibi 3D style, the environment—including the arch, lighting, and textures—should be realistic and photorealistic.',
    prompt_ko: '사진 속 두 사람을 치비 스타일의 3D 만화 캐릭터로 변신시켜 주세요. 장면을 프로포즈 설정으로 변경하고, 배경에는 부드러운 파스텔 톤의 꽃 아치를 배치해주세요. 전체 배경에 로맨틱한 톤을 사용하고, 바닥에는 장미 꽃잎을 흩뿌려주세요. 캐릭터는 귀여운 치비 3D 스타일로 렌더링하되, 아치, 조명, 텍스처를 포함한 환경은 사실적이고 포토리얼리스틱해야 합니다.'
  },
  {
    id: 121,
    title: '3D 치비 중국 결혼식 장면',
    category: '인물 & 캐릭터',
    author: '@balconychy',
    sourceUrl: 'https://x.com/balconychy/status/1909418699150237917',
    inputImages: ['/images/cases/121/input.jpg'],
    outputImage: '/images/cases/121/example_q_chinese_wedding.png',
    prompt: 'Transform the two people in the photo into chibi-style 3D cartoon characters, dressed in traditional Chinese wedding attire. The overall theme is a festive red Chinese-style wedding. The background features a decorative “囍” (double happiness) paper-cut pattern in a classic folk style. Clothing (realistic texture, traditional details): Male: Wearing a red changpao and magua (traditional robe and jacket) embroidered with golden dragon motifs, symbolizing nobility and grandeur. A large red flower is tied on his chest, representing celebration and good fortune. Female: Dressed in a red xiuhe wedding gown adorned with exquisite golden floral and phoenix embroidery, showcasing elegance and luxury. She wears delicate floral hair ornaments to enhance her gentle and graceful appearance. Headwear: Male: A traditional red zhuangyuan (scholar) hat with golden patterns and a refined golden ornament at the top, exuding classic scholarly dignity. Female: A phoenix crown adorned with a central red flower, gold 3D decorative elements, and hanging tassels—luxurious and full of classical charm. This image should reflect the joy and blessing of a traditional Chinese wedding, with realistic textures for costumes and accessories, combined with stylized 3D chibi characters.',
    prompt_ko: '사진 속 두 사람을 전통 중국 결혼 예복을 입은 치비 스타일 3D 만화 캐릭터로 변신시켜 주세요. 전체 테마는 축제 분위기의 붉은 중국식 결혼식입니다. 배경에는 고전 민속 스타일의 장식적인 "囍"(쌍희) 종이 오리기 패턴이 있습니다. 의상 (사실적인 질감, 전통적인 디테일): 남성: 금색 용 무늬가 수놓아진 붉은 창파오와 마과(전통 예복과 조끼)를 입고 고귀함과 웅장함을 상징합니다. 가슴에는 축하와 행운을 나타내는 큰 붉은 꽃이 묶여 있습니다. 여성: 정교한 금색 꽃과 봉황 자수가 장식된 붉은 슈화 웨딩드레스를 입고 우아함과 고급스러움을 보여줍니다. 섬세한 꽃 머리 장식으로 부드럽고 우아한 모습을 더합니다. 머리 장식: 남성: 금색 패턴과 세련된 금색 장식이 달린 전통 붉은 장원 모자로 고전적인 학자의 위엄을 풍깁니다. 여성: 중앙에 붉은 꽃, 금색 3D 장식 요소, 늘어뜨린 술이 달린 봉황관으로 고급스럽고 고전적인 매력이 가득합니다. 이 이미지는 의상과 액세서리의 사실적인 질감과 스타일화된 3D 치비 캐릭터를 결합하여 전통 중국 결혼식의 기쁨과 축복을 반영해야 합니다.'
  },
  {
    id: 122,
    title: '포털을 통과하는 캐릭터',
    category: '인물 & 캐릭터',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1908910838636765204',
    inputImages: ['/images/cases/122/input.jpg'],
    outputImage: '/images/cases/122/example_portal_crossing_handhold.png',
    prompt: 'A 3D chibi-style version of the person in the photo is stepping through a glowing portal, reaching out and holding the viewer’s hand. As the character pulls the viewer forward, they turn back with a dynamic glance, inviting the viewer into their world. Behind the portal is the viewer’s real-life environment: a typical programmer’s study with a desk, monitor, and laptop, rendered in realistic detail. Inside the portal lies the character’s 3D chibi world, inspired by the photo, with a cool blue color scheme that sharply contrasts with the real-world surroundings. The portal itself is a perfectly elliptical frame glowing with mysterious blue and purple light, positioned at the center of the image as a gateway between the two worlds. The scene is captured from a third-person perspective, clearly showing the viewer’s hand being pulled into the character’s world. Use a 2:3 aspect ratio.',
    prompt_ko: '사진 속 인물의 3D 치비 스타일 버전이 빛나는 포털을 통과하며 시청자의 손을 잡고 있습니다. 캐릭터가 시청자를 앞으로 당기면서 역동적인 시선으로 뒤를 돌아보며 시청자를 자신의 세계로 초대합니다. 포털 뒤에는 책상, 모니터, 노트북이 있는 전형적인 프로그래머의 서재가 사실적인 디테일로 렌더링되어 있습니다. 포털 안에는 사진에서 영감을 받은 캐릭터의 3D 치비 세계가 펼쳐져 있으며, 현실 세계와 극명한 대조를 이루는 시원한 파란색 색조를 띠고 있습니다. 포털 자체는 신비로운 파란색과 보라색 빛으로 빛나는 완벽한 타원형 프레임으로, 두 세계 사이의 관문으로 이미지 중앙에 위치합니다. 이 장면은 시청자의 손이 캐릭터의 세계로 끌려 들어가는 모습을 명확하게 보여주는 3인칭 시점으로 촬영되었습니다. 2:3 종횡비를 사용하세요.'
  },
  {
    id: 125,
    title: 'Q 버전 이모티콘 스티커 팩 만들기',
    category: '인물 & 캐릭터',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1909800530739679488',
    inputImages: ['/images/cases/125/input.jpg'],
    outputImage: '/images/cases/125/example_chibi_emoji_pack.png',
    prompt: 'Create a brand-new set of chibi-style stickers featuring the user as the main character, with six unique poses: 1. Making a playful peace sign with both hands and winking. 2. Tearful eyes and slightly trembling lips, showing a cute crying expression. 3. Arms wide open in a warm, enthusiastic hug pose. 4. Lying on their side asleep, resting on a tiny pillow with a sweet smile. 5. Pointing forward with confidence, surrounded by shining visual effects. 6. Blowing a kiss, with heart symbols floating around. Maintain the chibi aesthetic: – Exaggerated, expressive big eyes – Soft facial lines – Playful, short black hairstyle – A white outfit with a bold neckline design. Background: Vibrant red with star or colorful confetti elements for decoration. Leave some clean white space around each sticker. Aspect ratio: 9:16',
    prompt_ko: '사용자를 주인공으로 한 새로운 치비 스타일 스티커 세트를 만들어 주세요. 6가지 독특한 포즈: 1. 양손으로 장난스러운 브이 포즈를 취하며 윙크하기. 2. 눈물이 그렁그렁하고 입술이 살짝 떨리는 귀여운 우는 표정. 3. 따뜻하고 열정적인 포옹 자세로 두 팔을 활짝 벌리기. 4. 작은 베개를 베고 옆으로 누워 달콤한 미소를 지으며 잠자기. 5. 빛나는 시각 효과에 둘러싸여 자신감 있게 앞으로 손가락질하기. 6. 하트 심볼이 떠다니는 가운데 키스를 날리기. 치비 스타일 유지: – 과장되고 표현력 있는 큰 눈 – 부드러운 얼굴 선 – 장난기 있는 짧은 검은 머리 – 대담한 네크라인 디자인의 흰색 의상. 배경: 별이나 화려한 색종이 조각으로 장식된 생생한 빨간색. 각 스티커 주위에 깨끗한 흰색 공간을 남겨 주세요. 종횡비: 9:16'
  },
  {
    id: 133,
    title: '3D Q-버전 커플 스노우 글로브',
    category: '인물 & 캐릭터',
    author: '@balconychy',
    sourceUrl: 'https://x.com/balconychy/status/1909908568129655248',
    inputImages: ['/images/cases/133/input.jpg'],
    outputImage: '/images/cases/133/example_3d_q_snowglobe_couple.png',
    prompt: 'Transform the person in the attached image into a snow globe scene. Overall environment: The snow globe is placed on a tabletop by the window, with a blurred, warm-toned background. Sunlight passes through the globe, casting golden sparkles that gently illuminate the surrounding darkness. Inside the globe: The characters are in a cute chibi-style 3D design, gazing at each other with eyes full of love.',
    prompt_ko: '첨부된 이미지 속 인물을 스노우 글로브 장면으로 변환해주세요. 전체적인 환경: 스노우 글로브는 창가 탁자 위에 놓여 있으며, 배경은 흐릿하고 따뜻한 톤입니다. 햇빛이 글로브를 통과하며 금빛 반짝임을 만들어 주변의 어둠을 부드럽게 비춥니다. 글로브 내부: 캐릭터들은 사랑이 가득한 눈으로 서로를 바라보는 귀여운 치비 스타일 3D 디자인입니다.'
  },
  {
    id: 134,
    title: '가족 웨딩 사진 (Q-버전)',
    category: '인물 & 캐릭터',
    author: '@balconychy',
    sourceUrl: 'https://x.com/balconychy/status/1909426314643222595',
    inputImages: ['/images/cases/134/input.jpg'],
    outputImage: '/images/cases/134/example_family_wedding_photo_q.png',
    prompt: 'Transform the people in the photo into chibi-style 3D characters. The parents are dressed in Western wedding attire — the father in a formal suit, the mother in a wedding gown. The child is a beautiful flower girl holding a bouquet. The background features a colorful floral arch. The characters are in 3D chibi style, while the environment is photorealistic. The entire scene is placed inside a photo frame.',
    prompt_ko: '사진 속 인물들을 치비 스타일 3D 캐릭터로 변신시켜 주세요. 부모님은 서양식 웨딩 복장을 하고 있습니다 — 아버지는 정장을, 어머니는 웨딩드레스를 입고 있습니다. 아이는 부케를 든 아름다운 화동입니다. 배경에는 화려한 꽃 아치가 있습니다. 캐릭터는 3D 치비 스타일이지만, 환경은 사실적입니다. 전체 장면은 사진 액자 안에 배치됩니다.'
  },
  {
    id: 144,
    title: '3D 치비 스타일 대학 의인화 마스코트',
    category: '인물 & 캐릭터',
    author: '@dotey',
    sourceUrl: 'https://x.com/dotey/status/1911988003729203648',
    inputImages: [],
    outputImage: '/images/cases/144/example_university_mascot_npu.png',
    prompt: 'Create a personified 3D chibi-style anime girl character representing {Northwestern Polytechnical University}, embodying the school’s distinctive strengths in {aeronautics, astronautics, and marine engineering}.',
    prompt_ko: '{서북공업대학교}를 대표하는 의인화된 3D 치비 스타일 애니메이션 소녀 캐릭터를 만들어 주세요. 이 캐릭터는 {항공, 우주, 해양 공학} 분야에서 학교의 독특한 강점을 구현해야 합니다.'
  },
  {
    id: 145,
    title: 'RPG 스타일 캐릭터 카드 만들기',
    category: '인물 & 캐릭터',
    author: '@berryxia_ai',
    sourceUrl: 'https://x.com/berryxia_ai/status/1911334046724165905',
    inputImages: ['/images/cases/145/input.jpg'],
    outputImage: '/images/cases/145/example_rpg_card_designer.png',
    prompt: 'Create a digital character card in RPG collectible style. The subject is a {Designer}, standing confidently with tools or symbols relevant to their job. Render it in 3D cartoon style, soft lighting, vivid personality. Include skill bars or stats like [Creativity +10], [UI/UX +8]. Add a title banner on top and a nameplate on the bottom. Frame the card with clean edges like a real figure box. Make the background fit the profession\'s theme. Colors: warm highlights, profession-matching hues.',
    prompt_ko: 'RPG 수집형 스타일의 디지털 캐릭터 카드를 만들어 주세요. 주제는 자신의 직업과 관련된 도구나 상징을 들고 자신감 있게 서 있는 {디자이너}입니다. 3D 만화 스타일, 부드러운 조명, 생생한 개성으로 렌더링해주세요. [창의력 +10], [UI/UX +8]과 같은 스킬 바 또는 능력치를 포함해주세요. 상단에는 타이틀 배너를, 하단에는 이름표를 추가해주세요. 실제 피규어 상자처럼 깔끔한 가장자리로 카드를 프레임 처리해주세요. 배경은 직업의 테마에 맞게 만들어주세요. 색상: 따뜻한 하이라이트, 직업에 맞는 색조.'
  },
];
