import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Data } from "./data/Data";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
	// import all data and log in the Console
	const allCocktails = useContext(Data);

	// Setter and getter for Data
	const [data, setData] = useState(allCocktails);
	console.log(data);
	return (
		<>
			<Data.Provider value={{ data, setData }}>
				<Header />
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
				</Routes>
				<Footer />
			</Data.Provider>
		</>
	);
}

export default App;
