import { useContext } from "react";
import { Data } from "../data/Data";
import GalleryItem from "./GalleryItem";
import { useParams } from "react-router-dom";

const Gallery = () => {
	const { data, setData } = useContext(Data);
	const category = useParams().category;
	const allData = data;
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

	console.log(NonAlcoholic);

	return (
		<section>
			<h1>Gallery</h1>
			{category === "alldata"
				? allData.map((cocktail) => (
						<GalleryItem
							key={cocktail.idDrink}
							id={cocktail.idDrink}
							name={cocktail.strDrink}
							image={cocktail.strDrinkThumb}
						/>
				  ))
				: null}
			{category === "gin"
				? Gin.map((cocktail) => (
						<GalleryItem
							key={cocktail.idDrink}
							id={cocktail.idDrink}
							name={cocktail.strDrink}
							image={cocktail.strDrinkThumb}
						/>
				  ))
				: null}
			{category === "vodka"
				? Vodka.map((cocktail) => (
						<GalleryItem
							key={cocktail.idDrink}
							id={cocktail.idDrink}
							name={cocktail.strDrink}
							image={cocktail.strDrinkThumb}
						/>
				  ))
				: null}
			{category === "rum"
				? Rum.map((cocktail) => (
						<GalleryItem
							key={cocktail.idDrink}
							id={cocktail.idDrink}
							name={cocktail.strDrink}
							image={cocktail.strDrinkThumb}
						/>
				  ))
				: null}
			{category === "scotch"
				? Scotch.map((cocktail) => (
						<GalleryItem
							key={cocktail.idDrink}
							id={cocktail.idDrink}
							name={cocktail.strDrink}
							image={cocktail.strDrinkThumb}
						/>
				  ))
				: null}
			{category === "nonalcoholic"
				? NonAlcoholic.map((cocktail) => (
						<GalleryItem
							key={cocktail.idDrink}
							id={cocktail.idDrink}
							name={cocktail.strDrink}
							image={cocktail.strDrinkThumb}
						/>
				  ))
				: null}
		</section>
	);
};

export default Gallery;
