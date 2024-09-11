import React from "react";
import FooterLogo from "../../assets/image/Quamon.png";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Tour",
        link: "/tour",
    },
    {
        title: "Partnership",
        link: "/partnership",
    },
    {
        title: "Contact",
        link: "/contact",
    },
    {
        title: "Page",
        link: "/page",
    },
];

const Footer = () => {
    return (
        <>
            <div className=" position-relative overflow-hidden   mw-100" style={{

                width: '100%',
                padding: ' 25px 100px 5px 100px',



            }}>
                <video
                    autoPlay
                    loop
                    muted
                    style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
                >
                    <source src={NatureVid} type="video/mp4" />
                </video>

                <div className=" py-5 rounded-top  " style={{
                    backdropFilter: "invert(35%)", // Increase blur effect here
                    opacity: 1,
                    justifyContent: 'center',
                    margin: ' 25px 20px 50px 40px',
                    // Adjust opacity to your preference
                }}>
                    <div className="row">
                        <div className="col-lg-4 py-8 px-4">
                            <h1 className="d-flex align-items-center gap-3 text-xl sm:text-3xl font-bold">
                                <img src={FooterLogo} alt="Footer Logo" style={{ height: '80px' }} />
                            </h1>
                            <p className="text-sm">
                                Traveling will make you realize that, no matter how much you know, there are always new things you need to learn.
                            </p>
                            <div className="d-flex align-items-center gap-2 mt-3">
                                <FaLocationArrow className="mb-2" />
                                <p>Ton Duc Thang University</p>
                            </div>
                            <div className="d-flex align-items-center gap-2 mt-2 ">
                                <FaMobileAlt className="mb-2" />
                                <p>+028 3775 5052</p>
                            </div>
                            <div className="mt-4 d-flex gap-4">
                                <a href="#" className="text-dark">
                                    <FaInstagram className="text-4xl" />
                                </a>
                                <a href="#" className="text-dark">
                                    <FaFacebook className="text-4xl" />
                                </a>
                                <a href="#" className="text-dark">
                                    <FaLinkedin className="text-4xl" />
                                </a>
                            </div>

                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                {['About Us', 'More Links', 'Useful Links'].map((title, index) => (
                                    <div key={index} className="col-sm-4">
                                        <div className="py-8 px-4">
                                            <h2 className="text-xl font-bold mb-3">{title}</h2>
                                            <ul className="list-unstyled">
                                                {FooterLinks.map((link, idx) => (
                                                    <li key={idx}>
                                                        <Link to={link.link} onClick={() => window.scrollTo(0, 0)} className="d-flex align-items-center text-decoration-none text-muted">
                                                            <span>&#11162;</span> {link.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>





                </div>





            </div >
        </>
    );
};

export default Footer;
