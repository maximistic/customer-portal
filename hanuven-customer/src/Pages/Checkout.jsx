import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';  // To access product from state
import { useCart } from './CartContext'; 
import './Checkout.css';
import Header from "../Components/Header";

const Checkout = () => {
  const location = useLocation();  // Accessing state passed during navigation
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [shipping, setShipping] = useState('India');
  const [contact, setContact] = useState('');
  const { calculateTotal } = useCart(); 

  // Check if a product is being directly purchased
  const product = location.state?.product; // Get product from state
  const totalAmount = product ? product.price : calculateTotal(); // Use product price if available

  useEffect(() => {
    const savedValues = {
      email: localStorage.getItem('email') || '',
      name: localStorage.getItem('name') || '',
      address: localStorage.getItem('address') || '',
      shipping: localStorage.getItem('shipping') || 'India',
      contact: localStorage.getItem('contact') || '',
    };
    setEmail(savedValues.email);
    setName(savedValues.name);
    setAddress(savedValues.address);
    setShipping(savedValues.shipping);
    setContact(savedValues.contact);
  }, []);

  const orderPlace = () => {
    console.log("Order placed");
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const pay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_XVjWmoUyPibZ3l", 
      amount: parseInt(totalAmount * 100), // Razorpay takes amount in paise
      currency: "INR",
      name: name || "Customer", 
      description: "Test Transaction",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        orderPlace();
      },
      prefill: {
        name: name,
        email: email,
        contact: contact,
      },
      notes: {
        address: address,
      },
      theme: {
        color: "#158993",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <Header />
      <div className="checkout-page">
        <div className="checkout-form">
          <h2>Shipping Information</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                localStorage.setItem('email', e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                localStorage.setItem('name', e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Shipping Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                localStorage.setItem('address', e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <select
              value={shipping}
              onChange={(e) => {
                setShipping(e.target.value);
                localStorage.setItem('shipping', e.target.value);
              }}
            >
              <option value="India">India</option>
            </select>
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="text"
              placeholder="Enter Contact Number"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                localStorage.setItem('contact', e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Total Amount</label>
            <div className="amount-display">₹{totalAmount.toFixed(2)}</div> {/* Display total amount */}
          </div>
          <button className="pay-button" onClick={pay}>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

