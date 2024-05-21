import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

function LoginRegisterPage() {
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
                                <li><Link tp="/home">Home</Link></li>
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
                <Footer/>
                {/* <!--// Footer --> */}

                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>

            </div>
            {/* <!--// Wrapper --> */}


        </div>
    )
}
export default LoginRegisterPage