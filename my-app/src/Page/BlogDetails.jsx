import { React, useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blog/BlogComp";
import 'bootstrap/dist/css/bootstrap.min.css';


const BlogsDetails = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const containerStyle = {
        height: '400px',
        width: '1728px',
        transition: 'transform 0.7s',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        // transform: 'translateY(-20%)'

    };

    const imgStyle = {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        transform: 'translateY(-20%)',
        objectPosition: 'center',

    };
    const location = useLocation();
    console.log(props, " props");
    console.log(location, " useLocation Hook");
    const { image, date, title, description, author } = location.state;

    useEffect(() => {
        // Di chuyển trang lên đầu
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div className=" pt-5">
            <div
                className="mx-auto" // Center the element using Bootstrap class
                style={containerStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    src={image}// Replace with your image URL
                    alt={description}
                    style={imgStyle}
                />
            </div>
            <div className="container ">
                <p className="text-muted text-sm py-1">
                    {" "}
                    written by {author} on {date}
                </p>
                <h1 className="fs-4 fw-semibold">{title}</h1>
                <p>{description}</p>
            </div>

            {/* All Blogs Section */}
            <BlogsComp />
        </div>
    );
};

export default BlogsDetails;
