import React, { useEffect } from 'react'
import Routes from './components/Routes'
import { fbAuth } from './firebase/config'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './store/user/user'
const App = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        fbAuth.onAuthStateChanged((user) => {
            if (user) {
                history.push('/')
                dispatch(setCurrentUser(user))
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
