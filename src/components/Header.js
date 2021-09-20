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
                        <div className = 'Icons'>
                            <h1>Delicious</h1>
                            <p>The best food blog ever.</p>
                        </div>
                        <div className = 'Icons'>
                            { <ButtonList /> }
                        </div>
                    </div>
                </header>                
            </div>
        )
    }
}
