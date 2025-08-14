import React from 'react'

const Hero: React.FC = () => {
  return (
<section className="relative py-20 px-4 overflow-hidden">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-orange-400 rounded-full animate-bounce"
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        ></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-slate-400 rounded-full animate-bounce"
          style={{ animationDelay: '1s', animationDuration: '4s' }}
        ></div>
        <div
          className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-orange-300 rounded-full animate-bounce"
          style={{ animationDelay: '2s', animationDuration: '5s' }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-2 h-2 bg-slate-300 rounded-full animate-bounce"
          style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}
        ></div>
        <div
          className="absolute bottom-60 left-20 w-1 h-1 bg-orange-500 rounded-full animate-bounce"
          style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}
        ></div>
      </div>

      {/* Background Banner */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-orange-500"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/90 to-orange-600/80"></div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-slate-500/20 rounded-full blur-lg animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-400/10 rounded-full blur-md animate-ping"></div>
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-slate-400/10 rounded-full blur-lg animate-ping delay-500"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-in slide-in-from-bottom duration-1000">
            Transformamos tu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 animate-pulse">
              {' '}Infraestructura Tecnológica
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-300">
            Somos expertos en redes de datos, fibra óptica, sistemas de seguridad y soluciones informáticas integrales
            para empresas en República Dominicana.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-1000 delay-500">
            <button className="relative overflow-hidden group bg-orange-500 text-white text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/25">
              <span className="relative z-10">Ver Nuestros Servicios</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button className="relative overflow-hidden group border border-white/30 bg-white/10 text-white text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/25">
              <span className="relative z-10">Solicitar Consulta Gratuita</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
