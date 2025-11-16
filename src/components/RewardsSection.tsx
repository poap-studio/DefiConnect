'use client'

import { useState } from 'react'
import Image from 'next/image'

function RaffleContent() {
  const handleJoinRaffle = () => {
    window.open('https://poap.fun/raffles/deficonnect-poap-treasure-hunt-raffle', '_blank')
  }

  return (
    <div className="relative bg-defi-red min-h-[500px] md:min-h-[550px] w-full">
      {/* Background Image */}
      <div className="absolute h-[478px] md:h-[906px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[798px] md:w-[1512px]">
        <Image
          src="/background-map.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Desktop Content */}
      <div className="hidden md:flex absolute flex-col gap-6 items-center left-1/2 -translate-x-1/2 top-[64px] w-[1272px]">
        <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.1)] border border-white flex flex-col gap-6 items-center pb-12 pt-10 px-8 rounded-2xl w-full">
          {/* Title */}
          <h2 className="font-monospac font-bold leading-[72px] text-[60px] text-center text-white tracking-[-1.2px] whitespace-nowrap">
            Raffle
          </h2>

          {/* Description */}
          <p className="font-monospac font-normal leading-[32px] text-[24px] text-center text-white">
            Every POAP you collect increases your chances to win.<br />
            <span className="font-monospac font-bold">Make sure your POAPs are on-chain to participate.</span>
          </p>

          {/* Date Section */}
          <div className="flex gap-3 items-center justify-center pl-2 pr-3 py-2">
            <div className="bg-white relative rounded-[20px] w-8 h-8 flex items-center justify-center">
              <div className="relative w-5 h-5 -rotate-[15deg]">
                <Image
                  src="/assets/raffle-calendar-icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="font-monospac font-bold leading-[32px] text-[24px] text-white whitespace-nowrap">
              Winners announced on November 19, 2025 at 5 PM in the Merch Corner.
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleJoinRaffle}
            className="bg-white cursor-pointer flex gap-[10px] items-center justify-center px-8 py-3 rounded-[31px] hover:bg-gray-100 transition-colors"
          >
            <p className="font-monospac font-bold leading-[38px] text-[#e96652] text-[30px] whitespace-nowrap">
              Join the Raffle
            </p>
          </button>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-8 w-[335px]">
        <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.1)] border border-white flex flex-col gap-5 items-center px-4 py-5 rounded-2xl w-full">
          {/* Mobile Title */}
          <h2 className="font-monospac font-bold leading-[38px] text-[30px] text-center text-white whitespace-nowrap">
            Raffle
          </h2>

          {/* Mobile Description */}
          <p className="font-monospac font-normal leading-[1.3] text-[16px] text-center text-white w-full">
            Every POAP you collect increases your chances to win. <span className="font-monospac font-bold">Make sure your POAPs are on-chain to participate.</span>
          </p>

          {/* Mobile Date Section */}
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            <div className="bg-white relative rounded-[20px] w-8 h-8 flex items-center justify-center">
              <div className="relative w-5 h-5 -rotate-[15deg]">
                <Image
                  src="/assets/raffle-calendar-icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="font-monospac font-bold leading-[28px] text-[18px] text-center text-white w-full">
              Winners announced on November 19, 2025 at 5 PM in the Merch Corner.
            </p>
          </div>

          {/* Mobile CTA Button */}
          <button
            onClick={handleJoinRaffle}
            className="bg-white cursor-pointer flex gap-[10px] items-center justify-center px-6 py-2 rounded-[28px] hover:bg-gray-100 transition-colors"
          >
            <p className="font-monospac font-semibold leading-[1.3] text-[#e96652] text-[16px] whitespace-nowrap">
              Join the Raffle
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

interface Reward {
  id: number
  tier: string
  title: string
  description: string
  requiredPoaps: number
  image: string
  images?: string[]
  totalSupply: string
  rewardType: 'raffle' | 'first-come' | 'fcfs-raffle'
}

