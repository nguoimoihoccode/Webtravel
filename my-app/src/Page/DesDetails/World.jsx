import React, { useEffect, useState } from "react";
import LocationSection from '../../components/LocationSection/LocationSection';
import Halong from "../../assets/image/HaLong.jpg";
import CommonSection from '../../Shared/CommonSection';
import axios from "axios";
import TourCard from "../../Shared/TourCard";
import { Container, Row, Col, Button } from "reactstrap";


const World = () => {
    const data = {

        content1: "Vietnam's capital city is Hanoi. It is well-known for its many wonderful locations, cuisine, and the Hanoi people.Being born and raised in Hanoi makes me incredibly proud.A million people travel to Hanoi annually.Uncle Ho's Mausoleum, Hoa Lo Prison, Long Bien Bridge, One Pillar Pagoda, and many other places are popular tourist destinations in Hanoi.Each location   has a special historical significance that is sacred.In  regards to traffic, during the day, roads are congestedwith traffic, particularly during rush hours.",
        content2: "Motorbikes are the mode of transportation     of choice for locals in Hanoi.The city's     lungs, which are full of lush trees, parks,    and lakes, keep the air clean and fresh.The    people of Hanoi are gracious, amiable, and   welcoming.If you visit Hanoi, you should sample   some of the city's well-known dishes, including   Phở - Vietnam rice noodles, noodle with fried   tofu & shrimp paste,...We perceive Hanoi as a city  that is both contemporary and historic.Everyone  who remembers Hanoi experiences an unforgettableemotion.I adore and am proud of my hometown, Hanoi.",
        img: Halong,
        img1: Halong,

        img2: Halong,
        img3: Halong,

        img4: Halong,
        img5: Halong,
        img6: Halong,
        img7: Halong,
        img8: Halong,
        img9: Halong,
    };
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [paginatedTours, setPaginatedTours] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const toursPerPage = 4;
    const fetchData = async () => {
        try {

            setLoading(true);


            const response = await axios.get(`/tour-api/world.php`);



            const data = response.data;

            console.log(response)

            if (data) {



                setTours(data);

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
        <div className=" min-vh-100 pt-5  bg-light ">
            <CommonSection title={"World"} />
            <div className="pt-5 py-5 "  >
                <LocationSection data={data} />
            </div>
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

    );
};

export default World;
