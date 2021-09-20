import React from 'react';
import Header from './components/Header.js';
import Title from './components/Title.js';
import Image from './components/Image.js';
import Recipe from './components/Recipe.js';
import Ingredients from './components/Ingredients.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Image />
      <Recipe />
      <Ingredients />
      <Footer />
    </div>
  );
}

export default App;
