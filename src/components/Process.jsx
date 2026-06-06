import { useState, useEffect, useRef } from 'react'
import { Play, Mail, Sparkles, Palette, Gift } from 'lucide-react'

const processSteps = [
  { step: 1, title: 'Submit Reference', desc: 'Share your photo or idea via our order form.', icon: Mail, img: '/Artprocess/process.jpg' },
  { step: 2, title: 'Sketch Creation', desc: 'Our artists bring your vision to life on paper.', icon: Sparkles, img: '/Artprocess/processsketch (2).jpg' },
  { step: 3, title: 'Review & Refine', desc: 'We refine every detail until it matches your vision.', icon: Palette, img: '/Artprocess/processsketch (3).jpg' },
  { step: 4, title: 'Final Delivery', desc: 'Receive your masterpiece in high resolution.', icon: Gift, img: '/Artprocess/processsketch (4).jpg' },
]

export default function Process() {
  const refs = useRef(processSteps.map(() => null)).current
  const [inView, setInView] = useState(processSteps.map(() => false))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const observers = refs.map((ref, i) => {
      if (!ref) return null
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setInView(prev => { const next = [...prev]; next[i] = true; return next })
      }, { threshold: 0.3 })
      observer.observe(ref)
      return observer
    }).filter(Boolean)
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <section id="process" className="py-24 px-6 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4">
            <Play className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">From Idea to Artwork</h2>
          <p className="text-gray-400 max-w-xl mx-auto">A smooth 4-step journey to get your personalized artwork.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((item, i) => (
            <div key={i} ref={el => refs[i] = el} className={`relative transition-all duration-700 ${inView[i] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/30 hover:shadow-xl hover:shadow-pink-500/10 transition-all group">
                <div className="h-56 relative overflow-hidden">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">{item.step}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-700 rounded-xl flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-white" /></div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-dark-800 border border-white/5 rounded-2xl overflow-hidden flex flex-wrap gap-6 p-6 justify-center">
            <video controls className="w-80 h-50 rounded-2xl"><source src="/sketchvideoa/sketchvideo.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
            <video controls className="w-80 h-50 rounded-2xl"><source src="/sketchvideoa/sketchvideo (2).mp4" type="video/mp4" />Your browser does not support the video tag.</video>
          </div>
        </div>
      </div>
    </section>
  )
}