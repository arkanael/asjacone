'use client'
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/ASJ.png";
import Transmissao from "./Transmissao";
import GaleriaASJ from "./Galeria"; // Importa o componente da galeria
import Link from "next/link";

export default function HeaderSection() {
  const [showLiveStream, setShowLiveStream] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden">
      {/* Background Video with Overlay */}
      <video
        src="/surf1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full z-0"
      />
      {/* Overlay to darken the video */}
      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      {/* Centralized Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <Image
          src={logo}
          alt="Logo"
          width={980}
          height={800}
          className="max-w-full shadow-sm"
        />
      </div>

      {/* Bottom Button Section */}
      <section className="absolute bottom-0 left-0 w-full px-16 py-10 z-20 text-white">
        <div className="flex flex-col leading-10 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-6 mt-10 text-sm max-md:flex-wrap max-md:mt-10 justify-center">
            <button
              onClick={() => setShowLiveStream(true)}
              className="grow justify-center px-16 py-3 border border-solid backdrop-blur-[10px] bg-transparent border-stone-300 rounded-full w-fit max-md:px-6 transition duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-50 hover:text-white"
            >
              TRANSMISSÃO AO VIVO
            </button>
            <button 
            className="grow justify-center px-16 py-3 border border-solid backdrop-blur-[10px] bg-transparent border-stone-300 rounded-full w-fit max-md:px-6 transition duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-50 hover:text-white">
              CADASTRE-SE AQUI
            </button>
              <Link  href="https://forms.gle/QyVjPRjads5hmupy5" passHref 
              className="grow justify-center itens-center px-16 py-3 border border-solid backdrop-blur-[10px] bg-transparent border-stone-300 rounded-full w-fit max-md:px-6 transition duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-50 hover:text-white">
                <p className="text-center">SEJA UM PATROCINADOR</p>
                
              </Link>
            <button
              onClick={() => setShowGallery(true)}
              className="grow justify-center px-16 py-3 border border-solid backdrop-blur-[10px] bg-transparent border-stone-300 rounded-full w-fit max-md:px-6 transition duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-50 hover:text-white"
            >
              Galeria ASJ
            </button>
          </div>
        </div>
      </section>

      {/* Transmissão Ao Vivo */}
      {showLiveStream && <Transmissao onClose={() => setShowLiveStream(false)} />}

      {/* Galeria ASJ */}
      {showGallery && <GaleriaASJ onClose={() => setShowGallery(false)} />}
    </div>
  );
}
