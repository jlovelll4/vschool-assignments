import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext()
const userAxios = axios.create()


userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    signup = (credentials) => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({ user, token })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    login = (credentials) => {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({ user, token })
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    render(){
        return (
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login
                }}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default UserProvider


export const withUser = C => props => (
    <UserContext.Consumer>
        { value => <C {...value} {...props}/> }
    </UserContext.Consumer>
)