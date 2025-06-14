'use client';

export function Service() {
  return (
    <div className="container py-24">
      <div className="flex justify-between items-center">
        <div className="col-4 w-[580px]">
          <h1 className="text-[#00A06A] font-bold text-[42px]  mb-8">Our <span className="text-black">Services</span></h1>
          <p className="text-xl">We showcase the comprehensive range of solutions that we offer to help you achieve your goals.</p>
        </div>
        <div className="col-2">
          <button className="bg-[#00704A] rounded-[16px] text-lg font-semibold text-white px-5 py-5.5">See Other Service</button>
        </div>
      </div>
    </div>
  );
}

export default Service;
