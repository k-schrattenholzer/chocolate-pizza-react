import React from 'react';
import IngredientItem from './IngredientItem.js';
import IngredientData from '../data.js';

export default class IngredientsList extends React.Component {
    render() {
        return (
            <div 
            // className="IngredientsDiv"
            >
            <ul className = 'IngredientsUl'>
              {
                IngredientData
                .map(item => 
                  <IngredientItem
                  quantity = {item.amount}
                  item = {item.name}
                  key={item.name}
                  />)
              }
            </ul>
          </div>
            
        )
    }
}
