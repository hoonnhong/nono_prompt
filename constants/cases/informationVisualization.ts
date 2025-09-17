/**
 * @file informationVisualization.ts
 * @description '정보 시각화' 카테고리에 대한 예제 케이스 데이터입니다.
 */
import type { Case } from '../../types';

export const informationVisualizationCases: Case[] = [
    {
        id: 3,
        title: '실세계 AR 정보',
        category: '정보 시각화',
        author: '@bilawalsidhu',
        sourceUrl: 'https://x.com/bilawalsidhu/status/1960529167742853378',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case3/output.jpg',
        prompt: 'you are a location-based AR experience generator. highlight [point of interest] in this image and annotate relevant information about it.',
        prompt_ko: '당신은 위치 기반 AR 경험 생성기입니다. 이 이미지에서 [관심 지점]을 강조하고 관련 정보를 주석으로 달아주세요.'
    },
    {
        id: 14,
        title: '기사 인포그래픽',
        category: '정보 시각화',
        author: '@황건同學',
        sourceUrl: 'https://weibo.com/5648162302/5204549851155423?wm=3333_2001&from=10F8393010&sourcetype=weixin&s_trans=7836809604_5204549851155423&s_channel=4',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case14/output.jpg',
        prompt: 'Generate an infographic for the article content\nRequirements:\n1. Translate the content into English and extract key information from the article\n2. Keep the content in the image concise, only retaining the main title\n3. Use English text in the image\n4. Add rich and cute cartoon characters and elements',
        prompt_ko: '기사 내용을 위한 인포그래픽을 생성해주세요.\n요구사항:\n1. 내용을 영어로 번역하고 기사에서 핵심 정보를 추출해주세요.\n2. 이미지 내용은 간결하게 유지하고, 메인 제목만 남겨주세요.\n3. 이미지에 영어 텍스트를 사용해주세요.\n4. 풍부하고 귀여운 만화 캐릭터와 요소를 추가해주세요.'
    },
    {
        id: 16,
        title: '모델 주석 설명 다이어그램',
        category: '정보 시각화',
        author: '@berryxia_ai',
        sourceUrl: 'https://x.com/berryxia_ai/status/1960708465586004305',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case16/output.jpg',
        prompt: "Draw [3D human organ model display example heart] for academic presentation, with annotations and explanations, suitable for showcasing its principles and [each organ's] functions, very realistic, highly detailed, with extremely fine design.",
        prompt_ko: "학술 발표를 위해 [3D 인체 장기 모델 전시 예시 심장]을 그려주세요. 주석과 설명을 포함하고, 그 원리와 [각 장기의] 기능을 보여주기에 적합하며, 매우 사실적이고, 고도로 상세하며, 극도로 정교한 디자인이어야 합니다."
    },
    {
        id: 19,
        title: '수학 문제 추론',
        category: '정보 시각화',
        author: '@Gorden Sun',
        sourceUrl: 'https://www.xiaohongshu.com/explore/68ade0e7000000001d036677?note_flow_source=wechat&xsec_token=AB4tWI6xCrE2v5euckYXKCBlbQbA-YNoqI5iKKqqQwWpY=',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case19/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case19/output.jpg',
        prompt: 'Write the answer to the problem in the corresponding position based on the question',
        prompt_ko: '문제에 따라 해당하는 위치에 문제의 답을 작성해주세요.'
    },
    {
        id: 28,
        title: '지식 추론 이미지 생성',
        category: '정보 시각화',
        author: '@icreatelife',
        sourceUrl: 'https://x.com/icreatelife/status/1962998951948517428',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case28/output.jpg',
        prompt: 'Make me an infographic of 5 tallest buildings in the world / Make a colorful infographic of the sweetest things on Earth',
        prompt_ko: '세계에서 가장 높은 건물 5개의 인포그래픽을 만들어 주세요 / 지구상에서 가장 달콤한 것들의 다채로운 인포그래픽을 만들어 주세요'
    },
    {
        id: 48,
        title: '음식 칼로리 주석',
        category: '정보 시각화',
        author: '@icreatelife',
        sourceUrl: 'https://x.com/icreatelife/status/1963646757222715516',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case48/output.jpg',
        prompt: 'annotate this meal with names of food and calorie density and approximate calories',
        prompt_ko: '이 식사에 음식 이름과 칼로리 밀도, 대략적인 칼로리를 주석으로 달아주세요.'
    },
    {
        id: 76,
        title: '교육용 만화',
        category: '정보 시각화',
        author: '@op7418',
        sourceUrl: 'https://x.com/op7418/status/1961811274683310110',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case76/output.png',
        prompt: 'Help me generate multiple 16:9 doodle-style images to explain the concept of "futures" to middle school students. The images should have a consistent colorful, thick-pencil hand-drawn style, be rich in information, feature English text, use solid color backgrounds, have outlines around the cards, and include uniform titles, similar to a PowerPoint presentation.',
        prompt_ko: '중학생들에게 "선물(futures)" 개념을 설명하기 위해 여러 개의 16:9 비율의 낙서 스타일 이미지를 생성하는 것을 도와주세요. 이미지들은 일관된 다채롭고 두꺼운 연필 손그림 스타일이어야 하며, 정보가 풍부하고, 영어 텍스트를 포함하고, 단색 배경을 사용하며, 카드 주위에 테두리가 있고, 파워포인트 프레젠테이션과 유사하게 통일된 제목을 포함해야 합니다.'
    },
    {
        id: 145,
        title: '손으로 그린 인포그래픽 카드 (인식)',
        category: '정보 시각화',
        author: '@dotey',
        sourceUrl: 'https://x.com/dotey/status/1907903480678985784',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/34/example_hand_drawn_infographic_cognition.png',
        prompt: `Create a hand-drawn style infographic card in vertical 9:16 ratio. The card should have a clear theme, with a beige or off-white paper-textured background. The overall design should convey a rustic, friendly, and handmade aesthetic.\n\nAt the top of the card, feature a bold, eye-catching title in large Chinese cursive brush calligraphy using contrasting red and black colors. All text content should be in Chinese cursive script, and the layout should be divided into 2 to 4 clear sections. Each section expresses a core idea with brief and concise Chinese phrases. The cursive font should retain a smooth, rhythmic flow, remaining legible while carrying artistic appeal.\n\nThe card should include simple, playful hand-drawn illustrations or icons, such as figures or symbolic elements, to enhance visual interest and spark reader reflection or emotional resonance.\n\nThe overall layout should maintain visual balance, with ample white space reserved to ensure clarity, simplicity, and ease of reading and understanding.\n<h1><span style="color:red">“Cognition”</span> defines your ceiling  \n<span style="color:red">“Circle”</span> defines your opportunities</h1>  \n– You can’t earn money beyond your level of cognition,  \n– Nor encounter opportunities beyond your social circle.`,
        prompt_ko: `세로 9:16 비율의 손으로 그린 스타일 인포그래픽 카드를 만들어 주세요. 카드는 명확한 주제를 가져야 하며, 베이지색 또는 미색의 종이 질감 배경을 사용해야 합니다. 전체적인 디자인은 소박하고 친근하며 수제 느낌을 전달해야 합니다.\n\n카드 상단에는 대조적인 빨간색과 검은색을 사용한 크고 눈에 띄는 중국어 흘림체 붓글씨로 된 대담한 제목을 특징으로 합니다. 모든 텍스트 내용은 중국어 흘림체로 작성되어야 하며, 레이아웃은 2개에서 4개의 명확한 섹션으로 나누어져야 합니다. 각 섹션은 간결하고 명료한 중국어 구문으로 핵심 아이디어를 표현합니다. 흘림체 글꼴은 부드럽고 리드미컬한 흐름을 유지하면서도 읽기 쉽고 예술적 매력을 지녀야 합니다.\n\n카드에는 시각적 흥미를 높이고 독자의 성찰이나 감정적 공감을 불러일으키기 위해 인물이나 상징적 요소와 같은 단순하고 재미있는 손으로 그린 삽화나 아이콘이 포함되어야 합니다.\n\n전체적인 레이아웃은 시각적 균형을 유지해야 하며, 명확성, 단순성, 읽고 이해하기 쉬움을 보장하기 위해 충분한 여백이 확보되어야 합니다.\n<h1><span style="color:red">"인식"</span>이 당신의 한계를 정의하고\n<span style="color:red">"인맥"</span>이 당신의 기회를 정의합니다</h1>\n– 당신의 인식 수준을 넘어서는 돈을 벌 수 없으며,\n– 당신의 사회적 범위를 넘어서는 기회를 만날 수 없습니다.`
    },
    {
        id: 150,
        title: '손으로 그린 인포그래픽 카드',
        category: '정보 시각화',
        author: '@dotey',
        sourceUrl: 'https://x.com/dotey/status/1907870919852179850',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/38/example_hand_drawn_infographic.png',
        prompt: `Create a hand-drawn style infographic card in a 9:16 vertical format. The card should have a clear theme, with a beige or off-white paper-textured background. The overall design should reflect a simple, warm, and handmade aesthetic.\n\nAt the top of the card, use large, eye-catching brush-style Chinese cursive calligraphy in red and black for the title, creating strong visual contrast. All text should be in Chinese cursive script. The layout should be divided into 2 to 4 clear sections, each conveying a core idea through concise and refined Chinese phrases. The calligraphy should maintain a fluid, rhythmic style that is both legible and artistically expressive. Leave appropriate blank space around the text.\n\nThe card should be accented with simple and fun hand-drawn illustrations or icons — such as figures or symbolic elements — to enhance visual appeal and spark thought or emotional resonance. The overall layout should emphasize visual balance and include ample whitespace, ensuring the design is clean, clear, and easy to read.\n\n“Building a personal brand (IP) is long-term compounding.\nKeep updating daily, and results will come — because 99% of people can’t keep it up!”`,
        prompt_ko: `9:16 세로 형식의 손으로 그린 스타일 인포그래픽 카드를 만들어 주세요. 카드는 명확한 주제를 가져야 하며, 베이지색 또는 미색의 종이 질감 배경을 사용해야 합니다. 전체적인 디자인은 단순하고 따뜻하며 수제 느낌을 반영해야 합니다.\n\n카드 상단에는 제목에 빨간색과 검은색의 크고 눈에 띄는 붓글씨 스타일의 중국어 흘림체를 사용하여 강한 시각적 대비를 만듭니다. 모든 텍스트는 중국어 흘림체여야 합니다. 레이아웃은 2~4개의 명확한 섹션으로 나누어져야 하며, 각 섹션은 간결하고 세련된 중국어 구문을 통해 핵심 아이디어를 전달해야 합니다. 서예는 유동적이고 리드미컬한 스타일을 유지하면서도 읽기 쉽고 예술적으로 표현력이 있어야 합니다. 텍스트 주위에 적절한 여백을 남겨두세요.\n\n카드는 시각적 매력을 높이고 생각이나 감정적 공감을 불러일으키기 위해 인물이나 상징적 요소와 같은 단순하고 재미있는 손으로 그린 삽화나 아이콘으로 강조되어야 합니다. 전체적인 레이아웃은 시각적 균형을 강조하고 충분한 여백을 포함하여 디자인이 깨끗하고 명확하며 읽기 쉽도록 해야 합니다.\n\n"개인 브랜드(IP) 구축은 장기적인 복리입니다.\n매일 업데이트를 계속하면 결과가 나올 것입니다 — 99%의 사람들이 계속할 수 없기 때문입니다!"`
    },
    {
        id: 205,
        title: '복잡한 데이터 시각화',
        category: '정보 시각화',
        author: 'Gemini',
        sourceUrl: '#',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/infoviz/output_1.png',
        prompt: 'An infographic visualizing the global coffee trade routes in 2023, with data points on major exporters and importers. Use a clean, modern style.',
        prompt_ko: '2023년 글로벌 커피 무역 경로를 시각화한 인포그래픽, 주요 수출국과 수입국에 대한 데이터 포인트를 포함. 깔끔하고 현대적인 스타일 사용.',
    },
    {
        id: 206,
        title: '마인드맵 생성',
        category: '정보 시각화',
        author: 'Gemini',
        sourceUrl: '#',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/infoviz/output_2.png',
        prompt: 'Create a mind map about the benefits of remote work.',
        prompt_ko: '원격 근무의 장점에 대한 마인드맵을 만들어줘.',
    }
];
