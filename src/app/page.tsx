import Hero from './components/hero';
import Navbar from './components/navbar';
import Portfolio from './components/portfolio';
import RunningText from './components/running-text';
import Service from './components/service';
import Trusted from './components/trusted';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className='font-plus-jakarta'>
      <Navbar />
      <div className="bg-[#1B1B1B] text-white px-4 md:px-0" data-background="dark">
        <Hero />
      </div>
      <RunningText />
      <div className='mx-auto max-w-7xl px-4 md:px-0' data-background="light">
        <Service />
      </div>
      <div className="bg-[#f7f7f7] px-4 md:px-0" data-background="light">
        <Portfolio />
      </div>
      <div className='mx-auto max-w-7xl px-4 md:px-0' data-background="light">
        <Trusted />
      </div>
      <div className="bg-[#1B1B1B] text-white px-4 md:px-0" data-background="dark">
        <Testimonials />
      </div>
      <div className="px-4 md:px-0">
        <Contact />
      </div>
      <div className="bg-[#1B1B1B] text-white px-4 md:px-0" data-background="dark">
        <Footer />
      </div>
    </div>
  );
}
