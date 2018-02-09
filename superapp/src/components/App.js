import React from 'react'
import Header from './Header'
import Order from './Order'
import Supplies from './Supplies'


class App extends React.Component{
    render(){
        return(
            <div className="drink-of-the-year">
                <div className="menu">
                    <Header tagline="Fresh Vodka Shop"/>
                </div>
                <Order />
                <Supplies />
            </div>
        )
}
}

export default App