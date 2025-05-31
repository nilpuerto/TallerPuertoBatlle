export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mailto =
    "mailto:puertobatlle@hotmail.com?subject=Consulta%20sobre%20reparaci%C3%B3%20de%20camions&body=Hola,%20m'agradaria%20fer%20una%20consulta%20sobre%20els%20vostres%20serveis%20de%20reparaci%C3%B3.";

  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden">
      {/* Versió mòbil */}
      <div className="md:hidden w-full h-full relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/fotos/3c86a73b-8ebb-4d39-870e-caa927372e4d.png')`
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          <div className="bg-white/95 rounded-lg p-6 shadow-lg">
            <h1 className="text-3xl font-black text-taller-blue mb-4 leading-tight">
              Taller Puerto Batlle
            </h1>
            <p className="text-lg text-gray-700 mb-6 font-semibold">
              Més de 50 anys d'experiència en reparació de camions
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-taller-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Els nostres serveis
              </button>
              <a
                href={mailto}
                className="border-2 border-taller-blue text-taller-blue hover:bg-taller-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Contacta'ns
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Versió desktop */}
      <div className="hidden md:block w-full h-full relative">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url('/fotos/3c86a73b-8ebb-4d39-870e-caa927372e4d.png')`,
            backgroundPosition: '60% center'
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        </div>
        <div className="absolute top-72 left-8 z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 animate-fade-in leading-tight drop-shadow-lg">
              Taller Puerto Batlle
            </h1>
            <p className="text-2xl lg:text-3xl text-white mb-8 animate-fade-in-up font-semibold drop-shadow-lg">
              Més de 50 anys d'experiència en reparació de camions
            </p>
            <div className="flex flex-col md:flex-row gap-6 mt-8">
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white hover:bg-gray-100 text-taller-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors animate-fade-in-up shadow-lg"
              >
                Els nostres serveis
              </button>
              <a
                href={mailto}
                className="border-2 border-white text-white hover:bg-white hover:text-taller-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors animate-fade-in-up text-center"
              >
                Contacta'ns
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};