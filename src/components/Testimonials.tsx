import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Mehta',
    role: 'Director, Mehta Retail Group',
    text: 'Ishha CCTV equipped all 12 of our store locations with surveillance systems. The hardware quality and software analytics have been outstanding. Their support team is always responsive.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Facility Manager, TechPark Bangalore',
    text: 'We needed an enterprise-grade video management system across our 4-acre campus. Ishha delivered a seamless cloud-based solution with AI analytics. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Arun Krishnan',
    role: 'Owner, Sunrise Apartments',
    text: 'From consultation to installation, the team was professional and thorough. They designed a perfect camera layout for our residential complex at a fair price.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-[0.15em] uppercase">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
            Trusted by Businesses Across India
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500/30 transition-colors"
            >
              <Quote className="w-10 h-10 text-blue-600/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-yellow-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-slate-950 font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-600 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
