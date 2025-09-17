export interface Case {
  id: number;
  title: string;
  category: string;
  author: string;
  sourceUrl: string;
  inputImages: string[];
  outputImage: string;
  prompt: string;
  prompt_ko: string;
}

export interface UserImage {
  url: string; // Original URL from the case, used as a key and for display
  base64: string | null;
  mimeType: string | null;
}