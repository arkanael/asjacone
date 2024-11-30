// components/ASJShowcase.tsx
"use client";

import React, { useState } from 'react';

const ASJShowcase: React.FC = () => {
  const slides = [
    {
      image: '/trofeuasj.png',
      text: 'A ASJ é uma organização dedicada a promover o surf e a cultura oceânica.',
    },
    {
      image: '/images/surf2.jpg',
      text: 'Desde 2005, a ASJ inspira jovens atletas a atingir seu potencial máximo nas ondas.',
    },
    {
      image: '/images/surf3.jpg',
      text: 'Com campeonatos e iniciativas ambientais, a ASJ conecta pessoas ao mar.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div
      className="flex items-center justify-between w-full h-screen p-8 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300"
    >
      {/* Texto */}
      <div className="flex-1 max-w-md text-white">
        <h2 className="mb-4 text-3xl font-bold">Quem é a ASJ?</h2>
        <p className="text-lg">{slides[currentSlide].text}</p>
      </div>

      {/* Imagem e botão */}
      <div className="relative flex-1 flex items-center justify-center ">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="w-3/4 max-h-96 object-contain rounded-lg shadow-lg"
        />
        <button
          onClick={handleNextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 text-white bg-blue-700 rounded-full shadow hover:bg-blue-800"
        >
          Avançar
        </button>
      </div>
    </div>
  );
};

export default ASJShowcase;
