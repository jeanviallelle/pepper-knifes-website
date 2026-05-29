'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Testimonial() {
  const reduce = useReducedMotion()
  const { lang } = useLanguage()
  const tr = t[lang].testimonial

  return (
    <section className="bg-volcanic py-40 px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-px h-14 bg-cachalote/40 mx-auto mb-14" />
          <p
            className="font-display font-light italic text-bone/85 mx-auto"
            style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.4rem)', lineHeight: 1.35, maxWidth: '34ch' }}
          >
            {tr.quote}
          </p>
          <div className="mt-10">
            <p className="font-body font-light text-sm text-cachalote/80">{tr.name}</p>
            <p className="font-body font-light text-xs text-cachalote/50 mt-1 tracking-wide">{tr.role}</p>
          </div>
          <div className="w-px h-14 bg-cachalote/40 mx-auto mt-14" />
        </motion.div>
      </div>
    </section>
  )
}
