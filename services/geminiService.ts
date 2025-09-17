import { GoogleGenAI, Modality } from "@google/genai";

// IMPORTANT: This is a placeholder for the API key.
// In a real-world application, this should be handled securely and not hardcoded.
// The instructions state to use process.env.API_KEY, which is assumed to be available.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.warn("API_KEY environment variable not set. Using a placeholder. API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "YOUR_API_KEY_HERE" });

/**
 * Translates Korean text to English using the Gemini API.
 * @param text The Korean text to translate.
 * @returns The translated English text.
 */
export const translateToEnglish = async (text: string): Promise<string> => {
  if (!API_KEY) {
    throw new Error("Gemini API key is not configured.");
  }
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Translate the following Korean text to English. Provide only the translated English text, without any surrounding explanations or phrases like "Here is the translation:".\n\nKorean text: "${text}"`,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error translating text with Gemini API:", error);
    throw new Error("프롬프트 번역에 실패했습니다. 콘솔을 확인해주세요.");
  }
};


export const editImageWithNanoBanana = async (
  prompt: string,
  images: { data: string; mimeType:string }[]
): Promise<{ image: string | null; text: string | null }> => {
  if (!API_KEY) {
    throw new Error("Gemini API key is not configured.");
  }
  
  try {
    const imageParts = images.map(image => ({
        inlineData: {
            data: image.data,
            mimeType: image.mimeType,
        }
    }));

    const textPart = { text: prompt };

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image-preview',
      contents: {
        parts: [...imageParts, textPart],
      },
      config: {
          responseModalities: [Modality.IMAGE, Modality.TEXT],
      },
    });

    let resultImage: string | null = null;
    let resultText: string | null = null;

    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        resultText = part.text;
      } else if (part.inlineData) {
        resultImage = part.inlineData.data;
      }
    }
    
    return { image: resultImage, text: resultText };
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate image with Gemini API. Check console for details.");
  }
};