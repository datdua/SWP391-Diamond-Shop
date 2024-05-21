import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import MyAccountPage from './pages/MyAccountPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/login' element={<LoginRegisterPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/product-detail' element={<ProductDetailPage/>}/>
      <Route path='/account' element={<MyAccountPage/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>
      <Route path='/wishlist' element={<WishlistPage/>}/>
      <Route path='portfolio' element={<PortfolioPage/>}/>
      <Route path='contact' element={<ContactPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
