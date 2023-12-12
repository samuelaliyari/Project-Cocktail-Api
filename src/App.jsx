import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Data } from "./data/Data";

function App() {
	const allCocktails = useContext(Data);
	console.log(allCocktails);

	return <></>;
}

export default App;
