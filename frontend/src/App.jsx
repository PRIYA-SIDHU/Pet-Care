import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Features from './sections/Features'
import Innovation from './sections/Innovation'
import Impact from './sections/Impact'
import FutureScope from './sections/FutureScope'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-pastel-cream overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Innovation />
        <Impact />
        <FutureScope />
      </main>
      <Footer />
    </div>
  )
}

export default App
