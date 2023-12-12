import { useContext } from "react";
import { Data } from "../data/Data";
import GalleryItem from "./GalleryItem";
import { useParams } from "react-router-dom";

const Gallery = () => {
	const { data, setData } = useContext(Data);
	const category = useParams().category;
	const allData = data;

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
		</section>
	);
};

export default Gallery;
