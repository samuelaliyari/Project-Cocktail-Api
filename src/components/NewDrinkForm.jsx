import { useContext, useState } from "react";
import { Data } from "../data/Data";
import "./NewDrinkForm.scss";

const NewDrinkForm = () => {
  const originalData = useContext(Data);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [alcoholic, setAlcoholic] = useState("alcoholic");
  const [imageURL, setImageURL] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [zutat1, setZutat1] = useState(null);
  const [menge1, setMenge1] = useState(null);
  const [zutat2, setZutat2] = useState(null);
  const [menge2, setMenge2] = useState(null);
  const [zutat3, setZutat3] = useState(null);
  const [menge3, setMenge3] = useState(null);
  const [zutat4, setZutat4] = useState(null);
  const [menge4, setMenge4] = useState(null);
  const [zutat5, setZutat5] = useState(null);
  const [menge5, setMenge5] = useState(null);

  const addNewDrink = () => {
    const newDrink = {
      idDrink: `${
        Number(originalData.data[originalData.data.length - 1].idDrink) + 1
      }`,
      strDrink: name,
      strAlcoholic: alcoholic,
      strCategory: category,
      strDrinkThumb: imageURL,
      strIngredient1: zutat1,
      strIngredient2: zutat2,
      strIngredient3: zutat3,
      strIngredient4: zutat4,
      strIngredient5: zutat5,
      strMeasure1: menge1,
      strMeasure2: menge2,
      strMeasure3: menge3,
      strMeasure4: menge4,
      strMeasure5: menge5,
      strInstructions: introduction,
    };

    originalData.setData([...originalData.data, newDrink]);
    window.alert("Sie haben ein neues Getränk hinzugefügt");
    console.log(newDrink);
  };

  console.log(originalData.data);
  return (
    <form className="newDrinkForm">
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <select
        required
        name=""
        id=""
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">---categories---</option>
        <option value="Cocktail">Cocktail</option>
        <option value="Ordinary Drink">Ordinary Drink</option>
        <option value="Punch/Party Drink">Punch/Party Drink</option>
        <option value="Other/Unknown">Other/Unknown</option>
        <option value="Shake">Shake</option>
        <option value="Cocoa">Cocoa</option>
        <option value="Shot">Shot</option>
        <option value="Coffee/Tea">Coffee/Tea</option>
        <option value="Homemade Liqueur">Homemade Liqueur</option>
        <option value="Beer">Beer</option>
        <option value="Soft Drink">Soft Drink</option>
      </select>
      <select
        required
        name=""
        id=""
        onChange={(event) => setAlcoholic(event.target.value)}
      >
        <option value="">---alkohol---</option>
        <option value="alcoholic">Alkohol</option>
        <option value="non-alcoholic">Alkoholfrei</option>
      </select>
      <input
        type="text"
        id="image"
        placeholder="Bild URL"
        onChange={(event) => setImageURL(event.target.value)}
      />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Anleitung"
        onChange={(event) => setIntroduction(event.target.value)}
      ></textarea>
      <div>
        <input
          type="text"
          placeholder="Zutat 1"
          onChange={(event) => setZutat1(event.target.value)}
        />
        <input
          type="text"
          placeholder="Menge 1"
          onChange={(event) => setMenge1(event.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Zutat 2"
          onChange={(event) => setZutat2(event.target.value)}
        />
        <input
          type="text"
          placeholder="Menge 2"
          onChange={(event) => setMenge2(event.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Zutat 3"
          onChange={(event) => setZutat3(event.target.value)}
        />
        <input
          type="text"
          placeholder="Menge 3"
          onChange={(event) => setMenge3(event.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Zutat 4"
          onChange={(event) => setZutat4(event.target.value)}
        />
        <input
          type="text"
          placeholder="Menge 4"
          onChange={(event) => setMenge4(event.target.value)}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Zutat 5"
          onChange={(event) => setZutat5(event.target.value)}
        />
        <input
          type="text"
          placeholder="Menge 5"
          onChange={(event) => setMenge5(event.target.value)}
        />
      </div>

      <input
        className="submitButton"
        type="button"
        value="Submit"
        onClick={addNewDrink}
      />
    </form>
  );
};

export default NewDrinkForm;
