import HeaderSection from './components/HeaderSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import ProntoSection from './components/ProntoSection';
import Weather from './components/Weather';
import FooterSection from './components/FooterSection';
import Notas from './components/Notas';


function Index() {
  return (
    <>
      <HeaderSection />
      <SecondSection />
      <ThirdSection />
  
      {/* Exibição do Componente Weather */}
      <Weather />
      <Notas></Notas>
      <FooterSection />
    </>
  );
}

export default Index;
