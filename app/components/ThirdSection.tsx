"use client";

import React, { useState } from 'react';

const ASJShowcase: React.FC = () => {
  const slides = [
    {
      image: '/trofeuasj.png',
      text: 'A ASJ é uma organização dedicada a promover o surf e a cultura oceânica.',
    },
    {
      image: '/pranchaguy.jpg',
      text: 'Desde 2002, a ASJ inspira jovens atletas a atingir seu potencial máximo nas ondas.',
    },
    {
      image: '/surf3.jpg',
      text: 'Com campeonatos e iniciativas ambientais, a ASJ conecta pessoas ao mar.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-screen p-8 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300">
      {/* Texto */}
      <div className="flex-1 max-w-md text-white text-center md:text-left mb-6 md:mb-0">
        <h2 className="mb-4 text-3xl font-bold">Quem é a ASJ?</h2>
        <p className="text-lg">{slides[currentSlide].text}</p>
      </div>

      {/* Imagem e botões */}
      <div className="relative flex-1 flex flex-col items-center justify-center">
        <img
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full max-h-[500px] object-contain rounded-lg shadow-lg mb-4"
        />
        <div className="flex gap-4">
          {/* Botão Voltar */}
          <button
            onClick={handlePreviousSlide}
            className="p-4 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow transition duration-300 hover:from-blue-600 hover:to-blue-800"
          >
            Voltar
          </button>
          {/* Botão Avançar */}
          <button
            onClick={handleNextSlide}
            className="p-4 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow transition duration-300 hover:from-blue-600 hover:to-blue-800"
          >
            Avançar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ASJShowcase;
