'use client';
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/ASJ.png";
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
            <Link href="https://forms.gle/QyVjPRjads5hmupy5" passHref>
              <button className="grow justify-center px-16 py-3 border border-solid backdrop-blur-[10px] bg-transparent border-stone-300 rounded-full w-fit max-md:px-6 transition duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-50 hover:text-white">
                SEJA UM PATROCINADOR
              </button>
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

      {/* Modal para a transmissão ao vivo */}
      {showLiveStream && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black bg-opacity-80">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold mb-4">Escolha uma plataforma</h2>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.youtube.com/live/MQIeq6heNwo?si=Z3vvS0uIXepShw9o"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                YouTube
              </a>
              <a
                href="https://www.twitch.tv/ASJACONE"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
              >
                Twitch
              </a>
            </div>
            <button
              onClick={() => setShowLiveStream(false)}
              className="mt-6 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Galeria ASJ */}
      {showGallery && <GaleriaASJ onClose={() => setShowGallery(false)} />}
    </div>
  );
}
