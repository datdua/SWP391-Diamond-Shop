import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AboutPage from './pages/About/AboutPage';
import HomePage from './pages/Home/HomePage';
import CartPage from './pages/Cart/CartPage';
import LoginRegisterPage from './pages/LoginRegister/LoginRegisterPage';
import ProductPage from './pages/Product/ProductPage';
import MyAccountPage from './pages/MyAccount/MyAccountPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import WishlistPage from './pages/Wishlist/WishlistPage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import ContactPage from './pages/Contact/ContactPage';
import JewelryPage from './pages/Product/JewelryPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop';
import DiamondPage from './pages/Product/DiamondPage';
import JewelryDetailPage from './pages/ProductDetail/JewelryDetailPage';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Routes>
        <Route path='/' element={<Navigate to="/trangchu" replace />} />
        <Route path='/dangnhap' element={<><Header/> <LoginRegisterPage/> <Footer/></>}/>

        <Route path='/trangchu' element={<><Header/> <HomePage/> <BackToTop/> <Footer/></>}/>
        <Route path='/gioithieu' element={<><Header/> <AboutPage/> <Footer/></>}/>
        <Route path='/lienhe' element={<><Header/> <ContactPage/> <Footer/></>}/>
        <Route path='/sanpham' element={<><Header/> <ProductPage/> <BackToTop/> <Footer/></>}/>
        <Route path='/trangsuc' element={<><Header/> <JewelryPage/> <BackToTop/></>}/>
        <Route path='/kimcuong' element={<><Header/> <DiamondPage/> <BackToTop/> <Footer/></>}/>
        <Route path='/cart/:accountId' element={<CartPage/>}/>
        <Route path='/product-detail/:jewelryId' element={<><Header/> <JewelryDetailPage/> <BackToTop/> <Footer/></> } />
        <Route path='/account' element={<MyAccountPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/wishlist' element={<WishlistPage/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
      </Routes>
    </>
  );
}

export default App;
