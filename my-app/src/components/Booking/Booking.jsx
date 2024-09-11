import React, { useState, useContext } from "react";
import './Booking.css'
import { Form, FormGroup, ListGroup, Button, ListGroupItem, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { RiStarFill } from "react-icons/ri";



const Booking = ({ tour, avgRating, totalRating, reviews }) => {
    const { giatour, tentour } = tour;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState({
        userId: user && user.data.userid,
        tourName: tentour,
        fullName: "",
        groupSize: "",
        phone: "",
        bookAt: ""

    });

    const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
    const [isBookingFailed, setIsBookingFailed] = useState(false);
    const [isLoginAlertVisible, setIsLoginAlertVisible] = useState(false);



    const handleChange = async (e) => {
        setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            if (!user) {
                setIsLoginAlertVisible(true);
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
                return;
            }


            const response = await axios.post(`/tour-api/booking.php`, booking, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true, // Điều này tương đương với `credentials: "include"` trong fetch
            });

            if (response.status === 200) {
                setIsBookingSuccessful(true);
                setIsBookingFailed(false);
                setBooking({
                    ...booking,
                    fullName: "",
                    groupSize: "",
                    phone: "",
                    bookAt: ""
                });
                setTimeout(() => {
                    navigate("/thank-you");
                }, 1000); // Đợi 1 giây trước khi điều hướng tới trang "cảm ơn"
            } else {
                setIsBookingSuccessful(false);
                setIsBookingFailed(true);
            }
        } catch (error) {
            setIsBookingSuccessful(false);
            setIsBookingFailed(true);
        }
    };
    const currentDate = new Date().toISOString().split("T")[0];
    const taxes = (0.05 * giatour * (booking.groupSize || 1)).toFixed(2);
    const total = (giatour * (booking.groupSize || 1) * 1.05).toFixed(2);
    return (
        <div className="booking">
            {isBookingSuccessful && (
                <Alert color="success">
                    Booking Successful
                </Alert>
            )}

            {isBookingFailed && (
                <Alert color="danger">
                    Failed to book. Please try again.
                </Alert>
            )}
            {isLoginAlertVisible && (
                <Alert color="warning">
                    Please login to proceed with the booking.
                </Alert>
            )}



            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3>
                    ${giatour} <span>/Per Person</span>
                </h3>
                <span className="tour__rating d-flex align-items-center gap-1">
                    <RiStarFill />
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                        <span>Not Rated</span>
                    ) : (
                        <span>({reviews.length || 0})</span>
                    )}
                </span>

            </div>

            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input
                            type="text"
                            placeholder="Full Name"
                            id="fullName"
                            required
                            onChange={handleChange}
                            value={booking.fullName}
                        />
                    </FormGroup>
                    <FormGroup>
                        <input
                            type="text"
                            placeholder="Phone"
                            id="phone"
                            required
                            onChange={handleChange}
                            value={booking.phone}
                        />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input
                            type="date"
                            placeholder="Date"
                            id="bookAt"
                            required
                            onChange={handleChange}
                            value={booking.bookAt}
                            min={currentDate} // Set min attribute to current date
                        />
                        <input
                            type="number"
                            placeholder="Guest"
                            id="groupSize"
                            required
                            onChange={handleChange}
                            value={booking.groupSize}
                        />
                    </FormGroup>
                </Form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">
                            ${giatour} <i className="ri-close-line"></i>
                            {booking.groupSize || 1} Person
                        </h5>
                        <span>${giatour * (booking.groupSize || 1)}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5>Taxes</h5>
                        <span>${taxes}</span>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span>${total}</span>
                    </ListGroupItem>
                </ListGroup>
                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
                    Book Now
                </Button>
            </div>
        </div>
    );

}
export default Booking;
