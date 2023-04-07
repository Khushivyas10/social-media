import axios from 'axios'
import './register.css'
import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const email = useRef()
    const password = useRef()
    const username = useRef()
    const passwordAgain = useRef()
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Password don't match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post('/auth/register', user)
                navigate('/login')
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className='register'>
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">TheSocial</h3>
                    <span className="registerDesc">
                        Connect with Friends and the world around you on TheSocial
                    </span>
                </div>
                <div className="registerRight">
                    <form className="registerBox" onSubmit={handleClick}>
                        <input placeholder='Username' required ref={username} className="registerInput" />
                        <input placeholder='Email' type='email' required ref={email} className="registerInput" />
                        <input placeholder='Password' type='password' minLength={6} required ref={password} className="registerInput" />
                        <input placeholder='Password Again' type='password' minLength={6} required ref={passwordAgain} className="registerInput" />

                        <button className="registerButton" type='submit'>Sign Up</button>

                        <button className="registerRegisterButton">Log into Account</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Register