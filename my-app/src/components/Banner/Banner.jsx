import React from "react";
import TravelImg from "../../assets/image/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-light min-vh-90 d-flex justify-content-center align-items-center">
            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Image section */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <div data-aos="flip-up">
                            <img
                                src={TravelImg}
                                alt="Travel"
                                className="img-fluid bg-transparent mx-auto d-block "
                            />
                        </div>
                    </div>
                    {/* Text content section */}
                    <div className="col-12 col-md-6">
                        <div className="d-flex flex-column gap-3">
                            <h1 data-aos="fade-up" className="display-4 fw-bold">
                                Explore all corners of the world with us
                            </h1>
                            <p data-aos="fade-up" className="text-muted lead">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                                reiciendis inventore iste ratione ex alias quis magni at optio.
                            </p>
                            <div data-aos="zoom-in" className="row">
                                <div className="col-6 mb-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <MdFlight className="flight fs-1 p-2 rounded-circle  text-dark" />
                                        <span>Flight</span>
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <MdOutlineLocalHotel className="hotel fs-1 p-2 rounded-circle  text-dark" />
                                        <span>Hotel</span>
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <IoIosWifi className=" wifi fs-1 p-2 rounded-circle  text-dark" />
                                        <span>Wi-Fi</span>
                                    </div>
                                </div>
                                <div className="col-6 mb-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <IoFastFoodSharp className="food fs-1 p-2 rounded-circle  text-dark" />
                                        <span>Foods</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
