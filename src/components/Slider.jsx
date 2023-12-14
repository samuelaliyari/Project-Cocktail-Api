import { useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.scss";

const Slider = () => {
	const [activ, setActiv] = useState(false);
	return (
		<section className='sliderWrapper'>
			<div className='slide'>
				<article className={activ ? "activ" : ""}>
					<p
						className={activ ? "activeMenu" : ""}
						onClick={() => setActiv(!activ)}>
						MENU
					</p>
					<Link to='/gallery/alldata'>Alle Drinks</Link>
					<Link to='/newdrink'>Add neue Drink</Link>
					<h4>
						Categories <span>˘</span>
					</h4>
					<Link to='/gallery/gin'>Gin</Link>
					<Link to='/gallery/vodka'>Vodka</Link>
					<Link to='/gallery/rum'>Rum</Link>
					<Link to='/gallery/scotch'>Scotch</Link>
					<Link to='/gallery/nonalcoholic'>Alkoholfrei</Link>
					<Link to='/gallery/detail/random'>Zufall</Link>
				</article>
			</div>
		</section>
	);
};

export default Slider;
