'use client'

import { useState } from 'react'
import Image from 'next/image'

type MapLevel = 'level1' | 'level2' | 'sponsors'

export default function MapSection() {
  const [activeLevel, setActiveLevel] = useState<MapLevel>('level1')

  const handleLevelChange = (level: MapLevel) => {
    setActiveLevel(level)
  }

  return (
    <section id="map" className="relative bg-defi-red">
      {/* Background Map Image */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-2xl h-80 relative">
          <Image
            src="/background-map.png"
            alt="Venue Map"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-5 py-12 md:px-8 md:py-16">
        <div className="max-w-lg mx-auto md:max-w-none md:mx-5">
          <div className="bg-white/20 backdrop-blur-md border border-white rounded-2xl p-5 md:p-7 relative overflow-hidden" style={{ 
            backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), linear-gradient(90deg, rgba(246, 109, 104, 0.3) 0%, rgba(246, 109, 104, 0.3) 100%)" 
          }}>
            {/* Glossy overlay */}
            <div className="absolute inset-0 rounded-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 30%, rgba(255, 255, 255, 0.02) 70%, rgba(255, 255, 255, 0.08) 100%)',
              pointerEvents: 'none'
            }}></div>
            <div className="relative z-10">
            {/* Section Header */}
            <div className="text-center mb-6">
              <h2 className="text-white font-monospac font-semibold text-display-sm mb-4">
                Your Path<br />
                Through Konex
              </h2>
              <p className="text-white/90 font-monospac text-md">
                Every corner hides a POAP. Here&apos;s your guide to discovery.
              </p>
            </div>

            {/* Interactive Map */}
            <div className="mb-6">
              <div className="aspect-[2080/2800] w-full rounded-xl relative overflow-hidden">
                {/* Map content based on active level */}
                {activeLevel === 'level1' && (
                  <Image
                    src="/map-level-1.png"
                    alt="Level 1 Map"
                    fill
                    className="object-contain"
                  />
                )}
                {activeLevel === 'level2' && (
                  <div className="w-full h-full bg-gradient-to-br from-defi-red/20 to-defi-red-dark/30 flex flex-col items-center justify-center text-white">
                    <div className="text-4xl mb-2">🏢</div>
                    <div className="text-sm text-center">
                      <p className="font-semibold mb-1">Level 2 - Upper Floor</p>
                      <p className="text-xs opacity-80">Workshops, breakout sessions, quiet zones</p>
                    </div>
                  </div>
                )}
                {activeLevel === 'sponsors' && (
                  <div className="w-full h-full bg-gradient-to-br from-defi-red/20 to-defi-red-dark/30 flex flex-col items-center justify-center text-white">
                    <div className="text-4xl mb-2">🤝</div>
                    <div className="text-sm text-center">
                      <p className="font-semibold mb-1">Sponsor Areas</p>
                      <p className="text-xs opacity-80">Partner showcases, demo stations, special events</p>
                    </div>
                  </div>
                )}

                {/* POAP location markers */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/3 right-6 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Level Selector */}
            <div className="bg-white/10 border border-white rounded-full p-0.5">
              <div className="flex">
                <button
                  onClick={() => handleLevelChange('level1')}
                  className={`flex-1 px-3 py-1.5 rounded-full text-sm font-monospac font-bold text-center transition-all ${
                    activeLevel === 'level1'
                      ? 'bg-defi-red/50 border border-white text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Level 1
                </button>
                <button
                  onClick={() => handleLevelChange('level2')}
                  className={`flex-1 px-3 py-1.5 rounded-full text-sm font-monospac font-semibold text-center transition-all ${
                    activeLevel === 'level2'
                      ? 'bg-defi-red/50 border border-white text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Level 2
                </button>
                <button
                  onClick={() => handleLevelChange('sponsors')}
                  className={`flex-1 px-3 py-1.5 rounded-full text-sm font-monospac font-bold text-center transition-all ${
                    activeLevel === 'sponsors'
                      ? 'bg-defi-red/50 border border-white text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Sponsors
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}