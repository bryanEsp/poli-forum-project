"use client"
import { articles } from ".";
import { useRouter } from 'next/navigation';
import './foro.css';
const Foro = () => {
    const router = useRouter();

    return (
        <div className="px-8 py-4 w-11/12 m-auto">
            <h2 className="font-bold text-4xl mb-4 text-roboto">Foro</h2>
            <div className="flex justify-between items-center mb-10">
                <input
                    type="text"
                    placeholder="Buscador..."
                    className="border border-[#E10600] rounded-full px-4 py-1 w-full max-w-sm text-sm outline-none placeholder-[#AEB2B5]"
                />
                <a href="/create-article" className="text-[#E10600] font-bold text-sm ml-4">
                    + Agregar Artículo
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {articles.map((articulo, index) => (
                    <div
                        onClick={(): void => { router.push('/article') }}
                key={index}
                id="cardShadow"
                className="bg-white rounded-md overflow-hidden transition duration-300 hover:opacity-70 hover:cursor-pointer"
                    >
                <div className="h-44 flex justify-center items-center bg-white">
                    <img
                        src={articulo.img}
                        alt={articulo.title}
                        className="object-contain h-full"
                    />
                </div>
                <div className="p-3">
                    <h3 className="font-semibold text-md">{articulo.title}</h3>
                    <p className="text-xs text-gray-600">
                        Autor:{" "}
                        <span className="text-[#E10600] font-bold">{articulo.author}</span>
                    </p>
                    <p className="text-xs mt-1">{articulo.description}</p>
                </div>
            </div>
                ))}
        </div>
        </div >
    );
};

export default Foro;
