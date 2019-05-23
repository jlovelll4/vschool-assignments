import React from 'react'

const AuthForm = props => {
    const { handleSubmit, handleChange, username, password, btnText } = props
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"/>
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"/>
            <button>{ btnText }</button>
        </form>
    )
}

export default AuthForm