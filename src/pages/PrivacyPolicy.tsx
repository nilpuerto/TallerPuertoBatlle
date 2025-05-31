
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header isScrolled={true} />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <button 
              onClick={() => navigate('/')}
              className="text-taller-blue hover:text-blue-700 font-medium mb-4 flex items-center gap-2"
            >
              ← Tornar a l'inici
            </button>
            <h1 className="text-4xl font-bold text-taller-blue">Política de Privacitat</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Última actualització: {new Date().toLocaleDateString('ca-ES')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Informació que recopilem</h2>
              <p className="text-gray-700 mb-4">
                A Taller Puerto Batlle, recopilem la informació necessària per oferir-vos els nostres serveis de reparació de vehicles industrials:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Dades de contacte (nom, telèfon, correu electrònic)</li>
                <li>Informació del vehicle (marca, model, matrícula)</li>
                <li>Descripció del servei sol·licitat</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Ús de la informació</h2>
              <p className="text-gray-700 mb-4">
                Utilitzem la vostra informació per:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Proporcionar els serveis de reparació sol·licitats</li>
                <li>Comunicar-nos amb vosaltres sobre el vostre vehicle</li>
                <li>Facturació i gestió de pagaments</li>
                <li>Millora dels nostres serveis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Protecció de dades</h2>
              <p className="text-gray-700 mb-4">
                Implementem mesures de seguretat adequades per protegir les vostres dades personals contra accés no autoritzat, alteració, divulgació o destrucció.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Els vostres drets</h2>
              <p className="text-gray-700 mb-4">
                Teniu dret a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Accedir a les vostres dades personals</li>
                <li>Rectificar dades inexactes</li>
                <li>Sol·licitar la supressió de les vostres dades</li>
                <li>Oposar-vos al tractament de les vostres dades</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Contacte</h2>
              <p className="text-gray-700">
                Per a qualsevol consulta sobre aquesta política de privacitat, podeu contactar-nos a:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded">
                <p><strong>Taller Puerto Batlle</strong></p>
                <p>Telèfon: 972 82 09 05</p>
                <p>Email: puertobatlle@hotmail.com</p>
                <p>Santa Coloma de Farners</p>
              </div>
            </section>

            <div className="text-sm text-gray-500 mt-8 pt-8 border-t">
              <p>Aquesta pàgina web ha estat creada per Nil Puerto Marquès.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
