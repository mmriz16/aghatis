'use client';

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex justify-between items-center gap-[164px]">
          <h1 className="text-[84px] font-bold w-[780px] leading-[106px]">Elevate Your Digital <span className="text-[#00A06A]">Experience</span> with Us</h1>
          <p className="text-xl w-[334px]">Web, Android, iOS, UI/UX Design, Illustration, Icons, 3D Design</p>
        </div>
        <div className="flex justify-center">
          <img src="/images/hero.png" alt="Hero Image" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
