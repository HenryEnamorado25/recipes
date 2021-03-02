import react from 'react';
import style from './recipe.module.css'
const Recipe = ({title,calories,image,ingredients,key})=>{
    return (
        <div key={key} className={style.recipe}>
            <h1 >{title}</h1>
            <img className={style.image} src={image} alt=''></img>
            <p className={style.calories}>Calories: {Math.round(calories)}</p>
            <br></br>
            <p className={style.ingre}>Ingredients: </p>
            
            <ol className={style.list}>
                {ingredients.map(ingredient => {
                    return (<li>{ ingredient.text}</li>)
                })}
            </ol>
                 </div>
    )
}
export default Recipe;