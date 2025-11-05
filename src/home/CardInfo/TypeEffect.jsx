// src/home/CardInfo/TypeEffect.jsx
import React from "react";
import { Sun, Droplets } from "lucide-react";

const TypeEffect = ({ type, effect }) => (
  <div className="flex items-center gap-2">
    <Sun className="w-4 h-4 text-amber-500" />
    <span className="text-sm text-gray-700">
      <span className="font-semibold">Type:</span> {type}
    </span>
  </div>
);

export default TypeEffect;