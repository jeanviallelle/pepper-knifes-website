'use client'

import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Navigation() {
  const reduce = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const tr = t[lang].nav

  const navItems = [
    { label: tr.collection, href: '#collection' },
    { label: tr.maker, href: '#artisan' },
    { label: tr.steel, href: '#materials' },
    { label: tr.commission, href: '#commission' },
  ]

  return (
    <>
      <motion.nav
        initial={reduce ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 h-[72px]"
        style={{ background: 'linear-gradient(to bottom, rgba(13,11,10,0.9) 0%, transparent 100%)' }}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div
            className="relative w-[40px] h-[40px] transition-opacity duration-300 group-hover:opacity-80 shrink-0"
            style={{ mixBlendMode: 'screen' }}
          >
            <Image
              src="/logo.png"
              alt="Pepper Knifes"
              fill
              className="object-contain"
              style={{ filter: 'brightness(0.52) sepia(1) saturate(2.2)' }}
              sizes="40px"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-body text-[11px] uppercase tracking-[0.22em] text-bone/80 group-hover:text-bone transition-colors duration-300">
              Pepper Knifes
            </span>
            <span className="font-body text-[8px] uppercase tracking-[0.18em] text-bone/35 mt-0.5">
              Pico Island, Azores
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-body font-light text-[10.5px] uppercase tracking-[0.2em] text-bone/50 hover:text-bone transition-colors duration-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Lang toggle + mobile menu */}
        <div className="flex items-center gap-5">
          <button
            onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}
            className="font-body text-[10px] uppercase tracking-[0.2em] text-bone/40 hover:text-bronze transition-colors duration-300"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'PT' : 'EN'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-bone/60 hover:text-bone transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-volcanic flex flex-col items-center justify-center gap-8 md:hidden"
        >
          <div
            className="relative w-[80px] h-[80px] mb-4"
            style={{ mixBlendMode: 'screen' }}
          >
            <Image
              src="/logo.png"
              alt="Pepper Knifes"
              fill
              className="object-contain"
              style={{ filter: 'brightness(0.52) sepia(1) saturate(2.2)' }}
              sizes="80px"
            />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-display font-light italic text-3xl text-bone/80 hover:text-bronze transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </>
  )
}
