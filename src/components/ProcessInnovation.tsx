import React from 'react'
import { Network, Shield, Clock } from 'lucide-react'

const ProcessInnovation: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-slate-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-slate-500/5 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: '20s' }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-in slide-in-from-top duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300 animate-pulse">Proceso de Trabajo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Metodología probada que garantiza resultados excepcionales en cada proyecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {/* Step 1 */}
          <div className="group relative animate-in slide-in-from-bottom duration-1000">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Análisis</h3>
              <p className="text-gray-300 text-sm">Evaluamos tu infraestructura actual y identificamos oportunidades de mejora</p>
              {/* Animated Progress Bar */}
              <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-300"></div>
              </div>
            </div>
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></div>
          </div>

          {/* Step 2 */}
          <div className="group relative animate-in slide-in-from-bottom duration-1000 delay-100">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Diseño</h3>
              <p className="text-gray-300 text-sm">Creamos una solución personalizada que se adapta perfectamente a tus necesidades</p>
              <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-slate-500 to-slate-400 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-300"></div>
              </div>
            </div>
            <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-500 to-transparent"></div>
          </div>

          {/* Step 3 */}
          <div className="group relative animate-in slide-in-from-bottom duration-1000 delay-200">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Implementación</h3>
              <p className="text-gray-300 text-sm">Ejecutamos el proyecto con precisión, minimizando interrupciones en tu operación</p>
              <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-600 to-orange-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-300"></div>
              </div>
            </div>
            <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-600 to-transparent"></div>
          </div>

          {/* Step 4 */}
          <div className="group relative animate-in slide-in-from-bottom duration-1000 delay-300">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Soporte</h3>
              <p className="text-gray-300 text-sm">Brindamos mantenimiento continuo y soporte 24/7 para garantizar el óptimo funcionamiento</p>
              <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-slate-700 to-slate-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Stats with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group animate-in slide-in-from-bottom duration-1000 delay-400">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-500/30 group-hover:scale-110 transition-transform duration-500">
                <Network className="w-12 h-12 text-orange-400 group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full animate-ping"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">99.9%</h3>
            <p className="text-gray-300">Tiempo de Actividad</p>
          </div>

          <div className="text-center group animate-in slide-in-from-bottom duration-1000 delay-500">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-500/20 to-slate-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-500/30 group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-12 h-12 text-slate-400 group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-transparent rounded-full animate-ping delay-500"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-slate-400 transition-colors duration-300">100%</h3>
            <p className="text-gray-300">Seguridad Garantizada</p>
          </div>

          <div className="text-center group animate-in slide-in-from-bottom duration-1000 delay-600">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600/20 to-orange-700/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-orange-600/30 group-hover:scale-110 transition-transform duration-500">
                <Clock className="w-12 h-12 text-orange-400 group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent rounded-full animate-ping delay-1000"></div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">24/7</h3>
            <p className="text-gray-300">Soporte Técnico</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessInnovation
