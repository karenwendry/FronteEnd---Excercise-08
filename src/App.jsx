// src/App.jsx
import React from "react";
import Home from "./home/home.jsx";
import Header from "./header/header";
import Footer from "./footer/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;