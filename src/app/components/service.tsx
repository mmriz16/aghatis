'use client';

export function Service() {
  return (
    <div className="container py-24" data-background="light">
      <div className="flex justify-between items-center">
        <div className="col-4 w-[580px]">
          <h1 className="text-[#00A06A] font-bold text-[42px]  mb-8">Our <span className="text-black">Services</span></h1>
          <p className="text-xl">We showcase the comprehensive range of solutions that we offer to help you achieve your goals.</p>
        </div>
        <div className="col-2">
          <button className="bg-[#00704A] rounded-[16px] text-lg font-semibold text-white px-5 py-5.5">See Other Service</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 pt-11">
        <div className="col-span-1">
          <img src="/app/img/web-app.png" alt="Service 1" className="w-full h-fit" />
          <h1 className="text-black font-bold text-[28px]  my-6">Full IT Development</h1>
          <p className="text-lg text-black/80">Recommended for enterprises and corporations, or individuals who want to create a product with the highest quality.</p>
        </div>
        <div className="col-span-1">
          <img src="/app/img/web-app.png" alt="Service 2" className="w-full h-fit" />
          <h1 className="text-black font-bold text-[28px]  my-6">Connect with Freelancer</h1>
          <p className="text-lg text-black/80">Recommended for small businesses, individuals, or students with a low budget. We will connect you with our best freelancers.</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
