import Spline from '@splinetool/react-spline';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full bg-black text-white overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span className="text-sm text-zinc-200">Life Insurance crafted for peace of mind</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Protect what matters most with a modern life insurance plan
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Simple, transparent coverage for your family and future. Get a personalized quote in minutes—no jargon, no stress.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#quote" className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-zinc-100 transition-colors">
              Get your quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#coverage" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-md font-medium hover:bg-white/20 transition-colors">
              Explore coverage
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
