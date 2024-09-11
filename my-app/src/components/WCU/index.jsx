import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
export default function WCU() {
  return (
    <div className='main-container-wcu'>
      <div data-aos='zoom-in' className='dong-bang' />
      <div className='wcu-1'>
        <span className='why-choose-us'>WHY CHOOSE US</span>
        <span className='high-quality-standards'>
          Our Experiences Meet High Quality Standards
        </span>
      </div>
      <div className='content'>
        <span className='dummy-text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <button className='contact-us'>
          <Link to={`/About`}>
            <span className='contact'>Contact us</span>
          </Link>

        </button>
      </div>
      <div className='line-wcu' />
      <div className='tagline' data-aos='zoom-in'>
        <div className='rectangle-wcu' >
          <div className='rectangle-2-wcu' />
          <span className='memorable-journeys' >
            We Create Memorable Journeys Taking For The Traveler
          </span>
        </div>
      </div>
    </div>
  );
}
