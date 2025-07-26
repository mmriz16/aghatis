'use client';
import { ArrowRight } from 'lucide-react';

export function Service() {
  return (
    <div className="container py-24" data-background="light">
      <div className="flex justify-between items-center">
        <div className="col-4 w-[580px]">
          <h1 className="text-[#00A06A] font-bold text-[42px]  mb-8">Our <span className="text-black">Services</span></h1>
          <p className="text-xl">We showcase the comprehensive range of solutions that we offer to help you achieve your goals.</p>
        </div>
        <div className="col-2">
          <button className="bg-[#00704A] rounded-[16px] text-lg font-semibold text-white px-5 h-[57px] flex items-center gap-2">See Other Service <ArrowRight className="w-5 h-5" /></button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 pt-11">
        <div className="col-span-1">
          <img src="/app/img/services/ai.jpg" alt="Service 1" className="w-full h-fit rounded-[20px]" />
          <h1 className="text-black font-bold text-[28px]  my-6">Custom Software Development</h1>
          <p className="text-lg text-black/80">Tailored software solutions designed to meet your unique business needs and objectives.</p>
        </div>
        <div className="col-span-1">
          <img src="/app/img/services/ai.jpg" alt="Service 2" className="w-full h-fit rounded-[20px]" />
          <h1 className="text-black font-bold text-[28px]  my-6">Artificial Intelligence Development</h1>
          <p className="text-lg text-black/80">Leveraging AI and machine learning to unlock new possibilities and drive efficiency.</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
