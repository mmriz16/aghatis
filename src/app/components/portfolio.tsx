'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Portfolio() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([ headerRef.current, buttonRef.current ], {
        opacity: 0,
        y: 30,
      });

      gsap.set(imageRef.current, {
        opacity: 0,
        x: -50,
        scale: 0.9,
      });

      gsap.set(contentRef.current, {
        opacity: 0,
        x: 50,
      });

      // Create scroll-triggered animations
      gsap.timeline({
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      })
        .to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
        .to(buttonRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.4')
        .to(imageRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }, '-=0.3')
        .to(contentRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5');
    }, portfolioRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={portfolioRef} className="container py-24 max-w-7xl mx-auto" data-background="light">
      <div className="flex justify-between items-center">
        <div ref={headerRef} className="col-4 w-[580px]">
          <h1 className="text-[#00A06A] font-bold text-[42px] mb-8">Our <span className="text-black">Portfolios</span></h1>
          <p className="text-xl">A portfolio is a showcase of your work and achievements that demonstrate Our skills, expertise, and experience.</p>
        </div>
        <div className="col-2">
          <button ref={buttonRef} className="bg-[#00704A] rounded-[16px] text-lg font-semibold text-white px-5 h-[57px] flex items-center gap-2 hover:bg-[#00A06A] transition-colors duration-300">See More <ArrowRight className="w-5 h-5" /></button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <Image ref={imageRef} src="/app/img/portfolio/barterin.jpg" width={600} height={400} className="object-cover rounded-2xl" alt="Barterin Portfolio" />
        <div ref={contentRef} className="flex flex-col gap-6 mt-6">
          <h1 className="text-3xl font-bold">Barterin Mobile App</h1>
          <p className="text-base">Barterin redefines transactions through barter, eliminating the need for money. Discover a diverse marketplace, enjoy a seamless experience, and build trust with secure transactions.</p>
          <div className="flex gap-4">
            <button className="outline outline-1 outline-offset-[-1px] outline-[#00704A] rounded-[12px] text-xs font-semibold text-[#00704A] px-5 py-3 hover:bg-[#00704A] hover:text-white transition-colors duration-300">Mobile App</button>
            <button className="outline outline-1 outline-offset-[-1px] outline-[#00704A] rounded-[12px] text-xs font-semibold text-[#00704A] px-5 py-3 hover:bg-[#00704A] hover:text-white transition-colors duration-300">Marketplace</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
