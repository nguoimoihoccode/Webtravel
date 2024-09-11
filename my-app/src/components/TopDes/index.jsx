

import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import South from './assets/images/00bccb01ada104a4a821edccb15f8625.jpg'
import North from './assets/images/1b70d0bdb6b6fa5983d62aeed42d871e.jpg'
import West from './assets/images/6c59240329cf84c3b469b2dad71d9b36.jpg'
import Central from './assets/images/ba0b154c8c11e91b5384a9dbcc78b6eb.jpg'
import World from './assets/images/e0c8417650b1f765fd03b35af2c1608c.jpg'
export default function TopDes() {
    return (
        <div className=' bg-light min-vh-100 mt-5 d-flex justify-content-center align-content-center' >
            <div className='container py-5'>
                <h5 className='d-flex justify-content-center'>CHOOSE YOUR EXPERIENCE</h5>
                <h1 className='d-flex justify-content-center pt-3'>
                    Top Attractive Destinations
                </h1>
                <div className='row align-content-center justify-content-center pt-5'>
                    <Link to="/northernVN" className='col-lg-4  mb-5 ' >
                        <div className='position-relative'>
                            <img src={North} className='hover-effect img-fluid opacity-75 ' alt='Southern Vietnam' />
                            <div className='khuvuc position-absolute text-dark  w-100 top-75 start-50 translate-middle text-center'>
                                <h2>Nothern VietNam</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/southVN" className='col-lg-4  mb-5' >
                        <div className='position-relative'>
                            <img src={West} className='hover-effect img-fluid opacity-75 ' alt='Southern Vietnam' />
                            <div className='khuvuc position-absolute text-dark  w-100 top-75 start-50 translate-middle text-center'>
                                <h2>Southern Vietnam</h2>
                            </div>
                        </div>
                    </Link>

                    <Link to="/westsideVN" className='col-lg-4  mb-5' >
                        <div className='position-relative'>
                            <img src={South} className='hover-effect img-fluid opacity-75 ' alt='Southern Vietnam' />
                            <div className='khuvuc position-absolute text-dark  w-100 top-75 start-50 translate-middle text-center'>
                                <h2>Western Vietnam</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='row align-content-center justify-content-center ms-lg-5'>
                    <Link to="/centralVN" className='col-lg-6 mb-5 ' >
                        <div className='position-relative'>
                            <img src={Central} className='hover-effect img-fluid opacity-75 ' alt='Southern Vietnam' />
                            <div className='khuvuc position-absolute text-dark  w-100 top-75 start-50 translate-middle text-center'>
                                <h2>Central Vietnam</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to="/world" className='col-lg-6   mb-5' >
                        <div className='position-relative  '>
                            <img src={World} className='hover-effect img-fluid opacity-75 ' alt='Southern Vietnam' />
                            <div className='khuvuc position-absolute text-dark  top-75 start-50  translate-middle text-center justify-content-center'>
                                <h2 className=''>World</h2>
                            </div>
                        </div>
                    </Link>
                </div>



            </div>
        </div >
    );
}