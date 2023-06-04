import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myProfileAction } from '../store/Action'
import Login from './Login'
import SignUp from './SignUp'

const Header = () => {
    const dispatch = useDispatch()
    const [signUp, setSignUp] = useState(false)
    const [login, setLogin] = useState(false)
    const LoginData = useSelector((state) => state.Reducer.login)
    const getToken = localStorage.getItem("token")
    const myProfile = useSelector((state) => state.Reducer.myProfile)
    useEffect(() => {
        if (getToken) {
            myProfileAction(dispatch, getToken)
            dispatch({
                type: "LOGIN",
                payload: getToken
            })
        }
    }, [])
    return (
        <div className='header-wrapper'>
            <h1>Header</h1>
            <button onClick={() => setSignUp(true)} className="btn">SignUp</button>
            <button onClick={() => setLogin(true)} className="btn">Login</button>
            {signUp ?
                <SignUp /> : null}
            {
                login ?
                    <Login /> : null
            }
        </div>
    )
}

export default Header