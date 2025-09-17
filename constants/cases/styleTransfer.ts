/**
 * @file styleTransfer.ts
 * @description '스타일 변환' 카테고리에 대한 예제 케이스 데이터입니다.
 */
import type { Case } from '../../types';

export const styleTransferCases: Case[] = [
    {
        id: 13,
        title: '컬러 팔레트로 라인 아트 채색하기',
        category: '스타일 변환',
        author: '@ZHO_ZHO_ZHO',
        sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1960652077891510752',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case13/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case13/output.jpg',
        prompt: 'Accurately use the color palette from Figure 2 to color the character in Figure 1',
        prompt_ko: '그림 2의 색상 팔레트를 정확하게 사용하여 그림 1의 캐릭터를 채색해주세요.'
    },
    {
        id: 26,
        title: '라인 드로잉으로 이미지 생성',
        category: '스타일 변환',
        author: '@ZHO_ZHO_ZHO',
        sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1961024423596872184',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case26/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case26/output.jpg',
        prompt: 'Change the pose of the person in Figure 1 to that of Figure 2, and shoot in a professional studio',
        prompt_ko: '그림 1에 있는 사람의 포즈를 그림 2의 포즈로 바꾸고, 전문 스튜디오에서 촬영해주세요.'
    },
    {
        id: 42,
        title: '필터/재질 오버레이',
        category: '스타일 변환',
        author: '@ZHO_ZHO_ZHO',
        sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1962520937011855793',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case42/case.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case42/case.jpg',
        prompt: 'Overlay the [glass] effect from Image 2 onto the photo in Image 1',
        prompt_ko: '이미지 2의 [유리] 효과를 이미지 1의 사진에 겹쳐주세요.'
    },
    {
        id: 57,
        title: '만화 스타일 변환',
        category: '스타일 변환',
        author: '@nobisiro_2023',
        sourceUrl: 'https://x.com/nobisiro_2023/status/1961231347986698371',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case57/input.jpg'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case57/output.jpg',
        prompt: 'Convert the input photo into a black-and-white manga-style line drawing.',
        prompt_ko: '입력 사진을 흑백 만화 스타일의 선화로 변환해주세요.'
    },
    {
        id: 84,
        title: '선화를 낙서 그림으로',
        category: '스타일 변환',
        author: '@hAru_mAki_ch',
        sourceUrl: 'https://x.com/hAru_mAki_ch/status/1966877088365113722',
        inputImages: ['https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case84/input.png'],
        outputImage: 'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/case84/output.png',
        prompt: 'Make the uploaded picture book look as if it was drawn by a five-year-old child.',
        prompt_ko: '업로드된 그림책을 다섯 살 아이가 그린 것처럼 만들어주세요.'
    },
    {
        id: 110,
        title: '지브리 스타일',
        category: '스타일 변환',
        author: 'AnimeAI',
        sourceUrl: 'https://animeai.online/#demo-gallery',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/5/ghibli-style-mona-lisa.png',
        prompt: "Redraw this photo in Ghibli style",
        prompt_ko: "이 사진을 지브리 스타일로 다시 그려주세요."
    },
    {
        id: 125,
        title: 'PS2 게임 커버 (GTA x 슈렉)',
        category: '스타일 변환',
        author: '@dotey',
        sourceUrl: 'https://x.com/dotey/status/1904978767090524372',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/11/example_ps2_gta_shrek.png',
        prompt: `Can you create a PS2 video game case of "Grand Theft Auto: Far Far Away" a GTA based in the Shrek Universe.`,
        prompt_ko: `슈렉 세계관을 기반으로 한 GTA 게임, 'Grand Theft Auto: 머나먼 왕국'의 PS2 비디오 게임 케이스를 만들어 주실 수 있나요?`
    },
    {
        id: 131,
        title: '픽사 3D 스타일',
        category: '스타일 변환',
        author: 'AnimeAI',
        sourceUrl: 'https://animeai.online/#demo-gallery',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/18/pixar-style-godfather-scene.png',
        prompt: "Redraw this photo in Pixar 3D style",
        prompt_ko: "이 사진을 픽사 3D 스타일로 다시 그려주세요."
    },
    {
        id: 137,
        title: '플랫 스티커 디자인',
        category: '스타일 변환',
        author: '@ZHO_ZHO_ZHO',
        sourceUrl: 'https://x.com/ZHO_ZHO_ZHO/status/1908044836953108490',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/28/example_flat_sticker_pearl_earring.png',
        prompt: "Turn this photo into a chibi-style sticker illustration in a minimalist flat design.\n– Keep the character’s recognizable features\n– Use a cute, simplified aesthetic\n– The sticker should have a thick white border\n– The character should break out of the circular frame, adding a playful touch\n– The circular base should be a solid flat color (no 3D or gradients)\n– Background should be transparent\nThe overall style should be clean, modern, and visually appealing for use as a fun Q-version sticker.",
        prompt_ko: "이 사진을 미니멀리스트 플랫 디자인의 꼬마 스타일 스티커 일러스트로 바꿔주세요.\n– 캐릭터의 알아볼 수 있는 특징 유지\n– 귀엽고 단순화된 미학 사용\n– 스티커에는 두꺼운 흰색 테두리가 있어야 함\n– 캐릭터가 원형 프레임을 벗어나 장난스러운 느낌을 더해야 함\n– 원형 베이스는 단색 플랫 색상이어야 함 (3D나 그라데이션 없음)\n– 배경은 투명해야 함\n전체적인 스타일은 깨끗하고 현대적이며, 재미있는 Q-버전 스티커로 사용하기에 시각적으로 매력적이어야 합니다."
    },
    {
        id: 143,
        title: '애니메이션 스티커 컬렉션',
        category: '스타일 변환',
        author: '@richardchang',
        sourceUrl: 'https://x.com/richardchang/status/1909086122959139312',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/31/example_naruto_stickers.png',
        prompt: "Naruto stickers",
        prompt_ko: "나루토 스티커"
    },
    {
        id: 157,
        title: '복고풍 CRT 컴퓨터 부팅 화면',
        category: '스타일 변환',
        author: '@Gdgtify',
        sourceUrl: 'https://x.com/Gdgtify/status/1925176250626159053',
        inputImages: [],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/17/retro_crt_computer_boot_screen.png',
        prompt: "Retro CRT computer boot screen that resolves into ASCII-art of [shape or logo]",
        prompt_ko: "[모양 또는 로고]의 ASCII 아트로 해석되는 복고풍 CRT 컴퓨터 부팅 화면"
    },
    {
        id: 199,
        title: '반 고흐 스타일로 변환',
        category: '스타일 변환',
        author: 'Gemini',
        sourceUrl: '#',
        inputImages: ['https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/style_transfer/input_1.jpg'],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/style_transfer/output_1.jpg',
        prompt: 'Apply the style of Van Gogh\'s "The Starry Night" to this photo.',
        prompt_ko: '이 사진에 반 고흐의 "별이 빛나는 밤" 스타일을 적용해줘.',
    },
    {
        id: 200,
        title: '수채화 스타일로 변환',
        category: '스타일 변환',
        author: 'Gemini',
        sourceUrl: '#',
        inputImages: ['https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/style_transfer/input_2.jpg'],
        outputImage: 'https://raw.githubusercontent.com/jamez-bondos/awesome-gpt4o-images/main/cases/style_transfer/output_2.jpg',
        prompt: 'Convert this photo into a watercolor painting.',
        prompt_ko: '이 사진을 수채화 그림으로 변환해줘.',
    }
];
