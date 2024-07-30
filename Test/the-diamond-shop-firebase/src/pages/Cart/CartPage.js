import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function CartPage() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div>
            <div id="wrapper" className="wrapper">
                <Header />
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Shopping Cart</h2>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/product">Shop</Link></li>
                                <li>Shopping Cart</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--// Breadcrumb Area -->

        <!-- Page Content --> */}
                <main className="page-content">

                    {/* <!-- Shopping Cart Area --> */}
                    <div className="tm-section shopping-cart-area bg-white tm-padding-section">
                        <div className="container">

                            {/* <!-- Shopping Cart Table --> */}
                            <div className="tm-cart-table table-responsive">
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th className="tm-cart-col-image" scope="col">Image</th>
                                            <th className="tm-cart-col-productname" scope="col">Product</th>
                                            <th className="tm-cart-col-price" scope="col">Price</th>
                                            <th className="tm-cart-col-quantity" scope="col">Quantity</th>
                                            <th className="tm-cart-col-total" scope="col">Total</th>
                                            <th className="tm-cart-col-remove" scope="col">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link to="/product-detail" className="tm-cart-productimage">
                                                    <img src="assets/images/products/product-image-1-thumb.jpg"
                                                        alt="product image" />
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to="/product-detail" className="tm-cart-productname">Stylist
                                                    daimond
                                                    earring</Link>
                                            </td>
                                            <td className="tm-cart-price">$75.00</td>
                                            <td>
                                                <div className="tm-quantitybox">
                                                    <label htmlFor="myInput">Quantity:</label>
                                                    <div className="flex items-center">
                                                        
                                                        <button onClick={handleIncrease} className="px-2 py-1 ml-2 bg-gray-200 text-gray-700 rounded-full focus:outline-none">
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                        <input id="myInput" type="text" value={quantity} readOnly className="w-12 text-center" />
                                                        <button onClick={handleDecrease} className="px-2 py-1 mr-2 bg-gray-200 text-gray-700 rounded-full focus:outline-none">
                                                            <i className="fas fa-minus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="tm-cart-totalprice">$75.00</span>
                                            </td>
                                            <td>
                                                <button className="tm-cart-removeproduct"><i className="ion-close"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/product-detail" className="tm-cart-productimage">
                                                    <img src="assets/images/products/product-image-2-thumb.jpg"
                                                        alt="product image" />
                                                </Link>
                                            </td>
                                            <td>
                                                <Link to="/product-detail" className="tm-cart-productname">Stylist
                                                    daimond
                                                    earring</Link>
                                            </td>
                                            <td className="tm-cart-price">$75.00</td>
                                            <td>
                                            <div className="tm-quantitybox">
                                                    <label htmlFor="myInput">Quantity:</label>
                                                    <div className="flex items-center">
                                                        <button onClick={handleIncrease} className="px-2 py-1 ml-2 bg-gray-200 text-gray-700 rounded-full focus:outline-none">
                                                            <i className="fas fa-plus"></i>
                                                        </button>
                                                        <input id="myInput" type="text" value={quantity} readOnly className="w-12 text-center" />
                                                        <button onClick={handleDecrease} className="px-2 py-1 mr-2 bg-gray-200 text-gray-700 rounded-full focus:outline-none">
                                                            <i className="fas fa-minus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="tm-cart-totalprice">$75.00</span>
                                            </td>
                                            <td>
                                                <button className="tm-cart-removeproduct"><i className="ion-close"></i></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* <!--// Shopping Cart Table -->

                    <!-- Shopping Cart Content --> */}
                            <div className="tm-cart-bottomarea">
                                <div className="row">
                                    <div className="col-lg-8 col-md-6">
                                        <div className="tm-buttongroup">
                                            <a href="#" className="tm-button">Continue Shopping</a>
                                            <a href="#" className="tm-button">Update Cart</a>
                                        </div>
                                        <form action="#" className="tm-cart-coupon">
                                            <label for="coupon-field">Have a coupon code?</label>
                                            <input type="text" id="coupon-field" placeholder="Enter coupon code"
                                                required="required" />
                                            <button type="submit" className="tm-button">Submit</button>
                                        </form>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="tm-cart-pricebox">
                                            <h2>Cart Totals</h2>
                                            <div className="table-responsive">
                                                <table className="table table-borderless">
                                                    <tbody>
                                                        <tr className="tm-cart-pricebox-subtotal">
                                                            <td>Cart Subtotal</td>
                                                            <td>$175.00</td>
                                                        </tr>
                                                        <tr className="tm-cart-pricebox-shipping">
                                                            <td>(+) Shipping Charge</td>
                                                            <td>$15.00</td>
                                                        </tr>
                                                        <tr className="tm-cart-pricebox-total">
                                                            <td>Total</td>
                                                            <td>$190.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <a href="#" className="tm-button">Proceed To Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--// Shopping Cart Content --> */}

                        </div>
                    </div>
                    {/* <!--// Shopping Cart Area --> */}

                </main>
                {/* <!--// Page Content -->

        <!-- Footer --> */}
                <Footer />
                {/* <!--// Footer --> */}

                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>

            </div>
            {/* <!--// Wrapper -->

    <!-- endinject --> */}
        </div>
    )
}
export default CartPage;