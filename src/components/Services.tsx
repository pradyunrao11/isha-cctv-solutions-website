import { Camera, Monitor, Cloud, Wrench, Network, ShieldCheck, Video, Laptop } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'CCTV Camera Supply',
    desc: 'Dome, bullet, PTZ, and thermal cameras from leading brands. Indoor, outdoor, and specialized models for every environment.',
    features: ['HD & 4K Resolution', 'Night Vision', 'Wide Angle Coverage'],
  },
  {
    icon: Video,
    title: 'DVR & NVR Systems',
    desc: 'Digital and network video recorders with scalable storage. Remote viewing capabilities and smart playback search.',
    features: ['Up to 64 Channels', 'AI-Powered Search', 'Remote Access'],
  },
  {
    icon: Cloud,
    title: 'Cloud Surveillance Software',
    desc: 'Cloud-based video management platforms with secure storage, remote monitoring, and intelligent analytics dashboards.',
    features: ['Cloud Storage', 'Mobile App Access', 'AI Analytics'],
  },
  {
    icon: Network,
    title: 'Networking & Infrastructure',
    desc: 'Complete network design and installation for surveillance systems — cabling, switches, and wireless bridges.',
    features: ['PoE Solutions', 'Fiber Optic Cabling', 'Wireless Bridging'],
  },
  {
    icon: Wrench,
    title: 'Installation & Maintenance',
    desc: 'Professional installation by certified technicians with annual maintenance contracts and rapid response support.',
    features: ['Certified Technicians', 'AMC Plans', '24/7 Support'],
  },
  {
    icon: ShieldCheck,
    title: 'Access Control Systems',
    desc: 'Biometric, card-based, and facial recognition access control integrated with your surveillance ecosystem.',
    features: ['Biometric Readers', 'Facial Recognition', 'Visitor Management'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#071A3D] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0B2552]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-yellow-400 text-sm font-semibold tracking-[0.15em] uppercase">What We Do</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Complete Security Solutions Under One Roof
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            From hardware distribution to software deployment, we cover every layer of modern
            surveillance infrastructure.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-7 rounded-2xl bg-[#071A3D] border border-blue-900 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#0B2552]/10 rounded-full blur-2xl group-hover:bg-[#12366A]/20 transition-colors" />
              <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B2552]/20 to-yellow-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:from-[#0B2552]/30 group-hover:to-yellow-500/20 transition-colors">
                <s.icon className="w-7 h-7 text-yellow-400" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-blue-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-blue-200 text-sm">
          <Laptop className="w-5 h-5 text-yellow-400" />
          <span>Hardware distribution + software deployment + lifetime support</span>
        </div>
      </div>
    </section>
  );
}
