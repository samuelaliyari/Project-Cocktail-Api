import { useContext, useEffect, useState } from "react";
import "./App.scss";
import { Data } from "./data/Data";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import "react-responsive-modal/styles.css";

function App() {
  // import all data and log in the Console
  const allCocktails = useContext(Data);
  const [darkMode, setDarkMode] = useState(true);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  const [data, setData] = useState(allCocktails);
  console.log(data);

  return (
    <Data.Provider value={{ data, setData }}>
      <section className={darkMode ? "darkMode" : "lightMode"}>
        <Header onClick={changeMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/gallery/:category" element={<Gallery />} />
        </Routes>
        <Footer />
      </section>
    </Data.Provider>
  );
}

export default App;
