'use client';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export function Testimonials() {
  return (
    <div className="container py-24 max-w-7xl mx-auto">
      <img src="/app/img/quote.png" className="w-[52px] h-[42px] mb-[34px]" alt="quote" />
      <p className="text-4xl font-medium leading-[45px] mb-[34px]">Agathis Solution expertise exceeded my expectations. They brought our vision to life with precision and creativity, delivering a stunning and user-friendly interface.</p>
      <div className="flex justify-between items-center">
        <div className="col-6">
          <div className="flex gap-6 items-center">
            <img src="/app/img/testimonials/miftakhul-rizky.jpg" className="w-[68px] h-[68px] rounded-full" alt="profile" />
            <div className="" id="name">
              <h1 className="text-2xl font-medium">Miftakhul Rizky</h1>
              <p className="text-base font-medium text-white/50">Founder Termicons</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="flex gap-5">
            <button className="bg-white/10 rounded-[16px] p-3 hover:bg-white/20 transition-all duration-300 cursor-pointer"><ArrowLeft className="w-5 h-5" /></button>
            <button className="bg-white/10 rounded-[16px] p-3 hover:bg-white/20 transition-all duration-300 cursor-pointer"><ArrowRight className="w-5 h-5" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
