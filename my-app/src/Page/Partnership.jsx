import React, { useState, useRef, useContext } from "react";
import axios from 'axios';
import CommonSection from "../Shared/CommonSection";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";




const Partnership = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [isLoginAlertVisible, setIsLoginAlertVisible] = useState(false);



    const [formData, setFormData] = useState({
        ten: '',
        phone: '',
        email: '',
        tentour: '',
        area: '',
        address: '',
        limit: '',
        unlimit: '',
        start: '',
        end: '',
        giatour: '',
        chitiet: '',
        image: '',
        images: '',
        ngay1: '',
        imagengay1: '',
        ndngay1: '',
        ngay2: '',
        imagengay2: '',
        ndngay2: '',
        ngay3: '',
        imagengay3: '',
        ndngay3: '',
        ngay4: '',
        imagengay4: '',
        ndngay4: '',
        ngay5: '',
        imagengay5: '',
        ndngay5: '',
        ngay6: '',
        imagengay6: '',
        ndngay6: '',
        ngay7: '',
        imagengay7: '',
        ndngay7: '',


    });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const formRef = useRef(null);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            start: startDate,
            end: endDate,
        });
        console.log(formData)
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!user) {
                setIsLoginAlertVisible(true);
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
                return;
            }

            const response = await axios.post('/tour-api/process_tour_form.php', formData);
            console.log(response.status)
            if (response.status === 200) {
                setSuccess(true);
                formRef.current.reset(); // Set success state to true if request succeeds
            }
            else {
                setError(true);
            }
        } catch (error) {
            setError(true);
            console.error('Error submitting form:', error);
        }
    };
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className=" min-vh-100 pt-5 bg-light ">
            <CommonSection title={"Partnership"} />
            <div className="body">
                <form ref={formRef} onSubmit={handleSubmit}>

                    <div className="body">
                        <div className="admin" style={{ margin: '20px', backgroundColor: 'white', padding: '20px' }}>
                            <div className="container">
                                <h5>About Admin</h5>

                                <div className="row" style={{ paddingBottom: '10px' }}>

                                    <div className="col-md-4" style={{ paddingTop: '10px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Name: </label>
                                            <input type="text" className="form-control" placeholder="Admin name..." required name="ten" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-4" style={{ paddingTop: '10px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Phone number:  </label>
                                            <input type="text" className="form-control" placeholder="Phone number..." required name="phone" onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-md-4" style={{ paddingTop: '10px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Email:  </label>
                                            <input type="email" className="form-control" placeholder="Email..." required name="email" onChange={handleChange} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="new" style={{ margin: '20px', backgroundColor: 'white', padding: '20px' }}>
                            <div className="container">
                                <h5>New Tour</h5>
                                <div className="row" style={{ paddingBottom: '10px' }}>
                                    <div className="col-md-6" style={{ paddingTop: '10px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Tên tour: </label>
                                            <input type="text" className="form-control" placeholder="Tên tour..." required name="tentour" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-6" style={{ paddingTop: '10px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Tên khu vực: </label>
                                            <select className="form-control" id="area" required name="area" onChange={handleChange}>
                                                <option value="">Chọn khu vực</option>
                                                <option value="North Viet Nam">Northern Vietnam</option>
                                                <option value="Central Viet Nam">Central Vietnam</option>
                                                <option value="South Viet Nam">Southern Vietnam</option>
                                                <option value="Westside Viet Nam">Westside Vietnam</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Tên tỉnh, thành phố: </label>
                                            <input type="text" className="form-control" placeholder="Tên tỉnh/thành phố, quốc gia" required name="address" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Giới hạn người: </label>
                                            <input type="text" className="form-control" placeholder="Số lượng người của tour" required name="limit" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Số lượng còn trống: </label>
                                            <input type="text" className="form-control" placeholder="Số lượng chỗ còn trống" required name="unlimit" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Giá tour: </label>
                                            <input type="text" className="form-control" placeholder="$" required name="giatour" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ngày đi:</label>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={date => setStartDate(date)}
                                                className="form-control"
                                                id="departure-date"
                                                placeholderText="Ngày bắt đầu"
                                                required
                                                name="start"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ngày về:</label>
                                            <DatePicker
                                                selected={endDate}
                                                onChange={date => setEndDate(date)}
                                                className="form-control"
                                                id="departure-datev"
                                                placeholderText="Ngày kết thúc"
                                                required
                                                name="end"
                                            />
                                        </div>
                                    </div>


                                    {/* <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                            <div className="input-group">
                                                <label htmlFor="tenchitiet" style={{ marginRight: '5px' }}>Tên chi tiết tour:</label>
                                                <input type="text" className="form-control" id="tenchitiet" placeholder="Tên chi tiết tour" required name="tenchitiet" onChange={handleChange} />
                                            </div>
                                        </div> */}




                                    <div className="col-md-12" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Nội dung chi tiết tour: </label>
                                            <textarea className="form-control" placeholder="Chi tiết tour" required name="chitiet" onChange={handleChange}></textarea>
                                        </div>
                                    </div>





                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Nhập ảnh bìa lên:</label>
                                            <input type="text" className="form-control" id="image" placeholder="Nhập link ảnh" onChange={handleChange} required name="image" />
                                        </div>
                                    </div>

                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Nhập các ảnh khác(nếu có) lên:</label>
                                            <input type="text" className="form-control" id="images" onChange={handleChange} placeholder="Nhập link các ảnh, thêm dấu phẩy vào giữa các link" name="images" />
                                        </div>
                                    </div>
                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ngày 1:</label>
                                            <input type="text" className="form-control" id="ngay1" placeholder="Ngày 1" required name="ngay1" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ảnh ngày 1:</label>
                                            <input type="text" className="form-control" id="imagengay1" required name="imagengay1" onChange={handleChange} placeholder="Nhập link ảnh" />
                                        </div>
                                    </div>


                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Nội dung ngày 1:</label>
                                            <textarea className="form-control" id="ndngay1" placeholder="Nội dung ngày 1 " onChange={handleChange} name="ndngay1"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ngày 2:</label>
                                            <input type="text" className="form-control" id="ngay2" placeholder="Ngày 2" name="ngay2" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ảnh ngày 2:</label>
                                            <input type="text" className="form-control" id="imagengay2" name="imagengay2" onChange={handleChange} placeholder="Nhập link ảnh" />
                                        </div>
                                    </div>


                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Nội dung ngày 2:</label>
                                            <textarea className="form-control" id="ndngay2" placeholder="Nội dung ngày 2 " onChange={handleChange} name="ndngay2"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ngày 3:</label>
                                            <input type="text" className="form-control" id="ngay3" placeholder="Ngày 3" name="ngay3" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ảnh ngày 3:</label>
                                            <input type="text" className="form-control" id="imagengay3" name="imagengay3" onChange={handleChange} placeholder="Nhập link ảnh" />
                                        </div>
                                    </div>


                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Nội dung ngày 3:</label>
                                            <textarea className="form-control" id="ndngay3" placeholder="Nội dung ngày 3 " onChange={handleChange} name="ndngay3"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ngày 4:</label>
                                            <input type="text" className="form-control" id="ngay4" placeholder="Ngày 4" name="ngay4" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ảnh ngày 4:</label>
                                            <input type="text" className="form-control" id="imagengay4" name="imagengay4" onChange={handleChange} placeholder="Nhập link ảnh" />
                                        </div>
                                    </div>


                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Nội dung ngày 4:</label>
                                            <textarea className="form-control" id="ndngay4" placeholder="Nội dung ngày 4 " onChange={handleChange} name="ndngay4"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ngày 5:</label>
                                            <input type="text" className="form-control" id="ngay5" placeholder="Ngày 5" name="ngay5" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ảnh ngày 5:</label>
                                            <input type="text" className="form-control" id="imagengay5" name="imagengay5" onChange={handleChange} placeholder="Nhập link ảnh" />
                                        </div>
                                    </div>


                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Nội dung ngày 5:</label>
                                            <textarea className="form-control" id="ndngay5" placeholder="Nội dung ngày 5 " onChange={handleChange} name="ndngay5"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ngày 6:</label>
                                            <input type="text" className="form-control" id="ngay6" placeholder="Ngày 6" name="ngay6" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ảnh ngày 6:</label>
                                            <input type="text" className="form-control" id="imagengay6" name="imagengay6" onChange={handleChange} placeholder="Nhập link ảnh" />
                                        </div>
                                    </div>


                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Nội dung ngày 6:</label>
                                            <textarea className="form-control" id="ndngay6" placeholder="Nội dung ngày 6 " onChange={handleChange} name="ndngay6"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ngày 7:</label>
                                            <input type="text" className="form-control" id="ngay7" placeholder="Ngày 7" name="ngay7" onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-md-3" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Ảnh ngày 7:</label>
                                            <input type="text" className="form-control" id="imagengay7" name="imagengay7" onChange={handleChange} placeholder="Nhập link ảnh" />
                                        </div>
                                    </div>


                                    <div className="col-md-6" style={{ paddingTop: '20px' }}>
                                        <div className="input-group">
                                            <label style={{ marginRight: '5px' }}>Nội dung ngày 7:</label>
                                            <textarea className="form-control" id="ndngay7" placeholder="Nội dung ngày 7 " onChange={handleChange} name="ndngay7"></textarea>
                                        </div>
                                    </div>



                                </div>
                                <button type="submit" className="btn btn-danger" id="submit-btn">Submit</button>
                                {isLoginAlertVisible && (
                                    <Alert color="warning">
                                        Please login to up tour.
                                    </Alert>
                                )}
                                {success && (
                                    <div className="alert alert-success mt-3" role="alert">
                                        Tour created successfully!
                                    </div>
                                )}
                                {error && (
                                    <div className="alert alert-success mt-3" role="alert">
                                        No created!
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    );

}

export default Partnership;
