import React from "react";
import { Link } from "react-router-dom";

function MyAccount() {
    return (
        <div>
            {/* <!-- Preloader --> 
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
                                            <button type="button" aria-label="My Account">My Account</button>
                                            <ul>
                                                <li><Link to="/account">My Account</Link></li>
                                                <li><Link to="/login">Login/Register</Link></li>
                                                <li><Link to="/cart">Shopping Cart</Link></li>
                                                <li><Link to="/wishlist">Wishlist</Link></li>
                                                <li><Link to="/checkout">Checkout</Link></li>
                                            </ul>
                                        </div>
                                        <div className="tm-dropdown tm-header-currency">
                                            <button type="button" aria-label="Currency Selection">USD</button>
                                            <ul>
                                                <li><a href="#">USD</a></li>
                                                <li><a href="#">EUR</a></li>
                                                <li><a href="#">JPY</a></li>
                                                <li><a href="#">GBP</a></li>
                                            </ul>
                                        </div>
                                        <div className="tm-dropdown tm-header-language">
                                            <button aria-label="Language Selection"><img src="assets/images/flag-english.png" alt="language" />English</button>
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
                    {/* <!--// Header Top Area --> */}

                    {/* <!-- Header Middle Area --> */}
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
                {/* <!--// Header --> 

                <!-- Breadcrumb Area --> */}
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Login & Register</h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>My Account</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--// Breadcrumb Area -->

                <!-- Page Content --> */}
                <main className="page-content">

                    {/* <!-- My Account Area --> */}
                    <div className="tm-section tm-my-account-area bg-white tm-padding-section">
                        <div className="container">
                            <div className="tm-myaccount">
                                <ul className="nav tm-tabgroup" id="account" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="account-dashboard-tab" data-toggle="tab"
                                            href="#account-dashboard" role="tab" aria-controls="account-dashboard"
                                            aria-selected="true">Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="account-orders-tab" data-toggle="tab" href="#account-orders"
                                            role="tab" aria-controls="account-orders" aria-selected="false">Orders</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="account-address-tab" data-toggle="tab" href="#account-address"
                                            role="tab" aria-controls="account-address" aria-selected="false">Address</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="account-acdetails-tab" data-toggle="tab"
                                            href="#account-acdetails" role="tab" aria-controls="account-acdetails"
                                            aria-selected="false">Account Details</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="account-logout-tab" href="login-register.html" role="tab"
                                            aria-controls="account-address" aria-selected="false">Logout</a>
                                    </li>
                                </ul>

                                <div className="tab-content" id="account-ontent">
                                    <div className="tab-pane fade show active" id="account-dashboard" role="tabpanel"
                                        aria-labelledby="account-dashboard-tab">
                                        <div className="tm-myaccount-dashboard">
                                            <p>Hello <b>William Bean</b> (not <b>William Bean</b>? <a
                                                href="login-register.html">Log
                                                out</a>)</p>
                                            <p>From your account dashboard you can view your recent orders, manage your
                                                shipping and billing addresses, and edit your password and account details.</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="account-orders" role="tabpanel"
                                        aria-labelledby="account-orders-tab">
                                        <div className="tm-myaccount-orders">
                                            <div className="table-responsive">
                                                <table className="table table-bordered mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th className="tm-myaccount-orders-col-id">ORDER ID</th>
                                                            <th className="tm-myaccount-orders-col-date">DATE</th>
                                                            <th className="tm-myaccount-orders-col-status">STATUS</th>
                                                            <th className="tm-myaccount-orders-col-total">TOTAL</th>
                                                            <th className="tm-myaccount-orders-col-view">VIEW</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>#12345</td>
                                                            <td>30 December 2018</td>
                                                            <td>On Hold</td>
                                                            <td>$132.00 for 2 items</td>
                                                            <td><a href="#" className="tm-button tm-button-small">View</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>#12346</td>
                                                            <td>30 December 2018</td>
                                                            <td>On Hold</td>
                                                            <td>$220.00 for 3 items</td>
                                                            <td><a href="#" className="tm-button tm-button-small">View</a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="account-address" role="tabpanel"
                                        aria-labelledby="account-address-tab">
                                        <div className="tm-myaccount-address">
                                            <p><b>The following addresses will be used on the checkout page by default.</b></p>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="tm-myaccount-address-billing">
                                                        <a href="#" className="edit-button">Edit</a>
                                                        <h3>Billing Address</h3>
                                                        <div>
                                                            <p>Jonathon Doe</p>
                                                            <p>Example company</p>
                                                            <p>516 Wintheiser Circles/</p>
                                                            <p>Lake Jordanmouth</p>
                                                            Jordan
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 mt-30 mt-md-0">
                                                    <div className="tm-myaccount-address-shipping">
                                                        <a href="#" className="edit-button">Edit</a>
                                                        <h3>Shipping Address</h3>
                                                        <div>
                                                            <p>Jonathon Doe</p>
                                                            <p>Example company</p>
                                                            <p>516 Wintheiser Circles</p>
                                                            <p>Lake Jordanmouth</p>
                                                            Jordan
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="account-acdetails" role="tabpanel"
                                        aria-labelledby="account-acdetails-tab">
                                        <div className="tm-myaccount-acdetails">
                                            <form action="#" className="tm-form tm-form-bordered">
                                                <h4>Account Details</h4>
                                                <div className="tm-form-inner">
                                                    <div className="tm-form-field tm-form-fieldhalf">
                                                        <label for="acdetails-firstname">First name</label>
                                                        <input type="text" id="acdetails-firstname" />
                                                    </div>
                                                    <div className="tm-form-field tm-form-fieldhalf">
                                                        <label for="acdetails-lastname">Last name</label>
                                                        <input type="text" id="acdetails-lastname" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <label for="acdetails-displayname">Dispaly name</label>
                                                        <input type="text" id="acdetails-displayname" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <label for="acdetails-email">Email address</label>
                                                        <input type="email" id="acdetails-email" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <label for="acdetails-password">Old password</label>
                                                        <input type="password" id="acdetails-password" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <label for="acdetails-newpassword">New password</label>
                                                        <input type="password" id="acdetails-newpassword" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <label for="acdetails-confirmpass">Confirm password</label>
                                                        <input type="password" id="acdetails-confirmpass" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <input type="checkbox" name="acdetails-agreeterms"
                                                            id="acdetails-agreeterms" />
                                                        <label for="acdetails-agreeterms">I have read and agree to the Privacy
                                                            Policy</label>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <button type="submit" className="tm-button">Save Changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--// My Account Area --> */}

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
export default MyAccount;