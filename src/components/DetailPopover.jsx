const DetailPopOver = () => {
  return (
    <section className="details">
      <article>
        <img
          src="https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg"
          alt=""
        />
        <div className="drink-info-wrapper">
          <div>
            <h2>Zombie</h2>
            <img src="./../assets/close.icon.svg" alt="" />
          </div>

          <h3 className="headline-highlight">Zutaten</h3>
          <ul>
            <li>
              <p>1 1/2 oz </p> <p>Rum</p>
            </li>

            <li>
              <p>1 1/2 oz</p> <p>Gold rum</p>
            </li>

            <li>
              <p>1 oz </p> <p>151 proof rum</p>
            </li>

            <li>
              <p>1 tsp </p> <p>Pernod</p>
            </li>

            <li>
              <p>1 tsp </p>
              <p>Grenadine</p>
            </li>

            <li>
              <p>1 tsp </p>
              <p>Lime Juice</p>
            </li>

            <li>
              <p>1 drop </p>
              <p>Angostura Bitters</p>
            </li>
          </ul>
          <h3>Zubereitung</h3>
          <p>
            Mixen Sie mit hoher Geschwindigkeit für nicht mehr als 5 Sekunden.
            In ein Glas gießen, Eiswürfel zum Füllen hinzufügen, dann die
            Garnitur hinzufügen. *Donnas Mix: 3 zerdrückte Zimtstangen, 1 Tasse
            Zucker und 1 Tasse Wasser unter Rühren zum Kochen bringen, bis der
            Zucker gelöst ist. 2 Minuten köcheln lassen, dann vom Herd nehmen
            und mindestens 2 Stunden ruhen lassen, bevor man in eine saubere
            Glasflasche abseiht. Dann 1 Teil des Sirups und 2 Teile frischen
            Grapefruitsaft dazugeben."
          </p>
          {/* <div>
      <h3>Das optimale Glas zu diesem Drink:</h3>
      <p>Hurricane glass</p>
    </div> */}
        </div>

        {/* div mit props aus API holen: */}
        {/* <div className="drink-logo-wrapper">
    <h2>{props.strDrink}</h2>
    <img src={props.strDrinkThumb} alt="" />
  </div>

  <h3>Zutaten</h3>
      <ul className="zutaten-liste">
        <li className="zutat">
          <p>{props.strMeasure1}</p> <p>{props.strIngredient1}</p>
        </li>
        <li>
          <p>{props.strMeasure2}</p> <p>{props.strIngredient2}</p>
        </li>
        <li>
        <p>{props.strMeasure3}</p> <p>{props.strIngredient3}</p>
        </li>
        <li>
        <p>{props.strMeasure4}</p> <p>{props.strIngredient4}</p>
        </li>
        <li>
        <p>{props.strMeasure5}</p> <p>{props.strIngredient5}</p>
        </li>
        <li>
          <p>{props.strMeasure6}</p> <p>{props.strIngredient6}</p>
        </li>
        <li>
          <p>{props.strMeasure7}</p> <p>{props.strIngredient7}</p>
        </li>
        <li>
          <p>{props.strMeasure8}</p> <p>{props.strIngredient8}</p>
        </li>
        <li>
          <p>{props.strMeasure9}</p> <p>{props.strIngredient9}</p>
        </li>
        <li>
        <p>{props.strMeasure10}</p> <p>{props.strIngredient10}</p>
        </li>
        <li>
        <p>{props.strMeasure11}</p> <p>{props.strIngredient11}</p>
        </li>
        <li>
        <p>{props.strMeasure12}</p> <p>{props.strIngredient12}</p>
        </li>
        <li>
        <p>{props.strMeasure13}</p> <p>{props.strIngredient13}</p>
        </li>
        <li>
        <p>{props.strMeasure14}</p> <p>{props.strIngredient14}</p>
        </li>
        <li>
        <p>{props.strMeasure15}</p> <p>{props.strIngredient15}</p>
        </li>
      </ul>
  <h3>Zubereitung</h3>
  <p className="zubereitung">{props.strInstructionsDE}</p>
  <div>
    <h3>Das optimale Glas zu diesem Drink:</h3>
    <p>{props.strGlass}</p>
  </div> */}
      </article>
    </section>
  );
};

export default DetailPopOver;
