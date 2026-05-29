'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from '@phosphor-icons/react'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

const kniveImages = [
  { src: '/knife-chef-group.jpeg', pos: 'object-[50%_30%]' },
  { src: '/knife-elegant.jpeg', pos: 'object-[50%_50%]' },
  { src: '/knife-utility.jpeg', pos: 'object-[50%_35%]' },
]

export default function Collection() {
  const reduce = useReducedMotion()
  const { lang } = useLanguage()
  const tr = t[lang].collection

  return (
    <section id="collection" className="bg-volcanic py-32 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light leading-none text-bone"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}
          >
            {tr.title}
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-body font-light text-smoke text-base mt-4 max-w-[46ch]"
          >
            {tr.subtitle}
          </motion.p>
        </div>

        {/* Layout B: featured top, 2 equal bottom */}
        <div className="flex flex-col gap-3">

          {/* Featured — Chef Knife full width */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-[460px] md:h-[580px] overflow-hidden bg-ash cursor-pointer"
          >
            <Image
              src={kniveImages[0].src}
              alt={tr.knives[0].name}
              fill
              className={`object-cover ${kniveImages[0].pos} transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]`}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-volcanic/80 via-volcanic/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-volcanic/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-xl">
              <p className="font-body font-light text-[11px] text-bronze mb-3">{tr.knives[0].subtitle}</p>
              <h3 className="font-display font-light text-bone leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                {tr.knives[0].name}
              </h3>
              <p className="font-body font-light text-bone/55 text-sm mt-3 max-w-[44ch] leading-relaxed">
                {tr.knives[0].description}
              </p>
              <div className="flex items-center justify-between mt-6">
                <span className="font-body font-light text-[9px] uppercase tracking-[0.18em] text-bronze/60 border border-bronze/25 px-3 py-1.5">
                  {tr.care}
                </span>
                <Link
                  href="#commission"
                  className="font-body text-[10px] uppercase tracking-[0.2em] text-bronze flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  {tr.enquire} <ArrowUpRight size={14} weight="light" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Bottom row — Elegant + Utility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tr.knives.slice(1).map((knife, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.9, delay: (i + 1) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-[400px] md:h-[520px] overflow-hidden bg-ash cursor-pointer"
              >
                <Image
                  src={kniveImages[i + 1].src}
                  alt={knife.name}
                  fill
                  className={`object-cover ${kniveImages[i + 1].pos} transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]`}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-volcanic/90 via-volcanic/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="font-body font-light text-[10px] text-bronze mb-2">{knife.subtitle}</p>
                  <h3 className="font-display font-light text-2xl text-bone leading-none">{knife.name}</h3>
                  <p className="font-body font-light text-bone/50 text-xs mt-2 leading-relaxed max-w-[36ch]">{knife.detail}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="font-body font-light text-[8px] uppercase tracking-[0.16em] text-bronze/50 border border-bronze/20 px-2 py-1">
                      {tr.care}
                    </span>
                    <Link
                      href="#commission"
                      className="font-body text-[9px] uppercase tracking-[0.2em] text-bronze flex items-center gap-2 hover:gap-3 transition-all duration-300"
                    >
                      {tr.enquire} <ArrowUpRight size={12} weight="light" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 pt-8 border-t border-steel/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <p className="font-body font-light text-smoke text-xs max-w-[48ch]">
            {tr.careDetail}
          </p>
          <p className="font-body font-light text-smoke/50 text-xs whitespace-nowrap">
            {tr.footer}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
