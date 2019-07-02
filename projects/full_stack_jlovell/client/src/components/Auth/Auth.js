import React, { Component } from 'react'
import AuthForm from './AuthForm'
import { withUser } from '../../context/UserProvider.js'

class Auth extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            toggle: false
        }
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSignup = e => {
        e.preventDefault()
        this.props.signup({
            username: this.state.username,
            password: this.state.password
        })
    }

    handleLogin = e => {
        e.preventDefault()
        this.props.login({
            username: this.state.username,
            password: this.state.password
        })
    }

    toggler = () => {
        this.setState(p => ({ toggle: !p.toggle }))
    }

    render(){
        return (
            <div>
                { !this.state.toggle ?
                    <>
                        <AuthForm
                            username={this.state.username}
                            password={this.state.password}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSignup}
                            btnText="Sign Up"
                        />
                        <p onClick={this.toggler}>Already a member?</p>
                    </>
                    :
                    <>
                        <AuthForm
                            username={this.state.username}
                            password={this.state.password}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleLogin}
                            btnText="Login"
                        />
                        <p onClick={this.toggler}>Not a Member?</p>
                    </>
                }
            </div>
        )
    }
}

export default withUser(Auth)