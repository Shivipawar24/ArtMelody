import { Gift } from 'lucide-react'

const giftItems = [
  { id: 1, title: 'Anniversary Special', price: '₹999', desc: 'Romantic couple sketch', src: '/wallart/wallArt (2).jpg', color: 'from-pink-500 to-rose-600' },
  { id: 2, title: 'Birthday Portrait', price: '₹1,499', desc: 'Personalized birthday art', src: '/commisonArtwork/commisionArt_9.jpg', color: 'from-purple-600 to-pink-500' },
  { id: 3, title: 'Pet Memorial', price: '₹1,299', desc: 'Cherished pet portrait', src: '/babySketch/babySketch.jpg', color: 'from-gold-400 to-pink-400' },
  { id: 4, title: 'Boss Gift', price: '₹2,499', desc: 'Professional caricature', src: '/commisonArtwork/commisionArt13.jpg', color: 'from-purple-700 to-pink-600' },
  { id: 5, title: 'Kids Art', price: '₹799', desc: 'Cute kids illustration', src: '/babySketch/babysketch (2).jpg', color: 'from-pink-400 to-purple-500' },
  { id: 6, title: 'Couple Gift', price: '₹1,899', desc: 'Wedding anniversary art', src: '/wallart/wallArt.jpg', color: 'from-rose-500 to-purple-600' },
]

export default function Gifts() {
  return (
    <section id="gifts" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/10 border border-gold-400/30 rounded-full mb-4">
            <Gift className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-gold-300 font-medium">Perfect Gifts</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Gifts That Touch Hearts</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Give the gift of art — a memory frozen in time.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {giftItems.map(item => (
            <div key={item.id} className="group bg-dark-900 border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/30 transition-all hover:shadow-xl hover:shadow-pink-500/10">
              <div className="h-48 relative overflow-hidden">
                <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/30 backdrop-blur rounded-full text-xs text-white font-bold">Best Seller</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-pink-400">{item.price}</span>
                  <button className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-xl hover:bg-pink-500 hover:border-pink-500 transition-all">Order</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}