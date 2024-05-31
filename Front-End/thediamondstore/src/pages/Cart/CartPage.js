import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getAllCartItems } from "../../api/addToCart";
// Import the getAllCartItems function

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await getAllCartItems();
                setCartItems(items);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };
        fetchCartItems();
    }, []);

    const handleIncrease = () => {
        // Implement your logic to increase quantity
    };

    const handleDecrease = () => {
        // Implement your logic to decrease quantity
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
                <main className="page-content">
                    <div className="tm-section shopping-cart-area bg-white tm-padding-section">
                        <div className="container">
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
                                        {cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <Link to={`/product-detail/${item.jewelryID}`} className="tm-cart-productimage">
                                                        <img src={item.image} alt="product image" />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`/product-detail/${item.jewelryID}`} className="tm-cart-productname">{item.name}</Link>
                                                </td>
                                                <td className="tm-cart-price">${item.price}</td>
                                                <td>
                                                    <div className="tm-quantitybox">
                                                        <label htmlFor={`quantity-${index}`}>Quantity:</label>
                                                        <div className="flex items-center">
                                                            
                                                            <input id={`quantity-${index}`} type="text" value={item.quantity} readOnly className="w-12 text-center" />
                                    
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="tm-cart-totalprice">${item.totalPrice}</span>
                                                </td>
                                                <td>
                                                    <button className="tm-cart-removeproduct"><i className="ion-close"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="tm-cart-bottomarea">
                                {/* Continue Shopping, Update Cart, and Coupon Form */}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>
            </div>
        </div>
    )
}

export default CartPage;
