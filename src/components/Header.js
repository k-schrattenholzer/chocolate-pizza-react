import React from 'react'
import ButtonList from './ButtonList'

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <header> 
                    <div>
                        <div>
                        <img src="logo.png" alt="fork and knife logo" />
                        </div>
                    <div class="logo-text">
                        <h1>Delicious</h1>
                        The best food blog ever.
                    </div>
                    {
                        ButtonList
                    }
                    </div>
                </header>                
            </div>
        )
    }
}
