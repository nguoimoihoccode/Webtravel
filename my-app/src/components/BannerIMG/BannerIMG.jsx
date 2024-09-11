import React from "react";

const BannerIMG = ({ img }) => {
    const bgImage = {
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        transform: 'translateY(10%)'
    };
    return (
        <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}></div>
    );
};

export default BannerIMG;
