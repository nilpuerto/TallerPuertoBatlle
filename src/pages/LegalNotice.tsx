
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const LegalNotice = () => {
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
            <h1 className="text-4xl font-bold text-taller-blue">Avís Legal</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Dades identificatives</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p><strong>Denominació social:</strong> Taller Puerto Batlle</p>
                <p><strong>Activitat:</strong> Reparació i manteniment de vehicles industrials</p>
                <p><strong>Telèfon:</strong> 972 82 09 05</p>
                <p><strong>Email:</strong> puertobatlle@hotmail.com</p>
                <p><strong>Ubicació:</strong> Santa Coloma de Farners</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Objecte</h2>
              <p className="text-gray-700 mb-4">
                Aquest lloc web té com a objectiu informar sobre els serveis de reparació i manteniment de vehicles industrials que ofereix Taller Puerto Batlle, amb més de 50 anys d'experiència en el sector.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Condicions d'ús</h2>
              <p className="text-gray-700 mb-4">
                L'accés i ús d'aquest lloc web atribueix la condició d'usuari i implica l'acceptació de totes les condicions incloses en aquest avís legal.
              </p>
              <p className="text-gray-700 mb-4">
                L'usuari es compromet a utilitzar el lloc web de conformitat amb la llei i el present avís legal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Propietat intel·lectual</h2>
              <p className="text-gray-700 mb-4">
                Tots els continguts d'aquest lloc web, incloent-hi textos, imatges, marques i logotips, són propietat de Taller Puerto Batlle o es disposa de les corresponents llicències d'ús.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Responsabilitat</h2>
              <p className="text-gray-700 mb-4">
                Taller Puerto Batlle no es fa responsable dels danys que puguin derivar-se de l'ús incorrecte d'aquest lloc web o de la interrupció del funcionament del mateix.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Modificacions</h2>
              <p className="text-gray-700 mb-4">
                Taller Puerto Batlle es reserva el dret de modificar aquest avís legal en qualsevol moment. Es recomana revisar-lo periòdicament.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Llei aplicable i jurisdicció</h2>
              <p className="text-gray-700 mb-4">
                Aquest avís legal es regeix per la llei espanyola. Per a la resolució de qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals de Girona.
              </p>
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

export default LegalNotice;
