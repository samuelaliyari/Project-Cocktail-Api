// import "./DetailPopOver.scss";
// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";
// import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { Data } from "../data/Data";

// const DetailPopOver = () => {
//   const clickedCocktail = useParams();
//   console.log(clickedCocktail);

//   const clickedCocktailID = clickedCocktail.id;
//   console.log(clickedCocktailID);

//   const { data, setData } = useContext(Data);

//   const chosenCocktail = data.filter((cocktail) => {
//     return cocktail.idDrink.toString() === clickedCocktailID.toString();
//   });
//   console.log(chosenCocktail);
//   return (
//     <section>
//       {chosenCocktail?.map((props, index) => (
//         <article key={index} className="details">
//           <img src={props.strDrinkThumb} alt="" />
//           <div className="drink-info-wrapper">
//             <h2>{props.strDrink}</h2>
//             <div className="ingredients-wrapper">
//               <h3>Zutaten</h3>
//               <ul className="zutaten-liste">
//                 <li className="zutat">
//                   <p>{props.strMeasure1}</p> <p>{props.strIngredient1}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure2}</p> <p>{props.strIngredient2}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure3}</p> <p>{props.strIngredient3}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure4}</p> <p>{props.strIngredient4}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure5}</p> <p>{props.strIngredient5}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure6}</p> <p>{props.strIngredient6}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure7}</p> <p>{props.strIngredient7}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure8}</p> <p>{props.strIngredient8}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure9}</p> <p>{props.strIngredient9}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure10}</p> <p>{props.strIngredient10}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure11}</p> <p>{props.strIngredient11}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure12}</p> <p>{props.strIngredient12}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure13}</p> <p>{props.strIngredient13}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure14}</p> <p>{props.strIngredient14}</p>
//                 </li>
//                 <li>
//                   <p>{props.strMeasure15}</p> <p>{props.strIngredient15}</p>
//                 </li>
//               </ul>
//             </div>
//             <div className="instructions-wrapper">
//               <h3>Zubereitung</h3>
//               <p className="zubereitung">{props.strInstructionsDE}</p>
//             </div>
//             <div>
//               <h3>Das optimale Glas zu diesem Drink:</h3>
//               <p className="glass">{props.strGlass}</p>
//             </div>
//           </div>
//         </article>
//       ))}
//     </section>
//   );
// };

// export default DetailPopOver;
