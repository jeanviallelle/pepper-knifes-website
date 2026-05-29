import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        volcanic: '#0d0b0a',
        forge: '#1a1210',
        ash: '#231815',
        bronze: {
          DEFAULT: '#a07848',
          warm: '#b89660',
          muted: '#7a5c36',
        },
        bone: '#f0ebe3',
        cachalote: '#e8d4a0',
        smoke: '#8c8078',
        steel: '#2a1f1c',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.22em',
        wider: '0.18em',
        wide: '0.12em',
      },
    },
  },
  plugins: [],
}

export default config
