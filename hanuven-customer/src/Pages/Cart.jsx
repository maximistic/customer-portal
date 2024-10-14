import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity} = useCart();
  const navigate = useNavigate(); 

  const handleQuantityChange = (id, increment) => {
    updateQuantity(id, increment);
  };

  const handleDirectQuantityUpdate = (id, value) => {
    const newQuantity = parseInt(value, 10);
    if (newQuantity > 0) {
      updateQuantity(
        id,
        newQuantity - (cart.find((item) => item.id === id)?.quantity || 0)
      );
    }
  };


  const calculateTotal = () => {
    return cart.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
  };

  const handleContinueShopping = () => {
    navigate("/ProductPage"); // Navigate to the products page
  };

  return (
    <div>
    <Header />
     
    <div className={"cart-container"}>
      <div className="cart-items">
        {cart.length > 0 && (
          <div className="cart-header">
            <div className="header-item">Product Name</div>
            <div className="header-item">Price</div>
            <div className="header-item">Quantity</div>
            <div className="header-item">Action</div>
          </div>
        )}
        
        {cart.length === 0 ? (
          <h3 className="empty-cart-message">Your cart is empty! Click Continue Shopping to add items.</h3>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                // src={item.image}
                src={`./src/Components/Assets/slider4.jpg`}
                alt={item.name}
                className="cart-item-image"
                onError={() => console.error(`Image failed to load: ${item.image}`)} // Log errors

              />
              <div className="cart-item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-price">₹{item.price.toFixed(2)}</span>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <input
                    type="number"
                    value={item.quantity || 1}
                    min="1"
                    className="quantity-input"
                    onChange={(e) =>
                      handleDirectQuantityUpdate(item.id, e.target.value)
                    }
                  />
                  <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
  
      {cart.length > 0 && (
        <div className="order-summary">
          <h2>Summary</h2>
          <div className="summary-item">
            <span>Delivery Charge</span>
            <span>₹0</span>
          </div>
          <div className="summary-item">
            <strong>Grand Total</strong>
            <strong>₹{calculateTotal().toFixed(2)}</strong>
          </div>
          <button className="checkout-btn" onClick={() => navigate("/Checkout")}>CHECKOUT</button>
        </div>
      )}
  
      <div className="continue-shopping">
        <div className="text-content">
          <h4>Continue Shopping</h4>
          <p>Add more items to your cart</p>
        </div>
        <button onClick={handleContinueShopping}>CONTINUE SHOPPING</button>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Cart;