/**
 * @file geminiService.ts
 * @description Google Gemini API와의 모든 통신을 담당하는 서비스 모듈입니다.
 *              프롬프트 번역, 이미지 편집/생성 등 API 호출 함수를 캡슐화합니다.
 */

import { GoogleGenAI, Modality } from "@google/genai";

// FIX: Per coding guidelines, initialize GoogleGenAI client directly with `process.env.API_KEY`.
// API key availability is assumed as a prerequisite.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Gemini API를 사용하여 한국어 텍스트를 영어로 번역합니다.
 * @param {string} text - 번역할 한국어 텍스트.
 * @returns {Promise<string>} 번역된 영어 텍스트를 담은 Promise.
 */
export const translateToEnglish = async (text: string): Promise<string> => {
  // FIX: Removed redundant API_KEY check. Client initialization relies on the environment variable.
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
  // FIX: Removed redundant API_KEY check. Client initialization relies on the environment variable.
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
