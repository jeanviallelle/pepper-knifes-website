'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Materials() {
  const reduce = useReducedMotion()
  const { lang } = useLanguage()
  const tr = t[lang].materials

  const stats = [
    { value: '84-360', label: tr.stat1label },
    { value: '7+', label: tr.stat2label },
  ]

  return (
    <section id="materials" className="bg-forge py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

          <motion.div
            initial={reduce ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-6 relative h-[420px] md:h-[620px]"
          >
            <Image
              src="/carvao_faca.jpeg"
              alt="Raw carbon in António's hands, Pico Island forge"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-forge/20 mix-blend-multiply" />
          </motion.div>

          <div className="md:col-span-5 md:col-start-8">
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light leading-[1.1] text-bone"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
            >
              {tr.title}
            </motion.h2>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 space-y-6"
            >
              <p className="font-body font-light text-bone/65 text-[0.95rem] leading-relaxed">{tr.p1}</p>
              <p className="font-body font-light text-bone/65 text-[0.95rem] leading-relaxed">{tr.p2}</p>
              <p className="font-body font-light text-bone/65 text-[0.95rem] leading-relaxed">{tr.p3}</p>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 grid grid-cols-2 gap-10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-display font-light text-bronze" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                    {stat.value}
                  </span>
                  <p className="font-body font-light text-smoke text-xs mt-2 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
