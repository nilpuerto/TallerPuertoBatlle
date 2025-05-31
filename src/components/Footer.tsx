
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-taller-blue to-blue-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6">Taller Puerto Batlle</h3>
            <p className="text-blue-100 leading-relaxed mb-6 text-lg">
              Més de 50 anys d'experiència en reparació de vehicles industrials a Santa Coloma de Farners. 
              El teu taller de confiança per a camions i vehicles pesants.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:972820905" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="Trucar al taller"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href="mailto:puertobatlle@hotmail.com" 
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                aria-label="Enviar email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Contacte
            </h4>
            <div className="space-y-4">
              <a 
                href="tel:972820905" 
                className="block text-blue-100 hover:text-white transition-colors text-lg"
              >
                972 84 09 05
              </a>
              <a 
                href="mailto:puertobatlle@hotmail.com?subject=Consulta sobre reparació de camions&body=Hola, m'agradaria fer una consulta sobre els vostres serveis de reparació." 
                className="block text-blue-100 hover:text-white transition-colors break-all"
              >
                puertobatlle@hotmail.com
              </a>
              <div className="text-blue-100">
                <MapPin className="h-4 w-4 inline mr-1" />
                Santa Coloma de Farners
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Serveis Especialitzats</h4>
            <ul className="space-y-2 text-blue-100">
              <li className="hover:text-white transition-colors">• Suspensions mecàniques</li>
              <li className="hover:text-white transition-colors">• Suspensions neumàtiques</li>
              <li className="hover:text-white transition-colors">• Frens de tambor i disc</li>
              <li className="hover:text-white transition-colors">• Ballestes i eixos</li>
              <li className="hover:text-white transition-colors">• Xassis i direccions</li>
              <li className="hover:text-white transition-colors">• Manteniment preventiu</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-center md:text-left">
              © 2025 Taller Puerto Batlle. Tots els drets reservats.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-blue-100 hover:text-white transition-colors"
              >
                Política de privacitat
              </Link>
              <Link 
                to="/legal-notice" 
                className="text-blue-100 hover:text-white transition-colors"
              >
                Avís legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
