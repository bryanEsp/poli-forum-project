import React from 'react';

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
    return (
        <header className="bg-zinc-900 text-white py-3 px-6 shadow-md flex items-center justify-between">
            <div className="flex items-center">
                <img src="/storage/img/logo.svg" alt="Logo" className="w-14 h-14" />
            </div>

            <div className="flex items-center gap-x-6">
                <nav className="flex space-x-6 text-sm font-medium">
                    <a href="#" className="hover:text-red-500 transition">Inicio</a>
                    <a href="#" className="hover:text-red-500 transition">Motos</a>
                    <a href="#" className="hover:text-red-500 transition">Foro</a>
                    <a href="#" className="hover:text-red-500 transition">Contáctenos</a>
                    {isLoggedIn && (
                        <a href="#" className="hover:text-red-500 transition">Mi perfil</a>
                    )}
                </nav>

                <div>
                    {isLoggedIn ? (
                        <button className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded-full hover:bg-red-600 hover:text-white transition">
                            Cerrar Sesión
                            <img src="/storage/icon/log-out.svg" alt="Cerrar sesión" className="w-4 h-4" />
                        </button>
                    ) : (
                        <button className="border border-red-500 text-red-500 px-3 py-1 rounded-full hover:bg-red-600 hover:text-white transition">
                            Iniciar Sesión
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;