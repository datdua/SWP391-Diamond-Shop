import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

function MyAccountPage() {
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
                <Header/>
                {/* <!--// Header --> 

                <!-- Breadcrumb Area --> */}
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Login & Register</h2>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
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
                <Footer/>
                {/* <!--// Footer --> */}

                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>

            </div>
            {/* <!--// Wrapper --> */}

        </div>
    )
}
export default MyAccountPage;