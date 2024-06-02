import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import { searchJewelryByName } from "../../api/JewelryAPI";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [isCurrencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
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
    const handleSearch = () => {
        searchJewelryByName(searchTerm)
            .then(data => setSearchResults(data))
            .catch(error => console.error('Error searching for jewelry:', error));
            window.location.href = `/sanpham?search=${encodeURIComponent(searchTerm)}`;
    };

    return (
        <div className="tm-header tm-header-sticky">
            {/* Header Top Area */}
            <div className="tm-header-toparea bg-black">
                <div className="container">
                    <div className="row justify-between items-center">
                        <div className="col-lg-8 col-12">
                            <ul className="tm-header-info">
                                <li><a href="tel:18883456789"><i className="ion-ios-telephone"></i>02.873.005.588</a></li>
                                <li><a href="mailto:contact@example.com"><i className="ion-android-mail"></i>thediamondstore.info@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="tm-header-options">
                                <div className="relative">
                                    <button onClick={() => toggleDropdown("account")} className="tm-dropdown-button tm-header-links">
                                        Tài Khoản <i className={`ml-1 fas ${isAccountDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                    </button>
                                    {isAccountDropdownOpen && (
                                        <ul className="tm-dropdown-menu">
                                            <li><Link to="/account">My Account</Link></li>
                                            <li><Link to="/dangnhap">Đăng Nhập / Đăng Ký</Link></li>
                                            <li><Link to="/cart">Shopping Cart</Link></li>
                                            <li><Link to="/wishlist">Wishlist</Link></li>
                                            <li><Link to="/checkout">Checkout</Link></li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // Header Top Area */}
            {/* Header Middle Area */}
            <div className="tm-header-middlearea bg-white">
                <div className="container">
                    <div className="tm-mobilenav"></div>
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-6 order-1 order-lg-1">
                            <a href="/trangchu" className="tm-header-logo">
                                <img style={{width: "220px"}} src="assets/images/logo.png" alt="thediamondstore" />
                            </a>
                        </div>
                        <div className="col-lg-6 col-12 order-3 order-lg-2">
                        <form className="tm-header-search" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                                <input 
                                    type="text" 
                                    placeholder="Tìm kiếm sản phẩm..." 
                                    value={searchTerm} 
                                    onChange={(e) => setSearchTerm(e.target.value)} 
                                />
                                <button aria-label="Search" type="submit"><i className="ion-android-search"></i></button>
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
            {/* // Header Middle Area */}

            {/* Header Bottom Area */}
            <div className="tm-header-bottomarea bg-white">
                <div className="container">
                    <nav className="tm-header-nav">
                        <ul>
                            <li><Link to="/trangchu">Trang Chủ</Link></li>
                            <li><Link to="/gioithieu">Giới Thiệu</Link></li>
                            <li style={{marginRight:'5px'}}><Link to="/sanpham">Sản Phẩm</Link></li>
                            <li style={{margin:'0px'}}>
                                <NavDropdown className="drop-hover" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item style={{ textAlign: 'center' }} href="/kimcuong">Kim Cương</NavDropdown.Item>
                                    <NavDropdown.Item style={{ textAlign: 'center' }} href="/trangsuc">
                                        Trang Sức
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li><Link to="#">Bảng Giá</Link></li>
                            <li><Link to="#">Kiến Thức Kim Cương</Link></li>
                            <li><Link to="/lienhe">Liên Hệ</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* // Header Bottom Area */}
        </div>
    );
}

export default Header;