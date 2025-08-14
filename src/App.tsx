// src/App.tsx
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import LeadershipSection from './components/LeadershipSection'
import ServicesGrid from './components/ServicesGrid'
import WhyChoose from './components/WhyChoose'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ModalService from './components/ModalService'
import type { Service } from './data/services'
import { servicesData } from './data/services'
import TechnologyShowcase from './components/TechnologyShowcase';
import ProcessInnovation from './components/ProcessInnovation';


const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openServiceModal = (key: string) => {
    setSelectedKey(key)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedKey(null)
  }

  const nextImage = () => {
    if (!selectedKey) return
    const images = servicesData[selectedKey].images
    setCurrentImageIndex(i => (i + 1) % images.length)
  }

  const prevImage = () => {
    if (!selectedKey) return
    const images = servicesData[selectedKey].images
    setCurrentImageIndex(i => (i - 1 + images.length) % images.length)
  }

  const selectImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  const selectedService: Service | undefined =
    selectedKey ? servicesData[selectedKey] : undefined

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />

      {/* Sección de estadísticas */}
      <Stats />

      {/* Nueva sección de liderazgo */}
      <LeadershipSection />

      {/* Resto de la página */}
      <ServicesGrid data={servicesData} onSelect={openServiceModal} />
      <TechnologyShowcase />
      <WhyChoose />
      <ProcessInnovation />
      <ContactSection />
      <Footer />

      {selectedService && (
        <ModalService
          service={selectedService}
          currentImageIndex={currentImageIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
          onSelectImage={selectImage}
        />
      )}
    </div>
  )
}

export default App
