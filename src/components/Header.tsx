import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-[#0A001B] to-[#1A033A] h-32 w-full flex items-center justify-center text-white text-4xl lg:text-5xl font-extrabold border-b-4 border-gray-700 px-6">
      <div className="text-center">
        <h1 className="tracking-widest uppercase text-3xl lg:text-5xl mb-2">Project gallery</h1>
        <p className="text-xs lg:text-sm text-gray-300 font-medium tracking-wide">
          Discover an extensive collection of my professional projects and creative endeavors
        </p>
      </div>
    </header>
  );
}

export default Header;
