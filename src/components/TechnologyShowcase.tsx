import React from 'react'
import Hikvision from '../assets/Hikvision.webp'
import Dell from '../assets/Dell Technologies.jpg'
import Cisco from '../assets/Cisco Systems.jpg'
import AmazonAWS from '../assets/AWS.jpg'

const TechnologyShowcase: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-orange-50 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-slate-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-slate-200/10 rounded-full blur-3xl animate-spin"
                    style={{ animationDuration: '30s' }}
                ></div>
            </div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16 animate-in slide-in-from-top duration-1000">
                    <h2 className="text-4xl font-bold text-slate-700 mb-4 group cursor-pointer">
                        <span className="text-orange-500 group-hover:animate-pulse">Tecnología</span> de Vanguardia
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-gray-800 transition-colors duration-300">
                        Utilizamos las mejores herramientas y equipos del mercado para garantizar resultados excepcionales
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-slate-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 group cursor-pointer animate-in slide-in-from-bottom duration-1000">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                                src={Cisco}
                                alt="Equipos Cisco"
                                className="w-full h-32 object-cover group-hover:scale-125 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <h3 className="font-semibold text-slate-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">Cisco Systems</h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Equipos de red empresarial de clase mundial</p>
                        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-3"></div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 group cursor-pointer animate-in slide-in-from-bottom duration-1000 delay-100">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                                src={Hikvision}
                                alt="Cámaras Hikvision"
                                className="w-full h-32 object-cover group-hover:scale-125 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <h3 className="font-semibold text-slate-700 mb-2 group-hover:text-orange-600 transition-colors duration-300">Hikvision</h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Sistemas de videovigilancia inteligente</p>
                        <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-3"></div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 group cursor-pointer animate-in slide-in-from-bottom duration-1000 delay-200">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                                src={AmazonAWS}
                                alt="Microsoft Cloud"
                                className="w-full h-32 object-cover group-hover:scale-125 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <h3 className="font-semibold text-slate-700 mb-2 group-hover:text-blue-600 transition-colors duration-300">Amazon AWS</h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Soluciones en la nube empresarial</p>
                        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-3"></div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-4 group cursor-pointer animate-in slide-in-from-bottom duration-1000 delay-300">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                                src={Dell}
                                alt="Servidores Dell"
                                className="w-full h-32 object-cover group-hover:scale-125 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <h3 className="font-semibold text-slate-700 mb-2 group-hover:text-slate-600 transition-colors duration-300">Dell Technologies</h3>
                        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Servidores y almacenamiento empresarial</p>
                        <div className="w-full h-1 bg-gradient-to-r from-slate-500 to-slate-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-3"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologyShowcase
