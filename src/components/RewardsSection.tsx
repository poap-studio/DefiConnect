'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface Reward {
  id: number
  title: string
  description: string
  requiredPoaps: number
  image: string
}

const rewardsData: Reward[] = [
  {
    id: 1,
    title: "Tote Bag",
    description: "Your midway achievement! Collect 10 POAPs to earn this exclusive tote that combines design and function, lightweight, durable, and perfect for everyday use.",
    requiredPoaps: 10,
    image: "/reward1.png"
  },
  {
    id: 2,
    title: "Explorer Pin",
    description: "Level up your collection! Gather 15 POAPs to unlock this premium pin that showcases your dedication to the DeFiConnect experience.",
    requiredPoaps: 15,
    image: "/reward2.png"
  },
  {
    id: 3,
    title: "Master Cap",
    description: "The ultimate achievement! Collect all 20 POAPs to earn the exclusive Master Cap with special privileges and recognition.",
    requiredPoaps: 20,
    image: "/reward3.png"
  }
]

export default function RewardsSection() {
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
    <section id="rewards" className="bg-defi-red px-5 py-12 md:px-8 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-monospac font-semibold text-display-sm md:text-display-md mb-3">
            The Rewards
          </h2>
          <p className="text-white/90 font-monospac text-md md:text-lg">
            Exclusive rewards await those who collect!
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {rewardsData.map((reward) => (
            <RewardCard key={reward.id} reward={reward} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
          >
            {rewardsData.map((reward) => (
              <div
                key={reward.id}
                className="flex-none w-full snap-center px-2"
              >
                <RewardCard reward={reward} />
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots - Interactive */}
          <div className="flex justify-center mt-5 gap-2">
            {rewardsData.map((_, index) => (
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

function RewardCard({ reward }: { reward: Reward }) {
  return (
    <div className="bg-white/20 backdrop-blur-md border border-white rounded-2xl p-4 md:p-6 relative overflow-hidden">
      {/* Glossy overlay */}
      <div className="absolute inset-0 rounded-2xl" style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.02) 70%, rgba(255, 255, 255, 0.08) 100%)',
        pointerEvents: 'none'
      }}></div>
      <div className="relative z-10">
      <div className="flex flex-col gap-6">
        {/* Image Section */}
        <div className="relative">
          <div className="aspect-[2155/1613] rounded-xl overflow-hidden mb-4 relative">
            <Image
              src={reward.image}
              alt={reward.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* POAP Requirement Badge */}
          <div className="bg-white/20 backdrop-blur-sm border border-white rounded-full px-3 py-2 flex items-center gap-2 w-fit mx-auto -mt-6 relative z-10" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(246, 109, 104, 0.3) 0%, rgba(246, 109, 104, 0.3) 100%)" }}>
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 relative">
                <Image
                  src="/vector.png"
                  alt="Target"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-white font-monospac text-xl">
              <span className="font-normal">Collect </span>
              <span className="font-semibold">{reward.requiredPoaps} POAPs</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center text-white">
          <h3 className="font-monospac font-bold text-display-xs mb-3">
            {reward.title}
          </h3>
          <p className="font-monospac text-md leading-relaxed">
            {reward.description}
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}