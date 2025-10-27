'use client'

import { useState } from 'react'
import Image from 'next/image'
import { images } from '@/assets/images'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-5 py-6 md:px-8 md:py-6">
        <div className="h-6 w-56 md:h-8 md:w-72 relative">
          <Image
            src={images.defiConnectLogo}
            alt="DeFiConnect"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden w-6 h-6 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Image
            src={images.menuIcon}
            alt="Menu"
            fill
            className="object-contain"
          />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-900 hover:text-defi-red transition-colors">
            About
          </a>
          <a href="#collection" className="text-gray-900 hover:text-defi-red transition-colors">
            Collection
          </a>
          <a href="#rewards" className="text-gray-900 hover:text-defi-red transition-colors">
            Rewards
          </a>
          <a href="#map" className="text-gray-900 hover:text-defi-red transition-colors">
            Map
          </a>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-5 py-4 space-y-4">
            <a href="#about" className="text-gray-900 hover:text-defi-red transition-colors">
              About
            </a>
            <a href="#collection" className="text-gray-900 hover:text-defi-red transition-colors">
              Collection
            </a>
            <a href="#rewards" className="text-gray-900 hover:text-defi-red transition-colors">
              Rewards
            </a>
            <a href="#map" className="text-gray-900 hover:text-defi-red transition-colors">
              Map
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}