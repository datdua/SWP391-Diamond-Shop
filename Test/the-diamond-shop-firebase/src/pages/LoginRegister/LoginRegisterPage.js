import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginRegisterPage.css";

function LoginRegisterPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://diamondstore.lemonhill-6b585cc3.eastasia.azurecontainerapps.io//login",
        {
          email: loginEmail,
          password: loginPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        console.log("Đăng nhập thành công:", data.jwt);
        localStorage.setItem("jwt", data.jwt);
        toast.success("Đăng nhập thành công!");
        navigate("/trangchu");
      } else {
        console.error("Đăng nhập thất bại:", response);
        toast.error("Đăng nhập thất bại!");
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      toast.error("Lỗi khi đăng nhập!");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://diamondstore.lemonhill-6b585cc3.eastasia.azurecontainerapps.io//api/accounts/register",
        {
          accountName: registerName,
          email: registerEmail,
          password: registerPassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json;charset=UTF-8",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        console.log("Đăng ký thành công:", data.message);
        toast.success("Đăng ký thành công!");
        navigate("/trangchu");
      } else {
        console.error("Đăng ký thất bại:", response);
        toast.error("Đăng ký thất bại!");
      }
    } catch (error) {
      console.error("Lỗi khi đăng ký:", error);
      toast.error("Lỗi khi đăng ký!");
    }
  };

  return (
    <div>
      <div id="wrapper" className="wrapper">
        <div
          className="tm-breadcrumb-area tm-padding-section bg-grey"
          style={{ backgroundImage: `url(assets/images/banner-header.png)` }}
        >
          <div className="container">
            <div className="tm-breadcrumb">
              <h2>Đăng Nhập & Đăng Ký</h2>
              <ul className="add-back">
                <li>
                  <NavLink to="/home">Trang chủ</NavLink>
                </li>
                <li>Đăng Nhập & Đăng Ký</li>
              </ul>
            </div>
          </div>
        </div>
        <main className="page-content">
          <div className="tm-section tm-login-register-area bg-white tm-padding-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <form
                    onSubmit={handleLogin}
                    className="tm-form tm-login-form"
                  >
                    <h4>Đăng Nhập</h4>
                    <p>Hãy trở thành một phần của cộng đồng chúng tôi!</p>
                    <div className="tm-form-inner">
                      <div className="tm-form-field">
                        <label htmlFor="login-email">Email*</label>
                        <input
                          type="email"
                          id="login-email"
                          required="required"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                      </div>
                      <div className="tm-form-field">
                        <label htmlFor="login-password">Mật khẩu*</label>
                        <input
                          type="password"
                          id="login-password"
                          required="required"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                      </div>
                      <div className="tm-form-field">
                        <p className="mb-0">
                          <a href="#">Quên mật khẩu?</a>
                        </p>
                      </div>
                      <div className="tm-form-field">
                        <button type="submit" className="tm-button">
                          Đăng Nhập
                        </button>
                      </div>
                      <div className="tm-form-field">
                        <div className="tm-form-sociallogin">
                          <h6>Hoặc, đăng nhập với :</h6>
                          <ul>
                            <li>
                              <a href="#" className="google-btn">
                                <i className="ion-social-google"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col-lg-6">
                  <form
                    onSubmit={handleRegister}
                    className="tm-form tm-register-form"
                  >
                    <h4>Tạo tài khoản</h4>
                    <p>Chào mừng! Đăng ký tài khoản</p>
                    <div className="tm-form-inner">
                      <div className="tm-form-field">
                        <label htmlFor="register-name">Tên tài khoản</label>
                        <input
                          type="text"
                          id="register-name"
                          required="required"
                          value={registerName}
                          onChange={(e) => setRegisterName(e.target.value)}
                        />
                      </div>
                      <div className="tm-form-field">
                        <label htmlFor="register-email">Email</label>
                        <input
                          type="email"
                          id="register-email"
                          required="required"
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                        />
                      </div>
                      <div className="tm-form-field">
                        <label htmlFor="register-password">Mật khẩu</label>
                        <input
                          type="password"
                          id="register-password"
                          name="register-pass"
                          required="required"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                      </div>
                      <div className="tm-form-field">
                        <div>
                          <input
                            type="checkbox"
                            id="register-pass-show"
                            name="register-pass-show"
                          />
                          <label htmlFor="register-pass-show">
                            Hiện thị mật khẩu
                          </label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            id="register-terms"
                            name="register-terms"
                          />
                          <label htmlFor="register-terms">
                            Tôi đã đọc và đồng ý với các điều khoản và điều kiện
                            của trang web <a href="#"></a>
                          </label>
                        </div>
                      </div>
                      <div className="tm-form-field">
                        <button type="submit" className="tm-button">
                          Đăng ký
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/*<Footer />*/}

        <button id="back-top-top">
          <i className="ion-arrow-up-c"></i>
        </button>
      </div>
    </div>
  );
}

export default LoginRegisterPage;
