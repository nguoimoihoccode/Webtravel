import React, { useState, useContext } from 'react'
import './LoginForm.css';
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import { FaRegEye } from "react-icons/fa";
import axios from 'axios';
import { Alert } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext'





const LoginForm = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    const [isLoginFailed, setLoginFailed] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');

    const { dispatch } = useContext(AuthContext);







    const navigate = useNavigate();




    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const submitForm = async (e) => {
        e.preventDefault();

        dispatch({ type: "LOGIN_START" });


        const sendData = {
            email: user.email,
            password: user.password
        }
        try {

            axios.post('login-api/login.php', sendData).then((result) => {



                if (result.data.status === 200) {
                    setIsLoginSuccess(true);
                    setLoginFailed(false);
                    setLoginMessage('Login Successful! Redirecting...')
                    dispatch({ type: "LOGIN_SUCCESS", payload: result });


                    setTimeout(() => {
                        navigate("/");
                    }, 1000);
                }
                else {
                    setLoginFailed(true);
                    setIsLoginSuccess(false);
                    setLoginMessage(result.data.message || 'Failed to login. Please try again.');
                    dispatch({ type: "LOGIN_FAILURE", payload: result.message });


                }
            })
        } catch (error) {
            setIsLoginSuccess(false);
            setIsLoginSuccess(true);
            dispatch({ type: "LOGIN_FAILURE", payload: error.message });




        }



    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };





    return (

        <div className='container-login'>
            <Navbar />
            <div className='wrapper-lg'>
                <form onSubmit={submitForm}>
                    <h1>Login</h1>
                    {isLoginSuccess && (
                        <Alert color="success">
                            {loginMessage}
                        </Alert>
                    )}

                    {isLoginFailed && (
                        <Alert color="danger">
                            {loginMessage}
                        </Alert>
                    )}


                    <div className='input-box-login'>
                        <input type="text" placeholder='Email'
                            name='email' onChange={handleChange} value={user.email} required />
                        <FaUser className='icon' />

                    </div>
                    <div className='input-box-login'>
                        <input type={showPassword ? "text" : "password"} placeholder='Password' name='password' onChange={handleChange} value={user.password} required />
                        <FaLock className='icon' />
                    </div>
                    <div className='show_pass'>
                        <div className={'{ showPassword? "-slash": "" }'}
                            onClick={togglePasswordVisibility}>
                            <FaRegEye className='eye' />


                        </div>
                    </div>

                    <div className='remember-forgot-lg'>
                        <label ><input type='checkbox' />Remember me</label>
                        <Link to="/forgot">Forgot Password</Link>
                    </div>


                    <button type='submit'>Login</button>

                    <div className='register-link'>
                        <p>Don't have an account? <Link to="/register">Register</Link> </p>

                    </div>
                </form>
            </div >
        </div >
    )
}

export default LoginForm;