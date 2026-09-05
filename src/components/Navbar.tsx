import { useEffect, useRef, useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const sectionsRef = useRef<Record<string, IntersectionObserverEntry>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          sectionsRef.current[e.target.id] = e;
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-blue-950/95 backdrop-blur-md shadow-lg shadow-blue-900/40 border-b border-blue-900'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => go('#home')} className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
            <img
              src="/WhatsApp_Image_2026-09-04_at_12.06.26_PM.jpeg"
              alt="Ishha CCTV Solutions logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left leading-none">
            <span className="block text-white font-bold text-base tracking-tight">ISHA CCTV</span>
            <span className="block text-yellow-400 text-[10px] font-medium tracking-[0.2em] uppercase">Solutions</span>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                active === l.href ? 'text-white' : 'text-blue-100 hover:text-yellow-300'
              }`}
            >
              {l.label}
              {active === l.href && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919999999999"
            className="flex items-center gap-2 text-sm text-blue-100 hover:text-yellow-300 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 99999 99999
          </a>
          <button
            onClick={() => go('#contact')}
            className="px-5 py-2.5 rounded-lg bg-blue-950 text-white text-sm font-semibold shadow-lg shadow-blue-900/40 hover:shadow-blue-900/60 hover:-translate-y-0.5 transition-all"
          >
            Get Quote
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white rounded-lg hover:bg-blue-900 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-blue-950/98 backdrop-blur-md border-t border-blue-900 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                active === l.href ? 'bg-blue-900 text-yellow-300' : 'text-blue-100 hover:bg-blue-900/60'
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('#contact')}
            className="block w-full mt-2 px-4 py-3 rounded-lg bg-blue-950 text-white text-sm font-semibold text-center"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </header>
  );
}
