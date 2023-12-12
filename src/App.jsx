import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Data } from "./data/Data";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
	const allCocktails = useContext(Data);
	console.log(allCocktails);

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/detail/:id'
					element={<Detail />}
				/>
			</Routes>
		</>
	);
}

export default App;
