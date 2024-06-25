import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetailPage.css";
import { addDiamondToCart } from "../../api/addToCart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDiamondById } from "../../api/DiamondAPI";
import { getAccountIDByEmail } from "../../api/accountCrud";
import Button from "react-bootstrap/esm/Button";

function DiamondDetailPage() {
    const navigate = useNavigate();
    const [diamond, setDiamond] = useState(null);
    const { diamondId } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchDiamond = async () => {
            try {
                const diamondData = await getDiamondById(diamondId);
                setDiamond(diamondData);
            } catch (error) {
                console.error('Error fetching diamond details:', error);
            }
        };
        fetchDiamond();
    }, [diamondId]);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    useEffect(() => {
        const checkLoginStatus = () => {
            const jwt = localStorage.getItem('jwt');
            setIsLoggedIn(!!jwt);
        };

        checkLoginStatus();
    }, []);

    const handleAddToCart = async (item) => {
        if (!isLoggedIn) {
            toast.error("Vui lòng đăng nhập trước khi thêm sản phẩm vào giỏ hàng");
        } else {
            try {
                const email = localStorage.getItem('email');
                const accountID = await getAccountIDByEmail(email);
                await addDiamondToCart(accountID, item.diamondID, quantity);
                toast.success("Thêm vào giỏ hàng thành công!");
                navigate(`/cart/${accountID}`);
            } catch (error) {
                console.error("Failed to add item to cart:", error.message);
                toast.error("Thêm vào giỏ hàng không thành công: " + error.message);
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
                            <h2>Product Details</h2>
                            <ul>
                                <li><Link to="/trangchu">Home</Link></li>
                                <li><Link to="/sanpham">Products</Link></li>
                                <li>{diamond ? diamond.diamondName : "Loading..."}</li>
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
                                                        <div className="tm-prodetails-largeimages">
                                                            <div className="tm-prodetails-largeimage">
                                                                <img src={diamond.diamondImage} alt="product image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="tm-prodetails-contents" >
                                                        <h4 className="tm-prodetails-title">{diamond.diamondName}</h4>
                                                        <span className="tm-prodetails-price">{diamond.diamondEntryPrice.toLocaleString()} VND</span>
                                                        <div className="tm-prodetails-infos">
                                                            <div className="tm-prodetails-singleinfo" >
                                                                <b>Carat Size : </b>
                                                                {diamond.carat_size}
                                                            </div>
                                                            <div className="tm-prodetails-singleinfo">
                                                                <b>Carat Weight : </b>
                                                                {diamond.carat_weight}
                                                            </div>
                                                            <div className="tm-prodetails-singleinfo">
                                                                <b>Color : </b>
                                                                {diamond.color}
                                                            </div>
                                                            <div className="tm-prodetails-singleinfo">
                                                                <b>Clarity : </b>
                                                                {diamond.clarity}
                                                            </div>
                                                            <div className="tm-prodetails-singleinfo">
                                                                <b>Cut : </b>
                                                                {diamond.cut}
                                                            </div>
                                                            <div className="tm-prodetails-singleinfo">
                                                                <b>Shape : </b>
                                                                {diamond.shape}
                                                            </div>
                                                            <div className="tm-prodetails-singleinfo">
                                                                <b>Origin : </b>
                                                                {diamond.origin}
                                                            </div>
                                                        </div>
                                                        <div className="tm-prodetails-quantitycart">
                                                            <h6>Quantity :</h6>                                                        
                                                               <div className="input-group">
                                                               <button className="decrease-button" onClick={decreaseQuantity}>-</button>               
                                                                <input type="text" value={quantity} readOnly style={{ maxWidth: "50px", textAlign: "center" }} />
                                                                <button className="increase-button" onClick={increaseQuantity}>+</button>
                                                                <Button onClick={() => handleAddToCart(diamond)} style={{ background:"#f2ba59", borderRadius:"5px", textAlign:"center" }}>Add to cart</Button>
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
