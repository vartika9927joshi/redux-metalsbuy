import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../store/Action'

const Login = () => {
    const loginData = useSelector((state) => state.Reducer.login)
    console.log("loginData", loginData)
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = () => {
        let payload = {
            email: user.email,
            password: user.password
        }
        loginAction(payload, dispatch)
    }
    return (
        <div className='popup-wrapper'>
            <div className='signup-wrapper'>
                <div className='form-group'>
                    <input type="email" className='form-control' placeholder='email' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className='form-group'>
                    <input type="password" className='form-control' placeholder='password' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <div className='btn-wrap'>
                    <button className='btn' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div >
    )
}

export default Login