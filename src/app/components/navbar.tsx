'use client';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto max-w-7xl py-5 px-4">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Logo</h1>
          <ul className="flex gap-6">
            <li className="hover:text-[#00A06A] cursor-pointer transition-colors">Home</li>
            <li className="hover:text-[#00A06A] cursor-pointer transition-colors">About</li>
            <li className="hover:text-[#00A06A] cursor-pointer transition-colors">Services</li>
            <li className="hover:text-[#00A06A] cursor-pointer transition-colors">Portfolio</li>
            <li className="hover:text-[#00A06A] cursor-pointer transition-colors">Contact Us</li>
          </ul>
          <ul className="flex gap-6">
            <li className="hover:text-[#00A06A] cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-[#00A06A] cursor-pointer transition-colors">Linkedin</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
