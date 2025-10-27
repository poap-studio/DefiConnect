'use client'

import Image from 'next/image'
import { images } from '@/assets/images'

const quickLinks = [
  { name: 'DeFiConnect', href: '#', external: true },
  { name: 'POAP.xyz', href: 'https://poap.xyz', external: true },
  { name: 'DevConnect', href: '#', external: true },
]

const legalLinks = [
  { name: 'Terms of Service', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Data Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-white px-5 py-6 md:px-8 md:py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Brand and Event Info */}
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <div className="h-8 w-64 relative mb-2">
                <Image
                  src={images.defiConnectLogo}
                  alt="DeFiConnect"
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Event Details */}
              <div className="flex flex-col gap-3">
                {/* Date */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 relative">
                    <Image
                      src={images.calendarIcon}
                      alt="Date"
                      fill
                      className="object-contain brightness-0"
                    />
                  </div>
                  <span className="text-gray-900 font-monospac text-sm">
                    18–19 November, 2025
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2">
                  <div className="w-4 h-4 relative mt-0.5">
                    <Image
                      src={images.locationIcon}
                      alt="Location"
                      fill
                      className="object-contain brightness-0"
                    />
                  </div>
                  <div className="text-gray-900 font-monospac text-sm">
                    <p>Ciudad Cultural Konex,</p>
                    <p>Buenos Aires,</p>
                    <p>Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-gray-900 font-monospac font-semibold text-md">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-900 hover:text-defi-red transition-colors font-monospac font-medium text-md"
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    <span>{link.name}</span>
                    {link.external && (
                      <div className="w-3 h-3 relative">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.5 3.5H8.5V8.5M8.5 3.5L3.5 8.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-900 pt-4">
            <div className="flex flex-col gap-2">
              <p className="text-gray-900 font-monospac text-sm">
                © 2025 DeFiConnect. All rights reserved.
              </p>
              
              {/* Legal Links */}
              <div className="flex flex-col gap-2">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-900 hover:text-defi-red transition-colors font-monospac font-semibold text-sm w-fit"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}