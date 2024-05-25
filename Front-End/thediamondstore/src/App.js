import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Routes>
        <Route path="/" element={<Navigate to="/trangchu" replace />} />
        <Route path='/dangnhap' element={<><LoginRegisterPage/> <Footer/></>}/>
        <Route path='/trangchu' element={<><HomePage/> <Footer/></>}/>
        <Route path='/gioithieu' element={<><AboutPage/> <Footer/></>}/>
        <Route path='/lienhe' element={<><ContactPage/> <Footer/></>}/>
        <Route path='/sanpham' element={<><ProductPage/> <Footer/></>}/>

        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/product-detail' element={<ProductDetailPage/>}/>
        <Route path='/account' element={<MyAccountPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/wishlist' element={<WishlistPage/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
      </Routes>
    </>
  );
}

export default App;
