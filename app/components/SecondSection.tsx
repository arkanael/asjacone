"use client";
import React, { useEffect, useState } from "react";

export default function SecondSection() {
  const [videoSource, setVideoSource] = useState("/Secondsection2.mp4");

  useEffect(() => {
    const updateVideoSource = () => {
      if (window.innerWidth >= 1024) {
        // Telas grandes (1024px ou mais)
        setVideoSource("/Secondsection.mp4");
      } else {
        // Telas pequenas
        setVideoSource("/Secondsection2.mp4");
      }
    };

    // Configura o vídeo inicial
    updateVideoSource();

    // Adiciona um listener para mudanças no tamanho da tela
    window.addEventListener("resize", updateVideoSource);

    // Remove o listener quando o componente desmonta
    return () => {
      window.removeEventListener("resize", updateVideoSource);
    };
  }, []);

  return (
    <section className="w-full h-screen m-0 p-0 overflow-hidden relative top-0">
      <video
        src={videoSource}
        autoPlay
        loop
        muted
        className="m-0 p-0 w-full h-full object-cover"
      />
    </section>
  );
}
