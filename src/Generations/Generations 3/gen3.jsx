import React from "react";

const Gen4 = ({ text }) => {
  return (
    <div className="bg-lime-50 border-2 border-lime-400 rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-lime-600 mb-2">Generation 4</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default Gen4;