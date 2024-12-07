"use client";

import * as React from "react";

interface TransmissaoProps {
  onClose: () => void;
}

export default function Transmissao({ onClose }: TransmissaoProps) {
  return (
    <section className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center z-30">
      <div className="relative w-4/5 h-4/5 bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-red-500 rounded-full px-4 py-2 hover:bg-red-600 transition"
        >
          Fechar
        </button>

        {/* Botão Twitch */}
        <a
          href="https://www.twitch.tv/ASJACONE"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 text-white bg-purple-500 rounded-full px-6 py-2 hover:bg-purple-600 transition"
        >
          Twitch
        </a>

        {/* Vídeo do YouTube */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
