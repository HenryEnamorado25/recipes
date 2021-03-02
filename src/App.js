import React, { useEffect, useState } from "react";
import Recipe from "./recipes";
import './App.css';

function App() {

  const APP_ID = 'dd036a02';
  const APP_KEY = '07b9f884f95f0db667cd35c77f1f3970';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
 
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
  
    setRecipes(data.hits);
    console.log(data.hits);
  }
  const updateSearch = (e) => {
    setSearch(e.target.value);
}
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
  setSearch('')
}
  return (
    
    <div className="App">
      <h1 className='title'>Recipes Broswer</h1>
      <form onSubmit={getSearch} className="search-form">
        <input type='text' className="search-bar" value={search} onChange={updateSearch}></input>
        <button type="submit"  className="search-button">Search
        </button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe =>
      (<Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={ recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
}

export default App;
