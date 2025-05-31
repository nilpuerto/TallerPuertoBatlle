
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Jaume Banti",
    text: "Mecànic molt competent, et diu les coses clares i va de cares al gra. Bon tracte i averia solventada. L'experiència és un grau!",
    rating: 5,
    time: "fa 2 anys"
  },
  {
    name: "FRAN R M",
    text: "Grans profesionals!!",
    rating: 5,
    time: "fa 3 mesos"
  },
  {
    name: "Oriol Pell",
    text: "Un gran taller, recomanat per qualsevol reparació de ballestes.",
    rating: 5,
    time: "fa 5 anys i fa 5 mesos"
  },
  {
    name: "R R",
    text: "Situación complicada ballesta rota un viernes 17h. Me soluciona el problema y mañana podré trabajar, gran profesional y mejor persona. Moltes gràcies 👍.",
    rating: 5,
    time: "fa 5 mesos"
  },
  {
    name: "MiguelReu86",
    text: "Es de los pocos talleres donde se ve a un mecánico profesional !!!! hoy en día solo ay cambiadores de piezas!! Ánimo sigue así 👍",
    rating: 5,
    time: "fa 1 any"
  },
  {
    name: "Francisco José Navas",
    text: "Muy profesionales, especialistas en reparación de amortiguaciones, frenos, bujes etc... de vehículos industriales.",
    rating: 5,
    time: "fa 6 anys"
  }
];

export const Reviews = () => {
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
    <section ref={sectionRef} id="reviews" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-taller-blue mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Què diuen els nostres clients
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Ressenyes reals dels nostres clients a Google
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">{review.time}</span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
              
              <div className="font-semibold text-taller-blue">
                - {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
