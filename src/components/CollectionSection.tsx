'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import PoapCard from './PoapCard'

// Challenge data from CSV
const poapData = [
  { id: 1, title: "Pick up and scan your DeFiConnect POAP card at entrance check-in.", date: "18 - 19 Nov", location: "Entrance", image: "https://assets.poap.xyz/021e395f-af4c-4c44-a506-b3d56e6c56ad.png" },
  { id: 2, title: "Attend the Morpho Fireside Chat at the Vault Summit (Nov 18 only).", date: "18 Nov - 2:10PM - 2:35PM", location: "Stage Area", image: "https://assets.poap.xyz/fa4c5805-2926-443b-b218-4ae34aa9610a.png" },
  { id: 3, title: "Attend Railgun Privacy & Compliance Panel (Nov 19 only).", date: "19 Nov - 3:10PM - 3:50PM", location: "Main Stage", image: "https://assets.poap.xyz/0b84a4f8-bfab-42bd-a381-6bedccf17490.png" },
  { id: 4, title: "Find and say hi to the Curve rep and join their Telegram group.", date: "18 - 19 Nov", location: "Venue", image: "https://assets.poap.xyz/00108290-808b-43ed-9fea-6c676dcf3721.png" },
  { id: 5, title: "Visit Katana's Booth - follow Katana on X to collect your POAP.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/3c519cb8-9339-4bb6-817d-71587859662a.png" },
  { id: 6, title: "Stop by Symbiotic's Booth - follow on X and fill out a short form.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/3347408f-d3af-4312-8c62-35fdb351498b.png" },
  { id: 7, title: "Attend Velora's Workshop and tap the poster in the area (Nov 19 only).", date: "19 Nov - 2:30PM - 3:30PM", location: "Co-working Zone", image: "https://assets.poap.xyz/573171ba-17e0-4709-af2f-175284262117.png" },
  { id: 8, title: "Attend a Fenbushi Workshop and tap the poster (Nov 18 only).", date: "18 Nov - 11AM - 4PM", location: "Workshop Area", image: "https://assets.poap.xyz/26aa745a-1941-41d8-ad89-c93d7dce69cc.png" },
  { id: 9, title: "Visit Aragon Container Space and tap the poster.", date: "18 - 19 Nov", location: "Container Space", image: "https://assets.poap.xyz/0627466c-3724-4360-8019-18446514b40a.png" },
  { id: 10, title: "Tweet a picture at the Aleo Booth, tag @AleoH, and claim your POAP.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/866f8994-e131-4fae-bb3c-73d6ad1f74f6.png" },
  { id: 11, title: "Visit Avantgarde - follow on X and fill out their short form.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/d3b4c9e3-b1c4-47aa-b8de-a44ad17c4d06.png" },
  { id: 12, title: "Stop by Celo's Booth - follow Celo on X.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/ceceabef-8232-465a-9958-59c9c8a53487.png" },
  { id: 13, title: "Follow Enzyme on X & LinkedIn to earn your POAP.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/0f71dfc2-1977-4175-b263-3fb4bb6e9ffc.png" },
  { id: 14, title: "Visit Gauntlet's Booth - follow on X to claim your POAP.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/2ef78648-5d4a-4b3e-a313-9c1e6b6c385a.png" },
  { id: 15, title: "Visit Hyve DA's Booth - follow them on X to unlock your POAP.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/266d2587-b919-4c58-8e42-59e9cb0dcb48.png" },
  { id: 16, title: "Take a selfie with your Spark Card, tag @sparkdotfi, or follow on X.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/aeb2dbf5-91ba-4937-a1d5-240d6338468c.png" },
  { id: 17, title: "Tap to mint your POAP at the Steakhouse Financial Booth.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/54f1e021-b899-4a6e-b488-e954f0abe867.png" },
  { id: 18, title: "Take the Grip Challenge at Tellor Booth.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/d9fa9dd8-7930-4c30-8c26-2ab1681ebaf6.png" },
  { id: 19, title: "Follow Twin Finance & Join Waitlist to claim the twin's products.", date: "18 - 19 Nov", location: "Booth", image: "https://assets.poap.xyz/83e4014f-34d6-4a58-a401-4d2d24962328.png" },
  { id: 20, title: "Attend DeFiConnect X Space Live Session", date: "11 Nov - 4PM CET", location: "Online", image: "https://assets.poap.xyz/fe74072b-292f-4ed9-affc-5e006e371a2d.png" },
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
    <section id="collection" className="relative bg-defi-red px-5 py-12 md:px-8 md:py-16">
      {/* Background Image - Positioned lower to not interfere with title */}
      <div className="absolute inset-0 top-48 flex justify-center items-center overflow-visible">
        <Image
          src="/collection-bg.png"
          alt=""
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vh, 50vw"
          className="h-full w-auto object-contain md:max-w-[100vw] min-h-full"
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
              image={poap.image}
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
                        image={poap.image}
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