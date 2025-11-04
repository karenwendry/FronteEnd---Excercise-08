import React from "react";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white shadow-xl">
      {/* Bagian atas header (logo dan judul) */}
      <div className="flex items-center py-6 pl-4">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
