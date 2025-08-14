import React from 'react'

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y descripción */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">TSI</span>
            </div>
            <h3 className="text-lg font-bold">TSI Dominicana</h3>
          </div>
          <p className="text-sm text-gray-400">
            Transformando la infraestructura tecnológica de las empresas dominicanas desde hace más de 15 años.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="font-semibold mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Redes de Data y Fibra Óptica</li>
            <li>Vigilancia CCTV</li>
            <li>Telefonía VoIP</li>
            <li>Gestión Informática</li>
            <li>Software ERP</li>
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="font-semibold mb-4">Empresa</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Nosotros</li>
            <li>Proyectos</li>
            <li>Clientes</li>
            <li>Carreras</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="font-semibold mb-4">Contacto</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <p>Santo Domingo, RD</p>
            <p>+1 (809) 595-9437</p>
            <p>info@tsi.com.do</p>
            <p>tsi.com.do</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        &copy; 2024 TSI Dominicana. Todos los derechos reservados.
      </div>
    </div>
  </footer>
)

export default Footer
