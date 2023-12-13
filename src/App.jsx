import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Data } from "./data/Data";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const allCocktails = useContext(Data);
  console.log(allCocktails);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
