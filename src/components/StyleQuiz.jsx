import { useState, useMemo } from 'react'
import { Brain, Sparkles } from 'lucide-react'

const quizQuestions = [
  { q: 'What\'s your favorite color palette?', options: ['Warm & Bold', 'Cool & Calm', 'Neutral & Classic', 'Vibrant & Playful'] },
  { q: 'Who is this artwork for?', options: ['Yourself', 'Partner / Spouse', 'Kids / Family', 'Friend / Colleague'] },
  { q: 'What style do you prefer?', options: ['Realistic', 'Caricature', 'Abstract', 'Cartoon-ish'] },
  { q: 'What\'s your budget?', options: ['Under ₹500', '₹500 - ₹1,000', '₹1,000 - ₹2,000', '₹2,000+'] },
]

export default function StyleQuiz() {
  const [qIdx, setQIdx] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)

  const results = useMemo(() => {
    const counts = answers.reduce((acc, a) => { acc[a] = (acc[a] || 0) + 1; return acc }, {})
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Warm & Bold'
    const map = {
      'Warm & Bold': { title: 'Vibrant Realist', desc: 'You love bold colors and realistic portraits.', rec: 'Color Portrait', emoji: '🎨', color: 'from-pink-500 to-rose-600' },
      'Cool & Calm': { title: 'Minimalist Soul', desc: 'You prefer calm tones and clean compositions.', rec: 'B&W Sketch', emoji: '🖤', color: 'from-gray-600 to-purple-600' },
      'Neutral & Classic': { title: 'Classic Connoisseur', desc: 'Traditional elegance is your signature taste.', rec: 'Pencil Portrait', emoji: '✏️', color: 'from-purple-700 to-gray-700' },
      'Vibrant & Playful': { title: 'Creative Spirit', desc: 'You\'re drawn to fun, expressive art styles.', rec: 'Caricature', emoji: '🎭', color: 'from-gold-400 to-pink-400' },
    }
    return map[top] || map['Warm & Bold']
  }, [answers])

  const handleAnswer = (ans) => {
    const newAnswers = [...answers, ans]
    setAnswers(newAnswers)
    if (qIdx + 1 < quizQuestions.length) { setQIdx(qIdx + 1) } else { setResult(results) }
  }

  const restart = () => { setQIdx(0); setAnswers([]); setResult(null) }

  return (
    <section id="quiz" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-4"><Brain className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300 font-medium">Find Your Style</span></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Style Quiz</h2>
          <p className="text-gray-400">Answer 4 quick questions and we'll recommend your perfect artwork style.</p>
        </div>

        <div className="bg-dark-800 border border-white/5 rounded-2xl p-8 md:p-10">
          {!result ? (
            <>
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-3"><span className="text-gray-400">Question {qIdx + 1} of {quizQuestions.length}</span><span className="text-pink-400 font-semibold">{Math.round((qIdx / quizQuestions.length) * 100)}%</span></div>
                <div className="w-full bg-dark-700 rounded-full h-2"><div className="bg-gradient-to-r from-pink-500 to-purple-700 h-2 rounded-full transition-all duration-500" style={{ width: `${(qIdx / quizQuestions.length) * 100}%` }} /></div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">{quizQuestions[qIdx].q}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quizQuestions[qIdx].options.map(opt => (
                  <button key={opt} onClick={() => handleAnswer(opt)} className="group p-4 bg-dark-900 border border-white/5 rounded-xl text-left hover:border-pink-500/50 hover:bg-pink-500/5 transition-all flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-600 group-hover:border-pink-500 flex items-center justify-center transition-colors"><div className="w-2.5 h-2.5 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" /></div>
                    <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{opt}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className={`w-24 h-24 bg-gradient-to-br ${result.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-2xl`}>{result.emoji}</div>
              <h3 className="text-2xl font-black text-white mb-2">{result.title}</h3>
              <p className="text-gray-400 mb-2">{result.desc}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-full mb-8"><Sparkles className="w-4 h-4 text-pink-400" /><span className="text-pink-300 text-sm font-semibold">We recommend: {result.rec}</span></div>
              <div>
                <button onClick={restart} className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all mr-3">Retake Quiz</button>
                <a href="#order" className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-bold rounded-xl hover:opacity-90 transition-opacity inline-block">Order This Style</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
