import { useState } from 'react'
import { CalculatorIcon, Check } from 'lucide-react'

const prices = {
  size: { A4: 0, A3: 300, A2: 600 },
  type: { Pencil: 499, Color: 899, Digital: 499 },
  addons: { Frame: 150, Express: 500, 'HD Scan': 100 },
}

export default function PriceCalc() {
  const [size, setSize] = useState('A4')
  const [type, setType] = useState('Pencil')
  const [addons, setAddons] = useState([])
  const [coupon, setCoupon] = useState('')

  const toggleAddon = (key) => setAddons(prev => prev.includes(key) ? prev.filter(a => a !== key) : [...prev, key])

  const basePrice = prices.type[type]
  const sizePrice = prices.size[size]
  const addonsPrice = addons.reduce((s, k) => s + prices.addons[k], 0)
  const subtotal = basePrice + sizePrice + addonsPrice
  const discount = coupon === 'ARTMELODY10' ? Math.round(subtotal * 0.1) : 0
  const total = subtotal - discount

  const typeLabels = { Pencil: 'Pencil Portrait', Color: 'Color Portrait', Digital: 'Digital Art' }

  return (
    <section id="price-calculator" className="py-24 px-6 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-4">
            <CalculatorIcon className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-pink-300 font-medium">Live Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Price Calculator</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Learn how pricing works while customizing your perfect artwork.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-dark-800 border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Art Type</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Pencil', 'Color', 'Digital'].map(t => (
                  <button key={t} onClick={() => setType(t)} className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all ${type === t ? 'bg-gradient-to-r from-pink-500 to-purple-700 text-white shadow-lg' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'}`}>{t}</button>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Canvas Size</h3>
              <div className="grid grid-cols-3 gap-3">
                {['A4', 'A3', 'A2'].map(s => (
                  <button key={s} onClick={() => setSize(s)} className={`py-3 rounded-xl text-sm font-semibold transition-all ${size === s ? 'bg-gradient-to-r from-purple-700 to-pink-500 text-white shadow-lg' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/5'}`}>{s} {prices.size[s] > 0 && `(+₹${prices.size[s]})`}</button>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Add-ons</h3>
              <div className="space-y-3">
                {Object.entries(prices.addons).map(([key, val]) => (
                  <label key={key} className="flex items-center justify-between p-3 bg-dark-900 rounded-xl cursor-pointer hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div role="button" tabIndex={0} onClick={() => toggleAddon(key)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleAddon(key) } }} className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${addons.includes(key) ? 'bg-pink-500 border-pink-500' : 'border-gray-600'}`}>
                        {addons.includes(key) && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="text-gray-300 text-sm">{key}</span>
                    </div>
                    <span className="text-gray-500 text-sm">+₹{val}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 border border-white/5 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Coupon Code</h3>
              <div className="flex gap-3">
                <input type="text" value={coupon} onChange={e => setCoupon(e.target.value.toUpperCase())} placeholder="Enter code" className="flex-1 bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors" />
                <button className="px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-colors">Apply</button>
              </div>
              {discount > 0 && (<p className="text-green-400 text-sm mt-2 flex items-center gap-1"><Check className="w-4 h-4" /> Coupon applied! You saved ₹{discount}</p>)}
              {coupon && coupon !== 'ARTMELODY10' && (<p className="text-red-400 text-sm mt-2">Invalid coupon code. Try: ARTMELODY10</p>)}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-purple-800/30 to-pink-800/30 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <h3 className="text-white font-bold text-lg mb-6">Price Breakdown</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm"><span className="text-gray-400">Base Price ({typeLabels[type] || type})</span><span className="text-white font-semibold">₹{basePrice}</span></div>
                {sizePrice > 0 && (<div className="flex justify-between text-sm"><span className="text-gray-400">+ Canvas Size ({size})</span><span className="text-white font-semibold">+₹{sizePrice}</span></div>)}
                {addons.map(a => (<div key={a} className="flex justify-between text-sm"><span className="text-gray-400">+ {a}</span><span className="text-white font-semibold">+₹{prices.addons[a]}</span></div>))}
                {discount > 0 && (<div className="flex justify-between text-sm"><span className="text-green-400">Coupon (10%)</span><span className="text-green-400 font-semibold">-₹{discount}</span></div>)}
              </div>
              <div className="border-t border-white/10 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-semibold">Total</span>
                  <span className="text-3xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">₹{total}</span>
                </div>
                <div className="mt-2 text-right"><code className="text-xs text-gray-500 bg-dark-900/50 px-2 py-1 rounded">{basePrice} + {sizePrice} + {addonsPrice} = ₹{subtotal}</code></div>
              </div>
              <a href="#order" className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold rounded-xl hover:opacity-90 transition-opacity">Proceed to Order</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
