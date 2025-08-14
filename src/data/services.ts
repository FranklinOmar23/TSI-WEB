// src/data/services.ts

export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  images: string[]
}

export const servicesData: Record<string, Service> = {
  redes: {
    id: 'redes',
    title: 'Redes de Data y Fibra Óptica',
    description:
      'Diseñamos e implementamos infraestructuras de red robustas y escalables que garantizan conectividad de alta velocidad y confiabilidad para tu empresa. Nuestros servicios incluyen desde el análisis inicial hasta el mantenimiento continuo.',
    features: [
      'Cableado estructurado categoría 6A y 7',
      'Fibra óptica monomodo y multimodo',
      'Certificación y documentación completa',
      'Mantenimiento preventivo y correctivo',
      'Monitoreo 24/7 de la red',
      'Redundancia y alta disponibilidad',
    ],
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  cctv: {
    id: 'cctv',
    title: 'Vigilancia CCTV y Control de Acceso',
    description:
      'Protege tu empresa con sistemas de seguridad de última generación. Ofrecemos soluciones integrales que combinan videovigilancia inteligente con control de acceso biométrico para máxima seguridad.',
    features: [
      'Cámaras IP 4K con visión nocturna',
      'Control de acceso biométrico y por tarjetas',
      'Monitoreo remoto desde cualquier dispositivo',
      'Grabación en la nube con respaldo local',
      'Análisis inteligente de video',
      'Integración con sistemas de alarma',
    ],
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  voip: {
    id: 'voip',
    title: 'Telefonía VoIP',
    description:
      'Moderniza tu sistema de comunicaciones con nuestra solución VoIP empresarial. Reduce costos, aumenta la productividad y mantén a tu equipo conectado desde cualquier lugar.',
    features: [
      'Centralitas virtuales en la nube',
      'Llamadas ilimitadas nacionales e internacionales',
      'Integración con CRM y sistemas empresariales',
      'Aplicaciones móviles para iOS y Android',
      'Grabación automática de llamadas',
      'Reportes detallados de uso',
    ],
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  gestion: {
    id: 'gestion',
    title: 'Gestión Informática',
    description:
      'Deja la administración de tu infraestructura tecnológica en manos de expertos. Ofrecemos servicios completos de gestión IT para que te enfoques en hacer crecer tu negocio.',
    features: [
      'Soporte técnico 24/7 especializado',
      'Backup automático y recuperación de datos',
      'Seguridad informática multicapa',
      'Actualización y mantenimiento de sistemas',
      'Monitoreo proactivo de infraestructura',
      'Consultoría en transformación digital',
    ],
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  erp: {
    id: 'erp',
    title: 'Software ERP y Diseño Web',
    description:
      'Digitalizamos tu empresa con soluciones de software personalizadas y presencia web profesional. Desde sistemas ERP hasta tiendas online, creamos herramientas que impulsan tu crecimiento.',
    features: [
      'Sistemas ERP personalizados para tu industria',
      'Páginas web responsivas y optimizadas',
      'Tiendas online con pasarelas de pago',
      'Aplicaciones móviles nativas',
      'Integración con sistemas existentes',
      'Capacitación y soporte continuo',
    ],
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
  consultoria: {
    id: 'consultoria',
    title: 'Consultoría Tecnológica',
    description:
      'Acelera tu transformación digital con nuestro equipo de consultores especializados. Analizamos tu situación actual y diseñamos una hoja de ruta tecnológica alineada con tus objetivos de negocio.',
    features: [
      'Auditoría completa de infraestructura tecnológica',
      'Planificación estratégica de IT',
      'Capacitación especializada para tu equipo',
      'Optimización de procesos empresariales',
      'Evaluación de ciberseguridad',
      'Roadmap de transformación digital',
    ],
    images: [
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
      '/placeholder.svg?height=400&width=600',
    ],
  },
}
