'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([ titleRef.current, subtitleRef.current, imageRef.current ], {
        opacity: 0,
        y: 50,
      });

      // Create timeline
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .to(subtitleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.6')
        .to(imageRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl pt-10">
        <div className="flex justify-between items-center gap-[100px]">
          <h1 ref={titleRef} className="text-[84px] font-bold w-full leading-[106px]">Elevate Your Digital <span className="text-[#00A06A]">Experience</span> with Us</h1>
          <p ref={subtitleRef} className="text-[22px] w-[500px]">Web, Android, iOS, <br /> UI/UX Design, Illustration, Icons, 3D Design</p>
        </div>
        <div ref={imageRef} className="flex justify-center pt-[80px]">
          <Image
            src="/app/img/cover.png"
            alt="Hero Image"
            width={1200}
            height={600}
            quality={90}
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
