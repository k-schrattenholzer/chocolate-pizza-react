import React from 'react';
import Header from './components/Header.js';
import Title from './components/Title.js';
import Image from './components/Image.js';
import Recipe from './components/Recipe.js';
import IngredientsList from './components/IngredientsList.js';
import Footer from './components/Footer.js';
import Ingredients from './data.js'
import './App.css';

export default class App extends React.Component {
  render() {
    return (
        <div className="App">

          <Header className = 'header'/>
          <hr />
          
          <Title />

          <Image />

          <Recipe />

          <div>
            <ul>
              {
                Ingredients.map(ingredient => 
                  <IngredientsList
                  quantity = {ingredient.amount}
                  item = {ingredient.name}
                  />)
              }
            </ul>
          </div>

          <Footer />
        </div>
      );
}
}

