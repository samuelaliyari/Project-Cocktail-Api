import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { Data } from "../data/Data";
import "./Home.scss";
import cocktails from "./../../public/cocktails.png";

const Home = () => {
	const navigate = useNavigate();
	const { data, setData } = useContext(Data);
	const cocktailFilter = (searchInput) => {
		const filtered = data.filter((cocktail) => {
			return cocktail.strDrink
				.toLowerCase()
				.includes(searchInput.toLowerCase());
		});

		navigate("/gallery/searchresult", { state: filtered });
	};

	//Random
	const randomIndex = Math.floor(Math.random() * 441);
	const randomId = data[randomIndex].idDrink;

	return (
		<main>
			<SearchBar
				searchFunc={cocktailFilter}
				btnShow={true}
			/>
			<section className='galleryHome'>
				<Link
					to={`/gallery/alldata`}
					className='linkAll'
					onClick={() => window.scrollTo(0, 0)}>
					<img
						src={cocktails}
						alt='Gin bottle'
					/>
					<h2>Alle Cocktails</h2>
				</Link>

				<div className='gallery'>
					<Link
						to={`/gallery/gin`}
						className='linkFilter'
						onClick={() => window.scrollTo(0, 0)}>
						<h2>Gin</h2>
						<img
							src='https://www.thecocktaildb.com/images/ingredients/gin.png'
							alt='Gin bottle'
						/>
					</Link>
					<Link
						to={`/gallery/vodka`}
						className='linkFilter'
						onClick={() => window.scrollTo(0, 0)}>
						<h2>Vodka</h2>
						<img
							src='https://www.thecocktaildb.com/images/ingredients/vodka.png'
							alt='Vodka bottle'
						/>
					</Link>
					<Link
						to={`/gallery/rum`}
						className='linkFilter'
						onClick={() => window.scrollTo(0, 0)}>
						<h2>Rum</h2>
						<img
							src='https://www.thecocktaildb.com/images/ingredients/rum.png'
							alt='Rum bottle'
						/>
					</Link>
					<Link
						to={`/gallery/scotch`}
						className='linkFilter'
						onClick={() => window.scrollTo(0, 0)}>
						<h2>Scotch</h2>
						<img
							src='https://www.thecocktaildb.com/images/ingredients/scotch.png'
							alt='Scotch Bottle'
						/>
					</Link>
					<Link
						to={`/gallery/nonalcoholic`}
						className='linkFilter'
						onClick={() => window.scrollTo(0, 0)}>
						<h2>Non Alcoholic</h2>
						<img
							src='https://www.thecocktaildb.com/images/ingredients/pineapple.png'
							alt='Softdrink'
						/>
					</Link>
					<Link
						to={`/detail/${randomId}`}
						className='linkFilter'
						onClick={() => window.scrollTo(0, 0)}>
						<h2>Schicksal</h2>
						<img
							src='https://www.thecocktaildb.com/images/ingredients/ice.png'
							alt='Softdrink'
						/>
					</Link>
				</div>
			</section>
		</main>
	);
};

export default Home;
