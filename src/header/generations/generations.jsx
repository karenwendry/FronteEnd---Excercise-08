// src/header/generations/generations.jsx
import React from "react";
import Gen1 from "./gen1.jsx";
import Gen2 from "./gen2.jsx";
import Gen3 from "./gen3.jsx";
import Gen4 from "./gen4.jsx";

const Generations = () => {
  return (
    <div className="flex gap-4">
      <Gen1 />
      <Gen2 />
      <Gen3 />
      <Gen4 />
    </div>
  );
};

export default Generations;