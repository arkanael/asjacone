import * as React from "react";
import Image from "next/image";
import passportImage from "../../public/ASJ.png"; // Importe a imagem do passaporte aqui
import RegisterForm from "./RegisterForm";



export default function  ProntoSection() {
  return (
    <>
      <div className="relative flex justify-end w-full max-md:max-w-furell">
        {/* Passaporte Image */}
        <Image
          src={passportImage}
          alt="Passaporte"
          layout="responsive"
          objectFit="contain"
          quality={100}
          className="hidden md:block absolute top-0 right-0 z-10 mr-0 mt-0 max-w-[30%] max-md:max-w-full transform -translate-y-1/2" />
      </div>
      <div className="relative flex flex-col justify-center items-center w-full min-h-screen overflow-hidden bg-gradient-to-r from-customBlue1 to-customBlue2">
       <div className="relative z-30 flex flex-col items-center px-20 py-20 w-full max-md:px-5 max-md:max-w-full ">
          {/* Main Content */}
          <div className="relative z-10 max-w-full w-[1104px] text-white mt-30">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">

              {/* Left Section */}
              <section className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col leading-10 max-md:mt-10 max-md:max-w-full">
                  <h2 className="text-3xl max-md:max-w-full mt-5 pt-10">
                    <span className="font-bold">
                    Seja um <br /> Associado :
                    </span>
                  </h2>
                  <p className="mt-6 text-xl leading-8 max-md:max-w-full">
                    <span className="font-bold"> A Associação de Surf de Jaconé (ASJ) </span> é uma entidade civil sem fins lucrativos, fundada em 22 de dezembro de 2001. Desde sua criação, a ASJ tem se dedicado à preservação da restinga da praia de Jaconé, promovendo ações de conscientização tanto para a população local quanto para os turistas que visitam a região.
                    <br />
                    <br />
                    Convidamos a todos a se associarem à ASJ e fazerem parte dessa importante iniciativa. Tornar-se um associado é uma excelente forma de apoiar nossos projetos de preservação ambiental e eventos esportivos, além de fortalecer a comunidade local.{" "}
                    <span className="font-bold">
                    Juntos, podemos continuar promovendo o surf, a conscientização ecológica e o desenvolvimento sustentável 
                    </span>
                    na nossa querida praia de Jaconé. Participe e seja parte dessa transformação!
                  </p>
                </div>
              </section>
            <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



