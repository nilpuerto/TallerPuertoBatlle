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
                El Taller Puerto Batlle va començar fa més de 50 anys, quan en <span className="font-semibold text-white">Delfin Puerto Murillo</span> i el seu fill <span className="font-semibold text-white">Jordi Puerto Batlle</span> van decidir posar-se mans a l’obra i aixecar un petit taller familiar. Amb esforç, constància i molta dedicació, van anar construint el negoci pas a pas, sempre amb la mirada posada en el servei proper i honest als clients de la comarca.
              </p>
              
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                Amb el temps, el taller ha anat creixent i adaptant-se a les noves tecnologies, però sense perdre mai l’essència de la feina ben feta i el tracte de confiança. La professionalitat, la sinceritat i el compromís amb la gent de la zona han estat sempre els nostres pilars.
              </p>
              
              <p className="text-white/90 leading-relaxed mb-6 text-lg">
                Avui dia, el taller segueix sent un negoci familiar, amb en Jordi al capdavant, que ha après l’ofici de ben petit i manté viu l’esperit de superació i servei que el seu pare li va transmetre.
              </p>
              
              <p className="text-white/90 leading-relaxed text-lg font-medium">
                Després de més de cinc dècades, continuem treballant amb la mateixa il·lusió per oferir el millor servei de reparació i manteniment de vehicles industrials a <span className="font-semibold text-white">Santa Coloma de Farners i rodalies</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};