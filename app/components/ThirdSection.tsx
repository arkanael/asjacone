import * as React from "react";
import Image from "next/image";
import InfoCard from './InfoCard';
import riobackground from '../../public/sol.jpg';

export default function ThirdSection() {
    const cardsData = [
        {
            title: "Entidade civil sem fins lucrativos:",
            description: "Economize até 2fundada em 22 de dezembro de 2001. Desde sua criação, a ASJ tem se dedicado à preservação da restinga da praia de Jaconé, promovendo ações de conscientização tanto para a população local quanto para os turistas que visitam a região.",
        },
        {
            title: "O objetivo principal da ASJ é:",
            description: "realizar eventos esportivos e solidários, que não apenas promovam o espírito competitivo, mas também estimulem o turismo, o bem-estar, a saúde e a preservação ambiental, contribuindo para um ambiente mais saudável e sustentável.",
        },
        {
            title: "promover um campeonato que incentive a prática esportiva na região:",
            description: "fortalecendo o espírito comunitário e valorizando a importância da preservação ambiental para as futuras gerações. Acreditamos que, por meio do esporte, é possível não só promover saúde e lazer, mas também difundir valores que contribuem para o desenvolvimento sustentável de Jaconé.",
        },
        {
            title: "ASJ tem se dedicado à preservação da restinga da praia de Jaconé:",
            description: "promovendo ações de conscientização tanto para a população local quanto para os turistas que visitam a região.",
        },
    ];

    // Dividindo os cards em duas colunas
    const halfLength = Math.ceil(cardsData.length / 2);
    const firstColumn = cardsData.slice(0, halfLength);
    const secondColumn = cardsData.slice(halfLength);

    return (
        <div className="relative flex flex-col justify-center items-center w-full overflow-hidden min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 w-full h-full">
                <Image
                    src={riobackground}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="w-full h-full"
                />
            </div>
            <div className="relative z-10 flex flex-col items-end px-16 py-10 w-full max-md:px-5 max-md:max-w-full">
                <header className="pr-10 pb-4 text-3xl font-bold leading-10 text-center text-neutral-800 w-[70%] max-md:max-w-full">
                    <span>Saiba Mais sobre</span>a Associação de Surf de Jaconé (ASJ): 
                </header>
                <section className="mt-4 max-md:mt-5 max-md:max-w-full flex flex-col gap-5 max-md:flex-row max-md:flex-wrap w-full">
                    <div className="flex justify-end w-full max-md:flex-col max-md:space-y-5"> {/* Adiciona espaço vertical entre os itens */}
                        {firstColumn.map((card, index) => (
                            <InfoCard
                                key={index}
                                title={card.title}
                                description={card.description}
                                customClasses="mr-4 w-[35%] max-md:w-full text-xl font-medium leading-7 text-white rounded-xl border-solid shadow-sm bg-black bg-opacity-50 border-[3px] border-sky-950 max-md:mb-5 transition duration-300 ease-in-out hover:border-blue-300"
                            />
                        ))}
                    </div>
                    <div className="flex justify-end w-full max-md:flex-col max-md:space-y-5"> {/* Adiciona espaço vertical entre os itens */}
                        {secondColumn.map((card, index) => (
                            <InfoCard
                                key={index}
                                title={card.title}
                                description={card.description}
                                customClasses="mr-4 w-[35%] max-md:w-full text-xl font-medium leading-7 text-white rounded-xl border-solid shadow-sm bg-black bg-opacity-50 border-[3px] border-sky-950 max-md:mb-5 transition duration-300 ease-in-out hover:border-blue-300"
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
