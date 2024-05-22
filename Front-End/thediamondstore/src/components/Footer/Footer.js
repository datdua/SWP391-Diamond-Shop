import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
function Footer(){
    return(
        /* Footer */

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
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="#">Delivery Info</Link></li>
                                <li><Link to="#">Privacy & Policy</Link></li>
                                <li><Link to="#">Returns & Refunds</Link></li>
                                <li><Link to="#">Terms & Conditions</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* //Single Widget */}

                    {/* Single Widget */}

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="single-widget widget-quicklinks">
                            <h6 className="widget-title">My Account</h6>
                            <ul>
                                <li><Link to="/account">My account</Link></li>
                                <li><Link to="/cart">Cart</Link></li>
                                <li><Link to="/wishlist">Wishlist</Link></li>
                                <li><Link to="#">Newsletter</Link></li>
                                <li><Link to="#">Check out</Link></li>
                                <li><Link to="#">Frequently Questions</Link></li>
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

    /* Footer */
    )
}
export default Footer