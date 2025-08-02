'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Portfolio() {
  return (
    <div className="container py-24 max-w-7xl mx-auto" data-background="light">
      <div className="flex justify-between items-center">
        <div className="col-4 w-[580px]">
          <h1 className="text-[#00A06A] font-bold text-[42px] mb-8">Our <span className="text-black">Portfolios</span></h1>
          <p className="text-xl">A portfolio is a showcase of your work and achievements that demonstrate Our skills, expertise, and experience.</p>
        </div>
        <div className="col-2">
          <button className="bg-[#00704A] rounded-[16px] text-lg font-semibold text-white px-5 h-[57px] flex items-center gap-2">See More <ArrowRight className="w-5 h-5" /></button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <Image src="/app/img/portfolio/barterin.jpg" width={600} height={400} className="object-cover rounded-2xl" alt="Barterin Portfolio" />
        <div className="flex flex-col gap-6 mt-6">
          <h1 className="text-3xl font-bold">Barterin Mobile App</h1>
          <p className="text-base">Barterin redefines transactions through barter, eliminating the need for money. Discover a diverse marketplace, enjoy a seamless experience, and build trust with secure transactions.</p>
          <div className="flex gap-4">
            <button className="outline outline-1 outline-offset-[-1px] outline-[#00704A] rounded-[12px] text-xs font-semibold text-[#00704A] px-5 py-3">Mobile App</button>
            <button className="outline outline-1 outline-offset-[-1px] outline-[#00704A] rounded-[12px] text-xs font-semibold text-[#00704A] px-5 py-3">Marketplace</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
