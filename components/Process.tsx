'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Process() {
  const reduce = useReducedMotion()
  const { lang } = useLanguage()
  const tr = t[lang].process

  return (
    <section id="process" className="bg-volcanic py-32 px-8 border-t border-steel/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

          <div className="md:col-span-3 md:sticky md:top-28 md:self-start">
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light leading-none text-bone"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3.8rem)' }}
            >
              {tr.title}
            </motion.h2>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-body font-light text-smoke text-sm mt-5 max-w-[26ch] leading-relaxed"
            >
              {tr.subtitle}
            </motion.p>
          </div>

          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14">
              {tr.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-body font-light text-bronze/40 text-sm tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-px bg-bronze/25 mt-5 mb-6" />
                  <h3 className="font-display font-light text-bone" style={{ fontSize: 'clamp(1.4rem, 2vw, 1.75rem)' }}>
                    {step.title}
                  </h3>
                  <p className="font-body font-light text-smoke text-sm mt-3 leading-relaxed max-w-[28ch]">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
