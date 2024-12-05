import * as React from "react";
import Image from "next/image";
import background3 from "../../public/background-3.jpg";
import icon from "../../public/seta.png";

export default function AskSection() {
  return (
    <div className="relative flex flex-col justify-center items-center px-16 py-20 w-full text-xl font-medium leading-10 text-black min-h-[605px] max-md:px-5 max-md:max-w-full">
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${background3.src})` }}
      ></div>
      <div className="flex relative flex-col mt-1.5 mb-2.5 max-w-full w-[772px]">
        <div className="self-center text-3xl leading-10 text-center text-neutral-800 max-md:max-w-full">
          <span className="font-bold">Perguntas</span> Frequentes
        </div>
        <div className="flex gap-3 mt-11 text-center max-md:flex-wrap max-md:mt-10">
          <Image src={icon} width={27} height={27} alt="" />
          <div className="flex-auto my-auto max-md:max-w-full">
            Como posso me tornar membro da Associação de Surfe de Jaconé
          </div>
        </div>
        <div className="mx-9 mt-4 text-base leading-8 text-neutral-800 max-md:mr-2.5 max-md:max-w-full">
          Para se tornar membro, basta preencher o formulário de cadastro na
          nossa página de captura com seu nome, telefone e e-mail. Após o
          cadastro, você receberá todas as informações necessárias para ativar
          sua assinatura e começar a aproveitar os benefícios exclusivos.
        </div>
        <div className="flex gap-3 mt-8 text-center max-md:flex-wrap">
          <Image src={icon} width={27} height={27} alt="" />
          <div className="flex-auto my-auto max-md:max-w-full">
            Quais são os benefícios de ser um membro da Associação de Surfe de Jaconé?
          </div>
        </div>
        <div className="flex gap-3 self-start mt-5 max-md:flex-wrap">
          <Image src={icon} width={27} height={27} alt="" />
          <div className="flex-auto my-auto max-md:max-w-full">
            Existem taxas de adesão ou custos ocultos?
          </div>
        </div>
        <div className="flex gap-3 mt-5 max-md:flex-wrap">
          <Image src={icon} width={27} height={27} alt="" />
          <div className="flex-auto max-md:max-w-full">
            Posso cancelar minha assinatura a qualquer momento?
          </div>
        </div>
        {/* <div className="flex gap-3 mt-5 max-md:flex-wrap">
          <Image src={icon} width={27} height={27} alt="" />
          <div className="flex-auto my-auto max-md:max-w-full">
            Como a Associação de Surfe de Jaconé consegue oferecer descontos tão significativos?
          </div>
        </div> */}
      </div>
    </div>
  );
}
