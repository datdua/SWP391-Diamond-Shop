import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
import { AuthProvider } from './components/Auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const handleLogout = (logoutCallback) => {
    if (logoutCallback) {
      logoutCallback();
      setTimeout(() => {
        window.location.href = '/dangnhap';
      }, 2000); 
    }
  };
  
  return (
    <BrowserRouter>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    <AuthProvider logoutCallback={() => handleLogout(handleLogout)}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/dangnhap' element={<LoginRegisterPage />} />
          <Route path='/trangchu' element={<HomePage />} />
          <Route path='/gioithieu' element={<AboutPage />} />
          <Route path='/lienhe' element={<ContactPage />} />
          <Route path='/sanpham' element={<ProductPage />} />
          <Route path='/trangsuc' element={<JewelryPage />} />
          <Route path='/kimcuong' element={<DiamondPage />} />
          <Route path='/cart/:accountId' element={<CartPage />} />
          <Route path='/product-detail/:jewelryId' element={<JewelryDetailPage />} />
          <Route path='/account' element={<MyAccountPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
