import "./App.css";
import React from "react";
import NavComponent from "./components/NavComponent";
import HeroComponent from "./components/HeroComponent";
import FrontComponent from "./components/FrontComponent";
import FeatureComponent from "./components/FeatureComponent";
import BookComponent from "./components/BookComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavComponent />
      <HeroComponent />
      <FrontComponent />
      <FeatureComponent />
      <BookComponent />
      <FooterComponent />
    </div>
  );
}

export default App;

