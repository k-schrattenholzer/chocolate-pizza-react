import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (
            <li className = 'IngredientItem'>
                {this.props.quantity} {this.props.item}
            </li>
        )
    }
}
