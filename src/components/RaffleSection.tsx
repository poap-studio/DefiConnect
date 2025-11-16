'use client'

import Image from 'next/image'

export default function RaffleSection() {
  const handleJoinRaffle = () => {
    // TODO: Add raffle functionality
    alert('Raffle functionality coming soon!')
  }

  return (
    <section id="raffle" className="relative bg-defi-red min-h-[500px] md:min-h-[550px]">
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
    </section>
  )
}