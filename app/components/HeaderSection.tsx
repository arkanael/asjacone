import * as React from "react";
import Image from "next/image";
import logo from '../../public/logoajs.png';

export default function HeaderSection() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden">
      {/* Background Video with Overlay */}
      <video
        src="/surf2.mp4"
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

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="max-w-full w-[1104px] text-white">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          </div>
        </div>
      </div>

      {/* Left Section - Absolute positioned at the top-left */}
      <section className="absolute top-0 left-0 w-full px-16 py-5 z-20 text-white">
        {/* Text positioned at the top left above the logo */}
        <h1 className="text-5xl max-md:text-3xl font-bold">
          <span>Associação Surf de Jaconé </span>
          <span>2024</span>
        </h1>
      </section>

      {/* Bottom Button Section */}
      <section className="absolute bottom-0 left-0 w-full px-16 py-10 z-20 text-white">
        <div className="flex flex-col leading-10 max-md:mt-10 max-md:max-w-full">
          {/* Buttons */}
          <div className="flex gap-6 mt-10 text-sm max-md:flex-wrap max-md:mt-10 justify-center">
            <button className="grow justify-center px-16 py-3 border border-solid backdrop-blur-[10px] bg-transparent border-stone-300 rounded-full w-fit max-md:px-6 transition duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-50 hover:text-white">
              TRANSMISSÃO AO VIVO
            </button>
            <button className="grow justify-center px-16 py-3 border border-solid backdrop-blur-[10px] bg-transparent border-stone-300 rounded-full w-fit max-md:px-6 transition duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-50 hover:text-white">
              CADASTRE-SE AQUI
            </button>
            <button className="grow justify-center px-16 py-3 border border-solid backdrop-blur-[10px] bg-transparent border-stone-300 rounded-full w-fit max-md:px-6 transition duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-50 hover:text-white">
              SEJA PATROCINADOR
            </button>
            <button className="grow justify-center px-16 py-3 border border-solid backdrop-blur-[10px] bg-transparent border-stone-300 rounded-full w-fit max-md:px-6 transition duration-300 ease-in-out hover:bg-blue-500 hover:bg-opacity-50 hover:text-white">
              Galeria ASJ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
