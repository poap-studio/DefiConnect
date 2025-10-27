'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface AboutCard {
  id: number
  title: string
  description: string
  icon: string
}

const aboutCards: AboutCard[] = [
  {
    id: 1,
    title: "Find your path",
    description: "Move between spaces of innovation and community. Whether inside Konex or out in the city, each experience brings a new clue to your journey.",
    icon: "🔍"
  },
  {
    id: 2,
    title: "Collect memories",
    description: "Each POAP is a digital memory, a proof of your presence at moments that matter. Build your collection as you explore the event.",
    icon: "🎯"
  },
  {
    id: 3,
    title: "Unlock rewards",
    description: "The more you explore, the more you unlock. Exclusive rewards await those who dive deep into the DeFiConnect experience.",
    icon: "🔓"
  }
]

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentSlide * sliderRef.current.offsetWidth,
        behavior: 'smooth'
      })
    }
  }, [currentSlide])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const handleScroll = () => {
      const scrollLeft = slider.scrollLeft
      const slideWidth = slider.offsetWidth
      const newSlide = Math.round(scrollLeft / slideWidth)
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide)
      }
    }

    slider.addEventListener('scroll', handleScroll)
    return () => slider.removeEventListener('scroll', handleScroll)
  }, [currentSlide])

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="about" className="bg-defi-red px-5 py-12 md:px-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-monospac font-semibold text-display-sm md:text-display-md mb-3">
            Discover. Collect. Unlock.
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-white font-monospac font-bold text-lg mb-2">
              Let&apos;s transform DeFiConnect<br />
              into a living treasure map!
            </p>
            <p className="text-white/90 font-monospac text-md">
              Every talk, booth, and hidden corner holds a new story waiting to be found.
            </p>
          </div>
        </div>

        {/* Desktop Cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          {aboutCards.map((card) => (
            <div
              key={card.id}
              className="bg-white/20 border border-white rounded-2xl p-6 text-center"
            >
              <div className="mb-6">
                {/* Circle graphic */}
                <div className="w-64 h-48 mx-auto relative aspect-[250/184]">
                  <Image
                    src="/circle-graphic.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="text-white">
                <h3 className="font-monospac font-semibold text-display-xs mb-2">
                  {card.title}
                </h3>
                <p className="font-monospac text-md leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {aboutCards.map((card) => (
              <div
                key={card.id}
                className="flex-none w-full snap-center px-2"
              >
                <div className="bg-white/20 border border-white rounded-2xl p-6 text-center">
                  <div className="mb-6">
                    {/* Circle graphic */}
                    <div className="w-64 h-48 mx-auto relative aspect-[250/184]">
                      <Image
                        src="/circle-graphic.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-white">
                    <h3 className="font-monospac font-semibold text-display-xs mb-2">
                      {card.title}
                    </h3>
                    <p className="font-monospac text-md leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots - Interactive */}
          <div className="flex justify-center mt-5 gap-2">
            {aboutCards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}