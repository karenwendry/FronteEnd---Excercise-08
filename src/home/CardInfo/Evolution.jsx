// src/home/CardInfo/Evolution.jsx
import React from "react";

const Evolution = ({ stages }) => (
  <div className="text-left text-sm text-gray-700">
    <strong className="text-blue-700 font-bold">EVOLUTION →</strong> <span>{stages.join(' → ')}</span>
  </div>
);

export default Evolution;