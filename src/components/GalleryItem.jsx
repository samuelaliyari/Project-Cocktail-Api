import { useContext, useEffect, useState } from "react";
import { Data } from "../data/Data";

const GalleryItem = ({ id, name, image }) => {
	const { data, setdata } = useContext(Data);

	const [itemData, setItemData] = useState([]);
	const showItemData = () => {
		setItemData(data.filter((cocktail) => cocktail.idDrink === id));
	};
	useEffect(() => {
		if (itemData.length !== 0) {
			console.log(itemData);
		}
	}, [itemData]);

	return (
		<article onClick={showItemData}>
			<h2>{name}</h2>
			<img
				src={image}
				alt={`Photo of ${name}`}
			/>
		</article>
	);
};

export default GalleryItem;
