import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <div
            className="App"
            style={{
                marginTop: 100,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            Main
            <Link to={'/login'}>Login</Link>
            <Link to={'/password'}>Password</Link>
        </div>
    )
}

export default Main
