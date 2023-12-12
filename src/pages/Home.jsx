import { Link, useNavigate } from "react-router-dom";
import { Data } from "../data/Data";
import { useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";

const Home = () => {
	const navigate = useNavigate()
	const { data, setData } = useContext(Data);
	const [filteredCocktails, setFilteredCocktails] = useState('')
	const cocktailFilter = (searchInput) =>{
		const filtered = data.filter((cocktail)=>{
			return cocktail.strDrink.toLowerCase().includes(searchInput.toLowerCase())
		})
		
		navigate(
			'/gallery/searchresult',
			{state: filtered}
		)
	}
	return (
		<main>
			<h1>Home</h1>
			<SearchBar searchFunc={cocktailFilter} btnShow={true}/>
			<Link to={`/gallery/alldata`}>all</Link>
		</main>
	);
};

export default Home;
