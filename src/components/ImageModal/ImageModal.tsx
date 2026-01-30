import Image from "next/image";
import React from "react";

interface ImageModalProps {
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imgSrc: string;
}

function ImageModal({setIsPopupOpen, imgSrc}: ImageModalProps) {
  const POPUP_HEIGHT = 600;
  const IMAGE_ASPECT_RATIO = 1 / 1;
  const popupWidth = POPUP_HEIGHT * IMAGE_ASPECT_RATIO;

  return (
    <div
      onClick={() => setIsPopupOpen(false)}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative shadow-2xl"
        style={{
          height: `${POPUP_HEIGHT}px`,
          width: `${popupWidth}px`,
        }}
      >
        <Image src={imgSrc} alt="easter-egg" fill className="object-cover" priority />
        <button
          onClick={() => setIsPopupOpen(false)}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center cursor-pointer
                    bg-gray-300/90 hover:bg-white rounded-full transition-all duration-200
                    text-gray-800 font-bold text-xl shadow-lg hover:scale-110"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default ImageModal;
