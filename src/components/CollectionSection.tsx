'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Challenge {
  id: number
  title: string
  date: string
  difficulty: string
  image: string
  type: 'real' | 'coming-soon'
}

// Challenge data from CSV - all 20 real challenges
const challengeData: Challenge[] = [
  {
    id: 1,
    title: "Pick up and scan your DeFiConnect POAP card at entrance check-in.",
    date: "18 - 19 Nov",
    difficulty: "Entrance",
    image: "https://assets.poap.xyz/021e395f-af4c-4c44-a506-b3d56e6c56ad.png",
    type: 'real'
  },
  {
    id: 2,
    title: "Attend the Morpho Fireside Chat at the Vault Summit (Nov 18 only).",
    date: "18 Nov - 2:10PM - 2:35PM",
    difficulty: "Stage Area",
    image: "https://assets.poap.xyz/fa4c5805-2926-443b-b218-4ae34aa9610a.png",
    type: 'real'
  },
  {
    id: 3,
    title: "Attend Railgun Privacy & Compliance Panel (Nov 19 only).",
    date: "19 Nov - 3:10PM - 3:50PM",
    difficulty: "Main Stage",
    image: "https://assets.poap.xyz/0b84a4f8-bfab-42bd-a381-6bedccf17490.png",
    type: 'real'
  },
  {
    id: 4,
    title: "Find and say hi to the Curve rep and join their Telegram group.",
    date: "18 - 19 Nov",
    difficulty: "Venue",
    image: "https://assets.poap.xyz/00108290-808b-43ed-9fea-6c676dcf3721.png",
    type: 'real'
  },
  {
    id: 5,
    title: "Visit Katana's Booth - follow Katana on X to collect your POAP.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/3c519cb8-9339-4bb6-817d-71587859662a.png",
    type: 'real'
  },
  {
    id: 6,
    title: "Stop by Symbiotic's Booth - follow on X and fill out a short form.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/3347408f-d3af-4312-8c62-35fdb351498b.png",
    type: 'real'
  },
  {
    id: 7,
    title: "Attend Velora's Workshop and tap the poster in the area (Nov 19 only).",
    date: "19 Nov - 2:30PM - 3:30PM",
    difficulty: "Co-working Zone",
    image: "https://assets.poap.xyz/573171ba-17e0-4709-af2f-175284262117.png",
    type: 'real'
  },
  {
    id: 8,
    title: "Attend a Fenbushi Workshop and tap the poster (Nov 18 only).",
    date: "18 Nov - 11AM - 4PM",
    difficulty: "Workshop Area",
    image: "https://assets.poap.xyz/26aa745a-1941-41d8-ad89-c93d7dce69cc.png",
    type: 'real'
  },
  {
    id: 9,
    title: "Visit Aragon Container Space and tap the poster.",
    date: "18 - 19 Nov",
    difficulty: "Container Space",
    image: "https://assets.poap.xyz/0627466c-3724-4360-8019-18446514b40a.png",
    type: 'real'
  },
  {
    id: 10,
    title: "Tweet a picture at the Aleo Booth, tag @AleoH, and claim your POAP.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/866f8994-e131-4fae-bb3c-73d6ad1f74f6.png",
    type: 'real'
  },
  {
    id: 11,
    title: "Visit Avantgarde - follow on X and fill out their short form.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/d3b4c9e3-b1c4-47aa-b8de-a44ad17c4d06.png",
    type: 'real'
  },
  {
    id: 12,
    title: "Stop by Celo's Booth - follow Celo on X.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/ceceabef-8232-465a-9958-59c9c8a53487.png",
    type: 'real'
  },
  {
    id: 13,
    title: "Follow Enzyme on X & LinkedIn to earn your POAP.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/0f71dfc2-1977-4175-b263-3fb4bb6e9ffc.png",
    type: 'real'
  },
  {
    id: 14,
    title: "Visit Gauntlet's Booth - follow on X to claim your POAP.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/2ef78648-5d4a-4b3e-a313-9c1e6b6c385a.png",
    type: 'real'
  },
  {
    id: 15,
    title: "Visit Hyve DA's Booth - follow them on X to unlock your POAP.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/266d2587-b919-4c58-8e42-59e9cb0dcb48.png",
    type: 'real'
  },
  {
    id: 16,
    title: "Take a selfie with your Spark Card, tag @sparkdotfi, or follow on X.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/aeb2dbf5-91ba-4937-a1d5-240d6338468c.png",
    type: 'real'
  },
  {
    id: 17,
    title: "Tap to mint your POAP at the Steakhouse Financial Booth.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/54f1e021-b899-4a6e-b488-e954f0abe867.png",
    type: 'real'
  },
  {
    id: 18,
    title: "Take the Grip Challenge at Tellor Booth.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/d9fa9dd8-7930-4c30-8c26-2ab1681ebaf6.png",
    type: 'real'
  },
  {
    id: 19,
    title: "Follow Twin Finance & Join Waitlist to claim the twin's products.",
    date: "18 - 19 Nov",
    difficulty: "Booth",
    image: "https://assets.poap.xyz/83e4014f-34d6-4a58-a401-4d2d24962328.png",
    type: 'real'
  },
  {
    id: 20,
    title: "Attend DeFiConnect X Space Live Session",
    date: "11 Nov - 4PM CET",
    difficulty: "Online",
    image: "https://assets.poap.xyz/fe74072b-292f-4ed9-affc-5e006e371a2d.png",
    type: 'real'
  }
]

