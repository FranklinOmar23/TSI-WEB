import React from 'react'
import { Check } from 'lucide-react'
import TSI from '../assets/TSI.png' // Import TSI logo or image

 // define type if needed

const features: Feature[] = [
  { title: 'Experiencia Comprobada', text: 'Más de 1400 clientes satisfechos y 153 proyectos exitosos' },
  { title: 'Soporte 24/7', text: 'Atención técnica especializada disponible todo el tiempo' },
  { title: 'Tecnología de Vanguardia', text: 'Utilizamos las últimas tecnologías y mejores prácticas del mercado' },
]

const WhyChoose: React.FC = () => (
  <section id="nosotros" className="py-20 bg-white/50 relative overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0">
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-slate-100/50 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagen y Badge */}
        <div className="relative animate-in slide-in-from-left duration-1000 group">
          <img
            src={TSI}
            alt="Equipo TSI Dominicana"
            className="rounded-2xl shadow-xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer group/badge">
            <div className="text-center">
              <div className="text-2xl font-bold group-hover/badge:animate-pulse">15+</div>
              <div className="text-sm">Años de experiencia</div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-500/20 rounded-full animate-ping"></div>
          <div className="absolute -top-4 -left-4 w-6 h-6 bg-slate-500/20 rounded-full animate-ping delay-500"></div>
        </div>

        {/* Texto y lista */}
        <div className="animate-in slide-in-from-right duration-1000">
          <h2 className="text-4xl font-bold text-slate-700 mb-6 group cursor-pointer">
            ¿Por qué elegir <span className="text-orange-500 group-hover:animate-pulse">TSI Dominicana</span>?
          </h2>
          <p className="text-lg text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
            Con más de 15 años de experiencia en el mercado dominicano, somos líderes en soluciones tecnológicas
            integrales. Nuestro equipo de expertos se dedica a transformar la infraestructura tecnológica de las
            empresas.
          </p>
          <div className="space-y-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 group hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WhyChoose
