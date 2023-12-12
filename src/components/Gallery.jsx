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
	
	useEffect(() =>{
		state === null && category === "alldata"  ? setAllData(data) : setAllData(state)
		if(category === "alldata"){
			setFilterdata(data)
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
			{
				 allData.map((cocktail) => (
						<GalleryItem
							key={cocktail.idDrink}
							id={cocktail.idDrink}
							name={cocktail.strDrink}
							image={cocktail.strDrinkThumb}
						/>
				  ))
				}
		</section>
	);
};

export default Gallery;
