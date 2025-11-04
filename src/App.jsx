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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}