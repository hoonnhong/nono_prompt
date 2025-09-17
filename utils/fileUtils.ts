/**
 * @file fileUtils.ts
 * @description 파일과 관련된 유틸리티 함수들을 모아놓은 파일입니다.
 */

/**
 * File 객체를 Base64로 인코딩된 문자열로 변환합니다.
 * HTML5 FileReader API를 사용하여 비동기적으로 처리합니다.
 * @param {File} file - 변환할 File 객체.
 * @returns {Promise<string>} Base64로 인코딩된 문자열을 담은 Promise. 데이터 URL 접두사('data:...')는 제거됩니다.
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    // FileReader 인스턴스 생성
    const reader = new FileReader();
    
    // 파일을 데이터 URL(Base64 인코딩 포함)로 읽기 시작
    reader.readAsDataURL(file);
    
    // 파일 읽기가 성공적으로 완료되면 호출될 콜백
    reader.onload = () => {
      const result = reader.result as string;
      // 결과 문자열에서 'data:[MIME타입];base64,' 부분을 제거하고 순수 Base64 데이터만 반환
      resolve(result.split(',')[1]);
    };
    
    // 파일 읽기 중 오류가 발생하면 호출될 콜백
    reader.onerror = error => reject(error);
  });
};
