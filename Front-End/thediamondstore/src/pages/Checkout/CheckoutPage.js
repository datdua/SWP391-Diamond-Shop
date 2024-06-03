import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./CheckoutPage.css"
function CheckoutPage() {
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
            /* <!--// Preloader -->

            <!-- Wrapper --> */}
            <div id="wrapper" className="wrapper">

                {/* <!-- Header --> */}
                  
                {/* <!--// Header --> 

                <!-- Breadcrumb Area --> */}
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Checkout</h2>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/product">Shop</Link></li>
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
                                            required="required" />
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
                                                    <input type="text" id="billingform-firstname" />
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="billingform-lastname">Last name*</label>
                                                    <input type="text" id="billingform-lastname" />
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="billingform-companyname">Company name</label>
                                                    <input type="text" id="billingform-companyname" />
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="billingform-email">Email address</label>
                                                    <input type="email" id="billingform-email" />
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="billingform-phone">Phone (Optional)</label>
                                                    <input type="text" id="billingform-phone" />
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
                                                        placeholder="Apartment, Street Address" />
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="billingform-streetaddress">State</label>
                                                    <input type="text" id="billingform-streetaddress" />
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="billingform-zipcode">Zip / Postcode</label>
                                                    <input type="text" id="billingform-zipcode" />
                                                </div>
                                                <div className="tm-form-field">
                                                    <input type="checkbox" name="billform-dirrentswitch"
                                                        id="billform-dirrentswitch" />
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
                                                    <input type="text" id="differentform-firstname" />
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="differentform-lastname">Last name*</label>
                                                    <input type="text" id="differentform-lastname" />
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="differentform-companyname">Company name</label>
                                                    <input type="text" id="differentform-companyname" />
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="differentform-email">Email address</label>
                                                    <input type="email" id="differentform-email" />
                                                </div>
                                                <div className="tm-form-field">
                                                    <label for="differentform-phone">Phone (Optional)</label>
                                                    <input type="text" id="differentform-phone" />
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
                                                        placeholder="Apartment, Street Address" />
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="differentform-streetaddress">State</label>
                                                    <input type="text" id="differentform-streetaddress" />
                                                </div>
                                                <div className="tm-form-field tm-form-fieldhalf">
                                                    <label for="differentform-zipcode">Zip / Postcode</label>
                                                    <input type="text" id="differentform-zipcode" />
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
                                                            id="checkout-payment-banktransfer" />
                                                        <label for="checkout-payment-banktransfer">Direct Bank Transfer</label>
                                                        <div className="tm-checkout-payment-content">
                                                            <p>Make your payment directly into our bank account.</p>
                                                        </div>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <input type="radio" name="checkout-payment-method"
                                                            id="checkout-payment-checkpayment" checked="checked" />
                                                        <label for="checkout-payment-checkpayment">Check Payments</label>
                                                        <div className="tm-checkout-payment-content">
                                                            <p>Please send a check to Store Name, Store Street, Store Town,
                                                                Store State / County, Store Postcode.</p>
                                                        </div>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <input type="radio" name="checkout-payment-method"
                                                            id="checkout-payment-cashondelivery" />
                                                        <label for="checkout-payment-cashondelivery">Cash On Delivery</label>
                                                        <div className="tm-checkout-payment-content">
                                                            <p>Pay with cash upon delivery.</p>
                                                        </div>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <input type="radio" name="checkout-payment-method"
                                                            id="checkout-payment-paypal" />
                                                        <label for="checkout-payment-paypal">PayPal</label>
                                                        <div className="tm-checkout-payment-content">
                                                            <p>Pay via PayPal.</p>
                                                        </div>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <input type="radio" name="checkout-payment-method"
                                                            id="checkout-payment-creditcard" />
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
                                                            id="checkout-read-terms" />
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
                
                {/* <!--// Footer --> */}

                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>

            </div>
            {/* <!--// Wrapper --> */}
        </div>
    )
}
export default CheckoutPage