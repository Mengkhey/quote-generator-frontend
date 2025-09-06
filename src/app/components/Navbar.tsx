'use client';

import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black text-white z-50 shadow-md">
      <div className="w-70  mx-auto bg-white px-4 flex justify-center gap-2  items-center h-18">
        <Image className="w-10" src="/logo.png" alt="logo" width={40} height={40} />
        <div className="text-xl text-black font-bold  cursor-pointer">
          Quote Generator
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
