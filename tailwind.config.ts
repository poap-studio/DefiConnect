import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'defi-red': '#F66D68',
        'defi-red-dark': '#F66D68',
        'defi-red-original': '#E96652',
      },
      fontFamily: {
        'display': ['Monospace821', 'monospace'],
        'monospac': ['Monospace821', 'monospace'],
        'body': ['Monospace821', 'monospace'],
        'sans': ['Monospace821', 'monospace'],
      },
      fontSize: {
        'display-lg': ['48px', '60px'],
        'display-md': ['36px', '44px'],
        'display-sm': ['30px', '38px'],
        'display-xs': ['24px', '32px'],
        'text-xl': ['20px', { lineHeight: '1.3' }],
        'text-lg': ['18px', '28px'],
        'text-md': ['16px', { lineHeight: '1.3' }],
        'text-sm': ['14px', '20px'],
      },
    },
  },
  plugins: [],
}

export default config