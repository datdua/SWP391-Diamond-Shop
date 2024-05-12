import React from "react";

function LoginRegister() {
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
                                            <button>My Account</button>
                                            <ul>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="login-register.html">Login/Register</a></li>
                                                <li><a href="cart.html">Shopping Cart</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                            </ul>
                                        </div>
                                        <div className="tm-dropdown tm-header-currency">
                                            <button>USD</button>
                                            <ul>
                                                <li><a href="#">USD</a></li>
                                                <li><a href="#">EUR</a></li>
                                                <li><a href="#">JPY</a></li>
                                                <li><a href="#">GBP</a></li>
                                            </ul>
                                        </div>
                                        <div className="tm-dropdown tm-header-language">
                                            <button><img src="assets/images/flag-english.png" alt="language" />English</button>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--// Header Top Area -->

                    <!-- Header Middle Area --> */}
                    <div className="tm-header-middlearea bg-white">
                        <div className="container">
                            <div className="tm-mobilenav"></div>
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-6 order-1 order-lg-1">
                                    <a href="index.html" className="tm-header-logo">
                                        <img src="assets/images/logo.png" alt="surose" />
                                    </a>
                                </div>
                                <div className="col-lg-6 col-12 order-3 order-lg-2">
                                    <form className="tm-header-search">
                                        <input type="text" placeholder="Search product..." />
                                        <button><i className="ion-android-search"></i></button>
                                    </form>
                                </div>
                                <div className="col-lg-3 col-6 order-2 order-lg-3">
                                    <ul className="tm-header-icons">
                                        <li><a href="wishlist.html"><i className="ion-android-favorite-outline"></i><span>0</span></a></li>
                                        <li><a href="cart.html"><i className="ion-bag"></i><span>0</span></a></li>
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
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li className="tm-header-nav-dropdown"><a href="products.html">Shop</a>
                                        <ul>
                                            <li><a href="products.html">Products</a></li>
                                            <li><a href="products-leftsidebar.html">Products Left Sidebar</a></li>
                                            <li><a href="products-nosidebar.html">Products Without Sidebar</a></li>
                                            <li><a href="products-4-column.html">Products 4 Column</a></li>
                                            <li><a href="product-details.html">Product Details</a></li>
                                            <li><a href="product-details-leftsidebar.html">Product Details Left Sidebar</a></li>
                                            <li><a href="product-details-nosidebar.html">Product Details Without Sidebar</a>
                                            </li>
                                            <li><a href="#">Others</a>
                                                <ul>
                                                    <li><a href="cart.html">Shopping Cart</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="login-register.html">Login / Register</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="tm-header-nav-megamenu"><a href="index.html">Pages</a>

                                        <ul>
                                            <li><a href="shop.html">Common Pages</a>
                                                <ul>
                                                    <li><a href="index.html">Homepage</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="portfolios.html">Portfolios</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Blog Pages</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-leftsidebar.html">Blog Left Sidebar</a></li>
                                                    <li><a href="blog-details.html">Blog Details</a></li>
                                                    <li><a href="blog-details-leftsidebar.html">Blog Details Left Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Shop Pages</a>
                                                <ul>
                                                    <li><a href="products.html">Products</a></li>
                                                    <li><a href="products-leftsidebar.html">Products Left Sidebar</a></li>
                                                    <li><a href="products-nosidebar.html">Products Without Sidebar</a></li>
                                                    <li><a href="products-4-column.html">Products 4 Column</a></li>
                                                    <li><a href="product-details.html">Product Details</a></li>
                                                    <li><a href="product-details-leftsidebar.html">Product Details Left
                                                        Sidebar</a></li>
                                                    <li><a href="product-details-nosidebar.html">Product Details Without
                                                        Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Shop Related Pages</a>
                                                <ul>
                                                    <li><a href="cart.html">Shopping Cart</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                    <li><a href="my-account.html">My Account</a></li>
                                                    <li><a href="login-register.html">Login / Register</a></li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="tm-header-nav-dropdown"><a href="blog.html">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-leftsidebar.html">Blog Left Sidebar</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                            <li><a href="blog-details-leftsidebar.html">Blog Details Left Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* <!--// Header Bottom Area --> */}

                </div>
                {/* <!--// Header -->

                <!-- Breadcrumb Area --> */}
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" data-bgimage="assets/images/breadcrumb-bg.jpg">
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Login & Register</h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>Login & Register</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--// Breadcrumb Area -->

                <!-- Page Content --> */}
                <main className="page-content">

                    {/* <!-- Login Register Area --> */}
                    <div className="tm-section tm-login-register-area bg-white tm-padding-section">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-6">
                                    <form action="#" className="tm-form tm-login-form">
                                        <h4>Login</h4>
                                        <p>Become a part of our community!</p>
                                        <div className="tm-form-inner">
                                            <div className="tm-form-field">
                                                <label for="login-email">Username or email address*</label>
                                                <input type="email" id="login-email" required="required" />
                                            </div>
                                            <div className="tm-form-field">
                                                <label for="login-password">Password*</label>
                                                <input type="password" id="login-password" required="required" />
                                            </div>
                                            <div className="tm-form-field">
                                                <input type="checkbox" name="login-remember" id="login-remember" />
                                                <label for="login-remember">Remember Me</label>
                                                <p className="mb-0"><a href="#">Forgot your password?</a></p>
                                            </div>
                                            <div className="tm-form-field">
                                                <button type="submit" className="tm-button">Login</button>
                                            </div>
                                            <div className="tm-form-field">
                                                <div className="tm-form-sociallogin">
                                                    <h6>Or, Login with :</h6>
                                                    <ul>
                                                        <li><a href="#" className="facebook-btn"><i className="ion-social-facebook"></i></a></li>
                                                        <li><a href="#" className="google-btn"><i className="ion-social-google"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-lg-6">
                                    <form action="#" className="tm-form tm-register-form">
                                        <h4>Create an account</h4>
                                        <p>Welcome! Register for an account</p>
                                        <div className="tm-form-inner">
                                            <div className="tm-form-field">
                                                <label for="register-username">Username</label>
                                                <input type="text" id="register-username" required="required" />
                                            </div>
                                            <div className="tm-form-field">
                                                <label for="register-email">Email address</label>
                                                <input type="email" id="register-email" required="required" />
                                            </div>
                                            <div className="tm-form-field">
                                                <label for="register-password">Password</label>
                                                <input type="password" id="register-password" name="register-pass"
                                                    required="required" />
                                            </div>
                                            <div className="tm-form-field">
                                                <div>
                                                    <input type="checkbox" id="register-pass-show" name="register-pass-show" />
                                                    <label for="register-pass-show">Show Password</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="register-terms" name="register-terms" />
                                                    <label for="register-terms">I have read and agree to the website <a
                                                        href="#">terms and
                                                        conditions</a></label>
                                                </div>
                                            </div>
                                            <div className="tm-form-field">
                                                <button type="submit" className="tm-button">Register</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!--// Login Register Area --> */}

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
                {/* <!--// Footer --> */}

                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>

            </div>
            {/* <!--// Wrapper --> */}


        </div>
    )
}
export default LoginRegister