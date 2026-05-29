'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export default function Hero() {
  const reduce = useReducedMotion()
  const { lang } = useLanguage()
  const tr = t[lang].hero

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-volcanic">
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-16 w-full md:w-[58%]">

        <motion.span
          initial={reduce ? false : fadeUp(0.2).initial}
          animate={fadeUp(0.2).animate}
          transition={fadeUp(0.2).transition}
          className="font-body text-[10px] uppercase tracking-[0.28em] text-bronze mb-10 block"
        >
          {tr.eyebrow}
        </motion.span>

        <motion.h1
          initial={reduce ? false : fadeUp(0.35).initial}
          animate={fadeUp(0.35).animate}
          transition={fadeUp(0.35).transition}
          className="font-display font-light leading-[1.0] tracking-tight text-bone"
          style={{ fontSize: 'clamp(3.2rem, 6.5vw, 7rem)' }}
        >
          {tr.line1}
          <em className="italic text-bronze block leading-[1.1] pb-1" style={{ fontSize: 'clamp(3.2rem, 6.5vw, 7rem)' }}>
            {tr.line2}
          </em>
        </motion.h1>

        <motion.p
          initial={reduce ? false : fadeUp(0.5).initial}
          animate={fadeUp(0.5).animate}
          transition={fadeUp(0.5).transition}
          className="font-display font-light italic text-bone/70 leading-relaxed mt-6"
          style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)' }}
        >
          {tr.tagline}
        </motion.p>

        <motion.p
          initial={reduce ? false : fadeUp(0.55).initial}
          animate={fadeUp(0.55).animate}
          transition={fadeUp(0.55).transition}
          className="font-body font-light text-bone/50 text-[0.95rem] leading-relaxed mt-6 max-w-[42ch]"
        >
          {tr.body}
        </motion.p>

        <motion.div
          initial={reduce ? false : fadeUp(0.65).initial}
          animate={fadeUp(0.65).animate}
          transition={fadeUp(0.65).transition}
          className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12"
        >
          <Link
            href="#commission"
            className="font-body font-light text-[10.5px] uppercase tracking-[0.2em] bg-bronze text-volcanic px-8 py-4 hover:bg-bronze-warm transition-colors duration-300 whitespace-nowrap"
          >
            {tr.cta1}
          </Link>
          <Link
            href="#collection"
            className="font-body font-light text-[10.5px] uppercase tracking-[0.2em] text-bone/45 hover:text-bone transition-colors duration-300 whitespace-nowrap"
          >
            {tr.cta2}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[48%]"
      >
        <div className="relative w-full h-full">
          <Image
            src="/afiando_faca.jpeg"
            alt="The forge at Pico Island, Azores"
            fill
            priority
            className="object-cover object-[60%_40%]"
            sizes="48vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-volcanic via-volcanic/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-volcanic/15 via-transparent to-volcanic/25" />
        </div>
      </motion.div>

      <div className="absolute inset-0 md:hidden">
        <Image
          src="/afiando_faca.jpeg"
          alt="The forge at Pico Island, Azores"
          fill
          priority
          className="object-cover object-[60%_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-volcanic/75" />
      </div>
    </section>
  )
}
