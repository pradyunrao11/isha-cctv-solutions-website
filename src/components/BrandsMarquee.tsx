const brands = ['Hikvision', 'Dahua', 'CP Plus', 'Godrej', 'Bosch', 'Axis', 'Sony', 'Hanwha'];

export default function BrandsMarquee() {
  return (
    <section className="bg-blue-950 border-y border-blue-900 py-8 overflow-hidden">
      <p className="text-center text-xs tracking-[0.25em] uppercase text-slate-600 mb-6">
        Authorized Distributor of Leading Brands
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />
        <div className="flex animate-marquee w-max">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="mx-8 text-2xl font-bold text-blue-200 hover:text-yellow-300 transition-colors whitespace-nowrap"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
