import React, { useState, useRef, useCallback, useEffect } from 'react';
import { UploadIcon } from './icons/UploadIcon';
import { fileToBase64 } from '../utils/fileUtils';

interface ImageUploaderProps {
  initialImage: string;
  onImageUpload: (base64: string, mimeType: string) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ initialImage, onImageUpload }) => {
  const [imagePreview, setImagePreview] = useState(initialImage);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const blobUrlRef = useRef<string | null>(null);

  // Centralized function to process an uploaded file
  const processFile = useCallback(async (file: File | null | undefined) => {
    if (file && file.type.startsWith('image/')) {
      try {
        const base64 = await fileToBase64(file);
        onImageUpload(base64, file.type);
        
        // Clean up previous blob URL if it exists
        if (blobUrlRef.current) {
          URL.revokeObjectURL(blobUrlRef.current);
        }

        const newBlobUrl = URL.createObjectURL(file);
        blobUrlRef.current = newBlobUrl;
        setImagePreview(newBlobUrl);
      } catch (error) {
        console.error("Error converting file to base64:", error);
      }
    }
  }, [onImageUpload]);


  // Handler for file input change (clicking)
  const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    processFile(event.target.files?.[0]);
  }, [processFile]);

  // Effect to reset preview when the selected case changes
  useEffect(() => {
    // Clean up blob URL when component unmounts or case changes
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }
    setImagePreview(initialImage);

    // Cleanup function for unmount
    return () => {
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
    };
  }, [initialImage]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  
  // Drag and drop handlers
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation(); // This is necessary to allow dropping
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    processFile(e.dataTransfer.files?.[0]);
  }, [processFile]);


  return (
    <div
      className="relative aspect-square w-full group rounded-md"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src={imagePreview} alt="Input" className="w-full h-full object-cover rounded-md" />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
      />
      
      {/* Click-to-upload overlay */}
      <button
        onClick={handleButtonClick}
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 rounded-md"
      >
        <UploadIcon className="w-8 h-8 mb-1" />
        <span className="text-sm font-semibold text-center">이미지 교체</span>
      </button>

      {/* Drag-and-drop overlay */}
      {isDragging && (
        <div className="absolute inset-0 bg-gray-900/80 border-4 border-dashed border-yellow-400 rounded-md flex flex-col items-center justify-center text-white p-2 pointer-events-none transition-all">
          <UploadIcon className="w-10 h-10 mb-2" />
          <span className="text-lg font-semibold text-center">여기에 이미지 놓기</span>
        </div>
      )}
    </div>
  );
};
