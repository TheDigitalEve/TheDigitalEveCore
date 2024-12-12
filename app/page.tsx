'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import TabContent from '../components/TabContent'
import Footer from '../components/Footer'
import ParticleBackground from '../components/ParticleBackground'

export default function Home() {
  const [activeTab, setActiveTab] = useState('The Essence')

  useEffect(() => {
    const handleSetActiveTab = (event: CustomEvent<{ tab: string; section?: string }>) => {
      const { tab, section } = event.detail
      setActiveTab(tab)

      if (section) {
        requestAnimationFrame(() => {
          window.location.hash = section
        })
      }
    }

    window.addEventListener('setActiveTab', handleSetActiveTab as EventListener)

    return () => {
      window.removeEventListener('setActiveTab', handleSetActiveTab as EventListener)
    }
  }, [])

  return (
    <div className="min-h-screen bg-serpent-black text-knowledge-blue overflow-hidden relative">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Header />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabContent activeTab={activeTab} />
      </div>
      <Footer />
      <ParticleBackground />
    </div>
  )
}