import React from 'react'

const stats = [
  {
    id: 1,
    value: '1418',
    label: 'Clientes Satisfechos',
    textColor: 'text-orange-500',
    gradient: 'from-orange-500 to-orange-300',
    bgHover: 'bg-orange-500/20',
    delay: 'delay-0',
  },
  {
    id: 2,
    value: '153',
    label: 'Proyectos Completados',
    textColor: 'text-slate-600',
    gradient: 'from-slate-600 to-slate-400',
    bgHover: 'bg-slate-500/20',
    delay: 'delay-200',
  },
  {
    id: 3,
    value: '15+',
    label: 'Años de Experiencia',
    textColor: 'text-orange-500',
    gradient: 'from-orange-500 to-orange-300',
    bgHover: 'bg-orange-500/20',
    delay: 'delay-400',
  },
]

const Stats: React.FC = () => (
  <section id="stats-section" className="py-16 bg-white/50 relative overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-slate-50/50"></div>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-slate-500 to-orange-500 animate-pulse"></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map(({ id, value, label, textColor, gradient, bgHover, delay }) => (
          <div
            key={id}
            className="space-y-2 group hover:scale-110 transition-all duration-500 cursor-pointer"
          >
            <div className="relative">
              <div
                className={`text-4xl font-bold ${textColor} animate-in zoom-in duration-1000 ${delay}`}
              >
                {value}
              </div>
              <div
                className={`absolute inset-0 ${bgHover} rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
            </div>
            <div
              className={`text-gray-600 group-hover:${textColor.replace('text-', 'text-')} transition-colors duration-300`}
            >
              {label}
            </div>
            <div
              className={`w-16 h-1 bg-gradient-to-r ${gradient} mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Stats
