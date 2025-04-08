import React from 'react';

const ContactForm = () => {
    return (
        <div className="max-w-xl mx-auto bg-white shadow-2xl p-8 rounded-3xl mt-20 mb-20 base-shadow ">
            <h2 className="text-lg font-bold mb-2 text-black">Contáctanos</h2>
            <p className="text-sm text-gray-800 mb-6">
                En caso de que sigas teniendo la necesidad de contactarnos diligencia los siguientes datos
                para ponernos en contacto contigo lo más pronto posible:
            </p>

            <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1">Email:</label>
                <input
                    type="email"
                    placeholder="test@gmail.com"
                    className="w-full border border-red-300 px-4 py-2 rounded-full text-sm outline-none placeholder:text-gray-400"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold text-black mb-1">Asunto:</label>
                <input
                    type="text"
                    placeholder="Problemas con el producto, Afiliación, etc ...."
                    className="w-full border border-red-300 px-4 py-2 rounded-full text-sm outline-none placeholder:text-gray-400"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-1">Danos más detalles</label>
                <textarea
                    rows={4}
                    placeholder="Danos una descripción breve"
                    className="w-full border border-red-300 px-4 py-2 rounded-xl text-sm outline-none resize-none placeholder:text-gray-400"
                ></textarea>
            </div>

            <div className="flex justify-center">
                <button className="bg-red-600 hover:bg-white hover:text-red-600 hover:border-red-600 hover:border text-white font-semibold py-2 px-20 rounded-full transition cursor-pointer">
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default ContactForm;
