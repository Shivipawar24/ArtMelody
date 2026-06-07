import { useState } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(600px circle at ${glowPos.x}px ${glowPos.y}px, rgba(236,72,153,0.25), transparent 60%)`, transition: 'background 0.3s ease' }} onMouseMove={e => setGlowPos({ x: e.clientX, y: e.clientY })} />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-pink-400/40 rounded-full animate-float" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 6}s`, animationDuration: `${4 + Math.random() * 6}s` }} />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mt-10 mb-2">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span className="text-sm text-pink-300 font-medium">Crafted with love, delivered with pride</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-gold-400 bg-clip-text text-transparent">ArtMelody</span>
          <br />
          <span className="text-white">Studio</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">Your premier destination for hand-crafted portraits, caricatures, and custom artwork. Every piece tells a unique story.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#gallery" className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold rounded-2xl hover:shadow-xl hover:shadow-pink-500/25 transition-all flex items-center gap-2">
            Explore Gallery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#process" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all">How It Works</a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '20+', label: 'Artworks Delivered' },
            { value: '98%', label: 'Happy Clients' },
            { value: '4.9★', label: 'Average Rating' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  )
}
