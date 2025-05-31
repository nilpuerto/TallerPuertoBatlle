
import { useState } from 'react';
import { HelpCircle, X } from 'lucide-react';

export const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      question: "Quin tipus de vehicles repareu?",
      answer: "Reparem tot tipus de vehicles industrials: camions, furgonetes, autobusos i maquinària pesada."
    },
    {
      question: "Com funciona el pressupost?",
      answer: "Oferim pressupost orientatiu depenent de les hores de feina necessàries. Primer fem un diagnòstic per determinar el cost exacte."
    },
    {
      question: "Necessito cita prèvia?",
      answer: "Sí, recomanem demanar cita prèvia per telèfon per assegurar-nos que podem atendre't en el millor moment possible."
    }
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-white text-taller-blue p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 border-2 border-taller-blue"
        aria-label="Preguntes freqüents"
      >
        {isOpen ? <X className="h-6 w-6" /> : <HelpCircle className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-80 z-40 border border-gray-200 animate-fade-in">
          <h3 className="text-lg font-bold text-taller-blue mb-4">Preguntes Freqüents</h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                <h4 className="font-semibold text-gray-800 mb-2 text-sm">{faq.question}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
