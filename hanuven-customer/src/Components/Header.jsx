import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../Components/Assets/logo.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {
  return (
    <header className="bg-gray-100 py-5 px-10">
      <nav className="flex items-center justify-between">
        <div className="logo">
          <RouterLink to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </RouterLink>
        </div>
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pr-10 w-72 rounded-full border border-gray-300"
          />
          <i className="fas fa-search absolute right-4 text-gray-500"></i>
        </div>
        <div className="flex items-center space-x-4">
          <RouterLink to="/">
            <button className="font-bold text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              Home
            </button>
          </RouterLink>
          <RouterLink to="/SampleProductPage">
            <button className="font-bold text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              Shop
            </button>
          </RouterLink>
          <ScrollLink to="about" smooth={true} duration={500}>
            <button className="font-bold text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              About
            </button>
          </ScrollLink>
          <ScrollLink to="news" smooth={true} duration={500}>
            <button className="font-bold text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              News
            </button>
          </ScrollLink>
          <RouterLink to="/contact">
            <button className="font-bold text-lg text-gray-700 hover:text-blue-500 transition duration-300">
              Contact
            </button>
          </RouterLink>
        </div>
        <div className="flex items-center space-x-4">
          <RouterLink to="/cart">
            <button className="text-gray-700 hover:text-blue-500 transition duration-300">
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </RouterLink>
          <RouterLink to="/profile">
            <button className="text-gray-700 hover:text-blue-500 transition duration-300">
              <i className="fa-solid fa-user"></i>
            </button>
          </RouterLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
