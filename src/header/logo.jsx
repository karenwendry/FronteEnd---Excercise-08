import React from "react";
import { PawPrint } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-white/20 p-3 rounded-xl backdrop-blur">
        <PawPrint className="w-10 h-10 text-white" />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-1 text-white">
          Pet Encyclopedia
        </h1>
        <p className="text-green-100 text-sm">🐕 Roblox Pet Collection</p>
      </div>
    </div>
  );
};

export default Logo;
