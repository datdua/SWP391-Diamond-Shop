import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
    const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [isCurrencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

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

    return (
        <div className="tm-header tm-header-sticky">
            {/* Header Top Area */}
            <div className="tm-header-toparea bg-black">
                <div className="container">
                    <div className="row justify-between items-center">
                        <div className="col-lg-8 col-12">
                            <ul className="tm-header-info">
                                <li><a href="tel:18883456789"><i className="ion-ios-telephone"></i>1-888-345-6789</a></li>
                                <li><a href="mailto:contact@example.com"><i className="ion-android-mail"></i>contact@example.com</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="tm-header-options">
                                <div className="relative">
                                    <button onClick={() => toggleDropdown("account")} className="tm-dropdown-button tm-header-links">
                                        My Account <i className={`ml-1 fas ${isAccountDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                    </button>
                                    {isAccountDropdownOpen && (
                                        <ul className="tm-dropdown-menu">
                                            <li><Link to="/account">My Account</Link></li>
                                            <li><Link to="/login">Login/Register</Link></li>
                                            <li><Link to="/cart">Shopping Cart</Link></li>
                                            <li><Link to="/wishlist">Wishlist</Link></li>
                                            <li><Link to="/checkout">Checkout</Link></li>
                                        </ul>
                                    )}
                                </div>
                                <div className="relative">
                                    <button onClick={() => toggleDropdown("currency")} className="tm-dropdown-button tm-header-currency">
                                        USD <i className={`ml-1 fas ${isCurrencyDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                    </button>
                                    {isCurrencyDropdownOpen && (
                                        <ul className="tm-dropdown-menu">
                                            <li><a href="#">USD</a></li>
                                            <li><a href="#">EUR</a></li>
                                            <li><a href="#">JPY</a></li>
                                            <li><a href="#">GBP</a></li>
                                        </ul>
                                    )}
                                </div>
                                <div className="relative">
                                    <button onClick={() => toggleDropdown("language")} className="tm-dropdown-button tm-header-language">
                                        <img src="assets/images/flag-english.png" alt="language" /> <i className={`ml-1 fas ${isLanguageDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                    </button>
                                    {isLanguageDropdownOpen && (
                                        <ul className="tm-dropdown-menu">
                                            <li><a href="#"><img src="assets/images/flag-english.png" alt="language" /> English</a></li>
                                            <li><a href="#"><img src="assets/images/flag-spain.png" alt="language" /> Spanish</a></li>
                                            <li><a href="#"><img src="assets/images/flag-russian.png" alt="language" /> Russian</a></li>
                                            <li><a href="#"><img src="assets/images/flag-french.png" alt="language" /> French</a></li>
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
                    {/* Header Middle Content */}
                </div>
            </div>
            {/* // Header Middle Area */}
            
            {/* Header Bottom Area */}
            <div className="tm-header-bottomarea bg-white">
                <div className="container">
                    {/* Header Bottom Content */}
                </div>
            </div>
            {/* // Header Bottom Area */}
        </div>
    );
}

export default Header;
