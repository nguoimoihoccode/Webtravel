import React from 'react';
import IMG2 from '../assets/image/page.jpg';
import '../styles/Page.css'; // Import your CSS file
import CommonSection from '../Shared/CommonSection';

const Page = () => {
    return (
        <div className="min-vh-100 pt-5 bg-light">
            <CommonSection title="Page" />
            <div className="description font-times-new-roman" style={{ paddingTop: '20px', marginTop: '20px', backgroundColor: 'rgba(225, 223, 223, 0.578)' }}>
                <div className="page-container">
                    <div className="row" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                        <div className="col-md-5">
                            <img src={IMG2} alt="Description" className="image img-fluid" style={{ maxWidth: '100%', height: 'auto', width: '400px' }} />
                        </div>
                        <div className="col-md-6" style={{ paddingTop: '20px' }}>
                            <h5>Time to explore</h5>
                            <h1>A Better Way of Traveling and Touring the World</h1>
                            <p><strong>Zourney is a global travel booking portal where you
                                effortlessly can book day tours, fixed group departures,
                                holidays, and vacation packages in 130+ countries around
                                the world.</strong></p>
                            <p>Today, booking the right tour or holiday package has become a time-consuming and painful process. Which tour operator is qualified? What’s the right tour price? When you pay an upfront deposit to an unknown tour operator, is your money safe? Are the reviews seen on a local operator's website genuine?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
