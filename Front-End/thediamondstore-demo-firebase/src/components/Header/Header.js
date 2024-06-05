import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { searchJewelryByName } from "../../api/JewelryAPI";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { searchDiamondByName } from "../../api/DiamondAPI";
import { AuthContext } from "../Auth/AuthContext";

function Header() {
    const navigate = useNavigate();
    const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [isCurrencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { isLoggedIn, accountName, onLogout } = useContext(AuthContext);
    

    const toggleDropdown = (dropdown) => {
        if (dropdown === "account") {
            setAccountDropdownOpen(!isAccountDropdownOpen);
            setCurrencyDropdownOpen(false);
            setLanguageDropdownOpen(false);
        } else if (dropdown === "currency") {
            setAccountDropdownOpen(false);
            setCurrencyDropdownOpen(!isCurrencyDropdownOpen);
            setLanguageDropdownOpen(false);
        } else if (dropdown === "language") {
            setAccountDropdownOpen(false);
            setCurrencyDropdownOpen(false);
            setLanguageDropdownOpen(!isLanguageDropdownOpen);
        }
    };

    const handleSearch = async () => {
        try {
            const [jewelryResults, diamondResults] = await Promise.all([
                searchJewelryByName(searchTerm),
                searchDiamondByName(searchTerm)
            ]);

            if (diamondResults.length > 0) {
                navigate(`/kimcuong?search=${encodeURIComponent(searchTerm)}&results=${encodeURIComponent(JSON.stringify(diamondResults))}`);
            } else if (jewelryResults.length > 0) {
                navigate(`/trangsuc?search=${encodeURIComponent(searchTerm)}&results=${encodeURIComponent(JSON.stringify(jewelryResults))}`);
            }
        } catch (error) {
            console.error('Error searching for jewelry and diamonds:', error);
        }
    };

    return (
        <div className="tm-header tm-header-sticky">
            <div className="tm-header-toparea bg-black">
                <div className="container">
                    <div className="row justify-between items-center">
                        <div className="col-lg-8 col-12">
                            <ul className="tm-header-info">
                                <li><a href="tel:18883456789"><i className="ion-ios-telephone"></i>02.873.005.588</a></li>
                                <li><a href="mailto:contact@example.com"><i className="ion-android-mail"></i>thediamondstore.info@gmail.com</a></li>
                                {accountName && <li>Welcome, {accountName}!</li>}
                            </ul>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="tm-header-options">
                                {isLoggedIn ? (
                                    <>
                                        <div className="relative">
                                            <button onClick={() => toggleDropdown("account")} className="tm-dropdown-button tm-header-links">
                                                Tài Khoản <i className={`ml-1 fas ${isAccountDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                            </button>
                                            {isAccountDropdownOpen && (
                                                <ul className="tm-dropdown-menu">
                                                    <li><Link to="/account">My Account</Link></li>
                                                    <li><Link to="/cart">Shopping Cart</Link></li>
                                                    <li><Link to="/wishlist">Wishlist</Link></li>
                                                    <li><Link to="/checkout">Checkout</Link></li>
                                                </ul>
                                            )}
                                        </div>
                                        <button onClick={onLogout} className="tm-logout-button">Đăng xuất</button>
                                    </>
                                ) : (
                                    <button onClick={() => navigate('/dangnhap')} className="tm-login-button">Đăng nhập/Đăng ký</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tm-header-middlearea bg-white">
                <div className="container">
                    <div className="tm-mobilenav"></div>
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-6 order-1 order-lg-1">
                            <a href="/trangchu" className="tm-header-logo">
                                <img style={{ width: "220px" }} src="assets/images/logo.png" alt="thediamondstore" />
                            </a>
                        </div>
                        <div className="col-lg-6 col-12 order-3 order-lg-2">
                            <form className="tm-header-search" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search for jewelry or diamonds..."
                                />
                                <button aria-label="Search" type="submit"><i className="ion-android-search" onClick={handleSearch}></i></button>
                            </form>
                        </div>
                        <div className="col-lg-3 col-6 order-2 order-lg-3">
                            <ul className="tm-header-icons">
                                <li><Link to="/wishlist"><i className="ion-android-favorite-outline"></i><span>0</span></Link></li>
                                <li><Link to="/cart"><i className="ion-bag"></i><span>0</span></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tm-header-bottomarea bg-white">
                <div className="container">
                    <nav className="tm-header-nav">
                        <ul>
                            <li><Link to="/trangchu">Trang Chủ</Link></li>
                            <li><Link to="/gioithieu">Giới Thiệu</Link></li>
                            <li style={{ marginRight: '5px' }}><Link to="/sanpham">Sản Phẩm</Link></li>
                            <li style={{ margin: '0px' }}>
                                <NavDropdown className="drop-hover" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item style={{ textAlign: 'center' }} href="/kimcuong">Kim Cương</NavDropdown.Item>
                                    <NavDropdown.Item style={{ textAlign: 'center' }} href="/trangsuc">
                                        Trang Sức
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li><Link to="#">Bảng Giá</Link></li>
                            <li><Link to="/kienthuckimcuong">Kiến Thức Trang Sức</Link></li>
                            <li><Link to="/lienhe">Liên Hệ</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;