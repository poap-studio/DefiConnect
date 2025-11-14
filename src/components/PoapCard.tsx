'use client'

import Image from 'next/image'
import { images } from '@/assets/images'

interface PoapCardProps {
  title: string
  date: string
  location: string
  image?: string
  className?: string
}

export default function PoapCard({ title, date, location, image, className = '' }: PoapCardProps) {
  return (
    <div className={`border border-white box-border flex flex-col gap-4 items-center px-3 py-4 rounded-2xl bg-white/20 backdrop-blur-md relative overflow-hidden ${className}`} style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(246, 109, 104, 0.3) 0%, rgba(246, 109, 104, 0.3) 100%)" }}>
      {/* Glossy overlay */}
      <div className="absolute inset-0 rounded-2xl" style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.02) 70%, rgba(255, 255, 255, 0.08) 100%)',
        pointerEvents: 'none'
      }}></div>
      <div className="relative z-10 flex flex-col gap-4 items-center w-full">
      <div className="flex flex-col items-center gap-4 w-full">
        {/* POAP Image - Exact Figma specs: 100px */}
        <div className="relative shrink-0 size-[100px]">
          <Image
            src={image || "/general-attendance.png"}
            alt={title}
            fill
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          />
        </div>

        {/* Content - Exact Figma structure */}
        <div className="flex flex-col gap-2 items-center w-full">
          <p className="font-monospac leading-[1.38] text-[16px] text-white w-full text-center">
            {title}
          </p>
          <div className="flex flex-col gap-1 items-start justify-center w-full">
            {/* Date */}
            <div className="flex gap-0.5 items-start w-full">
              <div className="h-[20px] relative shrink-0 w-[14px]">
                <Image
                  src={images.calendarIcon}
                  alt="Date"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="basis-0 font-monospac grow leading-[20px] min-h-px min-w-px text-[14px] text-white">
                {date}
              </p>
            </div>
            {/* Location */}
            <div className="flex gap-0.5 items-start w-full">
              <div className="h-[20px] overflow-clip relative shrink-0 w-[13px]">
                <Image
                  src={images.locationIcon}
                  alt="Location" 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="basis-0 font-monospac grow leading-[20px] min-h-px min-w-px text-[14px] text-white">
                {location}
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}