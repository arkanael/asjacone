import HeaderSection from './components/HeaderSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import ProntoSection from './components/ProntoSection';
import Weather from './components/Weather';
import FooterSection from './components/FooterSection';

function Index() {
  return (
    <>
      <HeaderSection />
      <SecondSection />
      <ThirdSection />
  
      {/* Exibição do Componente Weather */}
      <Weather location="Rio de Janeiro" />
      <FooterSection />
    </>
  );
}

export default Index;
