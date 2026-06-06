import { Mail, Phone, MapPin, Share2, MessageCircle, Play } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4"><MessageCircle className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300 font-medium">Get In Touch</span></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let's Create Together</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Have questions? We're here to help bring your ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'itsmyart24@gmail.com', href: 'mailto:itsmyart24@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91 6263227361' },
              { icon: MapPin, label: 'Location', value: ' India' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-dark-800 border border-white/5 rounded-2xl p-5 hover:border-pink-500/30 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-700 rounded-xl flex items-center justify-center shrink-0"><item.icon className="w-5 h-5 text-white" /></div>
                <div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                  {item.href ? (<a href={item.href} className="text-white font-semibold hover:text-pink-400 transition-colors">{item.value}</a>) : (<div className="text-white font-semibold">{item.value}</div>)}
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-4">
              {[
                { icon: Share2, label: 'Instagram' },
                { icon: MessageCircle, label: 'Facebook' },
                { icon: Play, label: 'Twitter' },
              ].map((s, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-dark-800 border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all"><s.icon className="w-5 h-5" /></a>
              ))}
            </div>
          </div>

          <div className="bg-dark-800 border border-white/5 rounded-2xl p-6 md:p-8">
            <form action="https://formsubmit.co/itsmyart24@gmail.com" method="POST" className="space-y-5">
              <input type="hidden" name="_subject" value="New Message from ArtMelody Studio Contact Form" />
              <input type="hidden" name="_replyto" value="itsmyart24@gmail.com" />
              <input type="hidden" name="_captcha" value="false" />
              <div><label className="block text-sm text-gray-400 mb-2 font-medium">Your Name</label><input required name="name" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors" placeholder="Your name" /></div>
              <div><label className="block text-sm text-gray-400 mb-2 font-medium">Email</label><input required type="email" name="email" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors" placeholder="your@email.com" /></div>
              <div><label className="block text-sm text-gray-400 mb-2 font-medium">Message</label><textarea required name="message" rows="4" className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none" placeholder="Tell us about your idea..." /></div>
              <button type="submit" className="w-full px-6 py-3.5 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/25">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
