import Nav from './components/Nav'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Process from './components/Process'
import PriceCalc from './components/PriceCalc'
import StyleQuiz from './components/StyleQuiz'
import Order from './components/Order'
import Gifts from './components/Gifts'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Nav />
      <Hero />
      <Gallery />
      <Process />
      <PriceCalc />
      <StyleQuiz />
      <Order />
      <Gifts />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}