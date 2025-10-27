'use client'

import Image from 'next/image'
import { images } from '@/assets/images'

export default function HeroSection() {
  return (
    <section className="relative bg-defi-red overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vector graphics positioned to match Figma design - hidden on mobile to prevent overflow */}
        <div className="hidden md:block absolute -top-64 -right-80 w-[1406px] h-[1096px] transform rotate-[70.97deg] scale-y-[-1] skew-x-[7.15deg]">
          <Image
            src="/hero-vector.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="hidden md:block absolute -top-96 -left-96 w-[1429px] h-[2137px] transform rotate-180 scale-y-[-1]">
          <Image
            src="/hero-group8.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <div className="hidden md:block absolute -top-80 left-20 w-[800px] h-[600px]">
          <Image
            src="/hero-group.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-24 md:pt-32 pb-8 md:pb-12 px-5 md:px-8 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Date Badge */}
          <div className="inline-flex items-center justify-center bg-white rounded px-3 py-1.5 mb-6">
            <span className="text-defi-red font-monospac font-medium text-lg">
              18-19 NOVEMBER, BUENOS AIRES
            </span>
          </div>

          {/* Main Heading - Exact Figma structure */}
          <div className="mb-6">
            <div className="h-[126px] relative w-full">
              {/* "The" text */}
              <p className="absolute font-monospac leading-[1.3] left-1/2 -translate-x-1/2 text-[20px] text-white top-0">
                The
              </p>
              
              {/* DeFiConnect Logo */}
              <div className="absolute h-[36px] left-1/2 top-[29px] -translate-x-1/2 w-[320px]">
                <Image
                  src="/deficonnect-logo-white.svg"
                  alt="DeFiConnect"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Adventure with rotation and union graphic */}
              <div className="absolute flex items-center justify-center left-1/2 top-[53px] -translate-x-1/2 rotate-[-6.916deg]">
                <div className="h-[53px] relative w-[161px]">
                  {/* Adventure background ellipse with CSS styling */}
                  <div className="absolute h-[52px] left-[0.27px] top-[0.73px] w-[160px] border border-white/20 overflow-hidden" 
                       style={{ 
                         background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 100%)',
                         backdropFilter: 'blur(8px)',
                         borderRadius: '50%'
                       }}>
                  </div>
                  {/* Adventure text */}
                  <p className="absolute font-monospac leading-[1.3] left-[28px] text-[20px] text-white top-[11px]">
                    Adventure
                  </p>
                  {/* Union graphic */}
                  <div className="absolute flex items-center justify-center left-[-8px] top-[-6px] rotate-[6.916deg]">
                    <div className="relative size-[35px]">
                      <Image
                        src="/union-graphic.svg"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-white/90 text-md md:text-lg font-monospac leading-relaxed">
              Explore the venue and join experiences to collect exclusive POAPs that prove your attendance at one of the most exciting crypto events of the year
            </p>
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center">
            <button className="bg-white text-defi-red font-monospac font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
    </section>
  )
}