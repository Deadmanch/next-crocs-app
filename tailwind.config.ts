/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'background-white': 'var(--background-white)',
        'background-violet': 'var(--background-violet)',
        'background-light-green': 'var(--background-light-green)',
        'background-dark-green': 'var(--background-dark-green)',
        'background-pink': 'var(--background-pink)',
        'background-yellow': 'var(--background-yellow)',
        'background-light-gray': 'var(--background-light-gray)',
        foreground: 'var(--foreground)',
        'foreground-white': 'var(--foreground-white)',
        'foreground-gray': 'var(--foreground-gray)',
        'foreground-pink': 'var(--foreground-pink)',

        black: 'var(--black)',
        white: 'var(--white)',
        green: 'var(--green)',
        'dark-green': 'var(--dark-green)',
        pink: 'var(--pink)',
        'light-violet': 'var(--light-violet)',
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          '300/50': 'rgba(179, 179, 179, 0.5)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)'
        },
        red: 'var(--red)',
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)'
        },

        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)'
      },
      listStyleType: {
        star: 'var(/icons/star-list.svg)'
      },
      screens: {
        '360': '360px',
        '480': '480px',
        '768': '768px',
        '960': '960px',
        '1216': '1216px'
      },
      fontFamily: {
        fira: ['var(--font-fira-code)'],
        exo: ['var(--font-exo-2)']
      },
      gridTemplateColumns: {
        '2-desc': 'repeat(2, minmax(392px, 1fr))',
        '2-category': 'repeat(2, minmax(210px, 1fr))',
        '3-category': 'repeat(3, minmax(229px, 1fr))',
        '4-category': 'repeat(4, minmax(215px, 1fr))'
      },
      flex: {
        100: '1 1 100%'
      },
      aspectRatio: {
        '495/760': '368 / 158'
      },
      boxShadow: {
        card: '0 2px 5px 0 #e5e5e5'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/aspect-ratio')]
}
export default config
