'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Manifesto() {
  const reduce = useReducedMotion()
  const { lang } = useLanguage()
  const tr = t[lang].manifesto

  return (
    <section className="relative bg-forge py-40 md:py-56 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="w-12 h-px bg-cachalote/50 mb-14" />

        <motion.blockquote
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light italic text-bone/90 max-w-[30ch]"
          style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3.8rem)', lineHeight: 1.2 }}
        >
          {tr.quote}
        </motion.blockquote>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="font-body font-light text-cachalote/70 text-sm mt-10"
        >
          {tr.attribution}
        </motion.p>
      </div>

      <div
        aria-hidden
        className="absolute right-[-6vw] bottom-[-6vw] w-[42vw] h-[42vw] select-none pointer-events-none"
        style={{ opacity: 0.18, mixBlendMode: 'screen' }}
      >
        <Image
          src="/logo.png"
          alt=""
          fill
          className="object-contain"
          style={{ filter: 'sepia(1) saturate(3) brightness(1.3) hue-rotate(3deg)' }}
          sizes="42vw"
        />
      </div>
    </section>
  )
}
