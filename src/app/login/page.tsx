import React from 'react';

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white mt-10 mb-40">
            <img src="/storage/img/logo2.svg" alt="Logo FORNM" className="w-60 mb-4" />

            <div className="bg-[#333] text-white p-8 rounded-lg shadow-md w-full max-w-md border border-gray-400 ">
                <h2 className="text-xl font-bold mb-1">Inicio de sesión</h2>
                <p className="text-sm mb-6 text-gray-300">Inicie sesión con tus datos de usuario</p>

                <label className="text-sm font-semibold">Email</label>
                <input
                    type="email"
                    placeholder="correo@gmail.com"
                    className="w-full bg-transparent border border-red-500 text-sm px-4 py-2 rounded-full my-2 outline-none placeholder:text-gray-300"
                />

                <label className="text-sm font-semibold mt-4">Contraseña</label>
                <input
                    type="password"
                    placeholder="Introduce tu contraseña"
                    className="w-full bg-transparent border border-red-500 text-sm px-4 py-2 rounded-full my-2 outline-none placeholder:text-gray-300"
                />

                <button className="w-full py-2 mt-6 rounded-full text-white font-semibold bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 transition">
                    Inicia sesión
                </button>

                <p className="text-center text-sm mt-6 text-gray-300">
                    ¿No tienes cuenta?{' '}
                    <span className="text-white font-semibold hover:underline cursor-pointer">
                        Regístrate
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
