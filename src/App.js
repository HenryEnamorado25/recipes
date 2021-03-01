import React, { useEffect, useState } from "react";
import Recipe from "./recipes";
import './App.css';

function App() {

  const APP_ID = 'dd036a02';
  const APP_KEY = '07b9f884f95f0db667cd35c77f1f3970';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
 
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
  
    setRecipes(data.hits);
  }


  return (
    <div className="App">
      <form className="search-form">
        <input type='text' className="search-bar"></input>
        <button type="submit"  className="search-button">Search
        </button>
      </form>
    </div>
  );
}

export default App;
