'use client';
import Image from 'next/image';

export function Trusted() {
  return (
    <div className="container w-full py-24" data-background="light">
      <div className="flex justify-center text-center mb-12">
        <div className="w-[600px]">
          <h1 className="text-black font-bold text-[42px] mb-8">More than 3000 companies have <span className="text-[#00A06A]">trusted us</span></h1>
          <p className="text-xl">We are a team of passionate developers and designers who are dedicated to transforming ideas into visually stunning and immersive experiences that captivate and engage audiences.</p>
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-1 gap-6">
        <div className="bg-[#f7f7f7] w-full h-[130px] rounded-2xl flex justify-center items-center group hover:shadow-[10px_10px_50px_0px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-300">
          <Image
            src="/app/img/logo/unpad.png"
            width={120}
            height={60}
            quality={90}
            sizes="(max-width: 768px) 80px, 120px"
            className="max-h-[60px] max-w-[120px] w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            alt="Universitas Padjadjaran Logo"
          />
        </div>
        <div className="bg-[#f7f7f7] w-full h-[130px] rounded-2xl flex justify-center items-center group hover:shadow-[10px_10px_50px_0px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-300">
          <Image
            src="/app/img/logo/stmik-bandung.png"
            width={120}
            height={60}
            quality={90}
            sizes="(max-width: 768px) 80px, 120px"
            className="max-h-[60px] max-w-[120px] w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            alt="STMIK Bandung Logo"
          />
        </div>
        <div className="bg-[#f7f7f7] w-full h-[130px] rounded-2xl flex justify-center items-center group hover:shadow-[10px_10px_50px_0px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-300">
          <Image
            src="/app/img/logo/unwim.png"
            width={120}
            height={60}
            quality={90}
            sizes="(max-width: 768px) 80px, 120px"
            className="max-h-[60px] max-w-[120px] w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            alt="Universitas Widyatama Logo"
          />
        </div>
        <div className="bg-[#f7f7f7] w-full h-[130px] rounded-2xl flex justify-center items-center group hover:shadow-[10px_10px_50px_0px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-300">
          <Image
            src="/app/img/logo/google.png"
            width={120}
            height={60}
            quality={90}
            sizes="(max-width: 768px) 80px, 120px"
            className="max-h-[60px] max-w-[120px] w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            alt="Google Logo"
          />
        </div>
        <div className="bg-[#f7f7f7] w-full h-[130px] rounded-2xl flex justify-center items-center group hover:shadow-[10px_10px_50px_0px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-300">
          <Image
            src="/app/img/logo/google.png"
            width={120}
            height={60}
            quality={90}
            sizes="(max-width: 768px) 80px, 120px"
            className="max-h-[60px] max-w-[120px] w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            alt="Google Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Trusted;
