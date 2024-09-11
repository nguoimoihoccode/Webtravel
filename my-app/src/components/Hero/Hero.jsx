import React from "react";
import './Hero.css'
import SearchBar from "../Search";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap'
import heroImg from "../../assets/image/hero5.jpeg"
import heroImg2 from "../../assets/image/hero6.jpeg"
import heroVideo from "../../assets/image/hero8.mp4"
import Subtitle from "../../Shared/Subtitle";
import worldImg from "../../assets/image/world.png"
import '../../styles/Home.css'



const Hero = () => {
    return (
        <section>
            <Container className="hero-container">
                <Row>
                    <Col lg="6">
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={"Quamon Travel"} />
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>
                                Traveling Opens The Door To Creating{" "}
                                <span className="highlight">Memories</span>
                            </h1>
                            <p>
                                Every now and then go away, have a little relaxation, for when you come back to your work your judgment will be surer. Go some distance away because then the work appears smaller and more of it can be taken in at a glance and a lack of harmony and proportion is more readily seen.
                            </p>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box video-box mt-4">
                            <video src={heroVideo} alt="" autoPlay loop muted />
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box mt-5">
                            <img src={heroImg2} alt="" />
                        </div>
                    </Col>
                    <SearchBar />
                </Row>
            </Container>
        </section>

    )
}

export default Hero