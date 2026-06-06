import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-700 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-500/30 hover:scale-110 transition-transform">↑</button>
  )
}
