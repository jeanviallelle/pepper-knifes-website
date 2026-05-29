'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Footer() {
  const { lang } = useLanguage()
  const tr = t[lang]

  const navLinks = [
    { label: tr.nav.collection, href: '#collection' },
    { label: tr.nav.maker, href: '#artisan' },
    { label: tr.nav.steel, href: '#materials' },
    { label: tr.nav.commission, href: '#commission' },
  ]

  return (
    <footer className="bg-volcanic border-t border-steel/30 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="relative w-[56px] h-[56px] shrink-0 transition-opacity duration-300 group-hover:opacity-80" style={{ mixBlendMode: 'screen' }}>
                <Image
                  src="/logo.png"
                  alt="Pepper Knifes"
                  fill
                  className="object-contain"
                  style={{ filter: 'brightness(0.52) sepia(1) saturate(2.2)' }}
                  sizes="56px"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-body text-[12px] uppercase tracking-[0.22em] text-bone/70 group-hover:text-bone transition-colors duration-300">
                  Pepper Knifes
                </span>
                <span className="font-body text-[8px] uppercase tracking-[0.18em] text-bronze/60 mt-1">
                  Forged in Pico Island
                </span>
                <span className="font-body text-[8px] uppercase tracking-[0.18em] text-bone/30 mt-0.5">
                  Azores
                </span>
              </div>
            </Link>
            <p className="font-body font-light text-smoke text-sm mt-7 max-w-[30ch] leading-relaxed">
              {tr.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <p className="font-body font-light text-[9px] uppercase tracking-[0.24em] text-smoke/70 mb-6">
              {tr.footer.pages}
            </p>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-body font-light text-bone/45 hover:text-bone text-sm transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="font-body font-light text-[9px] uppercase tracking-[0.24em] text-smoke/70 mb-6">
              {tr.footer.contact}
            </p>
            <ul className="space-y-4">
              <li>
                <a href="mailto:antonio_17_pimentel@hotmail.com" className="font-body font-light text-bone/45 hover:text-bone text-sm transition-colors duration-300">
                  antonio_17_pimentel@hotmail.com
                </a>
              </li>
              <li>
                <a href="tel:+351918298590" className="font-body font-light text-bone/45 hover:text-bone text-sm transition-colors duration-300">
                  +351 918 298 590
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/pepper_knifes/" target="_blank" rel="noopener noreferrer" className="font-body font-light text-bone/45 hover:text-bronze text-sm transition-colors duration-300">
                  @pepper_knifes
                </a>
              </li>
              <li>
                <p className="font-body font-light text-bone/35 text-sm">Pico Island, Azores, Portugal</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-steel/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body font-light text-smoke/60 text-xs">{tr.footer.rights}</p>
          <p className="font-body font-light text-smoke/60 text-xs">{tr.footer.location}</p>
        </div>
      </div>
    </footer>
  )
}
