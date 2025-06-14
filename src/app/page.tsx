import Hero from './components/hero';
import Navbar from './components/navbar';
import Portfolio from './components/portfolio';
import RunningText from './components/running-text';
import Service from './components/service';
import Trusted from './components/trusted';
import Testimonials from './components/testimonials';
import Contact from './components/contact';

export default function Home() {
  return (
    <div className='font-plus-jakarta'>
      <Navbar />
      <div className="bg-[#1B1B1B] text-white">
        <Hero />
      </div>
      <RunningText />
      <div className='mx-auto max-w-7xl'>
        <Service />
      </div>
      <div className="bg-[#f7f7f7]">
        <Portfolio />
      </div>
      <div className='mx-auto max-w-7xl'>
        <Trusted />
      </div>
      <div className="bg-[#1B1B1B] text-white">
        <Testimonials />
      </div>
      <Contact />
    </div>
  );
}
