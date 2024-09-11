import React from 'react';
import './LocationSection.css';
import { Row } from 'reactstrap';


const LocationSection = ({ data }) => {
    return (
        <div className="description font-times-new-roman" >
            < div className="container" >
                <Row>
                    <div className="col-md-8">
                        <div className="contenttt">
                            <h2><b>Description</b></h2>
                            <p><b>{data.content1}</b></p>
                        </div>
                        <Row>
                            <div className="col-md-4">
                                <img src={data.img} alt="" className="image img-fluid" style={{ maxWidth: "100%", height: "auto", width: "400px" }} />
                            </div>
                            <div className="col-md-7">
                                <p><b>{data.content2}</b></p>
                            </div>
                        </Row >
                    </div>
                    <div className="col-md-4">
                        <div className="title" >
                            <h2><b>Gallery</b></h2>
                        </div>
                        <Row>
                            <div className="col-12 col-md-4">
                                <img src={data.img1} alt="." className="image img-fluid square-image" style={{ paddingBottom: "20px" }} />
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={data.img2} alt="." className="image img-fluid square-image" style={{ paddingBottom: "20px" }} />
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={data.img3} alt="." className="image img-fluid square-image" style={{ paddingBottom: "20px" }} />
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={data.img4} alt="." className="image img-fluid square-image" style={{ paddingBottom: "20px" }} />
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={data.img5} alt="." className="image img-fluid square-image" style={{ paddingBottom: "20px" }} />
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={data.img6} alt="." className="image img-fluid square-image" style={{ paddingBottom: "20px" }} />
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={data.img7} alt="." className="image img-fluid square-image" style={{ paddingBottom: "20px" }} />
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={data.img8} alt="." className="image img-fluid square-image" style={{ paddingBottom: "20px" }} />
                            </div>
                            <div className="col-12 col-md-4">
                                <img src={data.img9} alt="." className="image img-fluid square-image" style={{ paddingBottom: "20px" }} />
                            </div>

                            {/* Thêm các hình ảnh khác tương tự */}
                        </Row>
                    </div>
                </Row>
            </div >
        </div >
    );
};

export default LocationSection;
