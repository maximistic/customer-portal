// Cart.jsx
import { useCart } from '../Components/CartContext';
import { useNavigate } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/24/outline';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
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
    navigate('/ProductPage');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          {cart.length > 0 && (
            <div className="hidden md:flex bg-gray-100 p-4 rounded-t-lg">
              <div className="w-2/5">Product Name</div>
              <div className="w-1/5 text-center">Price</div>
              <div className="w-1/5 text-center">Quantity</div>
              <div className="w-1/5 text-center">Action</div>
            </div>
          )}
          
          {cart.length === 0 ? (
            <h3 className="text-2xl font-bold mt-8 mb-8">Your cart is empty! Click Continue Shopping to add items.</h3>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center border-b py-4">
                <div className="w-full md:w-2/5 flex items-center mb-4 md:mb-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <span className="font-semibold">{item.name}</span>
                </div>
                <div className="w-full md:w-1/5 text-center mb-4 md:mb-0">
                  ₹{item.price.toFixed(2)}
                </div>
                <div className="w-full md:w-1/5 flex justify-center items-center mb-4 md:mb-0">
                  <button 
                    className="bg-gray-200 px-2 py-1 rounded"
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity || 1}
                    min="1"
                    className="mx-2 w-16 text-center border rounded"
                    onChange={(e) =>
                      handleDirectQuantityUpdate(item.id, e.target.value)
                    }
                  />
                  <button 
                    className="bg-gray-200 px-2 py-1 rounded"
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <div className="w-full md:w-1/5 flex justify-center">
                  <button
                    className="text-red-500 hover:text-red-700 flex items-center"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                    <TrashIcon className="w-5 h-5 ml-1" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
  
        {cart.length > 0 && (
          <div className="lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Delivery Charge</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Grand Total</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
              <button 
                className="w-full bg-black text-white py-3 rounded-full mt-6 hover:bg-gray-800 transition duration-300"
                onClick={() => navigate('/checkout')}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
  
      <div className="mt-12 bg-gray-100 p-6 rounded-lg flex justify-between items-center">
        <div>
          <h4 className="text-lg font-semibold">Continue Shopping</h4>
          <p className="text-sm text-gray-600">Add more items to your cart</p>
        </div>
        <button 
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition duration-300"
          onClick={handleContinueShopping}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default Cart;