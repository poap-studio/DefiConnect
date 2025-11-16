'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface MenuItemProps {
  text: string;
  href: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

function MenuItem({ text, href, className, isActive, onClick }: MenuItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    if (onClick) onClick()
  }

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`flex gap-[10px] items-center justify-center overflow-visible pb-4 pt-2 px-3 transition-colors cursor-pointer ${
        isActive 
          ? 'text-defi-red border-b-4 border-[#16ff1d]' 
          : 'text-neutral-900 hover:text-defi-red'
      } ${className}`}
    >
      <p className={`font-monospac leading-[1.3] text-[20px] whitespace-nowrap ${
        isActive ? 'font-bold' : 'font-medium'
      }`}>
        {text}
      </p>
    </a>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['rewards', 'raffle', 'challenges', 'how-to']
      const scrollPosition = window.scrollY + 100 // Offset for header height
      let currentSection = ''

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMobileMenuClick = (sectionId: string) => {
    setIsMenuOpen(false)
    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between pt-6 px-[120px] pb-0 w-full">
        {/* Logo Container */}
        <div className="flex flex-col gap-[10px] items-start pb-4 pt-0 px-0 w-[265px]">
          <div className="h-[30px] relative w-[265px]">
            <Image
              src="/deficonnect-logo.svg"
              alt="DeFiConnect"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="flex gap-4 items-center cursor-pointer">
          <MenuItem text="Rewards" href="#rewards" isActive={activeSection === 'rewards'} />
          <MenuItem text="Raffle" href="#raffle" isActive={activeSection === 'raffle'} />
          <MenuItem text="Challenges" href="#challenges" isActive={activeSection === 'challenges'} />
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-[20px] py-[24px] w-full">
        {/* Mobile Logo */}
        <div className="h-[25px] relative w-[221px]">
          <Image
            src="/deficonnect-logo.svg"
            alt="DeFiConnect"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Mobile hamburger menu button */}
        <button
          className="w-[24px] h-[24px] relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Image
            src={isMenuOpen ? "/menu_mobile_close.svg" : "/menu_mobile_icon.svg"}
            alt=""
            fill
            className="object-contain"
          />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-5 py-4 space-y-4">
            <a
              href="#rewards"
              className="text-gray-900 hover:text-defi-red transition-colors font-monospac"
              onClick={(e) => { e.preventDefault(); handleMobileMenuClick('rewards'); }}
            >
              Rewards
            </a>
            <a
              href="#raffle"
              className="text-gray-900 hover:text-defi-red transition-colors font-monospac"
              onClick={(e) => { e.preventDefault(); handleMobileMenuClick('raffle'); }}
            >
              Raffle
            </a>
            <a
              href="#challenges"
              className="text-gray-900 hover:text-defi-red transition-colors font-monospac"
              onClick={(e) => { e.preventDefault(); handleMobileMenuClick('challenges'); }}
            >
              Challenges
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}