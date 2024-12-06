"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/juradosasj.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
];

export default function GaleriaASJ({ onClose }: { onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
      {/* Fechar Galeria */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
      >
        Fechar
      </button>

      <div className="relative w-4/5 max-w-4xl overflow-hidden shadow-lg rounded-lg">
        {/* Imagem Atual */}
        <div className="relative w-full h-[500px]">
          <Image
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Navegação de Imagens */}
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer"
          onClick={handlePrevious}
        >
          &lt;
        </div>
        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full cursor-pointer"
          onClick={handleNext}
        >
          &gt;
        </div>
      </div>
    </div>
  );
}
