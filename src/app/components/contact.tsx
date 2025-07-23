'use client';

export function Contact() {
  return (
    <div className="container py-16 px-10 my-[100px] mx-auto max-w-7xl bg-[#00704A] text-white rounded-4xl" data-background="dark">
      <div className="flex justify-between items-center">
        <div className="col-4 w-[790px]">
          <h1 className="font-bold text-[42px] mb-8">Have a Wonderfull idea?</h1>
          <p className="text-xl text-white/75 font-medium leading-7">Let&apos;s make your project a success together by harnessing our expertise and passion for delivering exceptional design solutions.</p>

        </div>
        <div className="col-2">
          <button className="bg-white rounded-[16px] text-lg font-semibold text-[#00704A] px-7 py-5">Let&apos;s Talk</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
