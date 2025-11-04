import React, { useState } from "react";
import Header from "./header/pets";
import { SearchBar } from "./home/search";
import Generations from "./Generations/generations";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGen, setSelectedGen] = useState("All");

  // Contoh data pets (bisa kamu ganti nanti sesuai proyekmu)
  const petsData = [
    { id: 1, name: "Bulby", type: "Grass", rarity: "Common", generation: 1 },
    { id: 2, name: "Flamy", type: "Fire", rarity: "Rare", generation: 2 },
    { id: 3, name: "Aquafy", type: "Water", rarity: "Epic", generation: 3 },
    { id: 4, name: "Leafon", type: "Grass", rarity: "Legendary", generation: 4 },
  ];

  // Filter berdasarkan pencarian dan generasi
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
      {/* Header dengan tombol generasi */}
      <Header selectedGen={selectedGen} onGenSelect={setSelectedGen} />

      {/* Area utama */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* Search bar */}
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {/* Komponen Generations menampilkan hasil filter */}
        <Generations plants={filteredPets} />
      </div>
    </div>
  );
};

export default App;
