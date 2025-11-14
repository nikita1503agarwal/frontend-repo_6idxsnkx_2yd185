import Navbar from './Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
