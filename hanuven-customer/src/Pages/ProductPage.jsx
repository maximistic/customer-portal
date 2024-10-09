import { useState, useEffect } from 'react';
import Footer from "../Components/Footer";
import Header from "../Components/Header";

// Star Rating Component
const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="text-lg flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="cursor-pointer"
          onClick={() => handleStarClick(star)}
          style={{ color: star <= rating ? '#000000' : '#ccc' }}
        >
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-500"><a href="">1,072 Reviews</a></span>
    </div>
  );
};

// Image Carousel Component
const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://13.127.100.128:3000/api');
        const data = await response.json();
        setImages(data.productimages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images.length) {
    return <div className="text-center text-gray-500">Loading images...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-xl h-96 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images[currentSlide]}
          alt={`Thumbnail ${currentSlide + 1}`}
        />
        <div className="magnifier"></div>
      </div>
      <div className="flex space-x-4 mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            className={`cursor-pointer w-20 h-20 object-cover rounded-md ${index === currentSlide ? 'ring-2 ring-black' : ''}`}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Product Info Component
const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch('http://13.127.100.128:3000/api');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);

  const handleAddToCart = () => {
    alert('Added to cart!');
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  if (!product) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-lg">
      <h1 className="text-2xl font-semibold font-serif">{product.productname}</h1>
      <p className="text-gray-600 mt-2">{product.productdescription}</p>

      <StarRating />

      <div className="text-2xl text-red-600 mt-4">₹{product.price}</div>
      <p className="font-bold mt-2">In Stock: {product.quantity}</p>

      <div className="flex items-center mt-4 space-x-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <div className="px-4 py-2 border rounded-md">{quantity}</div>
        <button
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div>

      <button
        className="w-full mt-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      <div className="flex space-x-4 mt-4">
        <button className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all">
          Buy Now
        </button>
        <button
          className={`w-full py-2 border border-gray-400 rounded-md ${isWishlisted ? 'bg-black text-white' : ''}`}
          onClick={handleWishlist}
        >
          {isWishlisted ? 'Wishlisted' : 'Wishlist'}
        </button>
      </div>
    </div>
  );
};

// Product Page Component
const ProductPage = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-0 md:space-x-10 p-6">
      <ImageCarousel />
      <ProductInfo />
    </div>
  );
};

// Products Component (Main Page)
const Products = () => {
  return (
    <div>

      <Header />
      <ProductPage />
      <Footer />
    </div>
  );
};

export default Products;
