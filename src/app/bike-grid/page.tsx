import Image from 'next/image';
import { Motos } from '.';
import './bike-grid.css';

export default function MotoGrid() {
    return (
        <section id='bike-grid' className="flex flex-col lg:flex-row gap-6 px-4 py-8 max-w-7xl mx-auto">
            <aside className="w-full lg:w-1/4 bg-white p-4 rounded shadow-2xl">
                <h3 className="font-semibold text-gray-700 mb-2">Ocultar Filtros</h3>
                <div>
                    <h4 className="mb-2 font-semibold">Marca</h4>
                    {['Honda', 'Suzuki', 'Yamaha', 'Hero', 'AKT'].map((marca) => (
                        <div key={marca} className="flex items-center mb-1">
                            <input
                                type="radio"
                                name="marca"
                                id={`marca-${marca}`}
                                className="w-4 h-4 border border-[rgba(225,6,0,0.68)] text-[rgba(225,6,0,0.68)] focus:ring-[rgba(225,6,0,0.68)] accent-[rgba(225,6,0,0.68)]"
                            />
                            <label htmlFor={`marca-${marca}`} className="ml-2">
                                {marca}
                            </label>
                        </div>
                    ))}
                </div>
                <div>
                    <h4 className="mb-2 font-semibold">Tipo</h4>
                    {[
                        'Todo propósito',
                        'Deportiva',
                        'Naked',
                        'Automática',
                        'Scooter',
                        'Enduro',
                        'Adventure',
                        'Touring',
                        'Cruiser',
                    ].map((tipo) => (
                        <div key={tipo} className="flex items-center mb-1">
                            <input
                                type="radio"
                                name="tipo"
                                id={`tipo-${tipo}`}
                                className="w-4 h-4 border border-[rgba(225,6,0,0.68)] text-[rgba(225,6,0,0.68)] focus:ring-[rgba(225,6,0,0.68)] accent-[rgba(225,6,0,0.68)]"
                            />
                            <label htmlFor={`tipo-${tipo}`} className="ml-2">
                                {tipo}
                            </label>
                        </div>
                    ))}
                </div>
            </aside>

            <div className="flex-1">
                <h1
                    className="text-3xl font-bold mb-8 text-roboto-red"
                >Motos</h1>
                <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <input
                        type="text"
                        placeholder="Buscador..."
                        className="border border-red-500 rounded-full px-4 py-1 w-full sm:w-1/2 mb-2 sm:mb-0"
                    />

                    <div className="flex items-center gap-2">
                        <label className="text-sm">Ordenar por:</label>
                        <select className="text-sm border rounded p-1">
                            <option>Relevancia</option>
                            <option>Precio</option>
                            <option>Marca</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Motos.map((moto, index) => (
                        <div
                            key={index}
                            className="bg-[#CFCFCF] rounded overflow-hidden shadow-lg"
                        >
                            <div className="h-56 flex justify-center items-center bg-white">
                                <Image
                                    src={moto.img}
                                    alt={moto.nombre}
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-1 leading-tight">
                                <h3 className="font-semibold text-gray-900 text-md">{moto.nombre}</h3>
                                <p className="text-red-600 font-bold text-md">
                                    ${moto.precio.toLocaleString()}
                                </p>
                                <p className="text-md text-gray-800">
                                    Marca: <strong>{moto.marca}</strong>
                                </p>
                                <p className="text-md text-gray-800">
                                    Cilindraje: <strong>{moto.cilindraje}</strong>
                                </p>
                                <a
                                    href='/bike-details'
                                    className="text-[#E10600] bg-transparent px-2 py-2 font-bold float-right text-xl hover:cursor-pointer hover:underline"
                                    style={{ opacity: 0.9 }}
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
