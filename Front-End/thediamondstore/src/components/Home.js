import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/style.scss"

function Home() {
    const [value, setValue] = useState('Default value');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const [isCurrencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

    const toggleAccountDropdown = () => {
        setAccountDropdownOpen(!isAccountDropdownOpen);
    };

    const toggleCurrencyDropdown = () => {
        setCurrencyDropdownOpen(!isCurrencyDropdownOpen);
    };

    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen(!isLanguageDropdownOpen);
    };
    return (
        <div>

            {/* <!-- Preloader --> */}
            <div className="tm-preloader">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="tm-preloader-logo">
                                <img src="assets/images/logo.png" alt="logo" />
                            </div>
                            <span className="tm-preloader-progress"></span>
                        </div>
                    </div>
                </div>
                <button className="tm-button tm-button-small">Cancel Preloader</button>
            </div>
            {/* <!--// Preloader -->
    <!-- Wrapper --> */}
            <div id="wrapper" className="wrapper">

                {/* <!-- Header --> */}
                <div className="tm-header tm-header-sticky">

                    {/* <!-- Header Top Area --> */}
                    <div className="tm-header-toparea bg-black">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-12">
                                    <ul className="tm-header-info">
                                        <li><a href="tel:18883456789"><i className="ion-ios-telephone"></i>1-888-345-6789</a></li>
                                        <li><a href="mailto:contact@example.com"><i
                                            className="ion-android-mail"></i>contact@example.com</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="tm-header-options">
                                        <div className="tm-dropdown tm-header-links">
                                            <button type="button" aria-label="My Account" onClick={toggleAccountDropdown}>My Account</button>
                                            {isAccountDropdownOpen && (
                                                <ul>
                                                    <li><Link to="/account">My Account</Link></li>
                                                    <li><Link to="/login">Login/Register</Link></li>
                                                    <li><Link to="/cart">Shopping Cart</Link></li>
                                                    <li><Link to="/wishlist">Wishlist</Link></li>
                                                    <li><Link to="/checkout">Checkout</Link></li>
                                                </ul>
                                            )}
                                        </div>
                                        <div className="tm-dropdown tm-header-currency">
                                            <button type="button" aria-label="Currency Selection">USD</button>
                                            {isCurrencyDropdownOpen && (
                                                <ul>
                                                    <li><a href="#">USD</a></li>
                                                    <li><a href="#">EUR</a></li>
                                                    <li><a href="#">JPY</a></li>
                                                    <li><a href="#">GBP</a></li>
                                                </ul>
                                            )}
                                        </div>
                                        <div className="tm-dropdown tm-header-language">
                                            <button aria-label="Language Selection"><img src="assets/images/flag-english.png" alt="language" />English</button>
                                            {isLanguageDropdownOpen && (
                                                <ul>
                                                    <li><a href="#"><img src="assets/images/flag-english.png"
                                                        alt="language" />English</a></li>
                                                    <li><a href="#"><img src="assets/images/flag-spain.png"
                                                        alt="language" />Spanish</a></li>
                                                    <li><a href="#"><img src="assets/images/flag-russian.png"
                                                        alt="language" />Russian</a></li>
                                                    <li><a href="#"><img src="assets/images/flag-french.png"
                                                        alt="language" />French</a></li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--// Header Top Area --> */}

                    {/* <!-- Header Middle Area --> */}
                    <div className="tm-header-middlearea bg-white">
                        <div className="container">
                            <div className="tm-mobilenav"></div>
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-6 order-1 order-lg-1">
                                    <Link to="/" className="tm-header-logo">
                                        <img src="assets/images/logo.png" alt="surose" />
                                    </Link>
                                </div>
                                <div className="col-lg-6 col-12 order-3 order-lg-2">
                                    <form className="tm-header-search">
                                        <input type="text" placeholder="Search product..." />
                                        <button aria-label="Search"><i className="ion-android-search"></i></button>
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
                    {/* <!--// Header Middle Area -->

            <!-- Header Bottom Area --> */}
                    <div className="tm-header-bottomarea bg-white">
                        <div className="container">
                            <nav className="tm-header-nav">
                                <ul>
                                    <li><Link to="/">Homepage</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/product">Shop</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* <!--// Header Bottom Area --> */}

                </div>
                {/* <!--// Header --> */}

                {/* <!-- Heroslider Area --> */}
                <div className="tm-heroslider-area bg-grey">
                    <div className="tm-heroslider-slider">
                        {/* <!-- Heroslider Item --> */}
                        <div className="tm-heroslider" style={{ backgroundImage: `url(assets/images/heoslider-image-1.jpg)` }}>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-8 col-12">
                                        <div className="tm-heroslider-contentwrapper">
                                            <div className="tm-heroslider-content">
                                                <h1>Woman’s Jewellery Collection</h1>
                                                <p>Jewellery may be made from a wide range of materials. Jewellery has been
                                                    made to adorn nearly every body part from hairpins to toe.</p>
                                                <a href="products.html" className="tm-button">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--// Heroslider Item -->

                <!-- Heroslider Item --> */}
                        <div className="tm-heroslider" style={{ backgroundImage: `url(assets/images/heoslider-image-2.jpg)` }}>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-8 col-12">
                                        <div className="tm-heroslider-contentwrapper">
                                            <div className="tm-heroslider-content">
                                                <h1>Woman’s Jewellery Collection</h1>
                                                <p>Jewellery may be made from a wide range of materials. Jewellery has been
                                                    made to adorn nearly every body part from hairpins to toe.</p>
                                                <a href="products.html" className="tm-button">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--// Heroslider Item --> */}

                    </div>
                </div>
                {/* <!--// Heroslider Area -->

        <!-- Page Content --> */}
                <main className="page-content">

                    {/* <!-- Features Area --> */}
                    <div className="tm-section tm-feature-area bg-grey">
                        <div className="container">
                            <div className="row mt-30-reverse">

                                {/* <!-- Single Feature --> */}
                                <div className="col-lg-4 mt-30">
                                    <div className="tm-feature">
                                        <span className="tm-feature-icon">
                                            <img src="assets/images/icons/icon-free-shipping.png" alt="free shipping" />
                                        </span>
                                        <div className="tm-feature-content">
                                            <h6>Free Shipping</h6>
                                            <p>We provide free shipping for all order over $200.00</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Feature -->

                        <!-- Single Feature --> */}
                                <div className="col-lg-4 mt-30">
                                    <div className="tm-feature">
                                        <span className="tm-feature-icon">
                                            <img src="assets/images/icons/icon-fast-delivery.png" alt="fast delivery" />
                                        </span>
                                        <div className="tm-feature-content">
                                            <h6>Fast Delivery</h6>
                                            <p>We always deliver our customers very quickly.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Feature -->

                        <!-- Single Feature --> */}
                                <div className="col-lg-4 mt-30">
                                    <div className="tm-feature">
                                        <span className="tm-feature-icon">
                                            <img src="assets/images/icons/icon-247-support.png" alt="24/7 Support" />
                                        </span>
                                        <div className="tm-feature-content">
                                            <h6>24/7 Support</h6>
                                            <p>We provide support to our customers within 24 hours. </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Feature --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!--// Features Area -->

            <!-- Popular Products Area --> */}
                    <div id="tm-popular-products-area" className="tm-section tm-popular-products-area tm-padding-section bg-white">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-12">
                                    <div className="tm-sectiontitle text-center">
                                        <h3>POPULAR PRODUCTS</h3>
                                        <p>Our popular products are so beautyful to see that the shoppers are easily attracted
                                            to them.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row tm-products-slider">

                                {/* <!-- Single Product --> */}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-1.jpg" alt="product image" />
                                                <img src="assets/images/products/product-image-2.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-new">New</span>
                                                <span className="tm-product-badges-sale">Sale</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><a href="/product">Stylist daimond
                                                earring</a></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-3.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-sale">Sale</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><a href="/product">Stylist daimond
                                                earring</a></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-4.jpg" alt="product image" />
                                                <img src="assets/images/products/product-image-5.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-soldout">Sold out</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-6.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-new">New</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-7.jpg" alt="product image" />
                                                <img src="assets/images/products/product-image-8.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-new">New</span>
                                                <span className="tm-product-badges-sale">Sale</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-9.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-sale">Sale</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-10.jpg" alt="product image" />
                                                <img src="assets/images/products/product-image-1.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-soldout">Sold out</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-12.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-new">New</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!--// Popular Products Area -->

            <!-- Banners Area --> */}
                    <div className="tm-section tm-banners-area">
                        <div className="container">
                            <div className="row mt-30-reverse">

                                {/* <!-- Single Banner --> */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-30">
                                    <a href="#" className="tm-banner tm-scrollanim">
                                        <img src="assets/images/banner-image-1.jpg" alt="banner image" />
                                    </a>
                                </div>
                                {/* <!--// Single Banner -->

                        <!-- Single Banner --> */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-30">
                                    <a href="#" className="tm-banner tm-scrollanim">
                                        <img src="assets/images/banner-image-2.jpg" alt="banner image" />
                                    </a>
                                </div>
                                {/* <!--// Single Banner -->

                        <!-- Single Banner --> */}
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-30">
                                    <a href="#" className="tm-banner tm-scrollanim">
                                        <img src="assets/images/banner-image-3.jpg" alt="banner image" />
                                    </a>
                                </div>
                                {/* <!--// Single Banner --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!--// Banners Area -->

            <!-- Popular Products Area --> */}
                    <div id="tm-latest-products-area" className="tm-section tm-latest-products-area tm-padding-section bg-white">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-12">
                                    <div className="tm-sectiontitle text-center">
                                        <h3>NEW ARRIVAL PRODUCTS</h3>
                                        <p>Our popular products are so beautyful to see that the shoppers are easily attracted
                                            to them.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-50-reverse">

                                {/* <!-- Single Product --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-4.jpg" alt="product image" />
                                                <img src="assets/images/products/product-image-5.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-new">New</span>
                                                <span className="tm-product-badges-sale">Sale</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-6.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-new">New</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-7.jpg" alt="product image" />
                                                <img src="assets/images/products/product-image-8.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-new">New</span>
                                                <span className="tm-product-badges-soldout">Sold out</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-9.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-new">New</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-10.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-new">New</span>
                                                <span className="tm-product-badges-sale">Sale</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-11.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-sale">Sale</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-12.jpg" alt="product image" />
                                                <img src="assets/images/products/product-image-1.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product -->

                        <!-- Single Product --> */}
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-50">
                                    <div className="tm-product tm-scrollanim">
                                        <div className="tm-product-topside">
                                            <div className="tm-product-images">
                                                <img src="assets/images/products/product-image-2.jpg" alt="product image" />
                                            </div>
                                            <ul className="tm-product-actions">
                                                <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                </li>
                                                <li><a href="#"><i className="ion-heart"></i></a></li>
                                            </ul>
                                            <div className="tm-product-badges">
                                                <span className="tm-product-badges-new">New</span>
                                            </div>
                                        </div>
                                        <div className="tm-product-bottomside">
                                            <h6 className="tm-product-title"><Link to="/product">Stylist daimond
                                                earring</Link></h6>
                                            <div className="tm-ratingbox">
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                <span><i className="ion-android-star-outline"></i></span>
                                            </div>
                                            <span className="tm-product-price">$29.99</span>
                                            <div className="tm-product-content">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem
                                                    Ipsum has been the industry's standard dummy text ever since the
                                                    when an unknown printer took a galley of type and scrambled it to make a
                                                    type specimen book. It has survived not only five centuries, but also the
                                                    leap into electronic typesetting.</p>
                                                <ul className="tm-product-actions">
                                                    <li><a href="#"><i className="ion-android-cart"></i> Add to cart</a></li>
                                                    <li><button data-fancybox="true" data-src="#tm-product-quickview" aria-label="Product Quickview"><i className="ion-eye"></i></button>
                                                    </li>
                                                    <li><a href="#"><i className="ion-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Single Product --> */}

                            </div>
                            <div className="tm-product-loadmore text-center mt-50">
                                <a href="products.html" className="tm-button">All Products</a>
                            </div>
                        </div>
                    </div>
                    {/* <!--// Popular Products Area -->

            <!-- Offer Area --> */}
                    <div className="tm-section tm-offer-area tm-padding-section bg-grey">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-12 order-2 order-lg-1">
                                    <div className="tm-offer-content">
                                        <h6>Super deal of the Month</h6>
                                        <h1>Brand ear ring on <span>$250</span> only</h1>
                                        <div className="tm-countdown" data-countdown="2020/10/12"></div>
                                        <a href="/product" className="tm-button">Shop now</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 order-1 order-lg-2">
                                    <div className="tm-offer-image">
                                        <img className="tm-offer" src="assets/images/offer-image-1.png" alt="offer image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--// Offer Area -->

            <!-- Latest Blogs Area --> */}
                    <div id="tm-news-area" className="tm-section tm-blog-area tm-padding-section bg-pattern-transparent">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-12">
                                    <div className="tm-sectiontitle text-center">
                                        <h3>LATEST BLOGS</h3>
                                        <p>A blog is a discussion or informational website published on the World Wide Web
                                            consisting of discrete</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row tm-blog-slider">

                                {/* <!-- Blog Single Item --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="tm-blog tm-scrollanim">
                                        <div className="tm-blog-topside">
                                            <div className="tm-blog-thumb">
                                                <img src="assets/images/blog/blog-image-1.jpg" alt="blog image" />
                                            </div>
                                            <span className="tm-blog-metahighlight"><span>Apr</span>17</span>
                                        </div>
                                        <div className="tm-blog-content">
                                            <h6 className="tm-blog-title"><a href="blog-details.html">Woman wearing gold-colore ring
                                                pendant necklaces</a></h6>
                                            <ul className="tm-blog-meta">
                                                <li><a href="blog.html"><i className="ion-android-person"></i> Anderson</a></li>
                                                <li><a href="blog-details.html"><i className="ion-chatbubbles"></i> 3 Comments</a>
                                                </li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incdidunt ut labore et dolore magna aliqua [....]</p>
                                            <a href="blog-details.html" className="tm-readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Blog Single Item -->

                        <!-- Blog Single Item --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="tm-blog tm-scrollanim">
                                        <div className="tm-blog-topside">
                                            <div className="tm-blog-thumb">
                                                <img src="assets/images/blog/blog-image-2.jpg" alt="blog image" />
                                            </div>
                                            <span className="tm-blog-metahighlight"><span>Apr</span>17</span>
                                        </div>
                                        <div className="tm-blog-content">
                                            <h6 className="tm-blog-title"><a href="blog-details.html">Shallow focus photo of person
                                                putting gold-colored ring</a></h6>
                                            <ul className="tm-blog-meta">
                                                <li><a href="blog.html"><i className="ion-android-person"></i> Anderson</a></li>
                                                <li><a href="blog-details.html"><i className="ion-chatbubbles"></i> 3 Comments</a>
                                                </li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incdidunt ut labore et dolore magna aliqua [....]</p>
                                            <a href="blog-details.html" className="tm-readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Blog Single Item -->

                        <!-- Blog Single Item --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="tm-blog tm-scrollanim">
                                        <div className="tm-blog-topside">
                                            <div className="tm-blog-thumb">
                                                <img src="assets/images/blog/blog-image-3.jpg" alt="blog image" />
                                            </div>
                                            <span className="tm-blog-metahighlight"><span>Apr</span>17</span>
                                        </div>
                                        <div className="tm-blog-content">
                                            <h6 className="tm-blog-title"><a href="blog-details.html">Silver-colored tiara rings
                                                with clear
                                                gemstones</a></h6>
                                            <ul className="tm-blog-meta">
                                                <li><a href="blog.html"><i className="ion-android-person"></i> Anderson</a></li>
                                                <li><a href="blog-details.html"><i className="ion-chatbubbles"></i> 3 Comments</a>
                                                </li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incdidunt ut labore et dolore magna aliqua [....]</p>
                                            <a href="blog-details.html" className="tm-readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Blog Single Item -->

                        <!-- Blog Single Item --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="tm-blog tm-scrollanim">
                                        <div className="tm-blog-topside">
                                            <div className="tm-blog-thumb">
                                                <img src="assets/images/blog/blog-image-4.jpg" alt="blog image" />
                                            </div>
                                            <span className="tm-blog-metahighlight"><span>Apr</span>17</span>
                                        </div>
                                        <div className="tm-blog-content">
                                            <h6 className="tm-blog-title"><a href="blog-details.html">Diamond ring is worn on top of
                                                the
                                                engagement band</a></h6>
                                            <ul className="tm-blog-meta">
                                                <li><a href="blog.html"><i className="ion-android-person"></i> Anderson</a></li>
                                                <li><a href="blog-details.html"><i className="ion-chatbubbles"></i> 3 Comments</a>
                                                </li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incdidunt ut labore et dolore magna aliqua [....]</p>
                                            <a href="blog-details.html" className="tm-readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Blog Single Item -->

                        <!-- Blog Single Item --> */}
                                <div className="col-lg-4 col-md-6">
                                    <div className="tm-blog tm-scrollanim">
                                        <div className="tm-blog-topside">
                                            <div className="tm-blog-thumb">
                                                <img src="assets/images/blog/blog-image-5.jpg" alt="blog image" />
                                            </div>
                                            <span className="tm-blog-metahighlight"><span>Apr</span>17</span>
                                        </div>
                                        <div className="tm-blog-content">
                                            <h6 className="tm-blog-title"><a href="blog-details.html">White gold engagement rings
                                                for
                                                couples</a></h6>
                                            <ul className="tm-blog-meta">
                                                <li><a href="blog.html"><i className="ion-android-person"></i> Anderson</a></li>
                                                <li><a href="blog-details.html"><i className="ion-chatbubbles"></i> 3 Comments</a>
                                                </li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                                incdidunt ut labore et dolore magna aliqua [....]</p>
                                            <a href="blog-details.html" className="tm-readmore">Read more</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--// Blog Single Item --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!--// Latest Blogs Area -->

            <!-- Brand Logos --> */}
                    <div className="tm-section tm-brandlogo-area tm-padding-section bg-grey">
                        <div className="container">
                            <div className="row tm-brandlogo-slider">

                                {/* <!-- Brang Logo Single --> */}
                                <div className="col-12 tm-brandlogo">
                                    <a href="#">
                                        <img src="assets/images/brandlogo-1.png" alt="brand-logo" />
                                    </a>
                                </div>
                                {/* <!--// Brang Logo Single -->

                        <!-- Brang Logo Single --> */}
                                <div className="col-12 tm-brandlogo">
                                    <a href="#">
                                        <img src="assets/images/brandlogo-2.png" alt="brand-logo" />
                                    </a>
                                </div>
                                {/* <!--// Brang Logo Single -->

                        <!-- Brang Logo Single --> */}
                                <div className="col-12 tm-brandlogo">
                                    <a href="#">
                                        <img src="assets/images/brandlogo-3.png" alt="brand-logo" />
                                    </a>
                                </div>
                                {/* <!--// Brang Logo Single -->

                        <!-- Brang Logo Single --> */}
                                <div className="col-12 tm-brandlogo">
                                    <a href="#">
                                        <img src="assets/images/brandlogo-4.png" alt="brand-logo" />
                                    </a>
                                </div>
                                {/* <!--// Brang Logo Single -->

                        <!-- Brang Logo Single --> */}
                                <div className="col-12 tm-brandlogo">
                                    <a href="#">
                                        <img src="assets/images/brandlogo-5.png" alt="brand-logo" />
                                    </a>
                                </div>
                                {/* <!--// Brang Logo Single -->

                        <!-- Brang Logo Single --> */}
                                <div className="col-12 tm-brandlogo">
                                    <a href="#">
                                        <img src="assets/images/brandlogo-1.png" alt="brand-logo" />
                                    </a>
                                </div>
                                {/* <!--// Brang Logo Single -->

                        <!-- Brang Logo Single --> */}
                                <div className="col-12 tm-brandlogo">
                                    <a href="#">
                                        <img src="assets/images/brandlogo-2.png" alt="brand-logo" />
                                    </a>
                                </div>
                                {/* <!--// Brang Logo Single -->

                        <!-- Brang Logo Single --> */}
                                <div className="col-12 tm-brandlogo">
                                    <a href="#">
                                        <img src="assets/images/brandlogo-3.png" alt="brand-logo" />
                                    </a>
                                </div>
                                {/* <!--// Brang Logo Single -->

                        <!-- Brang Logo Single --> */}
                                <div className="col-12 tm-brandlogo">
                                    <a href="#">
                                        <img src="assets/images/brandlogo-4.png" alt="brand-logo" />
                                    </a>
                                </div>
                                {/* <!--// Brang Logo Single -->

                        <!-- Brang Logo Single --> */}
                                <div className="col-12 tm-brandlogo">
                                    <a href="#">
                                        <img src="assets/images/brandlogo-5.png" alt="brand-logo" />
                                    </a>
                                </div>
                                {/* <!--// Brang Logo Single --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!--// Brand Logos --> */}

                </main>
                {/* <!--// Page Content -->

        <!-- Footer --> */}
                <div className="tm-footer">

                    {/* <!-- Instagram Photos --> */}
                    <ul id="instafeed" className="tm-instaphotos"></ul>
                    {/* <!--// Instagram Photos -->

            <!-- Footer Top Area --> */}
                    <div className="tm-footer-toparea tm-padding-section">
                        <div className="container">
                            <div className="widgets widgets-footer row">

                                {/* <!-- Single Widget --> */}
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-widget widget-info">
                                        <a className="widget-info-logo" href="index.html"><img src="assets/images/logo.png"
                                            alt="logo" /></a>
                                        <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>
                                        <ul>
                                            <li><b>Address :</b>2726 Avenue Papineau Montreal, QC, Canada</li>
                                            <li><b>Phone :</b><a href="tel:+18009156270">1-800-915-6270</a></li>
                                            <li><b>Email :</b><a href="mailto:info@example.com">info@example.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!--// Single Widget -->

                        <!-- Single Widget --> */}
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-widget widget-quicklinks">
                                        <h6 className="widget-title">Useful Link</h6>
                                        <ul>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="#">Delivery Info</a></li>
                                            <li><a href="#">Privacy & Policy</a></li>
                                            <li><a href="#">Returns & Refunds</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!--// Single Widget -->

                        <!-- Single Widget --> */}
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-widget widget-quicklinks">
                                        <h6 className="widget-title">My Account</h6>
                                        <ul>
                                            <li><a href="my-account.html">My account</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li><a href="#">Newsletter</a></li>
                                            <li><a href="#">Check out</a></li>
                                            <li><a href="#">Frequently Questions</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!--// Single Widget -->

                        <!-- Single Widget --> */}
                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-widget widget-newsletter">
                                        <h6 className="widget-title">Join Our Newsletter</h6>
                                        <p>Get Business news, tip and solutions to
                                            your problems from our experts.</p>
                                        <form id="tm-mailchimp-form" className="widget-newsletter-form">
                                            <input id="mc-email" type="text" placeholder="Enter email address" />
                                            <button id="mc-submit" type="submit" className="tm-button">Subscribe Now
                                                <b></b></button>
                                        </form>
                                        {/* <!-- Mailchimp Alerts --> */}
                                        <div className="tm-mailchimp-alerts">
                                            <div className="tm-mailchimp-submitting"></div>
                                            <div className="mailchimp-success"></div>
                                            <div className="tm-mailchimp-error"></div>
                                        </div>
                                        {/* <!--// Mailchimp Alerts --> */}
                                    </div>
                                </div>
                                {/* <!--// Single Widget --> */}

                            </div>
                        </div>
                    </div>
                    {/* <!--// Footer Top Area -->

            <!-- Footer Bottom Area --> */}
                    <div className="tm-footer-bottomarea">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <p className="tm-footer-copyright">©
                                        2019. Designed by <a href="https://thememarch.com">ThemeMarch</a></p>
                                </div>
                                <div className="col-md-5">
                                    <div className="tm-footer-payment">
                                        <img src="assets/images/payment-methods.png" alt="payment methods" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--// Footer Bottom Area --> */}

                </div>
                {/* <!--// Footer -->

        <!-- Product Quickview --> */}
                <div className="tm-product-quickview" id="tm-product-quickview">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-10 col-12">
                                <div className="tm-product-quickview-inner">

                                    {/* <!-- Product Details --> */}
                                    <div className="tm-prodetails">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-10 col-12">
                                                <div className="tm-prodetails-images">
                                                    <div className="tm-prodetails-largeimages">
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-1.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-2.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-3.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-4.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-6.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-largeimage">
                                                            <img src="assets/images/products/product-image-6.jpg"
                                                                alt="product image" />
                                                        </div>
                                                    </div>
                                                    <div className="tm-prodetails-thumbnails">
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-1-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-2-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-3-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-4-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-5-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                        <div className="tm-prodetails-thumbnail">
                                                            <img src="assets/images/products/product-image-6-thumb.jpg"
                                                                alt="product image" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="tm-prodetails-content">
                                                    <h4 className="tm-prodetails-title">Stylist daimond ring</h4>
                                                    <span className="tm-prodetails-price"><del>$75.99</del> $59.99</span>
                                                    <div className="tm-ratingbox">
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span className="is-active"><i className="ion-android-star-outline"></i></span>
                                                        <span><i className="ion-android-star-outline"></i></span>
                                                    </div>
                                                    <div className="tm-prodetails-infos">
                                                        <div className="tm-prodetails-singleinfo">
                                                            <b>Product ID : </b>010
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo">
                                                            <b>Category : </b><a href="#">Ring</a>
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo tm-prodetails-tags">
                                                            <b>Tags : </b>
                                                            <ul>
                                                                <li><a href="#">bracelets</a></li>
                                                                <li><a href="#">diamond</a></li>
                                                                <li><a href="#">ring</a></li>
                                                                <li><a href="#">necklaces</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo">
                                                            <b>Available : </b>
                                                            <span className="color-theme">In Stock</span>
                                                        </div>
                                                        <div className="tm-prodetails-singleinfo tm-prodetails-share">
                                                            <b>Share : </b>
                                                            <ul>
                                                                <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                                <li><a href="#"><i className="ion-social-instagram-outline"></i></a>
                                                                </li>
                                                                <li><a href="#"><i className="ion-social-skype-outline"></i></a>
                                                                </li>
                                                                <li><a href="#"><i className="ion-social-pinterest-outline"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis quemi
                                                        dolor, malesuada id metus a, mattis eleifend elit. Nullam pharetra
                                                        consequat ex in dapibus. Vestibulum ante ipsum primis in faucibus
                                                        orciluctus curae.</p>
                                                    <div className="tm-prodetails-quantitycart">
                                                        <h6>Quantity :</h6>
                                                        <div className="tm-quantitybox">
                                                            <label htmlFor="myInput">My Input:</label>
                                                            <input
                                                                type="text"
                                                                id="myInput"
                                                                value={value}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <a href="#" className="tm-button tm-button-dark">Add To Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--// Product Details --> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--// Product Quickview --> */}

                <button id="back-top-top" aria-label="Back to Top">
                    <i className="ion-arrow-up-c"></i>
                </button>
            </div>
            {/* <!--// Wrapper --> */}
        </div>

    )
}

export default Home;