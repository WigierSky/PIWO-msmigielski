import React, { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavComponent from "./components/NavComponent";
import LoginComponent from "./components/LoginComponent";
import FrontComponent from "./components/FrontComponent";
import FeatureComponent from "./components/FeatureComponent";
import BookComponent from "./components/BookComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavComponent />
      <LoginComponent />
      <FrontComponent />
      <FeatureComponent />
      <BookComponent />
      <FooterComponent />
    </div>
  );
}

export default App;


