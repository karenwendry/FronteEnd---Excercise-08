import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [query, setQuery] = useState("");

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

export default Search;
