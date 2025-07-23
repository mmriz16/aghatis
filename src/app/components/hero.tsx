'use client';

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl px-4 pt-10">
        <div className="flex justify-between items-center gap-[100px]">
          <h1 className="text-[84px] font-bold w-full leading-[106px]">Elevate Your Digital <span className="text-[#00A06A]">Experience</span> with Us</h1>
          <p className="text-[22px] w-[500px]">Web, Android, iOS, <br /> UI/UX Design, Illustration, Icons, 3D Design</p>
        </div>
        <div className="flex justify-center pt-[80px]">
          <img src="/app/img/cover.png" alt="Hero Image" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
