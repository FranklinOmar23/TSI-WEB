import React from 'react'
import {
  Network,
  Shield,
  Headphones,
  Database,
  Globe,
  Users,
} from 'lucide-react'
import type { Service } from '../data/services'

import redesImg from '../assets/Redes de Data y Fibra Óptica.jpg'
import cctvImg from '../assets/Vigilancia CCTV y Control de Acceso.jpg'
import voipImg from '../assets/Telefonía VoIP.jpg'
import gestionImg from '../assets/Gestión Informática.webp'
import erpImg from '../assets/SoftwareERPyDiseñoWeb.jpg'
import consultoriaImg from '../assets/descarga.webp'

export type ServicesGridProps = {
  data: Record<string, Service>
  onSelect: (key: string) => void
}

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  redes: Network,
  cctv: Shield,
  voip: Headphones,
  gestion: Database,
  erp: Globe,
  consultoria: Users,
}

const imageMap: Record<string, string> = {
  redes: redesImg,
  cctv: cctvImg,
  voip: voipImg,
  gestion: gestionImg,
  erp: erpImg,
  consultoria: consultoriaImg,
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ data, onSelect }) => (
  <section id="servicios" className="py-20 px-4 relative overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/50"></div>
    <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-40 h-40 bg-slate-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

    <div className="container mx-auto relative z-10">
      <div className="text-center mb-16 animate-in slide-in-from-top duration-1000">
        <h2 className="text-4xl font-bold text-slate-700 mb-4 group cursor-pointer">
          Nuestros <span className="text-orange-500 group-hover:animate-pulse">Servicios</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto hover:text-gray-800 transition-colors duration-300">
          Ofrecemos soluciones tecnológicas completas para impulsar el crecimiento de tu empresa
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-slate-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(data).map(([key, service], idx) => {
          const Icon = iconMap[key]
          const imgSrc = imageMap[key]
          return (
            <div
              key={key}
              className={`group bg-white/80 backdrop-blur-sm border-0 rounded-2xl overflow-hidden relative animate-in slide-in-from-bottom duration-1000 delay-${idx * 100} hover:scale-105 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 cursor-pointer`}
              onClick={() => onSelect(key)}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 to-blue-600/5 transition-opacity duration-500"></div>
              {/* Service Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={imgSrc}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="relative z-10 p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-300">
                  {Icon && <Icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="w-full text-center text-orange-500 font-medium py-2 border border-orange-200 rounded-lg hover:bg-orange-50 transition-colors duration-300">
                  Ver más detalles
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default ServicesGrid