export default function CollectionSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  const totalSlides = Math.ceil(challengeData.length / 9) // Desktop: 3 slides for 20 cards (9+9+2)
  const cardsPerSlide = 9
  const mobileCardsPerSlide = 4
  const mobileTotalSlides = Math.ceil(challengeData.length / mobileCardsPerSlide) // Mobile: 5 slides for 20 cards

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

  const handleViewCollection = () => {
    // Open POAP collection page in new tab
    window.open('https://collections.poap.xyz/collections/deficonnect-poap-treasure-hunt/24214', '_blank')
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

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

    if (isLeftSwipe && currentSlide < mobileTotalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  // Get current slide's challenges for mobile
  const currentMobileChallenges = challengeData.slice(
    currentSlide * mobileCardsPerSlide, 
    (currentSlide + 1) * mobileCardsPerSlide
  )

  return (
    <section id="challenges" className="relative bg-defi-red min-h-[1230px] md:min-h-[1200px]">
      {/* Background Image */}
      <div className="absolute h-[853px] left-1/2 top-[247px] -translate-x-1/2 w-[1285px]">
        <Image
          src="/background-website.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      
      {/* Desktop Header */}
      <div className="hidden md:block absolute flex flex-col gap-4 items-center left-1/2 -translate-x-1/2 text-center text-white top-[65px] w-[1272px]">
        <p className="font-monospac font-bold leading-[72px] text-[60px] tracking-[-1.2px] whitespace-nowrap">
          The Challenges
        </p>
        <p className="font-monospac font-normal leading-[32px] text-[24px]">
          <span className="font-monospac font-bold">20 POAPs </span>
          waiting to be discovered.
        </p>
      </div>

      {/* Desktop Notice - positioned between header and cards */}
      <div className="hidden md:flex absolute bg-white gap-4 items-center justify-center pl-3 pr-4 py-3 rounded-lg left-1/2 -translate-x-1/2 top-[217px] w-[1272px]">
        <div className="relative w-8 h-8 flex-shrink-0">
          <Image
            src="/assets/calendar-icon.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <p className="font-monospac font-normal leading-[32px] text-[#e96652] text-[24px]">
          <span className="font-monospac font-bold">POAPs aren't collected automatically.</span>
          <span> Scan QRs or tap at sponsor booths to claim them. New ones appear on Day 2, so stay on the hunt.</span>
        </p>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden absolute flex flex-col gap-4 items-center left-1/2 -translate-x-1/2 text-center text-white top-8 px-5 w-full">
        <p className="font-monospac font-bold leading-[38px] text-[30px] whitespace-nowrap">
          The Challenges
        </p>
        <p className="font-monospac font-normal leading-[1.3] text-[16px]">
          <span className="font-monospac font-bold">20 POAPs </span>
          <span>waiting to be discovered.</span>
        </p>
      </div>

      {/* Mobile Notice - positioned between header and cards */}
      <div className="md:hidden absolute bg-white flex gap-4 items-center p-4 rounded-lg left-1/2 -translate-x-1/2 top-[131px] w-[335px]">
        <div className="relative w-8 h-8 rounded-full flex-shrink-0">
          <Image
            src="/assets/calendar-icon.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <p className="font-monospac font-normal leading-[1.3] text-[#e96652] text-[14px]">
          <span className="font-monospac font-bold">POAPs aren't collected automatically.</span>
          <span> Scan QRs or tap at sponsor booths to claim them. New ones appear on Day 2, so stay on the hunt.</span>
        </p>
      </div>

      {/* Desktop Challenges Grid */}
      <div className="hidden md:flex absolute flex-col gap-8 items-center left-1/2 -translate-x-1/2 top-[345px] w-[1272px]">
        <div className="overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const slideChallenges = challengeData.slice(
                slideIndex * cardsPerSlide, 
                (slideIndex + 1) * cardsPerSlide
              )
              return (
                <div key={slideIndex} className="flex flex-col gap-4 items-start w-full flex-shrink-0">
                  {/* First Row */}
                  <div className="flex gap-4 h-[147px] items-center w-full">
                    {slideChallenges.slice(0, 3).map((challenge) => (
                      <ChallengeCard key={challenge.id} challenge={challenge} />
                    ))}
                  </div>
                  
                  {/* Second Row */}
                  <div className="flex gap-4 h-[147px] items-center w-full">
                    {slideChallenges.slice(3, 6).map((challenge) => (
                      <ChallengeCard key={challenge.id} challenge={challenge} />
                    ))}
                  </div>
                  
                  {/* Third Row */}
                  <div className="flex gap-4 h-[147px] items-center w-full">
                    {slideChallenges.slice(6, 9).map((challenge) => (
                      <ChallengeCard key={challenge.id} challenge={challenge} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-5 items-center justify-center w-[52px]">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-opacity duration-200 flex-shrink-0 ${
                index === currentSlide ? 'bg-white opacity-100' : 'bg-white opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Desktop View Collection Button */}
        <button
          onClick={handleViewCollection}
          className="bg-white flex gap-[10px] items-center justify-center px-6 py-2 rounded-[28px] hover:bg-gray-100 transition-colors"
        >
          <p className="font-monospac font-semibold leading-[28px] text-[#e96652] text-[18px] whitespace-nowrap">
            View Collection
          </p>
        </button>

        {/* Desktop Search Section */}
        <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.1)] border border-white flex flex-col gap-6 items-center pb-7 pt-4 px-5 rounded-2xl w-[620px]">
          <p className="font-monospac font-semibold leading-[38px] text-[30px] text-center text-white">
            Check your progress
          </p>
          <div className="flex gap-3 items-center">
            <div className="bg-[rgba(233,102,82,0.4)] border border-white flex gap-[10px] items-center px-6 py-2 rounded-[22px]">
              <input
                type="text"
                placeholder="Enter your ENS, Wallet or Email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="bg-transparent font-monospac leading-[28px] text-[18px] text-white placeholder-white outline-none w-[280px]"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-white flex gap-[10px] items-center justify-center px-6 py-2 rounded-[28px] hover:bg-gray-100 transition-colors"
            >
              <p className="font-monospac font-semibold leading-[28px] text-[#e96652] text-[18px] whitespace-nowrap">
                View my POAPs
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Challenges Grid */}
      <div className="md:hidden absolute flex flex-col gap-6 items-center left-0 top-[285px] px-5 w-full">
        <div className="flex flex-col gap-4 items-center w-full">
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {Array.from({ length: mobileTotalSlides }).map((_, slideIndex) => {
                const slideChallenges = challengeData.slice(
                  slideIndex * mobileCardsPerSlide, 
                  (slideIndex + 1) * mobileCardsPerSlide
                )
                return (
                  <div key={slideIndex} className="flex flex-col gap-4 w-full flex-shrink-0">
                    {slideChallenges.map((challenge) => (
                      <MobileChallengeCard key={challenge.id} challenge={challenge} />
                    ))}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex gap-1 items-center h-3">
            {Array.from({ length: mobileTotalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-opacity duration-200 flex-shrink-0 ${
                  index === currentSlide ? 'bg-white opacity-100' : 'bg-white opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile View Collection Button */}
        <button
          onClick={handleViewCollection}
          className="bg-white flex gap-[10px] items-center justify-center px-6 py-2 rounded-[28px] hover:bg-gray-100 transition-colors"
        >
          <p className="font-monospac font-semibold leading-[1.3] text-[#e96652] text-[16px] whitespace-nowrap">
            View Collection
          </p>
        </button>

        {/* Mobile Search Section */}
        <div className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.1)] border border-white flex flex-col gap-4 items-center pb-5 pt-3 px-4 rounded-2xl w-full">
          <p className="font-monospac font-semibold leading-[1.3] text-[20px] text-center text-white">
            Check your progress
          </p>
          <div className="flex gap-2 items-center w-full">
            <div className="bg-[rgba(233,102,82,0.4)] border border-white flex gap-[10px] items-center px-4 py-2 rounded-[22px] flex-1">
              <input
                type="text"
                placeholder="ENS, address or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="bg-transparent font-monospac leading-[1.3] text-[16px] text-white placeholder-white outline-none w-full"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-white flex gap-[10px] items-center justify-center px-3 py-2 rounded-[28px] hover:bg-gray-100 transition-colors"
            >
              <div className="relative w-[18px] h-[18px]">
                <Image
                  src="/search.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  if (challenge.type === 'coming-soon') {
    return (
      <div 
        className="backdrop-blur-[25px] border border-white flex h-full items-center min-h-0 min-w-0 relative rounded-lg overflow-hidden flex-shrink-0"
        style={{ 
          backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgba(246, 109, 104, 0.6) 0%, rgba(246, 109, 104, 0.6) 100%)",
          width: 'calc(33.333% - 10.67px)' // 1/3 width minus gap adjustment
        }}
      >
        <Image
          src={challenge.image}
          alt="Coming Soon"
          fill
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div 
      className="backdrop-blur-[25px] border border-white flex h-full items-center min-h-0 min-w-0 p-1 relative rounded-lg flex-shrink-0"
      style={{ 
        backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgba(246, 109, 104, 0.6) 0%, rgba(246, 109, 104, 0.6) 100%)",
        width: 'calc(33.333% - 10.67px)' // 1/3 width minus gap adjustment
      }}
    >
      <div className="basis-0 flex flex-col grow h-full items-start justify-between min-h-0 min-w-0 px-3 py-2 relative rounded-lg">
        <div className="flex flex-col gap-3 items-start w-full">
          <div className="flex gap-2 items-center w-full">
            <div className="basis-0 flex gap-1 grow items-center min-h-0 min-w-0">
              <div className="relative w-4 h-4">
                <Image
                  src="/challenge-icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-monospac font-normal leading-[1.3] text-[14px] text-center text-white whitespace-nowrap">
                CHALLENGE:
              </p>
            </div>
            <div className="bg-white/20 flex gap-1 items-center px-1 py-0 rounded">
              <p className="font-monospac font-bold leading-[18px] text-[12px] text-center text-white whitespace-nowrap">
                {challenge.difficulty}
              </p>
            </div>
          </div>
          <p className="font-monospac font-bold leading-[1.3] text-[16px] text-white w-full">
            {challenge.title}
          </p>
        </div>
        <div className="flex gap-1 items-center w-full">
          <div className="h-4 relative w-[14px]">
            <Image
              src="/date-icon.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <p className="basis-0 font-monospac font-normal grow leading-[1.3] min-h-0 min-w-0 text-[14px] text-white">
            {challenge.date}
          </p>
        </div>
      </div>
      <div className="bg-[rgba(255,124,119,0.8)] flex flex-col gap-2 h-full items-center justify-center pb-[6px] pt-2 px-[6px] relative rounded-[6px] w-[120px]">
        <div className="relative w-20 h-20">
          <Image
            src={challenge.image}
            alt={challenge.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

function MobileChallengeCard({ challenge }: { challenge: Challenge }) {
  if (challenge.type === 'coming-soon') {
    return (
      <div 
        className="backdrop-blur-[25px] border border-white flex h-[158px] items-center relative rounded-lg w-full overflow-hidden"
        style={{ 
          backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgba(246, 109, 104, 0.6) 0%, rgba(246, 109, 104, 0.6) 100%)" 
        }}
      >
        <Image
          src="/coming_soon_mobile_new.png"
          alt="Coming Soon"
          fill
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div 
      className="backdrop-blur-[25px] border border-white flex h-[158px] items-center p-1 relative rounded-lg w-full"
      style={{ 
        backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgba(246, 109, 104, 0.6) 0%, rgba(246, 109, 104, 0.6) 100%)" 
      }}
    >
      <div className="flex flex-col h-full items-start justify-between px-3 py-2 flex-1">
        <div className="flex flex-col gap-3 items-start w-full">
          <div className="flex gap-1 items-center w-full">
            <div className="flex gap-1 items-center flex-1">
              <div className="relative w-3 h-3">
                <Image
                  src="/challenge-icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-monospac font-normal leading-[18px] text-[12px] text-center text-white whitespace-nowrap">
                CHALLENGE:
              </p>
            </div>
            <div className="bg-white/20 flex gap-1 items-center px-1 py-0 rounded">
              <p className="font-monospac font-bold leading-[18px] text-[12px] text-center text-white whitespace-nowrap">
                {challenge.difficulty}
              </p>
            </div>
          </div>
          <p className="font-monospac font-bold leading-[1.3] text-[14px] text-white w-full">
            {challenge.title}
          </p>
        </div>
        <div className="flex gap-1 items-center w-full">
          <div className="h-[14px] relative w-[12px]">
            <Image
              src="/date-icon.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <p className="font-monospac font-normal leading-[18px] text-[12px] text-white flex-1">
            {challenge.date}
          </p>
        </div>
      </div>
      <div className="bg-[rgba(255,124,119,0.8)] flex flex-col gap-2 h-full items-center justify-center p-1 rounded-[6px] w-[120px]">
        <div className="relative w-20 h-20">
          <Image
            src={challenge.image}
            alt={challenge.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}