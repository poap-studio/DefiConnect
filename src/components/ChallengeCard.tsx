'use client'

import Image from 'next/image'

interface ChallengeCardProps {
  title: string
  date: string
  location: string
  image: string
  isComingSoon?: boolean
  className?: string
}

export default function ChallengeCard({ title, date, location, image, isComingSoon = false, className = '' }: ChallengeCardProps) {
  if (isComingSoon) {
    // Coming Soon card - full image
    return (
      <div className={`backdrop-blur-[25px] border border-white flex h-full items-center min-h-0 min-w-0 relative rounded-lg overflow-hidden ${className}`} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgba(246, 109, 104, 0.6) 0%, rgba(246, 109, 104, 0.6) 100%)" }}>
        <Image
          src={image}
          alt="Coming Soon"
          fill
          className="object-cover"
        />
      </div>
    )
  }

  // Real challenge card - horizontal layout
  return (
    <div className={`backdrop-blur-[25px] border border-white flex h-full items-center min-h-0 min-w-0 p-1 relative rounded-lg ${className}`} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(90deg, rgba(246, 109, 104, 0.6) 0%, rgba(246, 109, 104, 0.6) 100%)" }}>
      <div className="basis-0 flex flex-col grow h-full items-start justify-between min-h-0 min-w-0 px-3 py-2 relative rounded-lg">
        <div className="flex flex-col gap-3 items-start w-full">
          {/* Challenge header with location badge */}
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
                {location}
              </p>
            </div>
          </div>

          {/* Title */}
          <p className="font-monospac font-bold leading-[1.3] text-[16px] text-white w-full">
            {title}
          </p>
        </div>

        {/* Date */}
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
            {date}
          </p>
        </div>
      </div>

      {/* POAP Image */}
      <div className="bg-[rgba(255,124,119,0.8)] flex flex-col gap-2 h-full items-center justify-center pb-[6px] pt-2 px-[6px] relative rounded-[6px] w-[120px]">
        <div className="relative w-20 h-20">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
