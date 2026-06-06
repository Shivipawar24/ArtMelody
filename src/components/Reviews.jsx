import { useRef, useState, useEffect } from 'react'
import { Star } from 'lucide-react'

const reviews = [
  { name: 'Priya Sharma', role: 'Customer', text: 'Absolutely stunning! The color portrait they made of my mom was beyond my expectations. Every detail was perfect.', rating: 5, emoji: '🌟' },
  { name: 'Rahul Verma', role: 'Regular Client', text: 'I\'ve ordered 5 caricatures already. The quality and turnaround time is amazing. Highly recommended!', rating: 5, emoji: '😊' },
  { name: 'Anjali Patel', role: 'Customer', text: 'Ordered a couple sketch for my anniversary. My husband loved it! The artists really capture emotions.', rating: 5, emoji: '💖' },
  { name: 'Vikram Singh', role: 'Business Client', text: 'Got a caricature of my boss as a gift. He loved it! Professional quality and fast delivery.', rating: 5, emoji: '👔' },
]

export default function Reviews() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="reviews" ref={ref} className="py-24 px-6 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-4"><Star className="w-4 h-4 text-pink-400" /><span className="text-sm text-pink-300 font-medium">Testimonials</span></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Loved by Real People</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Real stories from real people who experienced the ArtMelody magic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className={`bg-dark-800 border border-white/5 rounded-2xl p-6 hover:border-pink-500/30 transition-all ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${i * 150}ms`, transitionDuration: '600ms' }}>
              <div className="flex items-center gap-1 mb-4">{[...Array(r.rating)].map((_, j) => (<Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />))}</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-lg">{r.emoji}</div>
                <div><div className="text-white text-sm font-semibold">{r.name}</div><div className="text-gray-500 text-xs">{r.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
