<<<<<<< HEAD
// src/home/search.jsx
import React from "react";
import { Search, Sun, Droplets, Star } from "lucide-react";

// --- Search Bar UI ---
export const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div className="mb-8">
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search pets by name, type, or rarity..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition text-lg"
      />
    </div>
  </div>
);

// --- Evolution Path UI ---
export const Evolution = ({ stages }) => (
  <div className="mt-4 pt-4 border-t border-gray-200">
    <p className="text-xs font-bold text-gray-500 uppercase mb-2">Evolution Path</p>
    <div className="flex items-center justify-center gap-2 text-sm flex-wrap">
      {stages.map((stage, index) => (
        <React.Fragment key={index}>
          <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg font-medium">
            {stage}
          </span>
          {index < stages.length - 1 && (
            <span className="text-gray-400 font-bold">→</span>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

// --- Type & Effect UI ---
export const TypeEffect = ({ type, effect }) => (
  <div className="mt-4 space-y-2 bg-gray-50 p-3 rounded-lg">
    <div className="flex items-center gap-2">
      <Sun className="w-4 h-4 text-amber-500" />
      <span className="text-sm text-gray-700">
        <span className="font-semibold">Type:</span> {type}
      </span>
    </div>
    <div className="flex items-center gap-2">
      <Droplets className="w-4 h-4 text-blue-500" />
      <span className="text-sm text-emerald-600 font-semibold">
        Effect: {effect}
      </span>
    </div>
  </div>
);

// --- Single Pet Card UI ---
export const PetCard = ({ pet }) => {
  const rarityConfig = {
    Common: { bg: "bg-gray-50", border: "border-gray-300", badge: "bg-gray-500" },
    Rare: { bg: "bg-blue-50", border: "border-blue-400", badge: "bg-blue-500" },
    Mythic: { bg: "bg-purple-50", border: "border-purple-400", badge: "bg-purple-500" },
    Transcendent: { bg: "bg-yellow-50", border: "border-yellow-400", badge: "bg-yellow-500" },
  };

  const config = rarityConfig[pet.rarity] || rarityConfig.Common;
=======
import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [query, setQuery] = useState("");
>>>>>>> origin/Lio/home

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search pets by name, type, or rarity..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 transition text-lg"
        />
      </div>
      {query && (
        <p className="text-gray-600 mt-4 text-center">
          Showing results for: <span className="font-semibold">{query}</span>
        </p>
      )}
    </div>
  );
};

<<<<<<< HEAD
// --- Main Content Area UI ---
export const MainContent = ({ pets, searchTerm, selectedRarity }) => (
  <div className="flex-1">
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        {searchTerm
          ? `Search Results (${pets.length})`
          : selectedRarity === "All"
          ? "All Pets Collection"
          : `${selectedRarity} Pets`}
      </h2>
      <p className="text-gray-600">
        {searchTerm
          ? `Showing results for "${searchTerm}"`
          : `Discover ${pets.length} amazing pets`}
      </p>
    </div>

    {pets.length === 0 ? (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-xl text-gray-600">No pets found</p>
        <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    )}
  </div>
);
=======
export default Search;
>>>>>>> origin/Lio/home
