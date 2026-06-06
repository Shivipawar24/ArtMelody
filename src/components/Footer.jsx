import { Palette } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-700 flex items-center justify-center"><Palette className="w-4 h-4 text-white" /></div>
          <span className="font-bold text-white">ArtMelody Studio</span>
        </div>
        <p className="text-gray-500 text-sm">© 2026 ArtMelody Studio. All rights reserved. Crafted with 💖</p>
        <div className="flex gap-4">
          {['Instagram', 'Facebook', 'Twitter'].map(s => (<a key={s} href="https://www.instagram.com/artmelody_24/" className="text-gray-500 hover:text-pink-400 transition-colors text-sm">{s}</a>))}
        </div>
      </div>
    </footer>
  )
}
