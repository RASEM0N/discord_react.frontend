import React, { useEffect } from 'react'
import Routes from './components/Routes'
import { fbAuth } from './firebase/config'
import { useHistory } from 'react-router-dom'

const App = () => {
    const history = useHistory()
    useEffect(() => {
        fbAuth.onAuthStateChanged((user) => {
            if (user) {
                history.push('/')
            } else {
                history.push('/login')
            }
        })
    }, [])

    return (
        <div>
            <Routes />
        </div>
    )
}

export default App
