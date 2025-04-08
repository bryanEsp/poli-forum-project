"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Paginator from '@/components/Paginator/Paginator';
import DealershipMap from '@/components/DealershipMap/DealershipMap';

const Home = () => {
  const [index, setIndex] = useState(5);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main className="flex-1">
        <section className="max-w-6xl mx-auto py-10 px-4">
          <h2
            className="text-4xl font-bold text-center mb-8"
            style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#455A64' }}
          >
            RECOMENDADAS
          </h2>

          <div className="relative flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 md:items-center md:justify-between gap-6">
            <div className="absolute top-0 bg-white px-4 py-1">
              <p
                className="font-bold text-3xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#455A64' }}
              >
                Kawasaki Ninja 400
              </p>
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-red-600 hover:text-red-800 text-2xl px-2">
              <img
                src="/storage/icon/arrow-left.svg"
                className="w-full max-w-md h-auto object-contain"
              />
            </button>

            <div className="grid grid-cols-2 gap-6 text-center w-full md:w-1/2 mt-6">
              {[
                { icon: "velocimetro", value: "190 km/h", label: "Velocidad Máxima" },
                { icon: "cilindraje", value: "399 cc", label: "Cilindraje" },
                { icon: "torque", value: "38 Nm a 8,000 rpm", label: "Torque" },
                { icon: "consumo", value: "38 Nm a 8,000 rpm", label: "Consumo" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <img
                    src={`/storage/icon/motos/${item.icon}.svg`}
                    alt={item.label}
                    className="mb-2 w-16"
                  />
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: "'Roboto', sans-serif", color: '#EF5350', opacity: 0.5 }}
                  >
                    {item.value}
                  </p>
                  <p
                    className="text-xl break-words"
                    style={{ fontFamily: "'Roboto', sans-serif", color: '#455A64', opacity: 0.68 }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center w-full md:w-1/2">
              <img
                src="/storage/img/motos/moto1.svg"
                className="w-full max-w-md h-auto object-contain"
              />
              <button className="bg-red-600 text-white mt-6 px-8 py-2 rounded-full hover:bg-red-700 transition">
                Ver más
              </button>
            </div>

            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-red-600 hover:text-red-800 text-2xl px-2">
              <img
                src="/storage/icon/arrow-right.svg"
                alt="Kawasaki Ninja 400"
                className="w-full max-w-md h-auto object-contain"
              />
            </button>
          </div>
          <Paginator
            total={5}
            activeIndex={2}
            showArrows={false}
            onChange={(i) => setIndex(i)}
          />
        </section>


        <section className="bg-gray-100 py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center mb-36"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#455A64' }}
            >
              MEJOR VALORADAS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center relative">
              {[1, 2, 3].map((item, index) => (
                <React.Fragment key={item}>
                  <div
                    className={`bg-white p-4 rounded shadow transition-transform duration-300 ${index === 1 ? 'shadow-xl -translate-y-28 relative z-10' : ''
                      }`}
                  >
                    <div className="flex justify-center">
                      <Image
                        src={`/storage/img/motos/moto${index + 2}.svg`}
                        alt="moto"
                        width={200}
                        height={150}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-red-500 mt-2 text-4xl" style={{ opacity: 0.5 }}>
                      ★★★★★
                    </div>
                    <button
                      className="mt-2 underline hover:text-xl hover:cursor-pointer"
                      style={{
                        color: '#EF5350',
                        opacity: 0.68,
                        fontFamily: "'Roboto', sans-serif",
                      }}
                    >
                      Ver más
                    </button>
                  </div>
                  {item === 2 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 top-full sm:top-[calc(50%+2.5rem)] z-0">
                      <Paginator
                        total={5}
                        activeIndex={index + 1}
                        showArrows={true}
                        onChange={(i) => setIndex(i)}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>


        <section className="py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#455A64' }}
            >
              ÚLTIMAS NOTICIAS/EVENTOS
            </h2>

            <div className="flex flex-col md:flex-row items-center bg-white shadow-2xl p-8 rounded-lg">
              <div className="flex justify-center items-center w-full md:w-1/3">
                <Image
                  src={`/storage/img/motos/moto2.svg`}
                  alt="evento"
                  width={260}
                  height={180}
                  className="object-contain"
                />
              </div>

              <div className="md:ml-8 mt-6 md:mt-0 w-full md:w-2/3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-800">¿MEJOR MOTO DEL MERCADO?</h3>
                  <span className="text-sm text-gray-500">20-04-2024</span>
                </div>

                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e
                  x ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>

                <button className="bg-red-400 text-white mt-4 px-24 py-1 rounded-full hover:bg-red-700 transition-all float-right">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-gray-100 py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#455A64' }}
              >CONCESIONARIOS</h2>
            <div className="mb-4 text-sm">
              <label htmlFor="marca" className="block mb-1">Seleccione tipo de concesionario:</label>
              <select id="marca" className="p-2 border rounded w-full md:w-1/3">
                <option>Honda Motos</option>
                <option>AKT</option>
                <option>Yamaha</option>
              </select>
            </div>
            <div className="w-full h-64 mt-4 rounded overflow-hidden">
              <DealershipMap />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
