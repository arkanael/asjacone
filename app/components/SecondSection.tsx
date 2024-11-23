import * as React from "react";
import Image from "next/image";
import postal from "../../public/sol.jpg";
import airplane from "../../public/trofeuasj.png";

export default function SecondSection() {
  return (
    <section
      className="relative w-full h-full bg-gray-100"
      style={{
        background: "linear-gradient(90deg, #ADD8E6 0%, #4682B4 50%, #1E3A8A 100%)",
      }}
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 relative">
        {/* Imagem do Sol com Troféu sobreposto */}
        <div className="flex flex-col w-[27%] max-md:ml-0 max-md:w-full order-1 max-md:order-1 relative">
          <div className="relative max-w-full shadow-sm aspect-[1.25] w-full">
            {/* Imagem do Sol */}
            <Image
              src={postal}
              alt="Postal back2"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
            {/* Imagem do Troféu sobreposto */}
            <div className="relative z-10 left-0 transform w-[50%] sm:w-[30%] max-md:w-[40%] pt-40">
              <Image
                src={airplane}
                alt="Troféu"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        {/* Texto principal */}
        <div className="flex flex-col justify-center text-neutral-800 w-full lg:w-4/5 max-md:w-full">
          <p className="text-2xl font-medium leading-[1.8] text-center sm:text-lg max-sm:px-2">
            Celebrando 22 anos de história desde sua fundação em 2002,
            <span className="text-neutral-800"> a ASJ </span>
            <span className="font-bold text-neutral-800">
              mantém viva a tradição de premiar os campeões com pranchas novinhas em folha!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
