'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(logoRef.current, {
        opacity: 0,
        y: 30,
      });

      gsap.set('.footer-column', {
        opacity: 0,
        y: 40,
      });

      gsap.set(copyrightRef.current, {
        opacity: 0,
        y: 20,
      });

      // Create scroll-triggered animations
      gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
        },
      })
        .to(logoRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        })
        .to('.footer-column', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
        }, '-=0.4')
        .to(copyrightRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        }, '-=0.2');
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={footerRef} className="container mx-auto max-w-7xl pt-16 pb-11">
      <div className="grid grid-cols-12 grid-rows-1 gap-4 mb-11">
        <div ref={logoRef} className="col-span-6 flex flex-col gap-4">
          <Image src="/app/img/logo-dark.png" alt="logo" width={256} height={73} />
          <p className="text-white/50 font-[16px]">Elevate Your Digital Experience with Us</p>
        </div>
        <div className="footer-column col-span-2">
          <ul className="flex flex-col gap-4">
            <h1 className="font-bold text-[20px] mb-8">About</h1>
            <li className="text-white/50 font-[16px] hover:text-white transition-all duration-300">Company</li>
            <li className="text-white/50 font-[16px] hover:text-white transition-all duration-300">Our Services</li>
            <li className="text-white/50 font-[16px] hover:text-white transition-all duration-300">Features</li>
            <li className="text-white/50 font-[16px] hover:text-white transition-all duration-300">Testimonials</li>
          </ul>
        </div>
        <div className="footer-column col-span-2">
          <ul className="flex flex-col gap-4">
            <h1 className="font-bold text-[20px] mb-8">Help</h1>
            <li className="text-white/50 font-[16px] hover:text-white transition-all duration-300">Contact Us</li>
            <li className="text-white/50 font-[16px] hover:text-white transition-all duration-300">FAQ</li>
            <li className="text-white/50 font-[16px] hover:text-white transition-all duration-300">Terms of Service</li>
            <li className="text-white/50 font-[16px] hover:text-white transition-all duration-300">Customer Support</li>
          </ul>
        </div>
        <div className="footer-column col-span-2">
          <ul className="flex flex-col gap-4">
            <h1 className="font-bold text-[20px] mb-8">Legal</h1>
            <li className="text-white/50 font-[16px] hover:text-white transition-all duration-300">Privacy Policy</li>
            <li className="text-white/50 font-[16px] hover:text-white transition-all duration-300">Copyright</li>
          </ul>
        </div>
      </div>
      <p ref={copyrightRef} className="text-white/50 text-center font-[16px]">©2025 PT Aghatis Karya Indonesia. All rights reserved.</p>
    </div>
  );
}

export default Footer;
