import React, { useEffect } from 'react'
import Routes from './components/Routes'
import { fbAuth } from './firebase/config'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser, clearCurrentUser } from './store/user/user'
import { Store } from './interfaces/store'
import Spinner from './components/common/spinner/Spinner'

const App = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const loading = useSelector<Store, boolean>((state) => state.user.isLoading)

    useEffect(() => {
        fbAuth.onAuthStateChanged((user) => {
            if (user) {
                history.push('/')
                dispatch(setCurrentUser(user))
            } else {
                history.push('/login')
                dispatch(clearCurrentUser())
            }
        })
    }, [])

    return loading ? <Spinner /> : <Routes />
}

export default App
