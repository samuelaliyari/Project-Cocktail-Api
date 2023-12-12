import "./Header.scss";
import moon from "../images/moon.png";
import sun from "../images/sun.png";

const Header = (props) => {
  return (
    <header className="header">
      <nav>
        <h2>Drinks&Chill</h2>
        <div>
          <p>MENU</p>
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
