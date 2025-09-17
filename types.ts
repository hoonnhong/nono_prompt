/**
 * @file types.ts
 * @description 애플리케이션 전체에서 사용되는 공통 TypeScript 타입과 인터페이스를 정의합니다.
 *              타입을 중앙에서 관리하여 일관성과 안정성을 높입니다.
 */

/**
 * @interface Case
 * @description 갤러리에 표시될 단일 예제 케이스의 데이터 구조를 정의합니다.
 */
export interface Case {
  id: number;          // 각 케이스의 고유 식별자
  title: string;       // 케이스 제목
  category: string;    // 케이스가 속한 카테고리 (예: '인물 & 캐릭터')
  author: string;      // 원본 예제 제작자
  sourceUrl: string;   // 원본 예제 출처 URL
  inputImages: string[]; // 입력 예시 이미지 파일 경로 배열
  outputImage: string; // 결과 예시 이미지 파일 경로
  prompt: string;      // 원본 영어 프롬프트
  prompt_ko: string;   // 번역된 한국어 프롬프트
}

/**
 * @interface UserImage
 * @description 사용자가 플레이그라운드에서 다루는 이미지의 상태를 정의합니다.
 *              초기 예제 이미지를 보여주고, 사용자가 새 이미지로 교체하면 그 정보를 저장합니다.
 */
export interface UserImage {
  url: string;        // 케이스에 포함된 원본 이미지 URL (초기값 및 고유 키로 사용)
  base64: string | null; // 사용자가 업로드한 이미지의 Base64 인코딩 데이터
  mimeType: string | null; // 업로드된 이미지의 MIME 타입 (예: 'image/jpeg')
}
