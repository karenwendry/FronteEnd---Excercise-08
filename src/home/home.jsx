import React from "react";
import Search from "./search";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-8 py-10">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        🐾 Pet Collection Encyclopedia
      </h1>
      <Search />
    </div>
  );
};

export default Home;
