import { Award, Headphones, Truck, BadgeCheck, DollarSign, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Authorized Distributor',
    desc: 'Direct partnerships with Hikvision, Dahua, CP Plus, and other leading brands — guaranteeing genuine products with full warranty.',
  },
  {
    icon: BadgeCheck,
    title: 'Expert Consultation',
    desc: 'Our security experts assess your site and recommend the optimal camera layout, storage, and software configuration.',
  },
  {
    icon: Truck,
    title: 'Fast & Reliable Supply',
    desc: 'Large inventory with pan-India dispatch. Get your equipment delivered quickly, whether one camera or a full enterprise rollout.',
  },
  {
    icon: Headphones,
    title: '24/7 Technical Support',
    desc: 'Round-the-clock support team for troubleshooting, remote assistance, and on-site service whenever you need it.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    desc: 'Direct distributor pricing with transparent quotes. No hidden costs, no markups — just the best value for your investment.',
  },
  {
    icon: Clock,
    title: 'End-to-End Service',
    desc: 'From product selection to installation, training, and maintenance — we handle the entire lifecycle of your surveillance system.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-blue-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-600/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-[0.15em] uppercase">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            The Ishha CCTV Advantage
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            We're more than a supplier. We're your security partner — committed to protecting what
            matters most.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="group relative p-7 rounded-2xl bg-gradient-to-br from-blue-950 to-blue-950/80 border border-blue-900 hover:border-yellow-500/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                  <r.icon className="w-6 h-6 text-yellow-400" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
