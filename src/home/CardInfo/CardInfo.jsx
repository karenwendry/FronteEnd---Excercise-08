// src/home/CardInfo/CardInfo.jsx
import React, { useState } from "react";
import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

const CardInfo = ({ pet }) => {
  const [hovered, setHovered] = useState(false);

  const p = pet || {
    name: "Golden Lab",
    rarity: "Common",
    skill: "Digging Friend: ~10% chance to dig up random seed shop seed every minute.",
    evolution: ['Puppy', 'Labrador', 'Golden Guardian'],
    type: "Earth",
    effect: "Finds rare seeds"
  };

  // Ambil kelas berdasarkan rarity
  let cardClass = "bg-gray-100 border-gray-300";
  let badgeClass = "bg-gray-500";
  let borderClass = "border-gray-500";

  switch (p.rarity) {
    case 'Common':
      cardClass = "bg-gradient-to-br from-green-50 to-emerald-100 border-green-300";
      badgeClass = "bg-green-500";
      borderClass = "border-green-500";
      break;
    case 'Rare':
      cardClass = "bg-gradient-to-br from-blue-50 to-sky-100 border-blue-300";
      badgeClass = "bg-blue-500";
      borderClass = "border-blue-500";
      break;
    case 'Mythic':
      cardClass = "bg-gradient-to-br from-purple-50 to-violet-100 border-purple-300";
      badgeClass = "bg-purple-500";
      borderClass = "border-purple-500";
      break;
    case 'Transcendent':
      cardClass = "bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-300";
      badgeClass = "bg-amber-500";
      borderClass = "border-amber-500";
      break;
    default:
      break;
  }

  return (
    <div
      className={`w-64 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 ${cardClass} ${borderClass} text-center relative flex flex-col items-center gap-3`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: hovered ? 'translateY(-4px)' : 'translateY(0)' }}
    >
      {/* Rarity Badge - Pojok Kiri Atas */}
      <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold text-white ${badgeClass} z-10`}>
        {p.rarity}
      </div>

      {/* Logo - Pojok Kanan Atas */}
      <div className="absolute top-2 right-2 z-10">
        <Logo />
      </div>

      {/* Nama Pet */}
      <h3 className="text-lg font-bold text-gray-800 mt-2">{p.name}</h3>

      {/* Placeholder Gambar */}
      <div className="w-36 h-36 bg-white rounded-lg flex items-center justify-center text-4xl shadow-sm">
        🐾
      </div>

      {/* Skill - Di Bawah Foto, Tengah, Tanpa Tulisan "Skill:" */}
      <div className="text-sm text-gray-600 text-center">
        {p.skill}
      </div>

      {/* Info Boxes (Evolution, Type, Effect) */}
      <div className="w-full space-y-2 mt-2">
        <Evolution stages={p.evolution} />
        <TypeEffect type={p.type} effect={p.effect} />
      </div>
    </div>
  );
};

export default CardInfo;