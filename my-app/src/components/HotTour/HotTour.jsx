import React, { useEffect, useState } from "react";
import './HotTour.css'
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import TourCard from "../../Shared/TourCard";
import { NavLink } from 'react-router-dom';




function HotTour() {
    const [limitedTours, setLimitedTours] = useState([]);

    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (tours.length > 0) {
            // Lấy 8 tour đầu tiên từ mảng tours
            const firstEightTours = tours.slice(0, 8);
            setLimitedTours(firstEightTours);
        }
    }, [tours]);
    const fetchData = async () => {
        try {

            setLoading(true);


            const response = await axios.get(`/tour-api/tour_api.php`);

            const data = response.data;

            if (data && data.tours) {

                console.log('Total Pages:', data.total_pages);
                console.log('Current Page:', data.current_page);
                console.log('Tours:', data.tours);

                setTours(data.tours);


            } else {
                console.log('No data found');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error);
        } finally {

            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div class="main-container-HT">
            <div class="frame d-flex justify-content-center align-items-center">
                <span class="explore-tours text-center">EXPLORE OUR TOURS</span>
            </div>
            <div class="frame-1 d-flex justify-content-center align-items-center">
                <span class="new-popular-tour text-center">New and Most Popular Tour</span>
            </div>
            <section className="pt-0">
                <Container>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error loading data</p>
                    ) : (
                        <Row>
                            {Array.isArray(limitedTours) &&
                                limitedTours.map((tour) => (
                                    <Col lg="3" md="6" sm="6" className="mb-4" key={tour.tourid}>
                                        <TourCard tour={tour} />
                                    </Col>
                                ))}
                        </Row>


                    )}
                    <div className="viall__btn">
                        <NavLink to={"/tour"}>
                            <Button className='btn primary__btn w-25'>View All Tours</Button>
                        </NavLink>
                    </div>

                </Container>
            </section>

        </div >
    );
}

export default HotTour