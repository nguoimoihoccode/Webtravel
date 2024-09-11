import React, { useEffect, useState } from "react";
import CommonSection from "../Shared/CommonSection";
import "../styles/Tour.css"
import TourCard from "../Shared/TourCard";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";
import SearchBar from "../components/Search";



const Tour = () => {

    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [paginatedTours, setPaginatedTours] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const toursPerPage = 8;



    const fetchData = async () => {
        try {

            setLoading(true);


            const response = await axios.get(`/tour-api/tour_api.php`);

            const data = response.data;

            console.log(data)

            if (data && data.tours) {



                setTours(data.tours);

                setCurrentPage(1);

            } else {
                console.log('No data found');
            }
        } catch (error) {
            setError(error);
        } finally {

            setLoading(false);
        }
    };
    const paginate = () => {
        const startIndex = (currentPage - 1) * toursPerPage;
        const endIndex = startIndex + toursPerPage;
        setPaginatedTours(tours.slice(startIndex, endIndex));
    };

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        paginate();
    }, [currentPage, tours]);

    const nextPage = () => {
        if (currentPage < Math.ceil(tours.length / toursPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    return (
        <div className=" min-vh-100 pt-5  ">
            <CommonSection title={"Our Tour"} />
            <SearchBar />
            <section className="pt-0">
                <Container>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error loading data</p>
                    ) : (
                        <Row>
                            {Array.isArray(paginatedTours) &&
                                paginatedTours.map((tour) => (
                                    <Col lg="3" md="6" sm="6" className="mb-4" key={tour.tourid}>
                                        <TourCard tour={tour} />
                                    </Col>
                                ))}
                        </Row>

                    )}
                    <div className="pagination-controls mt-5 mb-5">
                        <Button onClick={prevPage} disabled={currentPage === 1}>
                            Previous
                        </Button>
                        <span className="mx-3">Page {currentPage}</span>
                        <Button onClick={nextPage} disabled={currentPage >= Math.ceil(tours.length / toursPerPage)}>
                            Next
                        </Button>
                    </div>
                </Container>
            </section>
        </div>


    )

}
export default Tour