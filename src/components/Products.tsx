import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Cameras', 'Recorders', 'Software', 'Access Control'];

const products = [
  {
    name: '4K Ultra HD Dome Camera',
    category: 'Cameras',
    brand: 'Hikvision',
    image: 'https://images.pexels.com/photos/7508684/pexels-photo-7508684.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['8MP Resolution', 'IR Night Vision 40m', 'IP67 Weatherproof'],
    tag: 'Best Seller',
  },
  {
    name: 'Bullet Camera Pro Series',
    category: 'Cameras',
    brand: 'CP Plus',
    image: 'https://images.pexels.com/photos/207574/pexels-photo-207574.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['5MP Resolution', 'Smart Motion Detection', 'PoE Support'],
    tag: '',
  },
  {
    name: 'PTZ Speed Dome Camera',
    category: 'Cameras',
    brand: 'Dahua',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['360° Pan / 90° Tilt', '25x Optical Zoom', 'Auto Tracking'],
    tag: 'New',
  },
  {
    name: '16-Channel NVR System',
    category: 'Recorders',
    brand: 'Hikvision',
    image: 'https://images.pexels.com/photos/30576172/pexels-photo-30576172.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['16 CH Support', '8TB HDD Capacity', 'H.265+ Compression'],
    tag: '',
  },
  {
    name: 'Cloud VMS Platform',
    category: 'Software',
    brand: 'Ishha Cloud',
    image: 'https://images.pexels.com/photos/5380597/pexels-photo-5380597.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Unlimited Cameras', 'AI Object Detection', 'Mobile + Web App'],
    tag: 'Cloud',
  },
  {
    name: 'Video Analytics Suite',
    category: 'Software',
    brand: 'Ishha AI',
    image: 'https://images.pexels.com/photos/30692441/pexels-photo-30692441.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Face Recognition', 'License Plate Reading', 'Intrusion Alerts'],
    tag: 'AI Powered',
  },
  {
    name: 'Biometric Door Lock',
    category: 'Access Control',
    brand: 'Godrej',
    image: 'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['Fingerprint + PIN', 'RFID Card Support', 'Tamper Alarm'],
    tag: '',
  },
  {
    name: 'Facial Recognition Terminal',
    category: 'Access Control',
    brand: 'ZKTeco',
    image: 'https://images.pexels.com/photos/29866272/pexels-photo-29866272.jpeg?auto=compress&cs=tinysrgb&w=800',
    specs: ['0.2s Recognition', '3D Liveness Detection', 'Visitor Log Export'],
    tag: 'New',
  },
];

export default function Products() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? products : products.filter((p) => p.category === filter);

  return (
    <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-yellow-400 text-sm font-semibold tracking-[0.15em] uppercase">Our Products</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 tracking-tight">
              Premium Surveillance Equipment & Software
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              A curated catalog of cameras, recorders, and intelligent software from the world's
              most trusted security brands.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === c
                    ? 'bg-yellow-400 text-slate-950 shadow-lg shadow-blue-600/25'
                    : 'bg-[#071A3D] text-white hover:bg-[#0B2552]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                {p.tag && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-yellow-500 text-slate-950 text-[10px] font-bold tracking-wide uppercase">
                    {p.tag}
                  </span>
                )}
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#071A3D]/80 backdrop-blur-sm text-[10px] font-semibold text-blue-100 border border-blue-800">
                  {p.brand}
                </span>
              </div>

              <div className="p-5">
                <span className="text-xs text-yellow-400 font-medium">{p.category}</span>
                <h3 className="mt-1 text-slate-950 font-semibold text-base leading-snug group-hover:text-yellow-400 transition-colors">
                  {p.name}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {p.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1 h-1 rounded-full bg-[#12366A]" />
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="mt-4 inline-flex items-center gap-1 text-sm text-yellow-400 font-medium hover:gap-2 transition-all"
                >
                  Enquire Now
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
