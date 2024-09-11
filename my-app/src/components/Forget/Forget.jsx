import React, { useState, useContext } from 'react'
import '../Login/LoginForm.css'
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Alert } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext'





const Forgot = () => {

    const [user, setUser] = useState({
        email: "",
    })



    const [isForgetSuccess, setIsForgetSuccess] = useState(false);
    const [isForgetFailed, setForgetFailed] = useState(false);


    const [forgetMessage, setforgetMessage] = useState('');





    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const submitForm = async (e) => {
        e.preventDefault();

        const sendData = {
            email: user.email,
        }
        try {

            axios.post('login-api/forgot.php', sendData).then((result) => {
                if (result.data.status === 200) {
                    setIsForgetSuccess(true);
                    setForgetFailed(false);


                    setforgetMessage('Please check your email for the reset password link');
                }
                else {
                    setIsForgetSuccess(false);
                    setForgetFailed(true);

                    setforgetMessage(result.data.message);
                }

            })
        } catch (error) {
            setIsForgetSuccess(false);
            setforgetMessage(error.data.message);






        }



    }

    return (

        <div className='container-login'>
            <Navbar />
            <div className='wrapper-lg'>
                <form onSubmit={submitForm}>
                    <h1>Reset Password</h1>
                    {isForgetSuccess && (
                        <Alert color="success">
                            {forgetMessage}
                        </Alert>
                    )}
                    {isForgetFailed && (
                        <Alert color="danger">
                            {forgetMessage}
                        </Alert>
                    )}



                    <div className='input-box-login'>
                        <input type="text" placeholder='Email'
                            name='email' onChange={handleChange} value={user.email} required />
                        <FaUser className='icon' />

                    </div>



                    <button type='submit'>Send</button>

                    <div className='register-link'>
                        <p>Don't have an account? <Link to="/register">Register</Link> </p>

                    </div>
                </form>
            </div >
        </div >
    )
}

export default Forgot;