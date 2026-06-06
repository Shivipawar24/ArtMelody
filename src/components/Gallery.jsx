import { useState } from 'react'
import { Sparkles } from 'lucide-react'

const galleryImages = {
  All: null,
  Couple: [
    '/wallart/wallArt (2).jpg',
    '/wallart/wallArt.jpg',
    '/wallart/wallArt (4).jpg',
    '/wallart/wallart (3).jpg',
    '/wallart/wallArt (5).jpg',
  ],
  Kids: [
    '/babySketch/babysketch (3).jpg',
    '/babySketch/babySketch.jpg',
    '/babySketch/babysketch (2).jpg',
  ],
  Pencil: [
    '/wallart/wallArt.jpg',
    '/wallart/wallArt (2).jpg',
    '/wallart/wallart (3).jpg',
    '/wallart/wallArt (4).jpg',
    '/penart/penart_1.jpg',
  ],
  'B&W': [
    '/penart/penart_1.jpg',
    '/wallart/wallart (6).jpg',
    '/wallart/wallart (7).jpg',
  ],
  Caricature: [
    '/commisonArtwork/commisionArt.jpg',
    '/commisonArtwork/commisionArt2.jpg',
    '/commisonArtwork/commisionArt_6.jpg',
    '/commisonArtwork/commisionArt_9.jpg',
  ],
  'Color Portrait': [
    '/commisonArtwork/commisionArt12.jpg',
    '/commisonArtwork/commisionArt13.jpg',
    '/commisonArtwork/commisionArt_10.jpg',
    '/commisonArtwork/commisionArt_14.jpg',
  ],
  Pet: [
    '/babySketch/babySketch.jpg',
    '/babySketch/babysketch (2).jpg',
    '/commisonArtwork/commisionArt (2).jpg',
  ],
  Bollywood: [
    '/commisonArtwork/commisionArt13.jpg',
    '/commisonArtwork/commisionArt12.jpg',
    '/commisonArtwork/commisionArt_10.jpg',
  ],
}

const primaryCategories = ['All', 'Couple', 'Kids', 'Pencil']
const moreCategories = Object.keys(galleryImages).filter(c => !primaryCategories.includes(c))

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [showMore, setShowMore] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [loadMore, setLoadMore] = useState(false)

  const visibleCategories = showMore ? primaryCategories.concat(moreCategories) : primaryCategories
  const allImages = Object.values(galleryImages).flat().filter(Boolean)
  const images = activeCategory === 'All' ? allImages : (galleryImages[activeCategory] || [])
  const visibleImages = activeCategory === 'All' && !loadMore ? images.slice(0, 10) : images
  const hasMore = activeCategory === 'All' && images.length > 10 && !loadMore

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setSelectedImage(null)
    setLoadMore(false)
  }

  return (
    <section id="gallery" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Gallery of Masterpieces</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Every stroke tells a story. Browse our curated collection of hand-crafted artwork.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {visibleCategories.map(cat => (
            <button key={cat} onClick={() => handleCategoryChange(cat)} className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-gradient-to-r from-pink-500 to-purple-700 text-white shadow-lg shadow-pink-500/25' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'}`}>
              {cat}
            </button>
          ))}
          {!showMore && (
            <button onClick={() => setShowMore(true)} className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/5 text-gray-400 hover:text-white border border-white/5 hover:bg-white/10 transition-all">More ▾</button>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {visibleImages.map((src, idx) => (
            <button key={idx} onClick={() => setSelectedImage(src)} className="group relative aspect-[3/4] rounded-xl overflow-hidden">
              <img src={src} alt={`${activeCategory} ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <button onClick={() => setLoadMore(true)} className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-semibold rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25">Load More</button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl font-bold" onClick={() => setSelectedImage(null)}>✕</button>
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Preview" className="w-full rounded-2xl shadow-2xl" />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-white font-semibold">{activeCategory}</p>
              <div className="flex gap-2">
                {images.map((src, idx) => (
                  <button key={idx} onClick={() => setSelectedImage(src)} className={`w-10 h-10 rounded-lg overflow-hidden border-2 ${src === selectedImage ? 'border-pink-500' : 'border-transparent'}`}>
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
