import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../Components/Assets/logo.png';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="footer-content container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        
        {/* Feedback Section */}
        <div className="feedback text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Tell us what you think...</h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300">Contact us</button>
        </div>
        
        {/* Sitemap Section */}
        <div className="sitemap text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Sitemap</h3>
          <p className="mb-2">All our pages:</p>
          <ul className="footer-buttons flex flex-wrap justify-center md:justify-start space-x-4">
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">Home</li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">Shop</li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">News</li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">About</li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">Contact</li>
          </ul>
        </div>
        
        {/* Logo and Social Icons Section */}
        <div className="footer-logo text-center md:text-left">
          <img src={logo} alt="Footer Logo" className="mx-auto md:mx-0 h-16 mb-4" />
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <div className="social-icons flex justify-center md:justify-start space-x-6 text-2xl">
            <FontAwesomeIcon icon={faFacebookF} className="cursor-pointer hover:text-blue-500 transition duration-300" />
            <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-blue-500 transition duration-300" />
            <FontAwesomeIcon icon={faLinkedinIn} className="cursor-pointer hover:text-blue-500 transition duration-300" />
            <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-blue-500 transition duration-300" />
            <FontAwesomeIcon icon={faYoutube} className="cursor-pointer hover:text-blue-500 transition duration-300" />
          </div>
        </div>
        
      </div>

      {/* Copyright Section */}
      <div className="copyright text-center py-4 bg-gray-900">
        <p className="text-sm">Copyright 2024 All Rights Reserved Hanuven</p>
      </div>
    </footer>
  );
}

export default Footer;
