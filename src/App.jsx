import React, { useState } from "react";
import Header from "./header/pets";
import { SearchBar, MainContent } from "./home/search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGen, setSelectedGen] = useState("All");

  // import atau definisikan data pets-mu di sini
  const petsData = []; // sementara kosong

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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Header selectedGen={selectedGen} onGenSelect={setSelectedGen} />
      <div className="max-w-7xl mx-auto px-8 py-8">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <MainContent
          pets={filteredPets}
          searchTerm={searchTerm}
          selectedRarity={selectedGen}
        />
      </div>
    </div>
  );
};

export default App;
