import React from 'react'
import { Award, Clock, Star } from 'lucide-react'
import TSI from '../assets/TSI.png'

const LeadershipSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-100 to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-slate-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-slate-200/30 to-orange-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-in slide-in-from-left duration-1000">
            <h2 className="text-4xl font-bold text-slate-700 mb-6 group cursor-pointer">
              <span className="text-orange-500 group-hover:animate-pulse">Líderes</span> en Tecnología Empresarial
            </h2>
            <p className="text-lg text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
              Desde nuestras modernas instalaciones en Santo Domingo, brindamos servicios tecnológicos de clase mundial
              a empresas de toda República Dominicana.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-2 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500" />
                <div className="font-semibold text-slate-700 group-hover:text-orange-600 transition-colors duration-300">Certificados</div>
                <div className="text-sm text-gray-600">ISO 9001:2015</div>
                <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"></div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500" />
                <div className="font-semibold text-slate-700 group-hover:text-orange-600 transition-colors duration-300">Disponibilidad</div>
                <div className="text-sm text-gray-600">24/7/365</div>
                <div className="w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 mt-2"></div>
              </div>
            </div>
          </div>
          <div className="relative animate-in slide-in-from-right duration-1000 group">
            <img
              src= {TSI}
              alt="Oficinas TSI Dominicana"
              className="rounded-2xl shadow-xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer group/rating">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current group-hover/rating:animate-spin" />
                <span className="font-semibold text-slate-700">4.9/5</span>
                <span className="text-sm text-gray-600">Satisfacción del cliente</span>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500/20 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-slate-500/20 rounded-full animate-ping delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadershipSection
