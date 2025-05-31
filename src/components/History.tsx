
import { useEffect, useRef, useState } from 'react';

export const History = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="history" className="py-20 bg-gradient-to-br from-blue-600 via-taller-blue to-blue-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-white text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            La Nostra Història
          </h2>
          
          <div className={`bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="prose prose-lg max-w-none">
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                El Taller Puerto Batlle va començar fa 52 anys gràcies a la visió i dedicació del nostre fundador, 
                <span className="font-semibold text-white"> Delfin Puerto Batlle</span>, qui va iniciar aquesta aventura amb una clara passió per la mecànica industrial i un compromís ferm amb la qualitat del servei.
              </p>
              
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                Des de llavors, hem crescut i evolucionat, adaptant-nos a les noves tecnologies i mantenint sempre els nostres valors fonamentals: 
                <span className="font-semibold text-white"> professionalitat, honestedat i un tracte proper</span> amb els nostres clients.
              </p>
              
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                Actualment, el taller està dirigit per <span className="font-semibold text-white">Jordi Puerto Batlle</span>, qui compta amb un extens títol en mecànica industrial i ha seguit els passos del seu pare per mantenir i millorar l'excel·lència del negoci familiar.
              </p>
              
              <p className="text-white/90 leading-relaxed text-lg font-medium">
                Amb més de cinc dècades d'experiència, continuem compromesos amb oferir el millor servei de reparació per a vehicles industrials a la zona de 
                <span className="font-semibold text-white"> Santa Coloma de Farners i rodalies</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
