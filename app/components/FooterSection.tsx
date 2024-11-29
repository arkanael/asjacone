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
    <footer className="flex justify-center items-center px-16 py-8 w-full text-base leading-8 text-white bg-gradient-to-r from-customBlue1 to-customBlue2 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-w-full w-[1048px] max-md:flex-wrap">
        <FooterItem>
          <span className="font-bold">CLUBE DOS HOTÉIS ©</span> Todos os direitos reservados
        </FooterItem>
        <FooterItem>
          Políticas de Privacidade <span className="font-bold">&</span> Termos de Uso
        </FooterItem>
      </div>
    </footer>
  );
}

export default function FooterSection() {
  const handleIconClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="relative flex flex-col justify-center items-center w-full text-base leading-8 text-white bg-gradient-to-b from-gray-900 to-black h-[200px] gap-0">
        <div className="relative z-10 flex flex-col items-center w-full px-16 py-20 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-w-full">
            <h2 className="text-lg font-bold leading-8 text-white">Entre em contato conosco</h2>
            <p className="mt-7 text-base leading-8 text-white">suporte@cludedoshoteis.com.br</p>
            <div className="flex gap-5 justify-between self-center mt-7">
              <a href="https://www.instagram.com/seuinstagram" aria-label='Instagram' className="shrink-0 aspect-square w-[35px]" target="_blank" rel="noopener">
                <Image src={icon1} alt="Instagram icon"   />
              </a>
              <a href="https://www.linkedin.com/seulinkedin" aria-label='LinkedIn' className="shrink-0 aspect-square w-[35px]" target="_blank" rel="noopener">
                <Image src={icon2} alt="LinkedIn icon"   />
              </a>
              <a href="https://www.facebook.com/seufacebook" aria-label='Facebook' className="shrink-0 aspect-square w-[35px]" target="_blank" rel="noopener">
                <Image src={icon3} alt="Facebook icon"   />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}









