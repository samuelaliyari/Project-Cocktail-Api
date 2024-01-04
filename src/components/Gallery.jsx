import { useContext, useEffect, useState } from "react";
import { Data } from "../data/Data";
import GalleryItem from "./GalleryItem";
import { useParams, useLocation, Link } from "react-router-dom";
import SearchBar from "./SearchBar";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import React from "react";
import "./Popover.scss";
import "./Gallery.scss";

const Gallery = () => {
	const { data, setData, darkMode } = useContext(Data);
	const [filterData, setFilterdata] = useState([]);
	const [allData, setAllData] = useState([]);
	const category = useParams().category;
	const location = useLocation();
	const state = location.state;
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
	useEffect(() => {
		if (category === "searchresult") {
			setAllData(state);
			setFilterdata(state);
		}
		if (category === "alldata") {
			setAllData(data);
			setFilterdata(data);
		}
		if (category === "gin") {
			setAllData(Gin);
			setFilterdata(Gin);
		}
		if (category === "vodka") {
			setAllData(Vodka);
			setFilterdata(Vodka);
		}
		if (category === "rum") {
			setAllData(Rum);
			setFilterdata(Rum);
		}
		if (category === "scotch") {
			setAllData(Scotch);
			setFilterdata(Scotch);
		}
		if (category === "nonalcoholic") {
			setAllData(NonAlcoholic);
			setFilterdata(NonAlcoholic);
		}
	}, [category]);
	const cocktailFilter = (searchInput) => {
		const filtered = filterData.filter((cocktail) => {
			return cocktail.strDrink
				.toLowerCase()
				.includes(searchInput.toLowerCase());
		});

		setAllData(filtered);
	};

	//Modalfunction
	const [open, setOpen] = useState(false);
	const [itemData, setItemData] = useState([{}]);

	const onOpenModal = () => setOpen(true);
	const onCloseModal = () => setOpen(false);

	useEffect(() => {
		if (itemData.length !== 0) {
		}
	}, [itemData]);

	useEffect(() => {}, [darkMode]);

	const myRef = React.useRef(null);

	return (
		<section className='galleryWrapper'>
			<SearchBar
				searchFunc={cocktailFilter}
				btnShow={false}
			/>
			<section className='galleryContainer'>
				<div className='gallery'>
					{allData.map((cocktail) => (
						<GalleryItem
							onOpenModal={onOpenModal}
							key={cocktail.idDrink}
							id={cocktail.idDrink}
							name={cocktail.strDrink}
							image={cocktail.strDrinkThumb}
							itemData={itemData}
							setItemData={setItemData}
						/>
					))}
				</div>
			</section>
			<section>
				<div ref={myRef} />
				<Modal
					classNames={{
						modal: "modal",
						overlay: "modal-container",
						closeIcon: "closeIcon",
						root: "root",
					}}
					open={open}
					onClose={onCloseModal}
					center>
					<article className='popover'>
						<img
							src={itemData[0].strDrinkThumb}
							alt=''
						/>
						<div className='drink-info-wrapper'>
							<h2>{itemData[0].strDrink}</h2>
							<div className='ingredients-wrapper'>
								<h3>Zutaten</h3>
								<ul className='zutaten-liste'>
									<li className='zutat'>
										<p>{itemData[0].strMeasure1}</p>
										<p>{itemData[0].strIngredient1}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure2}</p>
										<p>{itemData[0].strIngredient2}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure3}</p>
										<p>{itemData[0].strIngredient3}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure4}</p>
										<p>{itemData[0].strIngredient4}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure5}</p>
										<p>{itemData[0].strIngredient5}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure6}</p>
										<p>{itemData[0].strIngredient6}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure7}</p>
										<p>{itemData[0].strIngredient7}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure8}</p>
										<p>{itemData[0].strIngredient8}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure9}</p>
										<p>{itemData[0].strIngredient9}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure10}</p>
										<p>{itemData[0].strIngredient10}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure11}</p>
										<p>{itemData[0].strIngredient11}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure12}</p>
										<p>{itemData[0].strIngredient12}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure13}</p>
										<p>{itemData[0].strIngredient13}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure14}</p>
										<p>{itemData[0].strIngredient14}</p>
									</li>
									<li>
										<p>{itemData[0].strMeasure15}</p>
										<p>{itemData[0].strIngredient15}</p>
									</li>
								</ul>
							</div>
							<div className='instructions-wrapper'>
								{/* <h3>Zubereitung</h3>
                <p className="zubereitung">{itemData[0].strInstructionsDE}</p> */}
							</div>
							{/* <div>
                <h3>Das optimale Glas zu diesem Drink:</h3>
                <p className="glass">{itemData[0].strGlass}</p>
              </div> */}
							<div className='link-button'>
								<Link
									to={`/detail/${itemData[0].idDrink}`}
									onClick={() => window.scrollTo(0, 0)}
									className='primary-button'>
									Mehr erfahren
								</Link>
							</div>
						</div>
					</article>
				</Modal>
			</section>
		</section>
	);
};

export default Gallery;
