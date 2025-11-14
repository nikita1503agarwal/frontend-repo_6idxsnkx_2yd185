import { Shield, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-emerald-500 grid place-items-center">
              <Shield className="h-5 w-5 text-black" />
            </div>
            <span className="text-white font-semibold text-lg">BlueLife Finance</span>
          </div>
          <p className="mt-4 text-sm text-zinc-400">Protecting families with modern life insurance designed for simplicity and trust.</p>
        </div>

        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-zinc-300 text-sm">
            <li><a href="#why" className="hover:text-white">About</a></li>
            <li><a href="#coverage" className="hover:text-white">Coverage</a></li>
            <li><a href="#claims" className="hover:text-white">Claims</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Support</h4>
          <ul className="mt-3 space-y-2 text-zinc-300 text-sm">
            <li><a href="#quote" className="hover:text-white">Get a quote</a></li>
            <li><a href="#" className="hover:text-white">Help center</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-zinc-300 text-sm">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@bluelife.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 012-3456</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 100 Market St, San Francisco, CA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-zinc-500">© {new Date().getFullYear()} BlueLife Finance. All rights reserved.</div>
    </footer>
  );
}