const rewardsData: Reward[] = [
  {
    id: 1,
    tier: "TIER 3",
    title: "Rare Gem",
    description: "Reserved for the most dedicated collectors. Be one of the first 90 at the merch booth with 15+ POAPs. Or, join the raffle below to win 1 of the final 10 items.",
    requiredPoaps: 15,
    image: "/New Tier 3.png",
    totalSupply: "100",
    rewardType: 'fcfs-raffle'
  },
  {
    id: 2,
    tier: "TIER 2",
    title: "Premium Merch",
    description: "Your middway reward into the Hunt. Collect 10 POAPs to reach this tier and unlock what lies beyond.",
    requiredPoaps: 10,
    image: "/tier_2.png",
    totalSupply: "1000+",
    rewardType: 'first-come'
  },
  {
    id: 3,
    tier: "TIER 1",
    title: "Basic Merch",
    description: "Your first milestone in the hunt. A collector's exclusive for those who collect 5 POAPs.",
    requiredPoaps: 5,
    image: "/New Tier 1.png",
    totalSupply: "1000+",
    rewardType: 'first-come'
  }
]

function renderDescription(reward: Reward) {
  if (reward.id === 1) {
    // TIER 3: "Reserved for the most dedicated collectors. Be one of the first 90 at the merch booth with 15+ POAPs. Or, join the raffle below to win 1 of the final 10 items."
    return (
      <>
        <span>Reserved for the most dedicated collectors. Be one of the </span>
        <span className="font-monospac font-bold">first 90 at the merch booth with 15+ POAPs.</span>
        <span> Or, </span>
        <span className="font-monospac font-bold">join the raffle below</span>
        <span> to win 1 of the final 10 items.</span>
      </>
    )
  } else if (reward.id === 2) {
    // TIER 2: "Your middway reward into the Hunt. Collect 10 POAPs to reach this tier and unlock what lies beyond."
    return (
      <>
        <span>Your middway reward into the Hunt. </span>
        <span className="font-monospac font-bold">Collect 10 POAPs</span>
        <span> to reach this tier and unlock what lies beyond.</span>
      </>
    )
  } else if (reward.id === 3) {
    // TIER 1: "Your first milestone in the hunt. A collector's exclusive for those who collect 5 POAPs."
    return (
      <>
        <span>Your first milestone in the hunt. A collector's exclusive for those who </span>
        <span className="font-monospac font-bold">collect 5 POAPs.</span>
      </>
    )
  }
  return reward.description
}

