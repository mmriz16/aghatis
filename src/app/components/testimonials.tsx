'use client';

export function Testimonials() {
  return (
    <div className="container py-24 max-w-7xl mx-auto">
      <p className="text-4xl font-medium leading-[45px] mb-[34px]">Agathis Solution expertise exceeded my expectations. They brought our vision to life with precision and creativity, delivering a stunning and user-friendly interface.</p>
      <div className="flex justify-between items-center">
        <div className="col-6">
          <div className="flex gap-6">
            <img src="/profile.png" alt="profile" />
            <div className="" id="name">
              <h1 className="text-2xl font-medium">Miftakhul Rizky</h1>
              <p className="text-base font-medium text-white/50">Founder Termicons</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="flex">
            <p>-</p>
            <p>-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
