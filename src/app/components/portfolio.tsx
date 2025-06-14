'use client';

export function Portfolio() {
  return (
    <div className="container py-24 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="col-4 w-[580px]">
          <h1 className="text-[#00A06A] font-bold text-[42px] mb-8">Our <span className="text-black">Portfolios</span></h1>
          <p className="text-xl">A portfolio is a showcase of your work and achievements that demonstrate Our skills, expertise, and experience.</p>
        </div>
        <div className="col-2">
          <button className="bg-[#00704A] rounded-[16px] text-lg font-semibold text-white px-5 py-5.5">See More</button>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