export default function RewardsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const totalSlides = rewardsData.length

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <section id="rewards" className="bg-defi-red flex flex-col gap-8 md:gap-16 items-center md:px-[120px] md:py-16 relative">
      {/* Desktop Header and Content */}
      <div className="hidden md:flex flex-col gap-12 items-start w-full">
        <div className="flex flex-col gap-4 items-center text-center text-white w-full">
          <p className="font-monospac font-bold leading-[72px] text-[60px] tracking-[-1.2px] whitespace-nowrap">
            What you can win
          </p>
          <p className="font-monospac font-normal leading-[32px] text-[24px]">
            <span>Exclusive rewards await the </span>
            <span className="font-monospac font-bold">most dedicated hunters.</span>
          </p>
        </div>

        {/* Desktop Rewards Container */}
        <div className="flex gap-8 items-start w-full relative">
          {rewardsData.map((reward, index) => (
            <RewardCard key={reward.id} reward={reward} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile Header and Content */}
      <div className="md:hidden flex flex-col gap-[16px] items-center px-[20px] py-[32px] w-full">
        {/* Mobile Header */}
        <div className="flex flex-col gap-[12px] items-center text-center text-white w-full">
          <p className="font-monospac font-bold leading-[38px] text-[30px] whitespace-nowrap">
            What you can win
          </p>
          <p className="font-monospac font-normal leading-[1.3] text-[16px]">
            <span>Exclusive rewards await the </span>
            <span className="font-monospac font-bold">most dedicated hunters.</span>
          </p>
        </div>

        {/* Mobile Rewards Container */}
        <div className="flex flex-col gap-[24px] items-center w-full">
          {/* Mobile Single Card Display */}
          <div className="overflow-hidden w-full max-w-[335px]">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {rewardsData.map((reward, index) => (
                <div key={reward.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 border border-white rounded-2xl flex flex-col gap-[24px] items-center pb-[28px] pt-[12px] px-[12px] w-full relative">
                    {/* Mobile Image Section */}
                    <div className="flex flex-col items-center pb-[20px] w-full">
                      <div className="aspect-square -mb-5 relative rounded-xl w-full">
                        {reward.images ? (
                          <div className="absolute inset-0 pointer-events-none rounded-xl">
                            <Image
                              src={reward.images[0]}
                              alt={reward.title}
                              fill
                              className="absolute object-cover rounded-xl"
                            />
                            <Image
                              src={reward.images[1]}
                              alt={reward.title}
                              fill
                              className="absolute object-cover rounded-xl"
                            />
                          </div>
                        ) : (
                          <Image
                            src={reward.image}
                            alt={reward.title}
                            fill
                            className="object-cover rounded-xl"
                          />
                        )}
                      </div>
                      
                      {/* Mobile POAP Requirement Badge */}
                      <div 
                        className="backdrop-blur-[25px] border border-white flex gap-2 items-center -mb-5 pl-2 pr-3 py-1 relative rounded-[23px]"
                        style={{ 
                          backgroundImage: "linear-gradient(90deg, rgba(246, 109, 104, 0.1) 0%, rgba(246, 109, 104, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" 
                        }}
                      >
                        <div className="relative w-6 h-6">
                          <Image
                            src="/poap-icon.svg"
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex gap-2 items-center leading-[28px] text-[18px] text-center text-white whitespace-nowrap">
                          <p className="font-monospac font-bold">{reward.requiredPoaps} POAPs</p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Text Content */}
                    <div className="flex flex-col gap-[24px] items-center w-full">
                      <div className="flex flex-col gap-[16px] items-center text-center text-white w-full">
                        <div className="flex flex-col items-center w-full">
                          <p className="font-monospac font-normal leading-[1.3] text-[16px] w-full">
                            {reward.tier}
                          </p>
                          <p className="font-monospac font-bold leading-[32px] text-[24px] w-full">
                            {reward.title}
                          </p>
                        </div>
                        <p className="font-monospac font-normal leading-[1.3] text-[16px] w-full">
                          {renderDescription(reward)}
                        </p>
                        <p className="font-monospac font-bold leading-[1.3] text-[16px] w-full">
                          Total Supply: {reward.totalSupply}
                        </p>
                      </div>

                      {/* Mobile Reward Type Badge - moved below total supply with 24px spacing */}
                      <div className="bg-white flex gap-2 items-center justify-center pl-3 pr-4 py-2 rounded-[20px]">
                        <div className="relative w-4 h-4">
                          <Image
                            src={reward.rewardType === 'first-come' ? "/run-icon.svg" : "/frame-icon.svg"}
                            alt=""
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className="font-monospac font-bold leading-[1.3] text-[#e96652] text-[16px] text-center whitespace-nowrap">
                          {reward.rewardType === 'fcfs-raffle' ? 'First Come First Served & Raffle' : reward.rewardType === 'raffle' ? 'Raffle' : 'First Come First Served'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex gap-2 items-center h-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-opacity duration-200 flex-shrink-0 ${
                  index === currentSlide ? 'bg-white opacity-100' : 'bg-white opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Bottom Notice */}
      <div className="hidden md:flex backdrop-blur-[50px] bg-white gap-4 items-center p-5 rounded-lg w-[838px]">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src="/gift-icon.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="font-monospac font-normal leading-[32px] text-[#e96652] text-[24px]">
            <span>Head to the </span>
            <span className="font-monospac font-bold">Merch Corner</span>
            <span> on-site to redeem your rewards before they run out.</span>
          </p>
        </div>
      </div>

      {/* Mobile Bottom Notice */}
      <div className="md:hidden backdrop-blur-[50px] bg-white flex gap-2 items-center p-4 rounded-lg mx-[20px]">
        <div className="relative w-20 h-20 flex-shrink-0">
          <Image
            src="/gift-icon.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="font-monospac font-normal leading-[1.3] text-[#e96652] text-[16px]">
            <span>Head to the </span>
            <span className="font-monospac font-bold">Merch Corner</span>
            <span> on-site to redeem your rewards before they run out.</span>
          </p>
        </div>
      </div>

      {/* Raffle Section */}
      <div className="w-full">
        <RaffleContent />
      </div>
    </section>
  )
}

function RewardCard({ reward, index }: { reward: Reward; index: number }) {
  return (
    <div className="basis-0 bg-white/10 border border-white rounded-2xl flex flex-col gap-6 grow items-center pb-8 pt-2 px-2 self-stretch relative">
      {/* Image Section */}
      <div className="flex flex-col items-center pb-5 w-full">
        <div className="aspect-square -mb-5 relative rounded-xl w-full">
          {reward.images ? (
            <div className="absolute inset-0 pointer-events-none rounded-xl">
              <Image
                src={reward.images[0]}
                alt={reward.title}
                fill
                className="absolute object-cover rounded-xl"
              />
              <Image
                src={reward.images[1]}
                alt={reward.title}
                fill
                className="absolute object-cover rounded-xl"
              />
            </div>
          ) : (
            <Image
              src={reward.image}
              alt={reward.title}
              fill
              className="object-cover rounded-xl"
            />
          )}
        </div>
        
        {/* POAP Requirement Badge */}
        <div 
          className="backdrop-blur-[25px] border border-white flex gap-2 items-center -mb-5 pl-3 pr-4 py-2 relative rounded-[23px]"
          style={{ 
            backgroundImage: "linear-gradient(90deg, rgba(246, 109, 104, 0.1) 0%, rgba(246, 109, 104, 0.1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)" 
          }}
        >
          <div className="relative w-6 h-6">
            <Image
              src="/poap-icon.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div className="flex gap-2 items-center leading-[1.3] text-[20px] text-center text-white whitespace-nowrap">
            <p className="font-monospac font-semibold">{reward.requiredPoaps} POAPs</p>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="flex flex-col gap-4 items-center text-center text-white w-full">
          <div className="flex flex-col items-center w-full">
            <p className="font-monospac font-normal leading-[28px] text-[18px] w-full">
              {reward.tier}
            </p>
            <p className="font-monospac font-bold leading-[32px] text-[24px] w-full">
              {reward.title}
            </p>
          </div>
          <p className="font-monospac font-normal leading-[1.3] text-[16px] w-full">
            {renderDescription(reward)}
          </p>
          <p className="font-monospac font-bold leading-[28px] text-[18px] w-full">
            Total Supply: {reward.totalSupply}
          </p>
        </div>

        {/* Desktop Reward Type Badge - moved below total supply with 24px spacing */}
        <div className="bg-white flex gap-2 items-center justify-center pl-3 pr-4 py-2 rounded-[20px]">
          <div className="relative w-4 h-4">
            <Image
              src={reward.rewardType === 'first-come' ? "/run-icon.svg" : "/frame-icon.svg"}
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <p className="font-monospac font-bold leading-[1.3] text-[#e96652] text-[16px] text-center whitespace-nowrap">
            {reward.rewardType === 'fcfs-raffle' ? 'First Come First Served & Raffle' : reward.rewardType === 'raffle' ? 'Raffle' : 'First Come First Served'}
          </p>
        </div>
      </div>
    </div>
  )
}

