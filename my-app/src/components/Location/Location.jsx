import React from 'react';
import './Location.css'


const Location = () => {
    return (
        <>
            <span id="location"></span>
            <section className="my-4">
                <div className="container">
                    <h1 className="ltv "    >
                        Location to Visit
                    </h1>
                    <br />

                    <div className="rounded">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.0238324599854!2d106.69718361139826!3d10.732645159954004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b2747a81a3%3A0x33c1813055acb613!2zxJDhuqFpIGjhu41jIFTDtG4gxJDhu6ljIFRo4bqvbmc!5e0!3m2!1svi!2s!4v1714973573909!5m2!1svi!2s"
                            width="100%"
                            height="360"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ borderRadius: '20px' }}
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Location;
