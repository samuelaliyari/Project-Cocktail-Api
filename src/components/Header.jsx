import "./Header.scss";
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import logolight from "../images/logolight.png";
import logodark from "../images/logodark.png";

const Header = (props) => {
	const [activ, setActiv] = useState(false);
	console.log(activ);
	return (
		<header className='header'>
			<nav>
				<Link to='/'>
					<img
						src={props.darkMode ? logolight : logodark}
						alt=''
					/>
				</Link>
				<div>
					<img
						onClick={props.onClick}
						src={props.darkMode ? sun : moon}
					/>
				</div>
			</nav>

			<article>
				<h1>Cocktails & Getränke!</h1>
				<p>
					HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE!
				</p>
			</article>
			<div className='slide'>
				<p
					className={activ ? "activeMenu" : ""}
					onClick={() => setActiv(!activ)}>
					MENU
				</p>
				<article className={activ ? "activ" : ""}>
					<Link to='/gallery/alldata'>All Drinks</Link>
					<Link to='/newdrink'>Add a new Drink</Link>
					<h4>
						Choose a Category <span>˘</span>
					</h4>
					<Link to='/gallery/gin'>Gin</Link>
					<Link to='/gallery/vodka'>Vodka</Link>
					<Link to='/gallery/rum'>Rum</Link>
					<Link to='/gallery/scotch'>Scotch</Link>
					<Link to='/gallery/nonalcoholic'>Alkoholfrei</Link>
					<Link to='/gallery/detail/random'>Zufall</Link>
				</article>
			</div>
		</header>
	);
};

export default Header;
