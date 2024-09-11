import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./Tourcard.css";
import { useEffect } from "react";
import { PiMapPinFill } from "react-icons/pi";
import calculateAvgRating from "../utils/avgrating";


const TourCard = ({ tour }) => {
    const { tourid, tentour, tendiadiem, giatour, image } = tour;

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="tour__card">
            <Card>
                <div className="tour__img">
                    <Link to={`/tours/${tourid}`}>
                        <div onClick={handleScrollToTop}>
                            <img src={image} alt="tour" />
                        </div>
                    </Link>
                    <span>Featured</span>
                </div>
                <CardBody>
                    <div className="card__top d-flex align-items-center justify-content-between">
                        <span className="tour__location d-flex align-items-center gap-1">
                            <i className="ri-map-pin-line">
                                <PiMapPinFill />
                                <>     </>
                                {tendiadiem}</i>
                        </span>

                    </div>

                    <h5 className="tour__title">
                        <Link to={`/tours/${tourid}`}>
                            <div onClick={handleScrollToTop}>{tentour}</div>
                        </Link>
                    </h5>
                    <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                        <h5>
                            ${giatour}
                            <span>/Per Person</span>
                        </h5>
                        <button className="btn booking__btn">
                            <Link to={`/tours/${tourid}`}>
                                <div onClick={handleScrollToTop}>Book Now</div>
                            </Link>{" "}
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );

}

export default TourCard;
