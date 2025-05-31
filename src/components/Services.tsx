
import { useEffect, useRef, useState } from 'react';
import { Wrench, Disc, Settings, Truck, Cog, Award } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: "Suspensions",
    description: "Reparació mecànica i neumàtica per a vehicles industrials."
  },
  {
    icon: Disc,
    title: "Frens",
    description: "Manteniment i reparació de frens de tambor i disc."
  },
  {
    icon: Wrench,
    title: "Ballestes",
    description: "Especialistes en reparació de ballestes i eixos."
  },
  {
    icon: Truck,
    title: "Xassis",
    description: "Diagnòstic i reparació de problemes de xassis i direccions."
  },
  {
    icon: Cog,
    title: "Manteniment",
    description: "Serveis complets preventius i correctius."
  },
  {
    icon: Award,
    title: "Únics a Catalunya",
    description: "Especialistes únics en ballestes i suspensions industrials amb més de 50 anys d'experiència."
  }
];

export const Services = () => {
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
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-taller-blue mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Els Nostres Serveis
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Especialitzats en la reparació i manteniment de vehicles industrials amb la màxima qualitat i professionalitat
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-taller-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-taller-blue" />
                </div>
                <h3 className="text-2xl font-bold text-taller-blue mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
