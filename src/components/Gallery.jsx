import { useContext, useEffect, useState } from "react";
import { Data } from "../data/Data";
import GalleryItem from "./GalleryItem";
import { useParams, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Gallery = () => {
	const { data, setData } = useContext(Data);
	const [filterData, setFilterdata] = useState([])
	const [allData, setAllData] = useState([])
	const category = useParams().category;
	const location = useLocation()
	const state = location.state
	console.log(state)
	const Gin = data.filter((cocktail) => {
		if (
			cocktail.strIngredient1 === "Gin" ||
			cocktail.strIngredient2 === "Gin" ||
			cocktail.strIngredient3 === "Gin" ||
			cocktail.strIngredient4 === "Gin" ||
			cocktail.strIngredient5 === "Gin"
		) {
			return cocktail;
		}
	});
	const Vodka = data.filter((cocktail) => {
		if (
			cocktail.strIngredient1 === "Vodka" ||
			cocktail.strIngredient2 === "Vodka" ||
			cocktail.strIngredient3 === "Vodka" ||
			cocktail.strIngredient4 === "Vodka" ||
			cocktail.strIngredient5 === "Vodka"
		) {
			return cocktail;
		}
	});
	const Rum = data.filter((cocktail) => {
		if (
			cocktail.strIngredient1 === "Rum" ||
			cocktail.strIngredient2 === "Rum" ||
			cocktail.strIngredient3 === "Rum" ||
			cocktail.strIngredient4 === "Rum" ||
			cocktail.strIngredient5 === "Rum"
		) {
			return cocktail;
		}
	});
	const Scotch = data.filter((cocktail) => {
		if (
			cocktail.strIngredient1 === "Scotch" ||
			cocktail.strIngredient2 === "Scotch" ||
			cocktail.strIngredient3 === "Scotch" ||
			cocktail.strIngredient4 === "Scotch" ||
			cocktail.strIngredient5 === "Scotch"
		) {
			return cocktail;
		}
	});
	const NonAlcoholic = data.filter((cocktail) => {
		if (cocktail.strAlcoholic === "Non alcoholic") {
			return cocktail;
		}
	});
	useEffect(() =>{
		
		if(category === "searchresult"){
            setAllData(state)
			setFilterdata(state)
		}
		if(category === "alldata"){
            setAllData(data)
			setFilterdata(data)
		}
        if(category === "gin"){
            setAllData(Gin)
			setFilterdata(Gin)
		}
        if(category === "vodka"){
            setAllData(Vodka)
			setFilterdata(Vodka)
		}
        if(category === "rum"){
            setAllData(Rum)
			setFilterdata(Rum)
		}
        if(category === "scotch"){
            setAllData(Scotch)
			setFilterdata(Scotch)
		}
        if(category === "nonalcoholic"){
            setAllData(NonAlcoholic)
			setFilterdata(NonAlcoholic)
		}
	},[])
	const cocktailFilter = (searchInput) =>{
		
		const filtered = filterData.filter((cocktail)=>{
			return cocktail.strDrink.toLowerCase().includes(searchInput.toLowerCase())
		})
		
		setAllData(filtered)
	}

	return (
		<section>
			<h1>Gallery</h1>
			<SearchBar searchFunc={cocktailFilter} btnShow={false}/>
			{allData.length < 1 ? (<h1>Nothing was found!</h1>):(allData.map((cocktail) => (
						<GalleryItem
							key={cocktail.idDrink}
							id={cocktail.idDrink}
							name={cocktail.strDrink}
							image={cocktail.strDrinkThumb}
						/>
				  )))
				  
				}
		</section>
	);
};

export default Gallery;
