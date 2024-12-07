import React from 'react';
import Image from 'next/image';
import icon1 from '../../public/instagram.png';
import icon2 from '../../public/linkedin.png';
import icon3 from '../../public/facebook.png';

interface FooterItemProps {
  children: React.ReactNode;
}

const FooterItem: React.FC<FooterItemProps> = ({ children }) => (
  <div className="flex-auto">{children}</div>
);

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center px-16 py-8 w-full text-base leading-8 text-white bg-gradient-to-r from-customBlue1 to-customBlue2 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-w-full w-[1048px] max-md:flex-wrap">
        <FooterItem>
          <span className="font-bold flex justify-center items-center text-center w-full">ASSOCIAÇÃO DE SURF DE JACONÉ ©</span> 
        </FooterItem>
      </div>
      <div className="flex flex-col items-center mt-8">
        <p className="text-base leading-8 text-white">associacaosurfjacone@gmail.com</p>
        <div className="flex gap-5 justify-between mt-4">
          <a
            href="https://www.instagram.com/seuinstagram"
            aria-label="Instagram"
            className="shrink-0 aspect-square w-[35px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={icon1} alt="Instagram icon" />
          </a>
          <a
            href="https://www.linkedin.com/seulinkedin"
            aria-label="LinkedIn"
            className="shrink-0 aspect-square w-[35px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={icon2} alt="LinkedIn icon" />
          </a>
          <a
            href="https://www.facebook.com/seufacebook"
            aria-label="Facebook"
            className="shrink-0 aspect-square w-[35px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={icon3} alt="Facebook icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function FooterSection() {
  const sponsors = [
    { src: "/RANCHO.png", alt: "Rancho Logo" },
    { src: "/huka.jpg", alt: "Huka Logo" },
    { src: "/realsupermercadologo.JPG", alt: "Real Supermercado Logo" },
    { src: "/guaralogo.PNG", alt: "Guaralgo Logo" },
    { src: "/ryconlogo.png", alt: "Rycon Logo" },
    { src: "/altasondaslogo.png", alt: "Altas Ondas Logo" },
    { src: "/carauna.PNG", alt: "Caraúna Logo" },
    { src: "/terblinlogo.png", alt: "Terblin Logo" },
    { src: "/brodao.png", alt: "Brodão Logo" },
    { src: "/lulemar.JPG", alt: "Lulemar Logo" },
    { src: "/pipa.JPG", alt: "Pipa Logo" },
    { src: "/vander.png", alt: "Wander Logo" },
    { src: "/quiosque.png", alt: "Quiosque Logo" },
    { src: "/dumarlin.png", alt: "Dumarlin Logo" },
    { src: "/blackdesigne.png", alt: "Black Design Logo" },
    { src: "/recanto.png", alt: "Recanto Logo" },
    { src: "/logomar.png", alt: "Logomar Logo" },
    { src: "/Mesaposta.png", alt: "Logomar Logo" },
  ];

  return (
    <>
      <div className="relative flex flex-col justify-center items-center w-full text-base leading-8 text-black bg-white gap-0">
        {/* Imagens de Patrocínio - Responsividade */}
        <div className="relative w-full mt-4">
          {/* Para telas pequenas e muito pequenas */}
          <div className="block md:hidden">
            <Image
              src="/patrocinio.JPG"
              alt="Patrocinio Pequeno"
              width={500}
              height={250}
              className="w-full h-auto"
            />
          </div>

          {/* Para telas médias e grandes */}
          <div className="hidden md:block">
            <Image
              src="/patrocinio2.PNG"
              alt="Patrocinio Grande"
              width={500}
              height={250}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center w-full px-16 py-20 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-w-full">
            <h3 className="text-lg font-bold leading-8 text-black">APOIO:</h3>
            {/* Responsividade para 2 colunas em dispositivos móveis e 4 colunas em telas maiores */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    src={sponsor.src}
                    alt={sponsor.alt}
                    width={200}  // Aumentando o tamanho
                    height={200} // Mantendo a proporção
                    className="object-contain w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
