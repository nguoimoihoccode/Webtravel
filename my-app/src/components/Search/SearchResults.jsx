import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useLocation, Link } from "react-router-dom";
import './index.css'
import TourCard from "../../Shared/TourCard";
import CommonSection from "../../Shared/CommonSection";

const SearchResultList = () => {
    const location = useLocation();
    const searchResult = location.state?.searchResult || [];
    const [paginatedTours, setPaginatedTours] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const toursPerPage = 8;
    const paginate = () => {
        const startIndex = (currentPage - 1) * toursPerPage;
        const endIndex = startIndex + toursPerPage;
        setPaginatedTours(searchResult.slice(startIndex, endIndex));
    };
    useEffect(() => {
        paginate();
    }, [currentPage, searchResult]);
    const nextPage = () => {
        if (currentPage < Math.ceil(searchResult.length / toursPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <CommonSection title={"Search Results"} />
            <section>
                <Container>
                    <Row>
                        {searchResult.length === 0 ? (
                            <Col lg="12">
                                <div className="no-results">
                                    <p>No search results found.</p>
                                    <Button className="btn primary__btn w-25 align-items-center">
                                        <Link to="/tour">Go to Tours</Link>
                                    </Button>
                                </div>
                            </Col>
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
                    </Row>
                    <div className="pagination-controls mt-5 mb-5">
                        <Button onClick={prevPage} disabled={currentPage === 1}>
                            Previous
                        </Button>
                        <span className="mx-3">Page {currentPage}</span>
                        <Button onClick={nextPage} disabled={currentPage >= Math.ceil(searchResult.length / toursPerPage)}>
                            Next
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default SearchResultList;
