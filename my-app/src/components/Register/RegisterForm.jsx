import React, { useState } from 'react'
import './RegisterForm.css';
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import Navbar from '../Navbar/Navbar';
import { Alert } from 'reactstrap';




const RegisterForm = () => {
    const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
    const [isRegisterFailed, setIsRegisterFailed] = useState(false);
    const [registerMessage, setRegisterMessage] = useState('');



    const navigate = useNavigate();
    const [data, setdata] = useState({
        fullname: "",
        email: "",
        phonenumber: "",
        password: ""

    })





    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        const sendData = {
            ten: data.fullname,
            email: data.email,
            phone: data.phonenumber,
            password: data.password
        }
        try {


            axios.post('login-api/register.php', sendData).then((result) => {


                if (result.data.status === 201) {
                    setIsRegisterSuccess(true);
                    setIsRegisterFailed(false);
                    setRegisterMessage('Registration successful! Redirecting...');

                    setTimeout(() => {
                        navigate("/login");
                    }, 1000);
                }
                else if (result.data.status === 422) {
                    setIsRegisterFailed(true);
                    setIsRegisterSuccess(false);
                    setRegisterMessage(result.data.message || 'Failed to register. Please try again.');


                }
            })
        } catch (error) {
            setIsRegisterSuccess(false);
            setIsRegisterFailed(true);



        }

    }








    return (
        <div className='container-register'>
            <Navbar />

            <div className='wrapper'>
                {isRegisterSuccess && (
                    <Alert color="success">
                        {registerMessage}
                    </Alert>
                )}

                {isRegisterFailed && (
                    <Alert color="danger">
                        {registerMessage}
                    </Alert>
                )}
                <form onSubmit={submitForm}>
                    <h1>Register</h1>



                    <div className='input-box'>
                        <input type="text" placeholder='Fullname' name='fullname' onChange={handleChange} value={data.fullname} required />
                        <FaUser className='icon' />

                    </div>
                    <div className='input-box'>
                        <input type="email" placeholder='Email' name='email' onChange={handleChange} value={data.email} required />
                        <IoIosMail className='icon' />
                    </div>

                    <div className='input-box'>
                        <input type="password" placeholder='Password' name='password' onChange={handleChange} value={data.password} required />
                        <FaLock className='icon' />
                    </div>

                    <div className='input-box'>
                        <input type="phonenumber" placeholder='Phone Number' name='phonenumber' onChange={handleChange} value={data.phonenumber} required />
                        <FaPhoneAlt className='icon' />

                    </div>

                    <div className='remember-forgot'>
                        <label ><input type='checkbox' required /> I agree to the terms & conditions</label>

                    </div>

                    <button type='submit'>Register</button>

                    <div className='register-link'>
                        <p>Already have an account? <Link to="/login">Login</Link> </p>




                    </div>
                </form >
            </div >
        </div>
    )
}


export default RegisterForm;