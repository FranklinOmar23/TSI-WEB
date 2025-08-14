// src/components/Navbar.tsx
import React from 'react'
import { Phone } from 'lucide-react'
import LOGO from '../assets/descarga.webp'

const Navbar: React.FC = () => {
    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo ampliado y nombre */}
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 md:w-24 md:h-20 lg:w-28 lg:h-28">
                        <img
                            src={LOGO}
                            alt="TSI Dominicana"
                            className="object-cover rounded-full shadow-md w-full h-full"
                        />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-orange-500"><span className="text-2xl font-bold text-gray-700">TSI</span> Dominicana</h1>
                        <p className="text-sm text-gray-500">Soluciones Tecnológicas</p>
                    </div>
                </div>

                {/* Menú de navegación */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a
                        href="#servicios"
                        className="text-gray-700 hover:text-orange-500 transition-colors"
                    >
                        Servicios
                    </a>
                    <a
                        href="#nosotros"
                        className="text-gray-700 hover:text-orange-500 transition-colors"
                    >
                        Nosotros
                    </a>
                    <a
                        href="#contacto"
                        className="text-gray-700 hover:text-orange-500 transition-colors"
                    >
                        Contacto
                    </a>
                </nav>

                {/* Contacto rápido y CTA */}
                <div className="hidden md:flex items-center space-x-6">
                    <a
                        href="tel:+18095550123"
                        className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                    >
                        <Phone className="w-5 h-5 mr-1" /> +1 (809) 595-9437
                    </a>
                    <a
                        href="#contacto"
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                        Solicitar Consulta
                    </a>
                </div>

                {/* Botón hamburguesa móvil (opcional) */}
                <button className="md:hidden text-gray-700 focus:outline-none">
                    {/* aquí podrías poner un icono de menú */}
                    <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-700 mb-1"></span>
                    <span className="block w-6 h-0.5 bg-gray-700"></span>
                </button>
            </div>
        </header>
    )

}

export default Navbar
