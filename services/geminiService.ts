/**
 * @file geminiService.ts
 * @description Google Gemini API와의 모든 통신을 담당하는 서비스 모듈입니다.
 *              프롬프트 번역, 이미지 편집/생성 등 API 호출 함수를 캡슐화합니다.
 */

import { GoogleGenAI, Modality } from "@google/genai";

// 환경 변수에서 API 키를 가져옵니다.
// .env 파일 등을 통해 `process.env.API_KEY`가 설정되어 있다고 가정합니다.
const API_KEY = process.env.API_KEY;

// API 키가 설정되지 않았을 경우 경고 메시지를 출력합니다.
// 실제 프로덕션 환경에서는 키가 없는 경우 에러를 발생시키거나 앱 실행을 막아야 합니다.
if (!API_KEY) {
    console.warn("API_KEY 환경 변수가 설정되지 않았습니다. API 호출이 실패합니다.");
}

// GoogleGenAI 클라이언트 인스턴스를 초기화합니다.
// API_KEY가 없는 경우를 대비해 플레이스홀더 값을 사용하지만, 이 경우 API 호출은 실패합니다.
const ai = new GoogleGenAI({ apiKey: API_KEY || "YOUR_API_KEY_HERE" });

/**
 * Gemini API를 사용하여 한국어 텍스트를 영어로 번역합니다.
 * @param {string} text - 번역할 한국어 텍스트.
 * @returns {Promise<string>} 번역된 영어 텍스트를 담은 Promise.
 */
export const translateToEnglish = async (text: string): Promise<string> => {
  if (!API_KEY) {
    throw new Error("Gemini API 키가 설정되지 않았습니다.");
  }
  try {
    // 텍스트 생성을 위해 'gemini-2.5-flash' 모델 사용
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      // AI에게 번역 작업과 출력 형식을 명확하게 지시하는 프롬프트
      contents: `Translate the following Korean text to English. Provide only the translated English text, without any surrounding explanations or phrases like "Here is the translation:".\n\nKorean text: "${text}"`,
    });
    // AI 응답에서 텍스트 부분만 추출하고 양쪽 공백을 제거하여 반환
    return response.text.trim();
  } catch (error) {
    console.error("Gemini API 번역 오류:", error);
    throw new Error("프롬프트 번역에 실패했습니다. 콘솔을 확인해주세요.");
  }
};

/**
 * Nano-banana 모델을 사용하여 이미지와 텍스트 프롬프트를 기반으로 새로운 이미지를 생성/편집합니다.
 * @param {string} prompt - 이미지 생성을 위한 영어 프롬프트.
 * @param {Array<{data: string; mimeType: string}>} images - Base64로 인코딩된 이미지 데이터와 MIME 타입 배열.
 * @returns {Promise<{image: string | null; text: string | null}>} 생성된 이미지(Base64)와 텍스트를 담은 객체를 반환하는 Promise.
 */
export const editImageWithNanoBanana = async (
  prompt: string,
  images: { data: string; mimeType:string }[]
): Promise<{ image: string | null; text: string | null }> => {
  if (!API_KEY) {
    throw new Error("Gemini API 키가 설정되지 않았습니다.");
  }
  
  try {
    // 이미지 데이터를 API가 요구하는 'Part' 형식으로 변환
    const imageParts = images.map(image => ({
        inlineData: {
            data: image.data,
            mimeType: image.mimeType,
        }
    }));

    // 텍스트 프롬프트도 'Part' 형식으로 변환
    const textPart = { text: prompt };

    // 'gemini-2.5-flash-image-preview' (Nano-banana) 모델 호출
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        // 이미지와 텍스트 파트를 배열로 전달 (멀티모달 입력)
        parts: [...imageParts, textPart],
      },
      config: {
          // 응답으로 이미지와 텍스트를 모두 받을 수 있도록 설정
          responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    let resultImage: string | null = null;
    let resultText: string | null = null;

    // API 응답에는 여러 'Part'가 포함될 수 있으므로, 순회하며 이미지와 텍스트를 추출
    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        resultText = part.text;
      } else if (part.inlineData) {
        resultImage = part.inlineData.data;
      }
    }
    
    return { image: resultImage, text: resultText };
  } catch (error) {
    console.error("Gemini API 호출 오류:", error);
    throw new Error("Gemini API로 이미지 생성에 실패했습니다. 콘솔을 확인해주세요.");
  }
};
