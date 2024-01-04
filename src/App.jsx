import { useContext, useEffect, useState } from "react";
import "./App.scss";
import { Data } from "./data/Data";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import NewDrink from "./pages/NewDrink";
import "react-responsive-modal/styles.css";
import Slider from "./components/Slider";
import dark from "../public/bgDark.jpg";
import light from "../public/bgLight.jpg";

function App() {
	// import all data and log in the Console
	const allCocktails = useContext(Data);
	const [darkMode, setDarkMode] = useState(true);
	const changeMode = () => {
		setDarkMode(!darkMode);
	};

	const [data, setData] = useState(allCocktails);

	const randomIndex = Math.floor(Math.random() * 441);
	const randomId = data[randomIndex].idDrink;

	const [active, setActive] = useState(false);

	const closeMenu = () => (active ? setActive(false) : null);

	useEffect(() => {}, [active]);

	return (
		<Data.Provider value={{ data, setData, active, setActive, darkMode }}>
			<section
				className={darkMode ? "darkMode" : "lightMode"}
				style={
					darkMode
						? { backgroundImage: dark }
						: { backgroundImage: light }
				}
				onClick={closeMenu}>
				<Header
					onClick={changeMode}
					darkMode={darkMode}
				/>
				<Slider randomId={randomId} />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/detail/:id'
						element={<Detail />}
					/>
					<Route
						path='/gallery/:category'
						element={<Gallery />}
					/>
					<Route
						path='/newdrink'
						element={<NewDrink />}
					/>
				</Routes>
				<Footer />
			</section>
		</Data.Provider>
	);
}

export default App;
