// src/components/ContactSection.tsx
import React, { useState } from 'react'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

type FormState = {
  nombre: string
  empresa: string
  email: string
  telefono: string
  servicio: string
  mensaje: string
}

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('ok')
      setForm({ nombre: '', empresa: '', email: '', telefono: '', servicio: '', mensaje: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-orange-50"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-slate-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-16 animate-in slide-in-from-top duration-1000">
          <h2 className="text-4xl font-bold text-slate-700 mb-4 group cursor-pointer">
            <span className="group-hover:text-orange-500 transition-colors duration-300">
              Contáctanos
            </span>
          </h2>
          <p className="text-xl text-slate-600 hover:text-slate-800 transition-colors duration-300">
            Estamos listos para ayudarte con tu próximo proyecto tecnológico
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-slate-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Lado izquierdo: mapa + datos de contacto */}
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            {/* Mapa incrustado */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg mb-6">
              <iframe
                title="Mapa TSI Dominicana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4339058632977!2d-69.85879892606458!3d18.509284069521424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8628fc7c1073%3A0x25b27ad7076a2e5c!2sTSI%20Dominicana!5e0!3m2!1ses-419!2sdo!4v1754584463048!5m2!1ses-419!2sdo"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Dirección */}
            <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <MapPin className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  Dirección
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Calle Diego de Ocampo #15, Altos de Cancino, Santo Domingo, República Dominicana
                </p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Phone className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  Teléfono
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  +1 (809) 555-0123
                </p>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  +1 (829) 555-0124
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Mail className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-slate-600 transition-colors duration-300">
                  Email
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  info@tsi.com.do
                </p>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  ventas@tsi.com.do
                </p>
              </div>
            </div>

            {/* Sitio Web */}
            <div className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Globe className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  Sitio Web
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  www.tsi.com.do
                </p>
              </div>
            </div>
          </div>

          {/* Lado derecho: formulario */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-6 animate-in slide-in-from-right duration-1000 space-y-4"
          >
            <h3 className="text-2xl font-semibold group cursor-pointer">
              <span className="group-hover:text-orange-500 transition-colors duration-300">
                Solicita una Cotización
              </span>
            </h3>
            <p className="text-gray-600 mb-6">
              Completa el formulario y te contactaremos en menos de 24 horas
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                />
              </div>
              {/* Empresa */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa
                </label>
                <input
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Servicio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Servicio de Interés
              </label>
              <select
                name="servicio"
                value={form.servicio}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Selecciona un servicio</option>
                <option>Redes de Data y Fibra Óptica</option>
                <option>Vigilancia CCTV y Control de Acceso</option>
                <option>Telefonía VoIP</option>
                <option>Gestión Informática</option>
                <option>Software ERP y Diseño Web</option>
                <option>Consultoría Tecnológica</option>
              </select>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                name="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Describe tu proyecto o necesidades..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition disabled:opacity-50"
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Solicitud'}
            </button>

            {/* Mensajes de estado */}
            {status === 'ok' && (
              <p className="text-green-600 mt-2">¡Enviado con éxito!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 mt-2">
                Error al enviar. Intenta de nuevo más tarde.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
