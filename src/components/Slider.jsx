import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Slider.scss";
import { Data } from "../data/Data";

const Slider = ({ randomId }) => {
	const { active, setActive } = useContext(Data);
	return (
		<section
			className={
				active ? "activeWrapper sliderWrapper" : "sliderWrapper"
			}>
			<div className='slide'>
				<article className={active ? "active" : ""}>
					<p
						className={active ? "activeMenu" : ""}
						onClick={() => setActive(!active)}>
						MENU
					</p>
					<Link
						to='/gallery/alldata'
						onClick={() => window.scrollTo(0, 0)}>
						All Drinks
					</Link>
					<Link
						to='/newdrink'
						onClick={() => window.scrollTo(0, 0)}>
						Add neue Drink
					</Link>
					<h4>
						Categories <span>˘</span>
					</h4>
					<Link
						to={`/gallery/gin`}
						onClick={() => window.scrollTo(0, 0)}>
						Gin
					</Link>
					<Link
						to={`/gallery/vodka`}
						onClick={() => window.scrollTo(0, 0)}>
						Vodka
					</Link>
					<Link
						to={`/gallery/rum`}
						onClick={() => window.scrollTo(0, 0)}>
						Rum
					</Link>
					<Link
						to={`/gallery/scotch`}
						onClick={() => window.scrollTo(0, 0)}>
						Scotch
					</Link>
					<Link
						to={`/gallery/nonalcoholic`}
						onClick={() => window.scrollTo(0, 0)}>
						Alkoholfrei
					</Link>
					<Link
						to={`/detail/${randomId}`}
						onClick={() => window.scrollTo(0, 0)}>
						Zufall
					</Link>
				</article>
			</div>
		</section>
	);
};

export default Slider;
