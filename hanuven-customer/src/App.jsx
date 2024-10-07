import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../src/Components/Header';
import Home from '../src/Sections/Home';
import ProductPage from '../src/Sections/ProductPage';
import Cart from '../src/Sections/Cart';
import Footer from './Components/Footer';

function App() {
  return (
    // <Router>
    //   <Header />
      
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/ProductPage" element={<ProductPage />} />
    //     <Route path="/cart" element={<Cart />} />
    //   </Routes>
      
    //   <Footer />
    // </Router>

    <Home />
  );
}

export default App;
