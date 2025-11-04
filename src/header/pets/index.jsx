// src/Header/Pet.jsx
import React, { useState } from "react";
import { PawPrint, Sprout } from "lucide-react";

const Header = ({ selectedGen, onGenSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const generations = [
    "All",
    "Generasi 1",
    "Generasi 2",
    "Generasi 3",
    "Generasi 4",
  ];

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSelectGen = (gen) => {
    onGenSelect(gen);
    setDropdownOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-teal-600 via-emerald-500 to-green-600 text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur">
              <PawPrint className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">Grow A Garden - Pet Database & Encyclopedia</h1>
              <p className="text-green-100 text-sm">🐾 Pet Collection</p>
            </div>
          </div>
          <Sprout className="w-12 h-12 opacity-50" />
        </div>

        <nav className="border-t border-white/20">
          <ul className="flex items-center gap-10 py-4 font-semibold text-lg">
            <li
              className="hover:text-green-100 cursor-pointer transition"
              onClick={() => onGenSelect("All")}
            >
              Home
            </li>

            <li className="relative cursor-pointer select-none">
              <span
                className="hover:text-green-100 flex items-center gap-1"
                onClick={toggleDropdown}
              >
                Pets
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 mt-1 transform transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>

              {dropdownOpen && (
                <ul className="absolute bg-white text-gray-800 mt-2 rounded-lg shadow-lg w-48 z-50">
                  {generations.map((gen) => (
                    <li
                      key={gen}
                      onClick={() => handleSelectGen(gen)}
                      className={`px-4 py-2 hover:bg-green-100 transition ${
                        selectedGen === gen ? "bg-green-200 font-semibold" : ""
                      }`}
                    >
                      {gen}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;