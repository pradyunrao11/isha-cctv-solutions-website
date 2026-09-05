import { CheckCircle2, Target, Eye, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B2552]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/19317897/pexels-photo-19317897.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern control room"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-700">
                <span className="text-yellow-400 text-xs font-semibold tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE MONITORING
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#0B2552] to-yellow-500 rounded-2xl p-6 shadow-xl shadow-blue-600/30 hidden sm:block">
              <div className="text-white text-4xl font-bold">15+</div>
              <div className="text-yellow-100 text-sm">Years of Excellence</div>
            </div>
          </div>

          <div>
            <span className="text-yellow-400 text-sm font-semibold tracking-[0.15em] uppercase">About Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight leading-tight">
              Your Trusted Partner in <span className="text-yellow-400">Surveillance & Security</span>
            </h2>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Ishha CCTV Solutions is a premier distributor of CCTV hardware and intelligent
              surveillance software. We bridge the gap between world-class security equipment and
              the businesses that need it — supplying cameras, recorders, and access control
              systems alongside powerful monitoring and analytics software.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              From a single-camera home setup to enterprise-grade video management systems, we
              provide end-to-end solutions with expert consultation, installation support, and
              ongoing maintenance.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Target, title: 'Our Mission', text: 'Make professional-grade security accessible to every business and home.' },
                { icon: Eye, title: 'Our Vision', text: 'To be the most trusted CCTV distributor in the region.' },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500/40 transition-colors">
                  <item.icon className="w-6 h-6 text-yellow-400 mb-3" />
                  <h3 className="text-slate-950 font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {[
                'Authorized distributor for top global CCTV brands',
                'Both hardware supply and software deployment',
                'Certified technicians for installation & support',
                'Custom solutions tailored to your site requirements',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
