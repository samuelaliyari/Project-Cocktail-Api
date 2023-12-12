import { useContext, useEffect, useState } from "react";
import "./App.scss";
import { Data } from "./data/Data";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const allCocktails = useContext(Data);
  console.log(allCocktails);
  const [darkMode, setDarkMode] = useState(true);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section className={darkMode ? "darkMode" : "lightMode"}>
      <Header onClick={changeMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
