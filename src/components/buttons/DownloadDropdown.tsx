import { useState, useRef, useEffect } from 'react'
import { routes } from '../../helpers/routes'
import '../../styles/components/buttons/downloadDropdown.scss'

const STORES = [
  {
    label: 'App Store',
    href: routes.appstore.path,
    icon: '/images/icons/app-store-black.png',
  },
  {
    label: 'Play Store',
    href: routes.playstore.path,
    icon: '/images/icons/play-store-black.png',
  },
]

interface DownloadDropdownProps {
  label: string
  variant?: 'primary' | 'navbar'
  className?: string
}

export const DownloadDropdown = ({ label, variant = 'primary', className }: DownloadDropdownProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div
      className={`download-dropdown ${variant}${className ? ` ${className}` : ''}`}
      ref={ref}
    >
      <button
        className="dd-trigger"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {label}
        <svg
          className={`dd-chevron${open ? ' open' : ''}`}
          width="12" height="12" viewBox="0 0 12 12"
          fill="none" aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {open && (
        <div className="dd-menu" role="listbox">
          {STORES.map(store => (
            <a
              key={store.label}
              href={store.href}
              target="_blank"
              rel="noopener noreferrer"
              className="dd-item"
              role="option"
              onClick={() => setOpen(false)}
            >
              <img src={store.icon} alt="" aria-hidden="true" />
              {store.label}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
