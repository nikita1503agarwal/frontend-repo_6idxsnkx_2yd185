import { useState } from 'react';
import { Mail, Phone, User, Calendar, ArrowRight } from 'lucide-react';

export default function QuoteForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // In a later iteration we can wire this to the backend. For now, simulate success.
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <section id="quote" className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Get your personalized quote</h2>
          <p className="mt-3 text-zinc-300">Answer a few questions and we’ll tailor a plan for you.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input required placeholder="Full name" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <User className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            </div>
            <div className="relative">
              <input type="email" required placeholder="Email address" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <input required placeholder="Phone number" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            </div>
            <div className="relative">
              <input type="number" required placeholder="Age" className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none">
              <option className="bg-black">Term Life</option>
              <option className="bg-black">Whole Life</option>
              <option className="bg-black">Family Plan</option>
            </select>
            <select className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none">
              <option className="bg-black">Coverage: $100k</option>
              <option className="bg-black">Coverage: $250k</option>
              <option className="bg-black">Coverage: $500k</option>
              <option className="bg-black">Coverage: $1M</option>
            </select>
            <select className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none">
              <option className="bg-black">Health: Excellent</option>
              <option className="bg-black">Health: Good</option>
              <option className="bg-black">Health: Average</option>
            </select>
          </div>

          <button disabled={status==='loading'||status==='success'} className="mt-4 inline-flex items-center justify-center gap-2 bg-emerald-500 text-black px-6 py-3 rounded-md font-medium hover:bg-emerald-400 transition-colors disabled:opacity-60">
            {status==='success' ? 'Submitted' : 'Get quote'}
            {status!=='success' && <ArrowRight className="h-4 w-4" />}
          </button>
          <p className="text-sm text-zinc-400">By continuing you agree to our terms and privacy policy.</p>
        </form>
      </div>
    </section>
  );
}
