import { Cctv, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#071A3D] border-t border-blue-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#12366A] to-yellow-400 flex items-center justify-center">
                <Cctv className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <span className="block text-white font-bold text-base">ISHHA CCTV</span>
                <span className="block text-yellow-400 text-[10px] tracking-[0.2em] uppercase">Solutions</span>
              </div>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed">
              Your trusted distributor for CCTV hardware and intelligent surveillance software.
              Securing homes and businesses since 2009.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-[#0B2552] border border-blue-800 flex items-center justify-center text-slate-300 hover:text-yellow-300 hover:border-yellow-500/40 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Products', href: '#products' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-sm text-blue-100 hover:text-yellow-300 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Our Services</h4>
            <ul className="space-y-2.5">
              {['CCTV Camera Supply', 'DVR & NVR Systems', 'Cloud Surveillance', 'Installation & AMC', 'Access Control'].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => go('#services')}
                    className="text-sm text-blue-100 hover:text-yellow-300 transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-blue-100">
                <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                Near Hotel Nikhil Sai, Tirumala Theatre Road, Nizamabad, 503001 (T.G.)
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100">
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                70365 31005
              </li>
              <li className="flex items-center gap-3 text-sm text-blue-100">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                ishacctvnzb@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-200">
            © {new Date().getFullYear()} Ishha CCTV Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-blue-200">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Warranty</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
