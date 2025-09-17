import { personAndCharacterCases } from './personAndCharacter';
import { photoEditingAndRestorationCases } from './photoEditing';
import { threeDAndIsometricCases } from './threeD';
import { designAndBrandingCases } from './design';
import { styleTransferCases } from './styleTransfer';
import { creativeToolsCases } from './creativeTools';
import { conceptAndIllustrationCases } from './conceptAndIllustration';
import { productsAndMockupsCases } from './productsAndMockups';
import { informationVisualizationCases } from './informationVisualization';

export const categorizedCases = {
  '인물 & 캐릭터': personAndCharacterCases,
  '사진 편집 & 복원': photoEditingAndRestorationCases,
  '3D & 아이소메트릭': threeDAndIsometricCases,
  '디자인 & 브랜딩': designAndBrandingCases,
  '스타일 변환': styleTransferCases,
  '창의적 도구': creativeToolsCases,
  '콘셉트 & 일러스트': conceptAndIllustrationCases,
  '제품 & 목업': productsAndMockupsCases,
  '정보 시각화': informationVisualizationCases,
};
