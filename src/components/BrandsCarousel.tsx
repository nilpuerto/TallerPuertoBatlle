import React from "react";
import "../index.css";

export const BrandsCarousel = () => {
  const brands = [
    { name: "Mercedes-Benz", image: "/fotos/eb3d0704-09db-4240-96e8-67808c3b6dca.png" },
    { name: "Volvo", image: "/fotos/d6c4574c-16a8-4f83-88e2-d846e154d548.png" },
    { name: "Scania", image: "/fotos/12cad3f4-724c-418d-9552-30054aae070f.png" },
    { name: "MAN", image: "/fotos/69c7647e-bc0e-42bf-81c7-4a6af7e289ef.png" },
    { name: "DAF", image: "/fotos/cba32cc6-6eed-4a0e-a6bc-700e572443b1.png" },
    { name: "Iveco", image: "/fotos/9842a0c7-8c2c-433b-9515-42eead56e733.png" },
    { name: "Renault Trucks", image: "/fotos/28bef152-f3db-4010-a6ab-082d30213ec7.png" },
    { name: "Mitsubishi", image: "/fotos/8c2b5875-0358-4785-bab7-77449ce0a9d1.png" },
    { name: "Isuzu", image: "/fotos/a617054c-1f9f-4f16-b9e7-b90ff18a6166.png" },
    { name: "Hino", image: "/fotos/b91cd487-e3d7-4c79-ab28-0f6739fbeb39.png" },
    { name: "Nissan", image: "/fotos/0a6072ae-f6fe-4925-ab1b-03342fe21ab6.png" },
    { name: "Renault", image: "/fotos/585fd010-ac02-44ca-9f64-6e8b69296bf5.png" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="mb-12">
        <h3 className="text-center text-3xl font-semibold text-gray-800 mb-2 animate-fade-in">
          Treballem amb totes les marques
        </h3>
        <p className="text-center text-gray-600 animate-fade-in-up">
          Especialistes en vehicles industrials de qualsevol marca
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex md:animate-slide-infinite animate-slide-mobile-ultra-fast min-w-max">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex flex-col items-center text-center group hover:scale-110 transition-transform duration-300"
            >
              <div className="w-48 h-32 mb-2 opacity-60 group-hover:opacity-80 transition-opacity flex items-center justify-center p-6">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};