import React from "react";
import Logo from "./logo";
import Generations from './generations/generations.jsx';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white shadow-xl">
      {/* Bagian atas header (logo dan judul) */}
      <div className="flex items-center py-6 pl-4">
        <Logo />
      </div>

      {/* Bagian navigasi generasi */}
      <nav className="border-t border-white/20">
        <ul className="flex items-center gap-8 pl-4 py-4">
        <Generations />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
