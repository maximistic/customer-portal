import React, { useState, useEffect } from 'react';

const Checkout = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [shipping, setShipping] = useState('India');
  const [amount, setAmount] = useState('');
  const [contact, setContact] = useState('');

  const fetchInitialValues = () => {
    const savedValues = {
      email: localStorage.getItem('email') || '',
      name: localStorage.getItem('name') || '',
      address: localStorage.getItem('address') || '',
      shipping: localStorage.getItem('shipping') || 'India',
      contact: localStorage.getItem('contact') || '',
      amount: localStorage.getItem('amount') || '',
    };
    return savedValues;
  };

  useEffect(() => {
    const initialValues = fetchInitialValues();
    setEmail(initialValues.email);
    setName(initialValues.name);
    setAddress(initialValues.address);
    setShipping(initialValues.shipping);
    setContact(initialValues.contact);
    setAmount(initialValues.amount);
  }, []);

  const orderPlace = () => {
    console.log("Order placed");
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const pay = async () => {
    if (amount === "") {
      alert("Please enter an amount");
      return;
    }

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_AWrlyaXOO9ncih",
      amount: parseInt(amount * 100),
      currency: "INR",
      name: name || "Customer",
      description: "Test Transaction",
      image: "https://avatars.githubusercontent.com/u/76506184?v=4",
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
    <div className="flex flex-col justify-center items-center py-10 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              localStorage.setItem('email', e.target.value);
            }}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              localStorage.setItem('name', e.target.value);
            }}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Shipping Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              localStorage.setItem('address', e.target.value);
            }}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Country</label>
          <select
            value={shipping}
            onChange={(e) => {
              setShipping(e.target.value);
              localStorage.setItem('shipping', e.target.value);
            }}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="India">India</option>
            {/* Add more countries if needed */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Contact Number</label>
          <input
            type="text"
            placeholder="Enter Contact Number"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              localStorage.setItem('contact', e.target.value);
            }}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Enter Amount</label>
          <input
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              localStorage.setItem('amount', e.target.value);
            }}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition duration-300"
          onClick={pay}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
