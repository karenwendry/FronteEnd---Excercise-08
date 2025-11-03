import React from "react";
import { PawPrint } from "lucide-react";

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="bg-white/20 p-3 rounded-xl backdrop-blur">
      <PawPrint className="w-8 h-8" />
    </div>
    <div>
      <h1 className="text-2xl font-bold text-white">Adopt A Pet</h1>
      <p className="text-green-100 text-sm">Roblox Pet Encyclopedia</p>
    </div>
  </div>
);

export default Logo;
