import React from "react";

const Gen1 = ({ text }) => {
  return (
    <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-green-600 mb-2">Generation 1</h3>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export default Gen1;