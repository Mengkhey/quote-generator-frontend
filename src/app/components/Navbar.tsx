"use client";

const Navbar = () => {

  return (
    <nav className="fixed w-full bg-black text-white z-50 shadow-md">
      <div className="w-70  mx-auto bg-white/80 px-4 flex justify-center gap-2  items-center h-18">
        <img className="w-10" src="/logo.png" alt="logo" />
        {/* Logo */}
        <div className="text-xl text-black font-bold  cursor-pointer">Quote Generator</div>
      </div>
    </nav>
  );
};

export default Navbar;
