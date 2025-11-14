import { Menu, Shield, Phone, FileSignature, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-emerald-500 grid place-items-center">
              <Shield className="h-5 w-5 text-black" />
            </div>
            <span className="text-white font-semibold text-lg">BlueLife Finance</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#coverage" className="hover:text-white transition-colors">Coverage</a>
            <a href="#why" className="hover:text-white transition-colors">Why Us</a>
            <a href="#claims" className="hover:text-white transition-colors">Claims</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
              <Phone className="h-4 w-4" />
              24/7 Help
            </a>
            <a href="#quote" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-zinc-100 transition-colors">
              Get a Quote
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-3 text-zinc-200">
              <a href="#coverage" className="hover:text-white">Coverage</a>
              <a href="#why" className="hover:text-white">Why Us</a>
              <a href="#claims" className="hover:text-white">Claims</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#quote" className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md font-medium w-max">
                <FileSignature className="h-4 w-4" /> Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
