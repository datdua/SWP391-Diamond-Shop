import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getAllCartItems, removeCartItem, getTotalCart } from "../../api/addToCart";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const { accountId } = useParams(); // Extract accountId from useParams

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                console.log("Fetching cart items for account ID:", accountId);
                if (accountId) {
                    const items = await getAllCartItems(accountId);
                    console.log("Fetched cart items:", items); // Log the fetched items
                    setCartItems(items);
                } else {
                    console.error("Account ID is undefined");
                }
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        const fetchTotalCart = async () => {
            try {
                console.log("Fetching total cart value for account ID:", accountId);
                if (accountId) {
                    const total = await getTotalCart(accountId);
                    console.log("Fetched total cart value:", total); // Log the fetched total
                    setTotalCart(total);
                } else {
                    console.error("Account ID is undefined");
                }
            } catch (error) {
                console.error("Error fetching total cart value:", error);
            }
        };

        fetchCartItems();
        fetchTotalCart();
    }, [accountId]);

    const handleRemoveItem = async (cartID) => {
        try {
            await removeCartItem(cartID);
            const updatedCartItems = cartItems.filter(item => item.cartID !== cartID);
            setCartItems(updatedCartItems);
            console.log("Item removed successfully");
            toast.success("Xoá sản phẩm thành công");
        } catch (error) {
            console.error("Error removing item:", error);
            toast.error("Xoá sản phẩm thất bại");
        }
    };

    return (
        <div>
            <div id="wrapper" className="wrapper">
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
                                            <tr key={`${item.jewelryID}-${index}`}>
                                                <td>
                                                    <Link to={`/product-detail/${item.jewelryID}`} className="tm-cart-productimage">
                                                        <img src={item.jewelryImage} alt="product image" />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`/product-detail/${item.jewelryID}`} className="tm-cart-productname">{item.jewelryName}</Link>
                                                </td>
                                                <td className="tm-cart-price">{item.price.toLocaleString()} VND</td>
                                                <td>
                                                    <div className="tm-quantitybox">
                                                        <div className="flex items-center">
                                                            <input id={`quantity-${index}`} type="text" value={item.quantity} readOnly className="w-12 text-center" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="tm-cart-totalprice">{item.totalPrice.toLocaleString()} VND</span>
                                                </td>
                                                <td>
                                                    <button className="tm-cart-removeproduct" onClick={() => handleRemoveItem(item.cartID)}>
                                                        <i className="ion-close"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/*<!-- Shopping Cart Content --> */}
                            <div className="tm-cart-bottomarea">
                                <div className="row">
                                    <div className="col-lg-8 col-md-6">
                                        <div className="tm-buttongroup">
                                            <a href="/sanpham" className="tm-button">Continue Shopping</a>
                                            <a href="#" className="tm-button">Update Cart</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="tm-cart-pricebox">
                                            <h2>Cart Totals</h2>
                                            <div className="table-responsive">
                                                <table className="table table-borderless">
                                                    <tbody>
                                                        <tr className="tm-cart-pricebox-total">
                                                            <td>Total</td>
                                                            <td>{totalCart ? totalCart.toLocaleString() : 0} VND</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <a href="/checkout" className="tm-button">Proceed To Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--// Shopping Cart Content --> */}
                        </div>
                    </div>
                </main>
                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>
            </div>
        </div>
    )
}

export default CartPage;
