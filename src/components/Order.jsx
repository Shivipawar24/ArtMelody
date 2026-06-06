import { useState } from 'react'
import { MessageCircle, Sparkles } from 'lucide-react'

export default function Order() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', artType: 'Pencil Portrait', size: 'A4', reference: '', notes: '', urgency: 'Standard' })

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  return (
    <section id="order" className="py-24 px-6 bg-dark-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-4"><MessageCircle className="w-4 h-4 text-pink-400" /><span className="text-sm text-pink-300 font-medium">Start Your Order</span></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Build Your Perfect Portrait</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Fill in the details below and we'll bring your vision to life.</p>
        </div>

        <form action="https://formsubmit.co/itsmyart24@gmail.com" method="POST" className="bg-dark-800 border border-white/5 rounded-2xl p-6 md:p-10">
          <input type="hidden" name="_subject" value="New Art Order from ArtMelody Studio" />
          <input type="hidden" name="_replyto" value={form.email} />
          <input type="hidden" name="_captcha" value="false" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className="block text-sm text-gray-400 mb-2 font-medium">Your Name *</label><input required name="name" value={form.name} onChange={e => update('name', e.target.value)} className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors" placeholder="John Doe" /></div>
            <div><label className="block text-sm text-gray-400 mb-2 font-medium">Email *</label><input required type="email" name="email" value={form.email} onChange={e => update('email', e.target.value)} className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors" placeholder="john@example.com" /></div>
            <div><label className="block text-sm text-gray-400 mb-2 font-medium">Phone Number</label><input type="tel" name="phone" value={form.phone} onChange={e => update('phone', e.target.value)} className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors" placeholder="+91 98765 43210" /></div>
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Art Type</label>
              <select name="artType" value={form.artType} onChange={e => update('artType', e.target.value)} className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors appearance-none">
                {['Pencil Portrait', 'Color Portrait', 'B&W Sketch', 'Couple Art', 'Pet Portrait'].map(t => (<option key={t} value={t}>{t}</option>))}
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Canvas Size</label>
              <select name="size" value={form.size} onChange={e => update('size', e.target.value)} className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors appearance-none">
                <option value="A4">A4 (₹499 base)</option><option value="A3">A3 (₹799 base)</option><option value="A2">A2 (₹1,099 base)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2 font-medium">Urgency</label>
              <select name="urgency" value={form.urgency} onChange={e => update('urgency', e.target.value)} className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors appearance-none">
                <option value="Standard">Standard (5-7 days)</option><option value="Express">Express (2-3 days, +₹500)</option><option value="Rush">Rush (24 hrs, +₹1,000)</option>
              </select>
            </div>
            <div className="md:col-span-2"><label className="block text-sm text-gray-400 mb-2 font-medium">Reference Image / Link</label><input name="reference" value={form.reference} onChange={e => update('reference', e.target.value)} className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors" placeholder="Paste a Google Drive / Dropbox link or image URL" /></div>
            <div className="md:col-span-2"><label className="block text-sm text-gray-400 mb-2 font-medium">Special Instructions</label><textarea name="notes" value={form.notes} onChange={e => update('notes', e.target.value)} rows="4" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none" placeholder="Describe any specific details, colors, poses, background..." /></div>
          </div>

          <button type="submit" className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold rounded-2xl hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" /> Submit Order
          </button>
        </form>
      </div>
    </section>
  )
}
