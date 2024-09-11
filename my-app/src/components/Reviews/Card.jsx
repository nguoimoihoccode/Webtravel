import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faQuoteRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export const ReviewCards = ({ data }) => {
    const renderStars = (stars) => {
        const fullStars = Math.floor(stars);
        const halfStars = stars % 1 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        const starElements = [];

        for (let i = 0; i < fullStars; i++) {
            starElements.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} className='text-[#007aff]' />);
        }

        for (let i = 0; i < halfStars; i++) {
            starElements.push(<FontAwesomeIcon key={`half-${i}`} icon={faStarHalf} className='text-[#007aff]' />);
        }

        for (let i = 0; i < emptyStars; i++) {
            starElements.push(<FontAwesomeIcon key={`empty-${i}`} icon="" />);
        }

        return starElements;
    };

    const card = data;

    return (
        <div key={card.id} className="bg-white flex flex-col transition-all duration-300 ease-in-out scale-90 opacity-90 min-w-[300px] mx-4 p-4">
            <div className='flex justify-center items-center z-20 mx-[-45px] mb-4'> {/* testi-avatar */}
                <img src={card.image} alt={card.name} className='w-[150px] rounded-full border-6 border-white shadow-lg' />
            </div>


            <div className='text-gray-400 
                        opacity-30 
                        text-[35px]
                        transition-all 
                        duration-400 
                        ease-linear 
                        absolute 
                        top-[25px] 
                        left-[30px]'>
                <FontAwesomeIcon icon={faQuoteRight} />
            </div>

            <div className='overflow-hidden 
                        rounded-lg 
                        transition-all 
                        duration-300 
                        ease-in-out
                        
                        relative
                        flex
                        flex-col
                        justify-center
                        items-center'>
                <div className='float-none inline-block mb-[12px]'>
                    {renderStars(card.stars)}
                </div>
            </div>

            <p className='text-gray-600 font-serif italic leading-6 pb-4 text-lg'>{card.description}</p>

            <div className='flex flex-col items-center justify-center'>
                <h3 className='text-[28px] font-bold text-blue-gray-500'>{card.name}</h3>
                <h4 className=' text-base text-blue-500'>{card.title}</h4>
            </div>

            <div className='text-gray-400 
                        opacity-30 
                        text-[35px] 
                        transition-all 
                        duration-400 
                        ease-linear 
                        absolute 
                        bottom-[25px] 
                        right-[30px]'>
                <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
        </div>
    );
};