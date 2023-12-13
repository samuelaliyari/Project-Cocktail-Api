import "./NewDrink.scss";
import NewDrinkForm from "../components/NewDrinkForm";
const NewDrink = () => {
  return (
    <section className="newDrinkPage">
      <h3>Füge deine eigenen Getränke hinzu!</h3>
      <NewDrinkForm />
    </section>
  );
};

export default NewDrink;
