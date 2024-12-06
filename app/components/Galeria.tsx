"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/juradosasj.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
];

export default function GaleriaASJ({ onClose }: { onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
      >
        Fechar
      </button>

      <div className="relative w-4/5 max-w-4xl overflow-hidden shadow-lg rounded-lg">
        <div className="relative w-full h-[500px]">
          <Image
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            fill
            className="rounded-lg"
          />
        </div>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
