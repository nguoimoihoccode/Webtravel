import React, { Component } from "react";
import Slider from "react-slick";
import { ReviewCards } from './Card';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute 
                top-[50%]
                w-[80px]
                h-[50px]
                mt-[-25px]
                z-100
                cursor-pointer
                bg-[#007aff]
                shadow-[0_9px_26px_rgba(58,87,135,0.45)]
                transition-all 
                duration-200 
                ease-linear
                outline-none
                
                right-[-30px]
                pr-[20px]
                rounded-l-[60px]
                hover:right-[-15px]
                hover:bg-[rgba(6,27,65,0.4)]"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faCaretRight} className='relative left-[15px] top-[10px] h-[30px] text-white' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="absolute 
                top-[50%]
                w-[80px]
                h-[50px]
                mt-[-25px]
                z-100
                cursor-pointer
                bg-[#007aff]
                shadow-[0_9px_26px_rgba(58,87,135,0.45)]
                transition-all 
                duration-200 
                ease-linear
                outline-none
                
                left-[-30px]
                pl-[20px]
                rounded-r-[60px]
                hover:left-[-15px]
                hover:bg-[rgba(6,27,65,0.4)]"
            onClick={onClick}
            style={{ zIndex: "1000" }}
        >
            <FontAwesomeIcon icon={faCaretLeft} className='relative left-[30px] top-[10px] h-[30px] text-white' />
        </div>
    );
}

export default class CustomArrows extends Component {
    render() {
        const settings = {
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            centerPadding: "60px",
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            speed: 500,
            adaptiveHeight: true,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const data = [
            {
                id: 1,
                name: "Doe John",
                title: "Designer",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://i.ibb.co/87yHLmb/3.jpg",
                stars: 5
            },
            {
                id: 2,
                name: "John Doe",
                title: "Owner",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://i.ibb.co/y5ppgbX/4.jpg",
                stars: 5
            },
            {
                id: 3,
                name: "Susan Strong",
                title: "Director",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://i.ibb.co/nrxy049/6.jpg",
                stars: 4.5
            },
            {
                id: 4,
                name: "John Smith",
                title: "Developer",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://i.ibb.co/fDz2c3Q/21.jpg",
                stars: 5
            },
            {
                id: 5,
                name: "Justice O'Connor",
                title: "Developer",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://i.ibb.co/fDz2c3Q/21.jpg",
                stars: 5
            },
            {
                id: 6,
                name: "Larry Williams",
                title: "Developer",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://i.ibb.co/fDz2c3Q/21.jpg",
                stars: 4
            },
            {
                id: 7,
                name: "Rick Grimes",
                title: "Developer",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile-03-768x768.png",
                stars: 3.5
            },
            {
                id: 8,
                name: "David Smith",
                title: "Developer",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile-01.png",
                stars: 5
            },
        ];

        return (
            <div className="w-full relative overflow-hidden mb-[20px]">
                <Slider {...settings} className="py-[30px]">
                    {data.map((item) => (
                        <ReviewCards data={item} />
                    ))}
                </Slider>
            </div>
        );
    }
}