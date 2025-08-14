import React from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Service } from '../data/services'


export type ModalServiceProps = {
  service: Service
  currentImageIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  onSelectImage: (index: number) => void
}

const ModalService: React.FC<ModalServiceProps> = ({
  service,
  currentImageIndex,
  onClose,
  onPrev,
  onNext,
  onSelectImage,
}) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
        <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-6">
        {/* Galería de imágenes */}
        <div className="relative mb-6">
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={service.images[currentImageIndex]}
              alt={`${service.title} ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Flechas */}
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {service.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => onSelectImage(idx)}
                className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Descripción */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción del Servicio</h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>

        {/* Características */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">¿Qué incluye?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.features.map((feat, i) => (
              <div key={i} className="flex items-start space-x-2">
                <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-500 text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario rápido */}
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Solicita tu Cotización</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Servicio Seleccionado</label>
              <input
                type="text"
                value={service.title}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje Adicional (Opcional)</label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Cuéntanos más sobre tu proyecto..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Enviar Solicitud de Cotización
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default ModalService
