import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginRegisterPage.css";
import { jwtDecode } from 'jwt-decode';
function LoginRegisterPage() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [accountName, setAccountName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const accountId = useParams();
    const navigate = useNavigate();
    
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
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
        localStorage.setItem("email", loginEmail);
        localStorage.setItem("accountName", accountName);
        localStorage.setItem('accountID', data.accountId);
        localStorage.setItem("role", jwtDecode(data.jwt).role); // Trích xuất và lưu trữ role từ JWT token

        setIsLoggedIn(true);
        toast.success("Đăng nhập thành công!");

        // Navigate based on role
        if (jwtDecode(data.jwt).role === "ROLE_ADMIN") {
          // Sử dụng role từ JWT token
          navigate("/admin/profile");
        } else {
          navigate("/trangchu");
          window.location.reload();
          window.scrollTo(0, 0);
        }

        
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
  
    if (!termsAccepted) {
      toast.error(
        "Bạn phải đồng ý với các điều khoản và điều kiện của trang web"
      );
      return;
    }
  
    // Check if required fields are filled
    if (!registerName || !registerEmail || !registerPassword) {
      toast.error("Vui lòng điền đầy đủ thông tin đăng ký.");
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:8080/api/accounts/register",
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
      // Log more details about the error
      console.error("Lỗi khi đăng ký:", error.response);
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
                          type={showLoginPassword ? "text" : "password"}
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
                        <div>
                          <input
                            type="checkbox"
                            id="login-pass-show"
                            name="login-pass-show"
                            checked={showLoginPassword}
                            onChange={() =>
                              setShowLoginPassword(!showLoginPassword)
                            }
                          />
                          <label htmlFor="login-pass-show">
                            Hiển thị mật khẩu
                          </label>
                        </div>
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
                          type={showRegisterPassword ? "text" : "password"}
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
                            checked={showRegisterPassword}
                            onChange={() =>
                              setShowRegisterPassword(!showRegisterPassword)
                            }
                          />
                          <label htmlFor="register-pass-show">
                            Hiển thị mật khẩu
                          </label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            id="register-terms"
                            name="register-terms"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                          />
                          <label htmlFor="register-terms">
                            Tôi đã đọc và đồng ý với các điều khoản và điều kiện
                            của trang web
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
      </div>
    </div>
  );
}

export default LoginRegisterPage;
