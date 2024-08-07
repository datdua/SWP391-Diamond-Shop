import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetailPage.css";
import { addDiamondToCart } from "../../api/addToCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDiamondById } from "../../api/DiamondAPI";
import { getAccountIDByEmail } from "../../api/accountCrud";
import Button from "react-bootstrap/esm/Button";
import ImageLoading from "../../components/LoadingImg/ImageLoading"
import Badge from 'react-bootstrap/Badge';

function DiamondDetailPage() {
  const navigate = useNavigate();
  const { diamondId } = useParams();
  const [diamond, setDiamond] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [maxQuantityReached, setMaxQuantityReached] = useState(false);


  useEffect(() => {
    const fetchDiamond = async () => {
      try {
        const diamondData = await new Promise((resolve, reject) => {
          setTimeout(async () => {
            try {
              const data = await getDiamondById(diamondId);
              resolve(data);
            } catch (error) {
              reject(error);
            }
          }, 50);
        });

        setDiamond(diamondData);
        setMaxQuantity(diamondData.quantity);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching diamond details:", error);
        setLoading(false);
      }
    };
    fetchDiamond();
  }, [diamondId]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => {
      if (prevQuantity + 1 > maxQuantity) {
        toast.error("Đã đến số lượng tối đa");
        return prevQuantity;
      }
      const newQuantity = Math.min(prevQuantity + 1, maxQuantity);
      setMaxQuantityReached(newQuantity === maxQuantity);
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const checkLoginStatus = () => {
      const jwt = localStorage.getItem("jwt");
      setIsLoggedIn(!!jwt);
    };
    checkLoginStatus();
  }, []);

  const handleAddToCart = async (item) => {
    if (!isLoggedIn) {
      toast.warning("Vui lòng đăng nhập trước khi thêm sản phẩm vào giỏ hàng");
    } else {
      try {
        const email = localStorage.getItem("email");
        const accountID = await getAccountIDByEmail(email);
        await addDiamondToCart(accountID, item.diamondID, quantity);
        toast.success("Thêm vào giỏ hàng thành công!");
        navigate(`/cart/${accountID}`);
      } catch (error) {
        console.error("Failed to add item to cart:", error.message);
        if (error.response && error.response.data && error.response.data.message) {
          const errorMessage = error.message;
          toast.error(errorMessage);
        } else {
        toast.warning("Sản phẩm hiện đang hết hàng hoặc đang tạm ngưng, vui lòng chọn sản phẩm khác! " );
      }
    }
  }
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <div id="wrapper" className="wrapper">
          <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/the-diamond-store-423602.appspot.com/o/img-banner%2Fimg-banner-nhan1.png?alt=media&token=8056b83a-6c63-446a-9505-7cc15364c8f7)` }}>
            <div className="container">
              <div className="tm-breadcrumb">
                <h2>Thông tin chi tiết</h2>
                <ul className="add-back">
                  <li><Link to="/trangchu">Trang chủ</Link></li>
                  <li><Link to="/sanpham">Sản phẩm</Link></li>
                  <li>{diamond ? diamond.diamondName : <ImageLoading />}</li>
                </ul>
              </div>
            </div>
          </div>
          <main className="page-content">
            {diamond && (
              <div className="tm-product-details-area tm-section tm-padding-section bg-white">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9 col-12">
                      <div className="tm-prodetails">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-10 col-12">
                            <div className="tm-prodetails-images">
                              <img src={diamond.diamondImage} alt="product image" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12">
                            <h1 className="tm-prodetails-title" style={{ fontSize: '25px' }}>{diamond.diamondName}</h1>
                            <div className="tm-prodetails-contents" style={{ fontSize: 'larger' }}>
                              <div style={{ display: 'flex' }}>
                                <span style={{ fontSize: '24px' }} className="tm-prodetails-price">{diamond.diamondEntryPrice.toLocaleString()} VND</span>
                                {diamond.status === "Còn hàng" ? (
                                  <Badge style={{ fontSize: '17px' }} pill bg="success">
                                    Còn hàng
                                  </Badge>
                                ) : (
                                  <Badge style={{ fontSize: '17px' }} pill bg="warning">
                                    Hàng tạm ngừng
                                  </Badge>
                                )}
                              </div>
                              <span className="tm-prodetails-singleinfo" style={{marginTop:'8px', marginBottom:'8px'}}>Sản phẩm còn lại: {diamond.quantity}</span>
                              <hr />
                              <div className="tm-prodetails-infos" >
                                <div className="tm-prodetails-singleinfo" style={{ marginTop: '20px' }}>
                                  <b>Mã Sản Phẩm: </b>
                                  {diamond.diamondID}
                                </div>
                                <div className="tm-prodetails-singleinfo" style={{ marginTop: '15px' }} >
                                  <b>Kích Thước: </b>
                                  {diamond.caratSize}
                                </div>
                                <div className="tm-prodetails-singleinfo" style={{ marginTop: '15px' }}>
                                  <b>Trọng Lượng: </b>
                                  {diamond.weight}
                                </div>
                                <div className="tm-prodetails-singleinfo" style={{ marginTop: '15px' }}>
                                  <b>Màu: </b>
                                  {diamond.color}
                                </div>
                                <div className="tm-prodetails-singleinfo" style={{ marginTop: '15px' }}>
                                  <b>Độ Tinh Khiết: </b>
                                  {diamond.clarity}
                                </div>
                                <div className="tm-prodetails-singleinfo" style={{ marginTop: '15px' }}>
                                  <b>Vết Cắt: </b>
                                  {diamond.cut}
                                </div>
                                <div className="tm-prodetails-singleinfo" style={{ marginTop: '15px' }}>
                                  <b>Hình Dạng: </b>
                                  {diamond.shape}
                                </div>
                                <div className="tm-prodetails-singleinfo" style={{ marginTop: '15px' }}>
                                  <b>Nguồn Gốc: </b>
                                  {diamond.origin}
                                </div>
                              </div>
                              <div className="tm-prodetails-quantitycart" style={{ marginTop: '10px' }}>
                                <div className="input-group">
                                  <button className="decrease-button" onClick={decreaseQuantity}>-</button>
                                  <input
                                    type="text"
                                    value={`${quantity} / ${maxQuantity}`}
                                    readOnly
                                    style={{ maxWidth: "100px", textAlign: "center",fontSize:'15px'  }}
                                  />
                                  <button className="increase-button" onClick={increaseQuantity}>+</button>
                                  <Button
                                    onClick={() => handleAddToCart(diamond)}
                                    style={{ background: "#f2ba59", borderRadius: "5px", textAlign: "center", marginLeft: '30px' }}
                                  >
                                    Thêm vào giỏ hàng
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div >
      </div >
    </>
  );
}

export default DiamondDetailPage;