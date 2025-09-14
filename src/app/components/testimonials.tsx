'use client';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(quoteRef.current, {
        opacity: 0,
        scale: 0.5,
        rotation: -15,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set(profileRef.current, {
        opacity: 0,
        x: -30,
      });

      gsap.set(buttonsRef.current, {
        opacity: 0,
        x: 30,
      });

      // Create scroll-triggered animations
      gsap.timeline({
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      })
        .to(quoteRef.current, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
        })
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.3')
        .to(profileRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.4')
        .to(buttonsRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.3');
    }, testimonialsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={testimonialsRef} className="container py-24 max-w-7xl mx-auto">
      <Image ref={quoteRef} src="/app/img/quote.png" width={52} height={42} className="w-[52px] h-[42px] mb-[34px]" alt="quote" />
      <p ref={textRef} className="text-4xl font-medium leading-[45px] mb-[34px]">Agathis Solution expertise exceeded my expectations. They brought our vision to life with precision and creativity, delivering a stunning and user-friendly interface.</p>
      <div className="flex justify-between items-center">
        <div className="col-6">
          <div ref={profileRef} className="flex gap-6 items-center">
            <Image src="/app/img/testimonials/miftakhul-rizky.jpg" width={68} height={68} className="w-[68px] h-[68px] rounded-full" alt="profile" />
            <div className="" id="name">
              <h1 className="text-2xl font-medium">Miftakhul Rizky</h1>
              <p className="text-base font-medium text-white/50">Founder Termicons</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div ref={buttonsRef} className="flex gap-5">
            <button className="bg-white/10 rounded-[16px] p-3 hover:bg-white/20 transition-all duration-300 cursor-pointer"><ArrowLeft className="w-5 h-5" /></button>
            <button className="bg-white/10 rounded-[16px] p-3 hover:bg-white/20 transition-all duration-300 cursor-pointer"><ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
