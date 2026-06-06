import { useState, useEffect } from 'react'
import { Menu, X, Palette } from 'lucide-react'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#process', label: 'Process' },
  { href: '#price-calculator', label: 'Price Calc' },
  { href: '#quiz', label: 'Style Quiz' },
  { href: '#order', label: 'Order' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur shadow-lg shadow-purple-900/30' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-purple-700 flex items-center justify-center">
            <Palette className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">ArtMelody</span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">{l.label}</a>
          ))}
          <a href="#order" className="ml-3 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-700 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25">Order Now</a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-300 hover:text-white">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-dark-900/98 backdrop-blur border-t border-white/5 px-6 py-4 space-y-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">{l.label}</a>
          ))}
          <a href="#order" onClick={() => setOpen(false)} className="block text-center px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-700 text-white rounded-xl font-semibold">Order Now</a>
        </div>
      )}
    </nav>
  )
}
