import { useState } from "react";
import { Data } from "../data/Data";
const NewDrinkForm = () => {
  const [newDrink, setNewDrink] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [alcoholic, setAlcoholic] = useState("alcoholic");
  const [imageURL, setImageURL] = useState("");
  const [anleitung, setAnleitung] = useState("");
  const [zutat1, setZutat1] = useState("");
  const [menge1, setMenge1] = useState("");
  const [zutat2, setZutat2] = useState("");
  const [menge2, setMenge2] = useState("");
  const [zutat3, setZutat3] = useState("");
  const [menge3, setMenge3] = useState("");

  console.log(menge3);
  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <select
        name=""
        id=""
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Kategorie</option>
        <option value="gin">Gin</option>
        <option value="vodka">Vodka</option>
        <option value="rum">Rum</option>
        <option value="scotch">Scotch</option>
      </select>
      <select
        name=""
        id=""
        onChange={(event) => setAlcoholic(event.target.value)}
      >
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
        onChange={(event) => setAnleitung(event.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Zutat 1"
        onChange={(event) => setZutat1(event.target.value)}
      />
      <input
        type="text"
        placeholder="Menge Zutat 1"
        onChange={(event) => setMenge1(event.target.value)}
      />
      <input
        type="text"
        placeholder="Zutat 2"
        onChange={(event) => setZutat2(event.target.value)}
      />
      <input
        type="text"
        placeholder="Menge Zutat 2"
        onChange={(event) => setMenge2(event.target.value)}
      />
      <input
        type="text"
        placeholder="Zutat 3"
        onChange={(event) => setZutat3(event.target.value)}
      />
      <input
        type="text"
        placeholder="Menge Zutat 3"
        onChange={(event) => setMenge3(event.target.value)}
      />
      <input type="button" value="Submit" />
    </form>
  );
};

export default NewDrinkForm;
