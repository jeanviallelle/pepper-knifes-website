'use client'

import { useState, useRef, useEffect } from 'react'
import { CaretDown } from '@phosphor-icons/react'

type Option = { value: string; label: string }

type Props = {
  id: string
  label: string
  value: string
  onChange: (val: string) => void
  options: Option[]
  placeholder: string
}

export default function SelectField({ id, label, value, onChange, options, placeholder }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const selected = options.find(o => o.value === value)
  const labelClass = "font-body font-light text-[9px] uppercase tracking-[0.22em] text-bone/50 mb-1 block"

  return (
    <div ref={ref} className="relative">
      <label htmlFor={id} className={labelClass}>{label}</label>
      <button
        type="button"
        id={id}
        onClick={() => setOpen(o => !o)}
        className="w-full text-left bg-transparent border-b border-bone/25 font-body font-light text-sm py-3 flex items-center justify-between focus:outline-none focus:border-bronze transition-colors duration-300"
      >
        <span className={selected ? 'text-bone' : 'text-bone/35'}>
          {selected ? selected.label : placeholder}
        </span>
        <CaretDown
          size={11}
          weight="bold"
          className={`shrink-0 text-smoke/40 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 bg-forge border border-steel/60 mt-1 shadow-xl">
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false) }}
              className={`w-full text-left px-4 py-3 font-body font-light text-sm transition-colors duration-150 ${
                value === opt.value
                  ? 'text-bronze bg-ash'
                  : 'text-bone/65 hover:text-bone hover:bg-ash/60'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
