import React from 'react'

export default class IngredientsList extends React.Component {
    render() {
        return (
            <li className = 'Ingredients'>
                {this.props.quantity} {this.props.item}
            </li>
        )
    }
}
