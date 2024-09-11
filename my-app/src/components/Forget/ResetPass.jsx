import React, { useState, useContext } from 'react'
import '../Login/LoginForm.css'
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import { FaRegEye } from "react-icons/fa";
import axios from 'axios';
import { Alert } from 'reactstrap';
import { AuthContext } from '../../context/AuthContext'
import { useEffect } from 'react';





const ResetPassword = () => {

    const [newpass, setNewPass] = useState({
        new_pass: "",
        confirm_pass: "",
        email: "",
        token: "",
    });
    const navigate = useNavigate();
    const location = useLocation();

    const [isForgetSuccess, setIsForgetSuccess] = useState(false);
    const [isForgetFailed, setForgetFailed] = useState(false);
    const [forgetMessage, setforgetMessage] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const emailParam = searchParams.get('email');
        if (emailParam) {
            setNewPass(prevState => ({
                ...prevState,
                email: emailParam
            }));
        }
    }, [location.search]);
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const tokenParam = searchParams.get('token');
        if (tokenParam) {
            setNewPass(prevState => ({
                ...prevState,
                token: tokenParam
            }));
        }
    }, [location.search]);
    console.log(newpass)


    const handleChange = (e) => {
        setNewPass({ ...newpass, [e.target.name]: e.target.value });
    }
    const submitForm = async (e) => {
        e.preventDefault();




        const sendData = {
            password: newpass.new_pass,
            confirm_password: newpass.confirm_pass,
        }
        console.log(sendData)
        if (newpass.token === "") {
            setForgetFailed(true);
            setIsForgetSuccess(false);
            setforgetMessage("No Token");
            setTimeout(() => {
                navigate("/forgot");
            }, 1000);
            return;

        }

        try {
            const apiURL = `/login-api/reset.php?email=${newpass.email}&token=${newpass.token}`;

            axios.post(apiURL, sendData).then((result) => {



                if (result.data.status === 200) {
                    setIsForgetSuccess(true);
                    setForgetFailed(false)
                    setforgetMessage('Password reset successful');
                    console.log(forgetMessage)



                    setTimeout(() => {
                        navigate("/login");
                    }, 1000);
                }
                else {
                    setForgetFailed(true);
                    setIsForgetSuccess(false);
                    setforgetMessage(result.data.message);
                    console.log(forgetMessage)




                }
            })
        } catch (error) {
            console.error('Error:', error);
            setForgetFailed(true);
            setIsForgetSuccess(false);
            setforgetMessage('An error occurred. Please try again later.');
            console.log(forgetMessage)


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
                        <input type="password" placeholder='New Password'
                            name='new_pass' onChange={handleChange} value={newpass.new_pass} required />

                    </div>
                    <div className='input-box-login'>
                        <input type="password" placeholder='Confirm Password'
                            name='confirm_pass' onChange={handleChange} value={newpass.confirm_pass} required />

                    </div>





                    <button type='submit'>Continue</button>


                </form>
            </div >
        </div >
    )
}

export default ResetPassword;