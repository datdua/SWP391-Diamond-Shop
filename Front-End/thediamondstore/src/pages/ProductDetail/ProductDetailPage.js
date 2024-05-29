import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { addToCart, getJewelryById } from "../../api/JewelryAPI";
import "./ProductDetailPage.css"

function JewelryDetailPage() {
    const [jewelry, setJewelry] = useState(null);
    const { jewelryId } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        const fetchJewelry = async () => {
            try {
                const jewelryData = await getJewelryById(jewelryId);
                setJewelry(jewelryData);
                setSize(jewelryData.size); // Set the initial size
            } catch (error) {
                console.error('Error fetching jewelry details:', error);
            }
        };
        fetchJewelry();
    }, [jewelryId]);
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };
    const handleAddToCart = async () => {
        if (!isLoggedIn) {
            setShowNotification(true);
        } else {
            try {
                const accountId = "your_account_id"; // Replace with actual account id
                await addToCart(accountId, jewelryId, quantity);
                alert("Item added to cart successfully!");
            } catch (error) {
                alert("Failed to add item to cart");
            }
        }
    };

    return (
        <div>
            <div id="wrapper" className="wrapper">
                {/* <!-- Header --> */}
                <Header />
                {/* <!--// Header --> */}
                {/* <!-- Breadcrumb Area --> */}
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Product Details</h2>
                            <ul>
                                <li><Link to="/trangchu">Home</Link></li>
                                <li><Link to="/sanpham">Products</Link></li>
                                <li>{jewelry ? jewelry.jewelryName : "Loading..."}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--// Breadcrumb Area --> */}
                {/* <!-- Page Content --> */}
                <main className="page-content">
                    {jewelry && (
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
                                                                <img src={jewelry.jewelryImage} alt="product image" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-12">
                                                    <div className="tm-prodetails-content">
                                                        <h4 className="tm-prodetails-title">{jewelry.jewelryName}</h4>
                                                        <span className="tm-prodetails-price">{jewelry.jewelryPrice.toLocaleString()} VND</span>
                                                        {/* Other details */}
                                                        <div className="tm-prodetails-infos">
                                                            <div className="tm-prodetails-singleinfo">
                                                                <b>Product ID : </b>{jewelry.jewelryID}
                                                            </div>
                                                            <div className="tm-prodetails-singleinfo">
                                                                <b>Size : </b>
                                                                <select value={size} onChange={handleSizeChange}>
                                                                    <option value="6">6</option>
                                                                    <option value="7">7</option>
                                                                    <option value="8">8</option>
                                                                    <option value="9">9</option>
                                                                    <option value="10">10</option>
                                                                    <option value="11">11</option>
                                                                    <option value="12">12</option>
                                                                    <option value="13">13</option>
                                                                    <option value="14">14</option>
                                                                    <option value="15">15</option>
                                                                    <option value="16">16</option>
                                                                    <option value="17">17</option>
                                                                    <option value="18">18</option>
                                                                    <option value="19">19</option>
                                                                    <option value="20">20</option>
                                                                </select>
                                                            </div>
                                                            <div className="tm-prodetails-singleinfo">
                                                                <b>Gender : </b>
                                                                <span className="color-theme">{jewelry.gender}</span>
                                                            </div>
                                                        </div>
                                                        <p>{jewelry.description}</p>
                                                        {/* Add to Cart */}
                                                        <div className="tm-prodetails-quantitycart">
                                                            <h6>Quantity :</h6>
                                                            <div className="tm-quantitybox">
                                                                <input type="text" value={quantity} readOnly />
                                                                <div className="quantity-buttons">
                                                                    <button className="increase-button" onClick={increaseQuantity}>+</button>
                                                                    <button className="decrease-button" onClick={decreaseQuantity}>-</button>
                                                                </div>
                                                            </div>
                                                            {showNotification && <p>Please log in to add items to the cart.</p>}
                                                            <button onClick={handleAddToCart} href = "/cart">Add to cart</button>
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
                {/* <!--// Page Content --> */}
                {/* <!-- Footer --> */}
                <Footer />
                {/* <!--// Footer --> */}
                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>
            </div>
            {/* <!--// Wrapper --> */}
        </div>
    )
}
export default JewelryDetailPage;
