import React from "react";

const navbar = () => {
  return (
    <div>
      <nav className="bg-black shadow-md p-6 rounded-b-4xl">
        <div className="container mx-auto flex justify-between items-center">
          <a className="text-3xl font-bold text-white tracking-widest pl-[60px]">
            JobPortal
          </a>
          <div className="hidden md:flex space-x-6 gap-3 text-[17px] pr-[60px]">
            <a
              href="/home"
              className="text-white hover:text-blue-500 tracking-widest"
            >
              Home
            </a>
            <a
              href="/apply"
              className="text-white hover:text-blue-500 tracking-widest"
            >
              Apply
            </a>
            <a
              href="/profile"
              className="text-white hover:text-blue-500 tracking-widest"
            >
              Profile
            </a>
            <a
              href="/admin"
              className="text-white hover:text-blue-500 tracking-widest"
            >
              Admin
            </a>
            <a className="text-white hover:text-blue-500 tracking-widest">
              Logout
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
