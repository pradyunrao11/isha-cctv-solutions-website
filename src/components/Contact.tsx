import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#0B2552]/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-yellow-400 text-sm font-semibold tracking-[0.15em] uppercase">Get In Touch</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              Request a Free Consultation
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Tell us about your security needs and our team will get back to you with a tailored
              quote within 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, label: 'Call Us', value: '70365 31005', href: 'tel:+917036531005' },
                { icon: Mail, label: 'Email Us', value: 'ishacctvnzb@gmail.com', href: 'mailto:ishacctvnzb@gmail.com' },
                { icon: MapPin, label: 'Visit Us', value: 'Near Hotel Nikhil Sai, Tirumala Theatre Road, Nizamabad, 503001 (T.G.)', href: '#' },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-yellow-500/40 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                    <c.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide text-slate-600">{c.label}</div>
                    <div className="text-slate-950 font-medium mt-0.5">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl bg-[#071A3D] border border-blue-900">
              <p className="text-sm text-blue-100">
                <span className="text-yellow-400 font-semibold">Business Hours:</span> Mon–Sat,
                9:00 AM – 7:00 PM. Emergency support available 24/7 for AMC customers.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-slate-600 max-w-sm">
                  Your enquiry has been received. Our team will contact you within 24 hours with a
                  tailored quote.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <h3 className="text-xl font-bold text-white mb-2">Send Us a Message</h3>
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">Full Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-950 text-sm placeholder-slate-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-700 mb-1.5">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-950 text-sm placeholder-slate-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                      placeholder="john@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-700 mb-1.5">Phone</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-950 text-sm placeholder-slate-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors"
                      placeholder="70365 31005"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-700 mb-1.5">Your Requirements</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-950 text-sm placeholder-slate-400 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-colors resize-none"
                    placeholder="Tell us about your site, number of cameras needed, or any specific requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-yellow-400 text-blue-950 font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
                >
                  Send Enquiry
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
