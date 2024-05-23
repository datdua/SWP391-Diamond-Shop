import React from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./LoginRegisterPage.css"
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
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/banner-header.png)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Đăng Nhập & Đăng Ký</h2>
                            <ul className="add-back">
                                <li><NavLink to="/home">Trang chủ</NavLink></li>
                                <li>Đăng Nhập & Đăng Ký</li>
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
                                        <h4>Đăng Nhập</h4>
                                        <p>Hãy trở thành một phần của cộng đồng chúng tôi!</p>
                                        <div className="tm-form-inner">
                                            <div className="tm-form-field">
                                                <label for="login-email">Email*</label>
                                                <input type="email" id="login-email" required="required" />
                                            </div>
                                            <div className="tm-form-field">
                                                <label for="login-password">Mật khẩu*</label>
                                                <input type="password" id="login-password" required="required" />
                                            </div>
                                            <div className="tm-form-field">
                                                <p className="mb-0"><a href="#">Quên mật khẩu?</a></p>
                                            </div>
                                            <div className="tm-form-field">
                                                <button type="submit" className="tm-button">Đăng Nhập</button>
                                            </div>
                                            <div className="tm-form-field">
                                                <div className="tm-form-sociallogin">
                                                    <h6>Hoặc, đăng nhập với :</h6>
                                                    <ul>
                                                        <li><a href="#" className="google-btn"><i className="ion-social-google"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="col-lg-6">
                                    <form action="#" className="tm-form tm-register-form">
                                        <h4>Tạo tài khoản</h4>
                                        <p>Chào mừng! Đăng ký tài khoản</p>
                                        <div className="tm-form-inner">
                                            <div className="tm-form-field">
                                                <label for="register-email">Email</label>
                                                <input type="email" id="register-email" required="required" />
                                            </div>
                                            <div className="tm-form-field">
                                                <label for="register-password">Mật khẩu</label>
                                                <input type="password" id="register-password" name="register-pass"
                                                    required="required" />
                                            </div>
                                            <div className="tm-form-field">
                                                <div>
                                                    <input type="checkbox" id="register-pass-show" name="register-pass-show" />
                                                    <label for="register-pass-show">Hiện thị mật khẩu</label>
                                                </div>
                                                <div>
                                                    <input type="checkbox" id="register-terms" name="register-terms" />
                                                    <label for="register-terms">Tôi đã đọc và đồng ý với các điều khoản và điều kiện của trang web <a
                                                        href="#"></a></label>
                                                </div>
                                            </div>
                                            <div className="tm-form-field">
                                                <button type="submit" className="tm-button">Đăng ký</button>
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
                {/* <Footer/> */}
                {/* <!--// Footer --> */}

                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>

            </div>
            {/* <!--// Wrapper --> */}


        </div>
    )
}
export default LoginRegisterPage