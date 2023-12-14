import "./Header.scss";
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import logodark from "../images/logodark.png";
import logolight from "../images/logolight.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <nav>
        <Link to="/">
          <img src={props.darkMode ? logolight : logodark} alt="" />
        </Link>
        <div>
          <img onClick={props.onClick} src={props.darkMode ? sun : moon} />
        </div>
      </nav>

      <article>
        <h1>Cocktails & Getränke!</h1>

        <p>
          Herzlich willkommen in der faszinierenden Welt von Cocktails und
          Erfrischungen!
        </p>

      </article>
    </header>
  );
};

export default Header;
