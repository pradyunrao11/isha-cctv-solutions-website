import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandsMarquee from '@/components/BrandsMarquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <BrandsMarquee />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
