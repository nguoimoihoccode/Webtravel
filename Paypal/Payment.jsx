import React, { useState, useMemo, useContext } from "react";
import PaypalImage from 'assets/payment.svg'; 
import { useSelector } from "react-redux"; 
import { useForm } from "react-hook-form";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../my-app/src/context/AuthContext";

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const subtotal = useMemo(() => {
    return cart?.reduce((sum, el) => +el?.price * el?.quantity + sum, 0);
  }, [cart]);

  const [bookingId, setBookingId] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: ""
  });

  const onSubmit = async (data) => {
    if (!user) {
      alert("Please login to proceed with the booking.");
      navigate("/login");
      return;
    }

    try {
      const bookingData = {
        userId: user.data.userid,
        tourName: cart.map((el) => el.title).join(", "),
        fullName: data.fullName,
        groupSize: cart.reduce((sum, el) => sum + el.quantity, 0),
        phone: data.phone,
        bookAt: new Date().toISOString().split("T")[0]
      };

      const response = await axios.post('paypal.php', bookingData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        setBookingId(response.data.bookingId);
        setFormData(data);
      } else {
        alert("Failed to create booking: " + response.data.message);
      }
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  const onApprove = async (data, actions) => {
    try {
      const order = await actions.order.capture();
      const verifyPayment = await axios.post('paypal.php', { orderID: order.id, bookingId });

      if (verifyPayment.data.status === 'COMPLETED') {
        alert("Payment successful!");
        navigate("/thank-you");
      } else {
        alert("Payment verification failed.");
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  return (
    <div className="container checkout-container">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={PaypalImage} alt="payment" className="img-fluid payment-image" />
        </div>
        <div className="col-md-6">
          <h2 className="checkout-title">Checkout your Booking</h2>
          <div className="cart-items-table">
            <table className="table table-striped">
              <thead>
                <tr className="table-header">
                  <th scope="col" className="w-25">Tour</th>
                  <th scope="col" className="text-center w-25">Quantity</th>
                  <th scope="col" className="text-center w-50">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((el) => (
                  <tr key={el._id} className="table-row">
                    <td className="table-cell">{el.title}</td>
                    <td className="table-cell text-center">{el.quantity}</td>
                    <td className="table-cell text-center">${el.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="summary-section">
            <div className="subtotal-wrapper d-flex justify-content-between align-items-center">
              <span className="subtotal-label">Subtotal:</span>
              <span className="subtotal-amount">${subtotal.toFixed(2)}</span>
            </div>
            {!bookingId ? (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    className="form-control"
                    {...register('fullName', { required: "Need to fill this field" })}
                  />
                  {errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    {...register('phone', { required: "Need to fill this field" })}
                  />
                  {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    {...register('address', { required: "Need to fill this field" })}
                  />
                  {errors.address && <span className="text-danger">{errors.address.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary pay-button">
                  Book and Pay with Paypal
                </button>
              </form>
            ) : (
              <PayPalScriptProvider options={{ clientId: "AbTVlLcpVsVwQTNEfml8c1GN0sa4bj-jSm10ucDDqwHz4vp73m5-jlVBqtrOlz6uo5JobRtCx3KkDknQ", components: "buttons", currency: "USD" }}>
                <PayPalButtons
                  style={{ layout: 'vertical' }}
                  createOrder={(data, actions) => actions.order.create({
                    purchase_units: [{
                      amount: {
                        currency_code: 'USD',
                        value: subtotal.toFixed(2),
                      },
                    }],
                  })}
                  onApprove={onApprove}
                />
              </PayPalScriptProvider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
