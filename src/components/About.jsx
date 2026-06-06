import { Heart, Palette, Star } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4"><Heart className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300 font-medium">Our Story</span></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">About ArtMelody Studio</h2>
          <p className="text-gray-400 leading-relaxed mb-6">Founded in 2020, ArtMelody Studio was born from a simple belief: that every person, every moment, and every pet deserves to be immortalized in art. What started as a small passion project has grown into a team of 12 talented artists delivering joy to clients across India.</p>
          <p className="text-gray-400 leading-relaxed mb-8">We specialize in hand-crafted portraits, caricatures, and custom illustrations. Our artists bring decades of combined experience, a keen eye for detail, and an unwavering commitment to quality.</p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { num: '12+', label: 'Expert Artists' },
              { num: '20+', label: 'Happy Clients' },
              { num: '3', label: 'Years Experience' },
            ].map((stat, i) => (
              <div key={i} className="bg-dark-900 border border-white/5 rounded-2xl p-4 text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">{stat.num}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-gradient-to-br from-purple-700 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-900/50">
            <div className="text-center"><Palette className="w-24 h-24 text-white/80 mx-auto mb-4" /><p className="text-white/60 text-sm">Since 2020</p></div>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-dark-900 border border-white/10 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center"><Star className="w-5 h-5 text-white" /></div>
              <div><div className="text-white font-bold text-sm">4.9 / 5 Rating</div><div className="text-gray-400 text-xs">Based on 20+ reviews</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
