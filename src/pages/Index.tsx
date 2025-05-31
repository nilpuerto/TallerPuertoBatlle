
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { BrandsCarousel } from '@/components/BrandsCarousel';
import { Services } from '@/components/Services';
import { History } from '@/components/History';
import { Reviews } from '@/components/Reviews';
import { FAQ } from '@/components/FAQ';
import { CallButton } from '@/components/CallButton';
import { Footer } from '@/components/Footer';
import { Maps } from '@/components/Maps';
// ...la resta d'importacions...

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header isScrolled={isScrolled} />
      <Hero />
      <BrandsCarousel />
      <Services />
      <History />
      <Reviews />
      <CallButton />
      <FAQ />
      <Maps />      {/* <-- El mapa va aquí, abans del Footer */}
      <Footer /> 
    </div>
  );
};

export default Index;
