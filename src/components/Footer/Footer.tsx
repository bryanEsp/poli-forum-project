const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-900 text-white px-6 py-6 text-sm">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 md:gap-12">
                <div>
                    <h4 className="font-semibold mb-2">Forum</h4>
                    <p className="mb-2">Evento próximo: <span className="font-medium">Ruta al Desierto – 10 abril</span></p>

                    <p className="mb-2">Servicios:</p>
                    <div className="flex items-center gap-2 mb-1">
                        <img src="/storage/icon/message.svg" className="w-8 h-8" />
                        <a href="mailto:forum@forum.co" className="hover:text-red-400">forum@poli.edu.co</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/storage/icon/phone.svg" className="w-8 h-8" />
                        <span>1234567891011</span>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Redes Sociales</h4>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="border border-white rounded-full p-1 hover:text-red-400">
                            <img src="/storage/icon/instagram.svg" className="w-8 h-8" />
                        </a>
                        <a href="#" className="border border-white rounded-full p-1 hover:text-red-400">
                            <img src="/storage/icon/facebook.svg" className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-white rounded-full p-1 hover:bg-red-400 hover:text-white">
                            <img src="/storage/icon/youtube.svg" className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-zinc-700 mt-6 pt-4 text-xs flex flex-col md:flex-row justify-between gap-4">
                <p>Derechos reservados © 2025</p>
                <p>
                    <a href="#" className="hover:text-red-400">Política de privacidad</a> |{' '}
                    <a href="#" className="hover:text-red-400">Política de tratamiento de datos</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
