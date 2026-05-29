'use client'

import { useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

const images = [
  { src: '/gallery-07.jpeg', alt: 'António pulling steel from the forge',         aspect: 'landscape' },
  { src: '/gallery-02.jpeg', alt: 'Damascus pattern close-up, foliage background', aspect: 'portrait'  },
  { src: '/gallery-03.jpeg', alt: 'António hammering on the anvil',                aspect: 'portrait'  },
  { src: '/gallery-01.jpeg', alt: 'Nakiri knife, Azores landscape',                aspect: 'portrait'  },
  { src: '/gallery-08.jpeg', alt: 'Knife on cutting board with ribs',              aspect: 'portrait'  },
  { src: '/gallery-05.jpeg', alt: 'Damascus blade on red fabric',                  aspect: 'portrait'  },
  { src: '/gallery-04.jpeg', alt: 'Knife on red volcanic soil',                    aspect: 'portrait'  },
  { src: '/gallery-06.jpeg', alt: 'Four knives — the full Damascus range',         aspect: 'landscape' },
  { src: '/gallery-09.jpeg', alt: 'António working the forge, dramatic flames',    aspect: 'portrait'  },
]

const CARD_HEIGHT = 440
const PORTRAIT_W  = 295
const LANDSCAPE_W = 600
const GAP = 12

export default function Gallery() {
  const reduce = useReducedMotion()
  const { lang } = useLanguage()

  const label = lang === 'pt' ? 'O Trabalho' : 'The Work'

  return (
    <section className="bg-volcanic py-20 overflow-hidden border-t border-steel/30">
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <p className="font-body font-light text-[10px] uppercase tracking-[0.28em] text-bronze">
          {label}
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0d0b0a 20%, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0d0b0a 20%, transparent)' }}
        />

        {/* Marquee track */}
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            animation: reduce ? 'none' : 'pk-marquee 48s linear infinite',
            width: 'max-content',
            willChange: 'transform',
          }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {[...images, ...images].map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 overflow-hidden bg-ash"
              style={{
                height: `${CARD_HEIGHT}px`,
                width: `${img.aspect === 'landscape' ? LANDSCAPE_W : PORTRAIT_W}px`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                sizes={`${img.aspect === 'landscape' ? LANDSCAPE_W : PORTRAIT_W}px`}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes pk-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
