'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Artisan() {
  const reduce = useReducedMotion()
  const { lang } = useLanguage()
  const tr = t[lang].artisan

  return (
    <section id="artisan" className="bg-volcanic py-32 px-8 border-t border-steel/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative h-[520px] md:h-[640px]"
          >
            <Image
              src="/antonio_afiando_esquerda.jpeg"
              alt="António Pimentel sharpening a blade at the forge, Pico Island"
              fill
              className="object-cover object-[center_8%]"
              sizes="(max-width: 768px) 100vw, 41vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-volcanic/60 via-transparent to-transparent" />
          </motion.div>

          <div className="md:col-span-6 md:col-start-7 md:pt-8">
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light leading-none text-bone"
              style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}
            >
              António
              <em className="italic text-bronze block leading-[1.1]">Pimentel</em>
            </motion.h2>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-body font-light text-[10px] uppercase tracking-[0.22em] text-bronze mt-4 mb-10"
            >
              {tr.subtitle}
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="font-body font-light text-bone/65 text-[0.95rem] leading-relaxed">{tr.p1}</p>
              <p className="font-body font-light text-bone/65 text-[0.95rem] leading-relaxed">{tr.p2}</p>
              <p className="font-body font-light text-bone/65 text-[0.95rem] leading-relaxed">{tr.p3}</p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 pt-10 border-t border-steel/40"
            >
              <p className="font-display font-light italic text-bone/80" style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}>
                {tr.pullquote}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
