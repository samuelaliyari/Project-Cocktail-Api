import { useContext, useEffect, useState } from "react";
import { Data } from "../data/Data";
import "./GalleryItem.scss";

const GalleryItem = ({
	id,
	name,
	image,
	itemData,
	setItemData,
	onOpenModal,
}) => {
	const { data, setdata } = useContext(Data);
	const showItemData = () => {
		setItemData(data.filter((cocktail) => cocktail.idDrink === id));

		onOpenModal();
	};

	return (
		<article
			className='galleryItem'
			onClick={showItemData}>
			<h2>{name}</h2>
			<img
				src={image}
				alt={`Photo of ${name}`}
			/>
		</article>
	);
};

export default GalleryItem;
