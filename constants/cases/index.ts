/**
 * @file index.ts
 * @description `constants/cases` 디렉터리 내의 모든 카테고리별 예제 데이터 파일을
 *              하나로 모아서 `categorizedCases`라는 단일 객체로 내보내는 역할을 합니다.
 *              이를 통해 다른 컴포넌트에서는 이 파일 하나만 임포트하여 모든 데이터에 접근할 수 있습니다. (배럴 파일 패턴)
 */

import { personAndCharacterCases } from './personAndCharacter';
import { photoEditingAndRestorationCases } from './photoEditing';
import { threeDAndIsometricCases } from './threeD';
import { designAndBrandingCases } from './design';
import { styleTransferCases } from './styleTransfer';
import { creativeToolsCases } from './creativeTools';
import { conceptAndIllustrationCases } from './conceptAndIllustration';
import { productsAndMockupsCases } from './productsAndMockups';
import { informationVisualizationCases } from './informationVisualization';
import { caricatureCases } from './caricature';

// 각 카테고리 이름을 키(key)로, 해당 카테고리의 데이터 배열을 값(value)으로 갖는 객체를 생성합니다.
export const categorizedCases = {
  '인물 & 캐릭터': personAndCharacterCases,
  '사진 편집 & 복원': photoEditingAndRestorationCases,
  '3D & 아이소메트릭': threeDAndIsometricCases,
  '디자인 & 브랜딩': designAndBrandingCases,
  '스타일 변환': styleTransferCases,
  '캐리커쳐': caricatureCases,
  '창의적 도구': creativeToolsCases,
  '콘셉트 & 일러스트': conceptAndIllustrationCases,
  '제품 & 목업': productsAndMockupsCases,
  '정보 시각화': informationVisualizationCases,
};
