import React from "react";
import { Link } from "react-router-dom";

function Contact() {
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
            {/* <!--// Preloader --> */}

            {/* <!-- Wrapper --> */}
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

                <!-- Page Content --> */}
                <main className="page-content">

                    {/* <!-- Google Map --> */}
                    <div id="google-map" className="google-map"></div>
                    {/* <!--// Google Map -->

                    <!-- Contact Area --> */}
                    <div className="tm-section tm-contact-area tm-padding-section bg-white">
                        <div className="container">
                            <div className="tm-contact-blocks">
                                <div className="row mt-30-reverse justify-content-center">

                                    {/* <!-- Contact block --> */}
                                    <div className="col-lg-4 col-md-6  mt-30">
                                        <div className="tm-contact-block text-center">
                                            <i className="ion-android-call"></i>
                                            <h6>Call Us</h6>
                                            <p>Phone : <a href="tel:+18009156270">1 800 915 6270</a></p>
                                            <p>Tel : <a href="tel:+15147332010">1 514 733 2010</a></p>
                                        </div>
                                    </div>
                                    {/* <!--// Contact block -->

                                    <!-- Contact block --> */}
                                    <div className="col-lg-4 col-md-6  mt-30">
                                        <div className="tm-contact-block text-center">
                                            <i className="ion-location"></i>
                                            <h6>Our Location</h6>
                                            <p>7415 Transcanadienne, Suite 100 St. Laurent, Quebec, Canada H45T 1Z22</p>
                                        </div>
                                    </div>
                                    {/* <!--// Contact block -->

                                    <!-- Contact block --> */}
                                    <div className="col-lg-4 col-md-6  mt-30">
                                        <div className="tm-contact-block text-center">
                                            <i className="ion-email"></i>
                                            <h6>Email</h6>
                                            <p><a href="mailto:surose@gmail.com">surose@gmail.com</a></p>
                                            <p><a href="mailto:info@surose.com">info@surose.com</a></p>
                                        </div>
                                    </div>
                                    {/* <!--// Contact block --> */}

                                </div>
                            </div>

                            <div className="tm-contact-forms tm-padding-section-top">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-12">
                                        <div className="tm-sectiontitle text-center">
                                            <h3>SEND US A MESSAGE</h3>
                                            <p>You can contact us for any of your requirements. We’ll help you meet your needs.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <form id="tm-contactform" action="assets/php/mailer.php"
                                            className="tm-contact-forminner tm-form" method="POST">
                                            <div className="tm-form-inner">
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="contact-form-name">Name</label>
                                                    <input type="text" id="contact-form-name" placeholder="Your name here"
                                                        name="name" required />
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="contact-form-email">Email</label>
                                                    <input type="email" id="contact-form-email" placeholder="surose@example.com"
                                                        name="email" required />
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="contact-form-phone">Phone</label>
                                                    <input type="text" id="contact-form-phone"
                                                        placeholder="Your phone number here" name="phone" required />
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="contact-form-subject">Subject</label>
                                                    <input type="text" id="contact-form-subject" placeholder="Your subjert"
                                                        name="subject" />
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="contact-form-message">Message</label>
                                                    <textarea cols="30" rows="5" id="contact-form-message"
                                                        placeholder="Write your message" name="message"></textarea>
                                                </div>
                                                <div className="tm-form-field text-center">
                                                    <button type="submit" className="tm-button tm-button-block">Send
                                                        Message</button>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="form-messages"></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!--// Contact Area --> */}

                </main>
                {/* <!--// Page Content -->

                <!-- Footer --> */}
                <div className="tm-footer">

                    {/* <!-- Instagram Photos --> */}
                    <ul id="instafeed" className="tm-instaphotos"></ul>
                    {/* <!--// Instagram Photos --> */}

                    {/* <!-- Footer Top Area --> */}
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
export default Contact;