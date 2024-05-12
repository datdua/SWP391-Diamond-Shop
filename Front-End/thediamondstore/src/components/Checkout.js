import React from "react";

function Checkout() {
    return (
        <div>

            {/* <!-- Preloader --> */}
            <div className="tm-preloader">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="tm-preloader-logo">
                                <img src="assets/images/logo.png" alt="logo"/>
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
                                            <button><img src="assets/images/flag-english.png" alt="language"/>English</button>
                                            <ul>
                                                <li><a href="#"><img src="assets/images/flag-english.png"
                                                    alt="language"/>English</a></li>
                                                <li><a href="#"><img src="assets/images/flag-spain.png"
                                                    alt="language"/>Spanish</a></li>
                                                <li><a href="#"><img src="assets/images/flag-russian.png"
                                                    alt="language"/>Russian</a></li>
                                                <li><a href="#"><img src="assets/images/flag-french.png"
                                                    alt="language"/>French</a></li>
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
                                        <img src="assets/images/logo.png" alt="surose"/>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-12 order-3 order-lg-2">
                                    <form className="tm-header-search">
                                        <input type="text" placeholder="Search product..."/>
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
                            <h2>Checkout</h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="products.html">Shop</a></li>
                                <li>Checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--// Breadcrumb Area -->

                <!-- Page Content --> */}
                <main className="page-content">

                    {/* <!-- Checkout Area --> */}
                    <div className="tm-section tm-checkout-area bg-white tm-padding-section">
                        <div className="container">
                            <div className="tm-checkout-coupon">
                                <a href="#checkout-couponform" data-toggle="collapse"><span>Have a coupon code?</span> Click
                                    here and enter your code.</a>
                                <div id="checkout-couponform" className="collapse">
                                    <form action="#" className="tm-checkout-couponform">
                                        <input type="text" id="coupon-field" placeholder="Enter coupon code"
                                            required="required"/>
                                            <button type="submit" className="tm-button">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <form action="#" className="tm-form tm-checkout-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4 className="small-title">BILLING INFORMATION</h4>

                                        {/* <!-- Billing Form --> */}
                                        <div className="tm-checkout-billingform">
                                            <div className="tm-form-inner">
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="billingform-firstname">First name*</label>
                                                    <input type="text" id="billingform-firstname"/>
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="billingform-lastname">Last name*</label>
                                                    <input type="text" id="billingform-lastname"/>
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="billingform-companyname">Company name</label>
                                                    <input type="text" id="billingform-companyname"/>
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="billingform-email">Email address</label>
                                                    <input type="email" id="billingform-email"/>
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="billingform-phone">Phone (Optional)</label>
                                                    <input type="text" id="billingform-phone"/>
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="billingform-country">Country</label>
                                                    <select name="billingform-country" id="billingform-country">
                                                        <option value="bangladesh">United States</option>
                                                        <option value="bangladesh">Mexico</option>
                                                        <option value="bangladesh">Australia</option>
                                                        <option value="bangladesh">Germany</option>
                                                        <option value="bangladesh">Sweden</option>
                                                        <option value="bangladesh">France</option>
                                                    </select>
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="billingform-address">Address</label>
                                                    <input type="text" id="billingform-address"
                                                        placeholder="Apartment, Street Address"/>
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="billingform-streetaddress">State</label>
                                                    <input type="text" id="billingform-streetaddress"/>
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="billingform-zipcode">Zip / Postcode</label>
                                                    <input type="text" id="billingform-zipcode"/>
                                                </div>
                                                <div className="tm-form-field">
                                                    <input type="checkbox" name="billform-dirrentswitch"
                                                        id="billform-dirrentswitch"/>
                                                        <label for="billform-dirrentswitch"><b>Ship to another address</b></label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--// Billing Form -->

                                        <!-- Different Address Form --> */}
                                        <div className="tm-checkout-differentform">
                                            <div className="tm-form-inner">
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="differentform-firstname">First name*</label>
                                                    <input type="text" id="differentform-firstname"/>
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="differentform-lastname">Last name*</label>
                                                    <input type="text" id="differentform-lastname"/>
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="differentform-companyname">Company name</label>
                                                    <input type="text" id="differentform-companyname"/>
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="differentform-email">Email address</label>
                                                    <input type="email" id="differentform-email"/>
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="differentform-phone">Phone (Optional)</label>
                                                    <input type="text" id="differentform-phone"/>
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="differentform-country">Country</label>
                                                    <select name="differentform-country" id="differentform-country">
                                                        <option value="bangladesh">United States</option>
                                                        <option value="bangladesh">Mexico</option>
                                                        <option value="bangladesh">Australia</option>
                                                        <option value="bangladesh">Germany</option>
                                                        <option value="bangladesh">Sweden</option>
                                                        <option value="bangladesh">France</option>
                                                    </select>
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="differentform-address">Address</label>
                                                    <input type="text" id="differentform-address"
                                                        placeholder="Apartment, Street Address"/>
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="differentform-streetaddress">State</label>
                                                    <input type="text" id="differentform-streetaddress"/>
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="differentform-zipcode">Zip / Postcode</label>
                                                    <input type="text" id="differentform-zipcode"/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--// Different Address Form --> */}

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tm-checkout-orderinfo">
                                            <div className="table-responsive">
                                                <table className="table table-borderless tm-checkout-ordertable">
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Cosmetic plastic compact powder * 1</td>
                                                            <td>$75.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Cosmetics and makeup brushes * 1</td>
                                                            <td>$70.50</td>
                                                        </tr>
                                                    </tbody>
                                                    <tfoot>
                                                        <tr className="tm-checkout-subtotal">
                                                            <td>Cart Subtotal</td>
                                                            <td>$175.00</td>
                                                        </tr>
                                                        <tr className="tm-checkout-shipping">
                                                            <td>(+) Shipping Charge</td>
                                                            <td>$15.00</td>
                                                        </tr>
                                                        <tr className="tm-checkout-total">
                                                            <td>Total</td>
                                                            <td>$190.00</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>

                                            <div className="tm-checkout-payment">
                                                <h4>Select Payment Method</h4>
                                                <div className="tm-form-inner">
                                                    <div className="tm-form-field">
                                                        <input type="radio" name="checkout-payment-method"
                                                            id="checkout-payment-banktransfer"/>
                                                            <label for="checkout-payment-banktransfer">Direct Bank Transfer</label>
                                                            <div className="tm-checkout-payment-content">
                                                                <p>Make your payment directly into our bank account.</p>
                                                            </div>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <input type="radio" name="checkout-payment-method"
                                                            id="checkout-payment-checkpayment" checked="checked"/>
                                                            <label for="checkout-payment-checkpayment">Check Payments</label>
                                                            <div className="tm-checkout-payment-content">
                                                                <p>Please send a check to Store Name, Store Street, Store Town,
                                                                    Store State / County, Store Postcode.</p>
                                                            </div>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <input type="radio" name="checkout-payment-method"
                                                            id="checkout-payment-cashondelivery"/>
                                                            <label for="checkout-payment-cashondelivery">Cash On Delivery</label>
                                                            <div className="tm-checkout-payment-content">
                                                                <p>Pay with cash upon delivery.</p>
                                                            </div>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <input type="radio" name="checkout-payment-method"
                                                            id="checkout-payment-paypal"/>
                                                            <label for="checkout-payment-paypal">PayPal</label>
                                                            <div className="tm-checkout-payment-content">
                                                                <p>Pay via PayPal.</p>
                                                            </div>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <input type="radio" name="checkout-payment-method"
                                                            id="checkout-payment-creditcard"/>
                                                            <label for="checkout-payment-creditcard">Credit Card</label>
                                                            <div className="tm-checkout-payment-content">
                                                                <p>Pay with your credit card via Stripe.</p>
                                                            </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tm-checkout-submit">
                                                <p>Your personal data will be used to process your order, support your
                                                    experience throughout this website, and for other purposes described in our
                                                    privacy policy.</p>
                                                <div className="tm-form-inner">
                                                    <div className="tm-form-field">
                                                        <input type="checkbox" name="checkout-read-terms"
                                                            id="checkout-read-terms"/>
                                                            <label for="checkout-read-terms">I have read and agree to the website
                                                                terms and conditions</label>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <button type="submit" className="tm-button ml-auto">Place Order</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!--// Checkout Area --> */}

                </main>
                {/* <!--// Page Content --> */}

                {/* <!-- Footer --> */}
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
                                            alt="logo"/></a>
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
                                            <input id="mc-email" type="text" placeholder="Enter email address"/>
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
                                        <img src="assets/images/payment-methods.png" alt="payment methods"/>
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
export default Checkout