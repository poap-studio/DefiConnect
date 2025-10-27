'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import PoapCard from './PoapCard'

// Mock POAP data
const poapData = [
  { id: 1, title: "Opening Ceremony", date: "18 Nov, 9-10 am", location: "CC Konex, BA" },
  { id: 2, title: "Keynote Speech", date: "18 Nov, 10-11 am", location: "CC Konex, BA" },
  { id: 3, title: "DeFi Workshop", date: "18 Nov, 2-3 pm", location: "CC Konex, BA" },
  { id: 4, title: "Networking Break", date: "18 Nov, 4-5 pm", location: "CC Konex, BA" },
  { id: 5, title: "Panel Discussion", date: "18 Nov, 5-6 pm", location: "CC Konex, BA" },
  { id: 6, title: "Happy Hour", date: "18 Nov, 6-7 pm", location: "Address 124, BA" },
  { id: 7, title: "Day 2 Opening", date: "19 Nov, 9-10 am", location: "CC Konex, BA" },
  { id: 8, title: "Developer Track", date: "19 Nov, 10-12 pm", location: "CC Konex, BA" },
  { id: 9, title: "Side Event", date: "19 Nov, 1-2 pm", location: "Address 124, BA" },
  { id: 10, title: "Closing Ceremony", date: "19 Nov, 4-5 pm", location: "CC Konex, BA" },
  { id: 11, title: "After Party", date: "19 Nov, 8-10 pm", location: "Address 124, BA" },
  { id: 12, title: "Sponsor Booth A", date: "18-19 Nov", location: "CC Konex, BA" },
  { id: 13, title: "Sponsor Booth B", date: "18-19 Nov", location: "CC Konex, BA" },
  { id: 14, title: "Sponsor Booth C", date: "18-19 Nov", location: "CC Konex, BA" },
  { id: 15, title: "Special Event", date: "18-19 Nov", location: "CC Konex, BA" },
  { id: 16, title: "Workshop A", date: "18 Nov, 3-4 pm", location: "CC Konex, BA" },
  { id: 17, title: "Workshop B", date: "19 Nov, 11-12 pm", location: "CC Konex, BA" },
  { id: 18, title: "Workshop C", date: "19 Nov, 2-3 pm", location: "CC Konex, BA" },
  { id: 19, title: "Secret Event", date: "18-19 Nov", location: "Hidden Location" },
  { id: 20, title: "Final Surprise", date: "19 Nov, 10 pm", location: "CC Konex, BA" },
]

const ITEMS_PER_PAGE_MOBILE = 4
const ITEMS_PER_PAGE_DESKTOP = 10

export default function CollectionSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleSearch = () => {
    const trimmedTerm = searchTerm.trim()
    
    if (!trimmedTerm) {
      alert('Please enter an email, wallet address, or ENS name')
      return
    }
    
    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Wallet validation (42 characters starting with 0x)
    const walletRegex = /^0x[a-fA-F0-9]{40}$/
    // ENS validation (ends with .eth)
    const ensRegex = /\.eth$/i
    
    if (emailRegex.test(trimmedTerm) || walletRegex.test(trimmedTerm) || ensRegex.test(trimmedTerm)) {
      // Open POAP collector page in new tab
      window.open(`https://collectors.poap.xyz/scan/${encodeURIComponent(trimmedTerm)}`, '_blank')
    } else {
      alert('Please enter a valid email, wallet address (0x... 42 characters), or ENS name (.eth)')
    }
  }

  // Calculate pagination for mobile (5 pages) and desktop (2 pages)
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false
  const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP
  const totalPages = Math.ceil(poapData.length / itemsPerPage)
  
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPoaps = poapData.slice(startIndex, endIndex)

  useEffect(() => {
    if (sliderRef.current && isMobile) {
      sliderRef.current.scrollTo({
        left: currentPage * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      })
    }
  }, [currentPage, isMobile])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider || !isMobile) return

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft
      const slideWidth = slider.offsetWidth
      const newPage = Math.round(scrollLeft / slideWidth)
      if (newPage !== currentPage && newPage >= 0 && newPage < totalPages) {
        setCurrentPage(newPage)
      }
    }

    slider.addEventListener('scroll', handleScroll)
    return () => slider.removeEventListener('scroll', handleScroll)
  }, [currentPage, isMobile, totalPages])

  const handleSlideChange = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  return (
    <section id="collection" className="relative bg-defi-red px-5 py-12 md:px-8 md:py-16 overflow-x-hidden">
      {/* Background Image - Positioned lower to not interfere with title */}
      <div className="absolute inset-0 top-48 flex justify-center items-center overflow-hidden">
        <Image
          src="/collection-bg.png"
          alt=""
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="max-h-full w-auto object-contain"
          style={{ height: '100%', width: 'auto', maxWidth: '100vw' }}
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-monospac font-semibold text-display-sm md:text-display-md mb-3">
            The Collection
          </h2>
          <p className="text-white/90 font-monospac text-md md:text-lg">
            Discover and collect all POAPs throughout the event
          </p>
        </div>

        {/* Search Section - Updated to match POAP card blur */}
        <div className="bg-white/20 backdrop-blur-md border border-white rounded-2xl p-4 md:p-6 mb-8 relative overflow-hidden" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(246, 109, 104, 0.3) 0%, rgba(246, 109, 104, 0.3) 100%)" }}>
          {/* Glossy overlay */}
          <div className="absolute inset-0 rounded-2xl" style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.02) 70%, rgba(255, 255, 255, 0.08) 100%)',
            pointerEvents: 'none'
          }}></div>
          <div className="relative z-10">
          <h3 className="text-white font-monospac font-semibold text-xl text-center mb-4">
            Check your progress
          </h3>
          <div className="flex gap-2">
            <div className="flex-1 bg-defi-red/40 border border-white rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="ENS, address or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full bg-transparent text-white placeholder-white/70 outline-none font-monospac"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-white rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center w-10 h-10"
              aria-label="Search"
            >
              <div className="w-[18px] h-[18px] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="#E96652" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
          </div>
        </div>

        {/* POAP Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-5 gap-4 mb-8">
          {currentPoaps.map((poap) => (
            <PoapCard
              key={poap.id}
              title={poap.title}
              date={poap.date}
              location={poap.location}
              className="h-72"
            />
          ))}
        </div>

        {/* POAP Slider - Mobile */}
        <div className="md:hidden mb-8">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {Array.from({ length: totalPages }, (_, pageIndex) => {
              const pageStart = pageIndex * ITEMS_PER_PAGE_MOBILE
              const pageEnd = pageStart + ITEMS_PER_PAGE_MOBILE
              const pagePoaps = poapData.slice(pageStart, pageEnd)
              
              return (
                <div key={pageIndex} className="flex-none w-full snap-center px-2">
                  <div className="grid grid-cols-2 gap-3">
                    {pagePoaps.map((poap) => (
                      <PoapCard
                        key={poap.id}
                        title={poap.title}
                        date={poap.date}
                        location={poap.location}
                        className="h-64"
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Desktop Pagination Dots - Interactive */}
        <div className="hidden md:flex justify-center gap-2">
          {Array.from({ length: Math.ceil(poapData.length / ITEMS_PER_PAGE_DESKTOP) }, (_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentPage === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Pagination Dots - Interactive */}
        <div className="md:hidden flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentPage === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}