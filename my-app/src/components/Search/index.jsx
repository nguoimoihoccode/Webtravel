import React, { useRef } from "react";
import "./index.css";
import { Col, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiMapPinLine, RiMoneyDollarCircleLine, RiGroupLine, RiSearchLine } from "react-icons/ri";


const SearchBar = () => {
    const locationRef = useRef("");
    const priceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();

    const searchHandler = async () => {
        const location = locationRef.current.value;
        const price = priceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        // Create a search object with the non-empty search parameters
        const searchParams = new URLSearchParams();
        if (location) searchParams.append("tendiadiem", location);
        if (maxGroupSize) searchParams.append("gioihannguoi", maxGroupSize);
        if (price) searchParams.append("giatour", price);


        try {
            // Make an API call to fetch the search results
            const response = await axios.get(`/tour-api/search.php?${searchParams}`);

            navigate(`/search?${searchParams}`, { state: { searchResult: response.data.data } });
        } catch (error) {
            alert("Failed to fetch search results: " + error.message);
        }
    };

    return (
        <Col lg="12">
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <RiMapPinLine />

                        </span>
                        <div>
                            <h6>Location</h6>
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                ref={locationRef}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <RiMoneyDollarCircleLine />

                        </span>
                        <div>
                            <h6>Price</h6>
                            <input
                                type="number"
                                placeholder="Price $"
                                ref={priceRef}
                                step={50}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <RiGroupLine />
                        </span>
                        <div>
                            <h6>People</h6>
                            <input type="number" placeholder="0" ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span className="search__icon" type="submit" onClick={searchHandler}>
                            <RiSearchLine className="lup" />
                        </span>
                    </FormGroup>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;
