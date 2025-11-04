import React, { useState } from "react";
import Header from "./header/pets";
import { SearchBar, MainContent } from "./home/search";
import Footer from "./Footer/index";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGen, setSelectedGen] = useState("All");

  const petsData = [];

  const filteredPets = petsData.filter((pet) => {
    const matchSearch =
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.rarity.toLowerCase().includes(searchTerm.toLowerCase());

    const matchGeneration =
      selectedGen === "All" || `Generasi ${pet.generation}` === selectedGen;

    return matchSearch && matchGeneration;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex flex-col">
      <Header selectedGen={selectedGen} onGenSelect={setSelectedGen} />
      <div className="flex-grow max-w-7xl mx-auto px-8 py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <MainContent
          pets={filteredPets}
          searchTerm={searchTerm}
          selectedRarity={selectedGen}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
