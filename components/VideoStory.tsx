'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '@/lib/LanguageContext'

const YOUTUBE_ID = 'urLfeX9hQUM'

export default function VideoStory() {
  const reduce = useReducedMotion()
  const { lang } = useLanguage()

  const label = lang === 'pt' ? 'O Documentário' : 'The Documentary'
  const title = lang === 'pt' ? 'Inteligência Manual' : 'Manual Intelligence'
  const sub = lang === 'pt'
    ? 'António Pimentel, o Cuteleiro do Pico'
    : 'António Pimentel, the Knifemaker of Pico'

  return (
    <section className="bg-volcanic py-24 px-8 border-t border-steel/30">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <p className="font-body font-light text-[10px] uppercase tracking-[0.28em] text-bronze mb-4">
            {label}
          </p>
          <h2
            className="font-display font-light italic text-bone leading-none"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)' }}
          >
            {title}
          </h2>
          <p className="font-body font-light text-smoke text-sm mt-3">{sub}</p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
          style={{ paddingBottom: '56.25%' }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&color=white`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
