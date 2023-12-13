import "./Header.scss";
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import logodark from "../images/logodark.png";
import logolight from "../images/logolight.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = (props) => {
  const [activ, setActiv] = useState(false);
  console.log(activ);
  return (
    <header className="header">
      <nav>
        <img src={props.darkMode ? logolight : logodark} alt="" />
        <div>
          <div className="menu">
            <p onClick={() => setActiv(!activ)}>MENU</p>
            <ul className={activ ? "activ" : ""}>
              <Link to="/newdrink">
                <li>Add a new Drink</li>
              </Link>
              <Link>
                <li>All Drinks</li>
              </Link>
              <li>
                Cocktails mit:
                <ul className={activ ? "activ" : ""}>
                  <Link>
                    <li>Gin</li>
                  </Link>
                  <Link>
                    <li>Vodka</li>
                  </Link>
                  <Link>
                    <li>Rum</li>
                  </Link>
                  <Link>
                    <li>Scotch</li>
                  </Link>
                  <Link>
                    <li>Alkoholfrei</li>
                  </Link>
                  <Link>
                    <li>Zufall</li>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>

          <img onClick={props.onClick} src={props.darkMode ? sun : moon} />
        </div>
      </nav>
      <article>
        <h1>Cocktails & Getränke!</h1>
        <p>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE!</p>
      </article>
    </header>
  );
};

export default Header;
