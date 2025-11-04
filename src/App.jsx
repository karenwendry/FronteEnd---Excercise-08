<<<<<<< HEAD
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
=======
// src/App.jsx
import React, { useState } from 'react';
import Header from './header/pets/index.jsx'; // ✅ Import Header
import { SearchBar } from './home/search.jsx'; // ✅ Import SearchBar dari home
import { AllPets } from './CardInfo/index.jsx'; // ✅ Import CardInfo (bagianmu)
import Footer from './Footer/index.jsx'; // ✅ Import Footer

export default function App() {
  // State untuk filter dan pencarian (jika nanti ditambahkan)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGen, setSelectedGen] = useState('All');

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f9f7', minHeight: '100vh' }}>
      {/* Header */}
      <Header selectedGen={selectedGen} onGenSelect={setSelectedGen} />

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Main Content - Semua Pet */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <AllPets />
>>>>>>> origin/Development
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
<<<<<<< HEAD
};

export default App;
=======
}
>>>>>>> origin/Development
