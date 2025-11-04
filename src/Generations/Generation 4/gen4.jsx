import React from "react";

const Gen4 = ({ text }) => {
  return (
    <div className="bg-lime-200 p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300">
      <h3 className="text-lg font-semibold text-lime-900">Generasi 4</h3>
      <p className="text-lime-800 mt-2">{text}</p>
    </div>
  );
};

export default Gen4;