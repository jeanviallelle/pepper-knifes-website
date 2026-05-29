'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'
import SelectField from '@/components/SelectField'

type Field = {
  name: string
  email: string
  phone: string
  knifeType: string
  use: string
  handle: string
  message: string
}

const empty: Field = { name: '', email: '', phone: '', knifeType: '', use: '', handle: '', message: '' }

export default function Commission() {
  const reduce = useReducedMotion()
  const { lang } = useLanguage()
  const tr = t[lang].commission

  const [fields, setFields] = useState<Field>(empty)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const set = (k: keyof Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields(f => ({ ...f, [k]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fields.name.trim()) { setError(tr.errorName); return }
    if (!fields.email.includes('@')) { setError(tr.errorEmail); return }
    if (!fields.message.trim()) { setError(tr.errorMessage); return }

    const knifeLabel = tr.knifeTypes.find(o => o.value === fields.knifeType)?.label || fields.knifeType
    const useLabel = tr.useOptions.find(o => o.value === fields.use)?.label || fields.use

    const data = new FormData()
    data.append('form-name', 'commission')
    data.append('Name', fields.name)
    data.append('Email', fields.email)
    data.append('Phone', fields.phone)
    data.append('Knife Type', knifeLabel)
    data.append('Intended Use', useLabel)
    data.append('Handle Preference', fields.handle)
    data.append('Message', fields.message)

    try {
      await fetch('/', { method: 'POST', body: data })
      setSent(true)
    } catch {
      setError(lang === 'pt' ? 'Erro ao enviar. Tente por email directamente.' : 'Error sending. Please contact us directly by email.')
    }
  }

  const inputClass = "w-full bg-transparent border-b border-bone/25 text-bone placeholder:text-bone/35 font-body font-light text-sm py-3 focus:outline-none focus:border-bronze transition-colors duration-300"

  const labelClass = "font-body font-light text-[9px] uppercase tracking-[0.22em] text-bone/50 mb-1 block"

  return (
    <section id="commission" className="relative py-32 px-8 overflow-hidden">
      {/* Background forge photo */}
      <div className="absolute inset-0">
        <Image
          src="/forge-fire.jpeg"
          alt=""
          fill
          className="object-cover object-[35%_center]"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-volcanic/75" />
        {/* Extra darkening on right so form text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-volcanic/60 via-transparent to-volcanic/40" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="font-body font-light text-[10px] uppercase tracking-[0.28em] text-bronze mb-5">
            {lang === 'pt' ? 'Encomenda' : 'Commission'}
          </p>
          <h2
            className="font-display font-light leading-[1.1] text-bone"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)' }}
          >
            {tr.title}
          </h2>
          <p className="font-body font-light text-bone/50 text-[0.9rem] mt-4 max-w-[48ch] leading-relaxed">
            {tr.body}
          </p>

          {/* Direct contacts */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-6">
            <a href="tel:+351918298590" className="font-body font-light text-xs text-bone/40 hover:text-bronze transition-colors duration-300">
              +351 918 298 590
            </a>
            <span className="w-px h-3 bg-steel hidden sm:block" />
            <a href="https://www.instagram.com/pepper_knifes/" target="_blank" rel="noopener noreferrer" className="font-body font-light text-xs text-bone/40 hover:text-bronze transition-colors duration-300">
              @pepper_knifes
            </a>
            <span className="w-px h-3 bg-steel hidden sm:block" />
            <a href="mailto:antonio_17_pimentel@hotmail.com" className="font-body font-light text-xs text-bone/40 hover:text-bronze transition-colors duration-300">
              antonio_17_pimentel@hotmail.com
            </a>
          </div>
        </motion.div>

        {/* Form */}
        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-16 text-center"
          >
            <div className="w-px h-12 bg-bronze/40 mx-auto mb-8" />
            <p className="font-display font-light italic text-bone/80" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
              {tr.success}
            </p>
            <p className="font-body font-light text-smoke text-sm mt-4">{tr.successSub}</p>
            <div className="w-px h-12 bg-bronze/40 mx-auto mt-8" />
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            noValidate
            className="space-y-8"
          >
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="f-name" className={labelClass}>{tr.labelName}</label>
                <input id="f-name" type="text" value={fields.name} onChange={set('name')} placeholder={tr.placeholderName} className={inputClass} />
              </div>
              <div>
                <label htmlFor="f-email" className={labelClass}>{tr.labelEmail}</label>
                <input id="f-email" type="email" value={fields.email} onChange={set('email')} placeholder="email@exemplo.com" className={inputClass} />
              </div>
            </div>

            {/* Row 2: Phone + Knife type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="f-phone" className={labelClass}>{tr.labelPhone}</label>
                <input id="f-phone" type="tel" value={fields.phone} onChange={set('phone')} placeholder="+351 900 000 000" className={inputClass} />
              </div>
              <SelectField
                id="f-type"
                label={tr.labelKnifeType}
                value={fields.knifeType}
                onChange={v => { setFields(f => ({ ...f, knifeType: v })); setError('') }}
                options={tr.knifeTypes}
                placeholder={tr.optionSelect}
              />
            </div>

            {/* Row 3: Use + Handle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <SelectField
                id="f-use"
                label={tr.labelUse}
                value={fields.use}
                onChange={v => { setFields(f => ({ ...f, use: v })); setError('') }}
                options={tr.useOptions}
                placeholder={tr.optionSelect}
              />
              <div>
                <label htmlFor="f-handle" className={labelClass}>{tr.labelHandle}</label>
                <input id="f-handle" type="text" value={fields.handle} onChange={set('handle')} placeholder={tr.placeholderHandle} className={inputClass} />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="f-message" className={labelClass}>{tr.labelMessage}</label>
              <textarea
                id="f-message"
                value={fields.message}
                onChange={set('message')}
                placeholder={tr.placeholderMessage}
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Error + submit */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              {error && (
                <p role="alert" className="font-body font-light text-xs text-bronze/80">{error}</p>
              )}
              <button
                type="submit"
                className="font-body font-light text-[10.5px] uppercase tracking-[0.22em] bg-bronze text-volcanic px-10 py-4 hover:bg-bronze-warm transition-colors duration-300 ml-auto"
              >
                {tr.cta}
              </button>
            </div>
          </motion.form>
        )}
      </div>
    </section>
  )
}
