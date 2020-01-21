import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className={style.recipe}>
      <h1 className="recipe-title">{title}</h1>
      <img src={image} className={style.image} alt="" />
      <div className="recipe-list">
        <p>Recipe:</p>
        <ul>
          {ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      </div>
        <p className="calories">Calories: {Math.round(calories)}</p>
    </div>
  );
};

export default Recipe;
