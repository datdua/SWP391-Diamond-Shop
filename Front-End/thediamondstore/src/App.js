import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/About/AboutPage';
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';
import LoginRegisterPage from './pages/LoginRegister/LoginRegisterPage';
import ProductPage from './pages/Product/ProductPage';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import MyAccountPage from './pages/MyAccount/MyAccountPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import WishlistPage from './pages/Wishlist/WishlistPage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import ContactPage from './pages/Contact/ContactPage';

function App() {
  return (
      <Routes>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/login' element={<LoginRegisterPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/product-detail' element={<ProductDetailPage/>}/>
      <Route path='/account' element={<MyAccountPage/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}/>
      <Route path='/wishlist' element={<WishlistPage/>}/>
      <Route path='/portfolio' element={<PortfolioPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
  );
}

export default App;
