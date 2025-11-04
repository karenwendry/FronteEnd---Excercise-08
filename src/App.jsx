// src/App.jsx
import React, { useState, useEffect, useRef } from 'react';
import Header from './header/pets/index.jsx';
import { AllPets, CardInfo } from './CardInfo/index.jsx';
import { SearchBar } from './home/search.jsx';

const App = () => {
  const [selectedGen, setSelectedGen] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef(null);

  // Fungsi untuk mengatur tampilan kartu berdasarkan pencarian
  useEffect(() => {
    if (!containerRef.current) return;

    const term = searchTerm.toLowerCase().trim();
    const cards = containerRef.current.querySelectorAll('.pet-card');

    cards.forEach(card => {
      if (!term) {
        card.style.display = '';
        return;
      }

      // Ambil teks dari nama dan skill (karena itu yang terlihat)
      const nameEl = card.querySelector('h3');
      const skillEl = card.querySelectorAll('div')[2]; // skill ada di div ke-3

      const name = nameEl?.textContent?.toLowerCase() || '';
      const skill = skillEl?.textContent?.toLowerCase() || '';

      if (name.includes(term) || skill.includes(term)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }, [searchTerm, selectedGen]);

  const renderContent = () => {
    switch (selectedGen) {
      case 'Generasi 1':
        return <CardInfo.Common />;
      case 'Generasi 2':
        return <CardInfo.Rare />;
      case 'Generasi 3':
        return <CardInfo.Mythic />;
      case 'Generasi 4':
        return <CardInfo.Transcendent />;
      default:
        return <AllPets />;
    }
  };

  // Tambahkan class 'pet-card' ke setiap kartu via wrapper
  const wrapCards = (element) => {
    if (!element) return null;
    return React.cloneElement(element, {
      ...element.props,
      children: React.Children.map(element.props.children, child =>
        child && typeof child.type === 'function'
          ? React.cloneElement(child, { className: 'pet-card' })
          : child
      ),
    });
  };

  // Karena CardInfo mengembalikan fragment, kita wrap manual
  const getContentWithClass = () => {
    const content = renderContent();
    // Karena hasilnya adalah array JSX, kita wrap setiap elemen
    if (React.isValidElement(content) && content.type === React.Fragment) {
      return React.Children.map(content.props.children, child =>
        React.cloneElement(child, { className: 'pet-card' })
      );
    }
    // Jika bukan fragment (misal hanya satu elemen), wrap juga
    return React.cloneElement(content, { className: 'pet-card' });
  };

  return (
    <div>
      <Header selectedGen={selectedGen} onGenSelect={setSelectedGen} />
      
      <div style={{ padding: '20px' }}>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      <main
        ref={containerRef}
        style={{
          padding: '0 20px 20px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        {getContentWithClass()}
      </main>
    </div>
  );
};

export default App;