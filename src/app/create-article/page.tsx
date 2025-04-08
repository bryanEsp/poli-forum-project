import { FaFileUpload } from "react-icons/fa";

const FormularioAgregarArticulo = () => {
    return (
        <div className="max-w-xl mx-auto bg-white shadow-2xl p-8 rounded-3xl mt-20 mb-20 base-shadow">
            <h2 className="text-lg font-bold mb-2 text-black">Agregar Artículo</h2>
            <p className="text-sm text-gray-800 mb-6">
                Completa la siguiente información para agregar un nuevo artículo al sistema.
            </p>

            <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1">Título:</label>
                <input
                    type="text"
                    placeholder="Ej. Cómo cuidar tu motocicleta"
                    className="w-full border border-red-300 px-4 py-2 rounded-full text-sm outline-none placeholder:text-gray-400"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1">Imagen:</label>

                <label className="w-full flex flex-col items-center justify-center px-4 py-8 bg-white text-red-500 border border-red-300 rounded-xl cursor-pointer hover:bg-red-50 transition">
                    <FaFileUpload className="text-3xl mb-2" />
                    <span className="text-sm font-medium">Subir Imagen</span>
                    <input type="file" accept="image/*" className="hidden" />
                </label>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-1">Contenido:</label>
                <textarea
                    rows={5}
                    placeholder="Escribe aquí el contenido completo del artículo..."
                    className="w-full border border-red-300 px-4 py-2 rounded-xl text-sm outline-none resize-none placeholder:text-gray-400"
                ></textarea>
            </div>

            <div className="flex justify-center">
                <button className="bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 hover:border text-white font-semibold py-2 px-20 rounded-full transition cursor-pointer">
                    Publicar
                </button>
            </div>
        </div>
    );
};

export default FormularioAgregarArticulo;
