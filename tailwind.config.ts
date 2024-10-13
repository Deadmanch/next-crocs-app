/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'background-white': 'var(--background-white)',
        'background-violet': 'var(--background-violet)',
        'background-light-green': 'var(--background-light-green)',
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
        pink: 'var(--pink)',
        'light-violet': 'var(--light-violet)',
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))'
      },
      screens: {
        '360': '360px',
        '480': '480px',
        '768': '768px',
        '960': '960px',
        '1216': '1216px'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
export default config
