import { FaStar, FaRegStar } from 'react-icons/fa';

const MotoDetalle = () => {
    const moto = {
        nombre: 'Fz - 250 Naked',
        marca: 'Suzuki',
        tipo: 'Naked',
        origen: 'China',
        velocidad: '190 km/h',
        cilindraje: '399 cc',
        torque: '38 Nm a 8,000 rpm',
        consumo: '38 Nm a 8,000 rpm',
        precio: 12200000,
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    };

    const reseñas = [
        { autor: 'Luis', estrellas: 4, texto: 'Lorem ipsum dolor sit amet...' },
        { autor: 'Brian', estrellas: 5, texto: 'Lorem ipsum dolor sit amet...' },
        { autor: 'Axel', estrellas: 2, texto: 'Lorem ipsum dolor sit amet...' },
    ];

    const renderStars = (count: number) => {
        return Array.from({ length: 5 }).map((_, i) =>
            i < count ? (
                <FaStar key={i} className="text-[#f07373] text-sm" />
            ) : (
                <FaRegStar key={i} className="text-[#f07373] text-sm" />
            )
        );
    };

    return (
        <div className="p-6 max-w-6xl mx-auto font-[Roboto]">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                    <img src="storage/img/motos/moto2.svg" alt="Moto" className="w-full h-auto rounded-lg" />
                </div>

                <div className="w-full md:w-1/2">
                    <div className="flex justify-between mb-2">
                        <div>
                            <h2 className="text-xl font-semibold text-black">{moto.nombre}</h2>
                            <p className="text-sm text-gray-800">
                                <strong>Marca:</strong> {moto.marca}
                            </p>
                            <p className="text-sm text-gray-800">
                                <strong>Tipo:</strong> {moto.tipo}
                            </p>
                        </div>
                        <p className="text-sm text-gray-800">
                            <strong>Origen:</strong> {moto.origen}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 mt-6 gap-y-6 text-center text-[#f07373] font-semibold text-sm">
                        <div>
                            <img src="storage/icon/motos/velocimetro.svg" className="mx-auto w-16 mb-1" />
                            <p className='text-xl'>{moto.velocidad}</p>
                            <span className="block text-gray-500 text-2xl">Velocidad Máxima</span>
                        </div>
                        <div>
                            <img src="storage/icon/motos/cilindraje.svg" className="mx-auto w-16 mb-1" />
                            <p className='text-xl'>{moto.cilindraje}</p>
                            <span className="block text-gray-500 text-2xl">Cilindraje</span>
                        </div>
                        <div>
                            <img src="storage/icon/motos/torque.svg" className="mx-auto w-16 mb-1" />
                            <p className='text-xl'>{moto.torque}</p>
                            <span className="block text-gray-500 text-2xl">Torque</span>
                        </div>
                        <div>
                            <img src="storage/icon/motos/consumo.svg" className="mx-auto w-16 mb-1" />
                            <p className='text-xl'>{moto.consumo}</p>
                            <span className="block text-gray-500 text-2xl">Consumo</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <p className="text-[#f07373] font-bold text-2xl mt-4">${moto.precio.toLocaleString()}</p>

                <div className="w-full grid grid-cols-2 mt-4">
                    <div>
                        <h3 className="font-bold text-sm text-black">Descripción</h3>
                        <p className="text-sm text-gray-800 mt-1">{moto.descripcion}</p>
                    </div>

                    <div className="flex justify-end items-start gap-x-3">
                        <button className="bg-[#f07373] text-white font-semibold py-2 px-14 rounded-full shadow-md hover:bg-[#e25f5f] transition hover:cursor-pointer">
                            Ver Página Oficial
                        </button>
                        <button className="bg-white text-[#f07373] font-semibold py-2 px-14 rounded-full border border-[#f07373] shadow-md hover:bg-[#ffe5e5] transition hover:cursor-pointer">
                            Comentar
                        </button>
                    </div>
                </div>
            </div>


            <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
                <div className="bg-white p-4 shadow-md rounded-xl w-96">
                    <h4 className="font-bold text-sm text-black mb-3 text-center">Valoración</h4>
                    <ul className="text-sm space-y-2">
                        {[5, 4, 3, 2, 1].map((n, idx) => (
                            <li key={n} className="flex items-center gap-2">
                                <span className="w-4">{n}</span>
                                <FaStar className="text-[#f07373]" />
                                <div className="relative bg-[#F7C6C6] h-2 w-60 rounded-full overflow-hidden">
                                    <div
                                        className="absolute h-2 bg-[#f07373] rounded-full"
                                        style={{ width: `${(5 - idx) * 20}%` }}
                                    ></div>
                                </div>
                                <span className="text-xs text-gray-700">{12 - idx * 2}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 shadow-md rounded-xl max-h-[270px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#F08080] scrollbar-track-gray-100">
                    <h4 className="font-bold text-sm mb-3 text-black">Reseñas</h4>
                    <div className="space-y-4">
                        {reseñas.map((r, idx) => (
                            <div key={idx} className="text-sm">
                                <p className="font-bold text-[#f07373]">{r.autor}</p>
                                <div className="flex gap-1 mb-1">{renderStars(r.estrellas)}</div>
                                <p className="text-gray-700 text-xs">{r.texto}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MotoDetalle;
