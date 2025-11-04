import React from "react";
import Gen1 from "./Generation 1/gen1";
import Gen2 from "./Generation 2/gen2";
import Gen3 from "./Generations 3/gen3";
import Gen4 from "./Generation 4/gen4";

const Generations = ({ title }) => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-6">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Gen1 text="Ini adalah Generasi 1 🌱" />
        <Gen2 text="Ini adalah Generasi 2 🌿" />
        <Gen3 text="Ini adalah Generasi 3 🌸" />
        <Gen4 text="Ini adalah Generasi 4 🌻" />
      </div>
    </div>
  );
};

export default Generations;
