'use client'

interface Step {
  number: number
  title: string
  description: string
  highlight: string
}

const steps: Step[] = [
  {
    number: 1,
    title: "Spot",
    description: "around Centro Cultural Konex and side events across the city.",
    highlight: "Look for POAP stations or QR codes"
  },
  {
    number: 2,
    title: "Mint",
    description: "instantly with the POAP app.",
    highlight: "Use your phone to mint POAPs"
  },
  {
    number: 3,
    title: "Keep Hunting",
    description: "Every stop adds a new chapter to your journey.",
    highlight: "Keep moving, keep discovering."
  }
]

export default function HowToCollectSection() {
  return (
    <section className="bg-defi-red px-5 py-12 md:px-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-monospac font-semibold text-display-sm md:text-display-md mb-4">
            How to Collect
          </h2>
          <p className="text-white/90 font-monospac text-md md:text-lg max-w-2xl mx-auto">
            Follow these simple steps each time you discover a new POAP along your journey.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-6 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Step Number */}
              <div className="w-16 h-16 bg-white/20 border border-white rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-monospac font-bold text-display-sm">
                  {step.number}
                </span>
              </div>

              {/* Step Content */}
              <div className="max-w-md">
                <h3 className="text-white font-monospac font-bold text-display-xs mb-2">
                  {step.title}
                </h3>
                <p className="text-white/90 font-monospac text-md leading-relaxed">
                  <span className="font-bold text-white">
                    {step.highlight}
                  </span>
                  {step.description && (
                    <>
                      {' '}
                      <span>{step.description}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}