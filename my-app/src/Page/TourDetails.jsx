import React, { useState, useEffect, useContext, useRef } from "react";
import { Container, Row, Col, Form, Alert } from "reactstrap";
import { useParams } from "react-router-dom";
import "../styles/Tourdetails.css";
import axios from "axios";
import CommonSection from "../Shared/CommonSection";
import { RiMapPinUserLine, RiMoneyDollarCircleLine, RiGroupLine } from "react-icons/ri";

import Booking from "../components/Booking/Booking";
import { AuthContext } from "../context/AuthContext";
import { ListGroup } from "react-bootstrap";
import avtar from "../assets/image/avatar.jpg"
import { RiStarFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import calculateAvgRating from "../utils/avgrating";




const TourDetails = () => {
    const navigate = useNavigate();

    const { tourid } = useParams();
    const reviewMsgRef = useRef("");
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [isReviewSuccess, setIsReviewSuccess] = useState(false);
    const [isReviewError, setIsReviewError] = useState(false);
    const [isLoginAlertVisible, setIsLoginAlertVisible] = useState(false);
    const [loadingReviews, setLoadingReviews] = useState(true);
    const [errorReviews, setErrorReviews] = useState(null);
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tourRating, setTourRating] = useState(null);
    const [totalRating, setTotalRating] = useState(0); // Tổng điểm đánh giá
    const [avgRating, setAvgRating] = useState(0);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };


    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await axios.get(`/tour-api/getTour.php?tourid=${tourid}`);
                setTour(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTour();
    }, [tourid]);
    useEffect(() => {
        // Hàm để lấy danh sách reviews từ API
        const fetchReviews = async () => {
            try {
                // Gửi yêu cầu GET đến endpoint API của bạn
                const response = await axios.get(`/tour-api/review.php?tourid=${tourid}`);

                const fetchedReviews = response.data.data;
                const { totalRating, avgRating } = calculateAvgRating(fetchedReviews);

                setTotalRating(totalRating);
                setAvgRating(avgRating);

                // Nếu thành công, lưu dữ liệu vào state reviews
                setReviews(response.data.data);
                setLoadingReviews(false);
                console.log(fetchedReviews);
            } catch (error) {
                // Nếu có lỗi, lưu lỗi vào state errorReviews
                setErrorReviews(error);
                setLoadingReviews(false);
            }
        };

        fetchReviews();
    }, [tourid]);



    if (loading || loadingReviews) {
        return (
            <div className="loader-container">
                <div className="loader" />
                <div className="loading-text">Loading...</div>
            </div>
        );
    }
    if (error || !tour || errorReviews) {
        const errorMessage = error?.response?.data?.message || 'Error loading tour details. Please try again later.';
        return (
            <Alert color="danger">
                {errorMessage}
            </Alert>
        );
    }





    const days = [
        { title: tour.ngay1, description: tour.ndngay1, image: tour.imagengay1 },
        { title: tour.ngay2, description: tour.ndngay2, image: tour.imagengay2 },
        { title: tour.ngay3, description: tour.ndngay3, image: tour.imagengay3 },
        { title: tour.ngay4, description: tour.ndngay4, image: tour.imagengay4 },
        { title: tour.ngay5, description: tour.ndngay5, image: tour.imagengay5 }

    ];



    const submitHandler = async (e) => {
        e.preventDefault();

        if (!user) {
            setIsLoginAlertVisible(true);
            setTimeout(() => {
                navigate('/login');
            }, 3000);

            return;
        }
        if (!tourRating) {
            setIsReviewError(true);
            return;
        }

        const reviewMsg = reviewMsgRef.current.value;
        const username = user.data.ten;
        const userid = user.data.userid;



        const reviewData = {
            tourid: tourid,
            userid: userid,
            username: username,
            reviewText: reviewMsg,
            rating: tourRating,



        };
        try {
            const response = await axios.post(`/tour-api/review.php?tourid= ${tourid}`, reviewData);

            if (response.data.success) {
                // Thêm review mới vào danh sách reviews hiện có
                setReviews([...reviews, response.data]);


                setTourRating(null);
                reviewMsgRef.current.data = "";
                setIsReviewSuccess(true);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                // Xử lý lỗi từ server
                setIsReviewError(true);
            }
        } catch (error) {
            // Xử lý lỗi mạng
            setIsReviewError(true);
        }

    }
    const handleRatingClick = (value) => {
        console.log('Clicked value:', value); // Để kiểm tra giá trị `value` khi click
        console.log('Previous rating:', tourRating); // Để kiểm tra giá trị `tourRating`

        // Cập nhật `tourRating`
        setTourRating((prevRating) => (prevRating === value ? null : value));
    };




    return (
        <>
            <div className=" min-vh-100 pt-5 bg-light ">
                <CommonSection title={tour.tentour} />
                <section className="details-container">
                    <Container>
                        <Row>
                            <Col lg="8">
                                <div className="tour__content">
                                    <img src={tour.image} alt="" />

                                    <div className="tour__info">
                                        <h2>{tour.tentour}</h2>

                                        <div className="d-flex align-items-center gap-5">
                                            <span className="tour__rating d-flex align-items-center gap-1">
                                                <RiStarFill />
                                                {avgRating === 0 ? null : avgRating}
                                                {totalRating === 0 ? (
                                                    <span>Not Rated</span>
                                                ) : (
                                                    <span>({reviews.length || 0})</span>
                                                )}
                                            </span>


                                            <span>
                                                <RiMapPinUserLine />

                                                {tour.tendiadiem}
                                            </span>
                                        </div>
                                        <div className="tour__extra-details">
                                            <span>
                                                <RiMapPinUserLine />

                                                {tour.tendiadiem}
                                            </span>
                                            <span>
                                                <RiMoneyDollarCircleLine />{tour.giatour}
                                                /Per Person
                                            </span>

                                            <span>
                                                <RiGroupLine />

                                                {tour.gioihannguoi} People
                                            </span>
                                        </div>
                                        <h2>Description</h2>
                                        <p>{tour.chitiet}</p>
                                        <p>{tour.ndchitiet}</p>
                                        {days.map((days, index) => (
                                            <div key={index} className="tour__day">
                                                <h3>{days.title}</h3>
                                                <p>{days.description}</p>
                                                {days.image && <img src={days.image} alt={days.title} />}
                                            </div>
                                        ))}

                                    </div>
                                    <div className="tour__reviews mt-4">
                                        <h4>Reviews ({reviews?.length || 0} reviews)</h4>
                                        {isReviewSuccess && (
                                            <Alert
                                                color="success"
                                                toggle={() => setIsReviewSuccess(false)}
                                            >
                                                Review Successful
                                            </Alert>
                                        )}

                                        {isReviewError && (
                                            <Alert
                                                color="danger"
                                                className=""
                                                toggle={() => setIsReviewError(false)}
                                            >
                                                Failed to submit review. Please try again.
                                            </Alert>
                                        )}

                                        {isLoginAlertVisible && (
                                            <Alert
                                                color="warning"
                                                toggle={() => setIsLoginAlertVisible(false)}
                                            >
                                                Please login to submit a review.
                                            </Alert>
                                        )}
                                        <Form onSubmit={submitHandler}>
                                            <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                                {[1, 2, 3, 4, 5].map((value) => (
                                                    <span
                                                        key={value}
                                                        onClick={() => handleRatingClick(value)}
                                                        className={
                                                            tourRating && value <= tourRating ? "active" : ""
                                                        }
                                                    >
                                                        {value} <RiStarFill />

                                                    </span>
                                                ))}
                                            </div>

                                            <div className="review__input">
                                                <input
                                                    type="text"
                                                    ref={reviewMsgRef}
                                                    placeholder="Share your Thoughts"
                                                    required
                                                />
                                                <button className="primary__btn text-white" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </Form>
                                        <ListGroup className="user__reviews">
                                            {reviews?.map((review, index) => (
                                                <div className="review__item" key={index}>
                                                    <img className="avt-cmt" src={avtar} alt="" />

                                                    <div className="w-100">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5>{review.username}</h5>
                                                                <p>
                                                                    {new Date(review.created_at).toLocaleDateString("en-in", options
                                                                    )}
                                                                </p>
                                                            </div>
                                                            <span className="d-flex align-items-center">
                                                                {review.rating}
                                                                <RiStarFill />
                                                            </span>
                                                        </div>
                                                        <h6>{review.reviewText}</h6>
                                                    </div>
                                                </div>
                                            ))}
                                        </ListGroup>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <Booking tour={tour} avgRating={avgRating} reviews={reviews} />
                            </Col>
                        </Row>
                    </Container>

                </section>

            </div >
        </>



    )




}
export default TourDetails;