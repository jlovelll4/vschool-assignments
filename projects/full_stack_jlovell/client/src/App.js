import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './components/Auth/Auth'

class App extends Component {
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route
                        exact path="/"
                        render={rProps =>
                            <Auth {...rProps}/>
                        }/>
                </Switch>
            </div>
        )
    }
}

export default App
