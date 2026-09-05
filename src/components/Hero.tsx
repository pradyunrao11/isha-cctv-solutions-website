import { ArrowRight, ShieldCheck, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#071A3D]">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/179993/pexels-photo-179993.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Security cameras"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A3D] via-[#071A3D]/90 to-[#071A3D]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D] via-transparent to-[#071A3D]/60" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#0B2552]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071A3D]/80 border border-blue-800 mb-6">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 animate-pulse-ring" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-blue-100 tracking-wide">24/7 Surveillance Solutions Provider</span>
          </div>

          <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] text-balance">
            Secure What Matters with{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Ishha CCTV
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 9 Q150 -2 298 7" stroke="url(#g)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#22d3ee" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="animate-fade-in-up delay-200 mt-6 text-lg sm:text-xl text-blue-100 leading-relaxed max-w-2xl">
            Your trusted distributor for CCTV hardware and intelligent surveillance software.
            From cameras to cloud recording, we deliver end-to-end security solutions for homes,
            businesses, and enterprises.
          </p>

          <div className="animate-fade-in-up delay-300 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-yellow-400 text-blue-950 font-semibold shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all"
            >
              Request a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-yellow-400 border border-yellow-300 text-blue-950 font-semibold hover:bg-yellow-300 transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              Explore Services
            </a>
          </div>

          <div className="animate-fade-in-up delay-400 mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              { num: '500+', label: 'Projects Completed' },
              { num: '15+', label: 'Years Experience' },
              { num: '50+', label: 'Camera Models' },
              { num: '24/7', label: 'Support Available' },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-blue-500/50 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.num}</div>
                <div className="text-xs text-blue-200 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-200">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-blue-700 flex justify-center pt-1.5">
          <span className="w-1 h-1.5 rounded-full bg-yellow-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
