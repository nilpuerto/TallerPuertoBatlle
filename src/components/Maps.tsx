export const Maps = () => (
  <section id="ubicacio" className="py-16 bg-white">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      {/* Google Map */}
      <div className="w-full md:w-2/3 h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Ubicació Taller Puerto Batlle"
          src="https://www.google.com/maps?q=Ctra.+de+Sils,+82,+17430+Santa+Coloma+de+Farners,+Girona&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Explicació */}
      <div className="w-full md:w-1/3">
        <h2 className="text-3xl font-bold text-taller-blue mb-4">On Som?</h2>
        <p className="text-gray-700 text-lg mb-2">
          Ens trobaràs a la <strong>Ctra. de Sils, 82, 17430 Santa Coloma de Farners, Girona</strong>.
        </p>
        <p className="text-gray-600">
          El nostre taller està situat a una zona fàcil d'accedir, amb aparcament per a vehicles industrials i camions. Vine a veure'ns per qualsevol consulta o reparació!
        </p>
      </div>
    </div>
  </section>
);