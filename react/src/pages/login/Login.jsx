import { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../../apiCalls'
import { AuthContext } from '../../context/AuthContxt'
import { CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const email = useRef()
    const password = useRef()
    const { user, isFetching, error, dispatch } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
     
    }
    console.log(user)
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TheSocial</h3>
                    <span className="loginDesc">
                        Connect with Friends and the world around you on TheSocial
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder='Email' type='email' required className="loginInput" ref={email} />
                        <input placeholder='Password' type='password' required minLength="6" className="loginInput" ref={password} />
                        <button className="loginButton" type='submit' disabled={isFetching} >{isFetching ? <CircularProgress style={{ color: "white" }} /> : " Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="LoginRegisterButton">{isFetching ? <CircularProgress style={{ color: "white" }} /> : " Create a New Account"}</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login