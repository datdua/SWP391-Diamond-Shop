import React from "react";
import { Link } from "react-router-dom";


function About() {
    return (
        <div>
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
                                    <li><Link to="/">Home</Link></li>
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

                {/* Breadcrumb Area */}
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>About Us</h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li>About</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* //Breadcrumb Area */}

                {/* Page content */}
                <main className="page-content">
                    <div className="tm-section tm-feature-area bg-grey">
                        <div className="container">
                            <div className="row mt-30-reverse">

                                {/*Single Feature*/}
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

                                {/* Single Feature */}

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

                                { /*// Single Feature*/}

                                { /* Single Feature*/}

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

                                { /*// Single Feature*/}

                            </div>
                        </div>
                    </div>

                    {/* //Feature Area */}

                    {/* About Area */}

                    <div className="tm-about-area tm-padding-section bg-white">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="tm-about-image">
                                        <img src="assets/images/about-image.jpg" alt="about image" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="tm-about-content">
                                        <h4>WELCOME TO SUROSE STORE</h4>
                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elitsed do
                                            eiusmod ncididunt ametfh consectetur.</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnos trud
                                            exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur.</p>
                                        <p>Excepteur sint occaecat cupidatat non proident.sunt in culpa qui officia deserunt
                                            mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incid
                                            idunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* //About Area */}

                    {/* Team Members */}
                    <div className="tm-team-members tm-padding-section bg-grey">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-12">
                                    <div className="tm-sectiontitle text-center">
                                        <h3>MEET OUR TEAM</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed aci erat dales vitakse
                                            dalesnon estin vitae egestas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row tm-member-slider">

                                {/* Single Team Member */}
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                    <div className="tm-member">
                                        <div className="tm-member-topside">
                                            <img src="assets/images/team-member-1.jpg" alt="team member" />
                                            <ul>
                                                <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                <li><a href="#"><i className="ion-social-skype-outline"></i></a></li>
                                                <li><a href="#"><i className="ion-social-pinterest-outline"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="tm-member-bottomside">
                                            <h6>Henry Todd</h6>
                                            <p>Founder & CEO</p>
                                        </div>
                                    </div>
                                </div>

                                {/* //Single Team Members */}

                                {/* Single Team Members */}
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                    <div className="tm-member">
                                        <div className="tm-member-topside">
                                            <img src="assets/images/team-member-2.jpg" alt="team member" />
                                            <ul>
                                                <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                <li><a href="#"><i className="ion-social-skype-outline"></i></a></li>
                                                <li><a href="#"><i className="ion-social-pinterest-outline"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="tm-member-bottomside">
                                            <h6>Jamie McGuirk</h6>
                                            <p>Managing Director</p>
                                        </div>
                                    </div>
                                </div>

                                {/* //Single Team Members */}

                                {/* Single Team Members */}

                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                    <div className="tm-member">
                                        <div className="tm-member-topside">
                                            <img src="assets/images/team-member-3.jpg" alt="team member" />
                                            <ul>
                                                <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                <li><a href="#"><i className="ion-social-skype-outline"></i></a></li>
                                                <li><a href="#"><i className="ion-social-pinterest-outline"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="tm-member-bottomside">
                                            <h6>Sebastian Goudie</h6>
                                            <p>Sales Director</p>
                                        </div>
                                    </div>
                                </div>

                                {/* //Single Team Members */}

                                {/* Single Team Members */}
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                                    <div className="tm-member">
                                        <div className="tm-member-topside">
                                            <img src="assets/images/team-member-4.jpg" alt="team member" />
                                            <ul>
                                                <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                                                <li><a href="#"><i className="ion-social-instagram-outline"></i></a></li>
                                                <li><a href="#"><i className="ion-social-skype-outline"></i></a></li>
                                                <li><a href="#"><i className="ion-social-pinterest-outline"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="tm-member-bottomside">
                                            <h6>Bailey Beggs</h6>
                                            <p>Support Guru</p>
                                        </div>
                                    </div>
                                </div>

                                {/* //Single Team Members */}

                            </div>
                        </div>
                    </div>

                    {/* //Team Members */}

                    {/* Brand Logos */}

                    <div className="tm-section tm-brandlogo-area tm-padding-section bg-white">
                        <div className="container">
                            <div id="brandLogoCarousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row tm-brandlogo-slider">

                                            {/* Brand Logo Single */}

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 tm-brandlogo">
                                                <a href="#">
                                                    <img src="assets/images/brandlogo-1.png" alt="brand-logo" />
                                                </a>
                                            </div>

                                            {/* //Brand Logo Single */}

                                            {/* Brand Logo Single */}

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 tm-brandlogo">
                                                <a href="#">
                                                    <img src="assets/images/brandlogo-2.png" alt="brand-logo" />
                                                </a>
                                            </div>

                                            {/* //Brand Logo Single */}

                                            {/* Brand Logo Single */}

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 tm-brandlogo">
                                                <a href="#">
                                                    <img src="assets/images/brandlogo-3.png" alt="brand-logo" />
                                                </a>
                                            </div>

                                            {/* //Brand Logo Single */}

                                            {/* Brand Logo Single */}

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 tm-brandlogo">
                                                <a href="#">
                                                    <img src="assets/images/brandlogo-4.png" alt="brand-logo" />
                                                </a>
                                            </div>

                                            {/* //Brand Logo Single */}

                                            {/* Brand Logo Single */}

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 tm-brandlogo">
                                                <a href="#">
                                                    <img src="assets/images/brandlogo-5.png" alt="brand-logo" />
                                                </a>
                                            </div>

                                            {/* //Brand Logo Single */}

                                            {/* Brand Logo Single */}

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 tm-brandlogo">
                                                <a href="#">
                                                    <img src="assets/images/brandlogo-1.png" alt="brand-logo" />
                                                </a>
                                            </div>

                                            {/* //Brand Logo Single */}

                                            {/* Brand Logo Single */}

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 tm-brandlogo">
                                                <a href="#">
                                                    <img src="assets/images/brandlogo-2.png" alt="brand-logo" />
                                                </a>
                                            </div>

                                            {/* //Brand Logo Single */}

                                            {/* Brand Logo Single */}

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 tm-brandlogo">
                                                <a href="#">
                                                    <img src="assets/images/brandlogo-3.png" alt="brand-logo" />
                                                </a>
                                            </div>

                                            {/* //Brand Logo Single */}

                                            {/* Brand Logo Single */}

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 tm-brandlogo">
                                                <a href="#">
                                                    <img src="assets/images/brandlogo-4.png" alt="brand-logo" />
                                                </a>
                                            </div>

                                            {/* //Brand Logo Single */}

                                            {/* Brand Logo Single */}

                                            <div className="col-lg-3 col-md-3 col-sm-6 col-6 tm-brandlogo">
                                                <a href="#">
                                                    <img src="assets/images/brandlogo-5.png" alt="brand-logo" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#brandLogoCarousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#brandLogoCarousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* //Brand Logos */}

                </main>

                {/* //Page Content */}

                {/* Footer */}

                <div className="tm-footer">

                    {/* Instagram Photos */}

                    <ul id="instafeed" className="tm-instaphotos"></ul>

                    {/* //Instagram Photos */}

                    {/* Footer Top Area */}

                    <div className="tm-footer-toparea tm-padding-section">
                        <div className="container">
                            <div className="widgets widgets-footer row">

                                {/* Single Widget */}

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

                                {/* //Single Widget */}

                                <div className="col-lg-3 col-md-6 col-12">
                                    <div className="single-widget widget-quicklinks">
                                        <h6 className="widget-title">Useful Link</h6>
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Delivery Info</a></li>
                                            <li><a href="#">Privacy & Policy</a></li>
                                            <li><a href="#">Returns & Refunds</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* //Single Widget */}

                                {/* Single Widget */}

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

                                {/* Single Widget */}

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
                                        {/* Mailchimp Alerts */}
                                        <div className="tm-mailchimp-alerts">
                                            <div className="tm-mailchimp-submitting"></div>
                                            <div className="mailchimp-success"></div>
                                            <div className="tm-mailchimp-error"></div>
                                        </div>
                                        {/*// Mailchimp Alerts */}
                                    </div>
                                </div>

                                {/* Single Widget */}

                            </div>
                        </div>
                    </div>

                    {/* //Footer Top Area */}

                    {/* Footer Bottom Area */}

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

                    {/* //Footer Bottom Area */}

                </div>

                {/* Footer */}

            </div >
        </div >
    );
}
export default About;
