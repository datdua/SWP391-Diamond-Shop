import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllCartItems, getTotalCart } from "../../api/addToCart";
import "./CheckoutPage.css";
import { createOrder } from "../../api/OrderAPI";
import { toast } from "react-toastify";

function CheckoutPage() {
    const [cartItems, setCartItems] = useState([]);
    const [totalCart, setTotalCart] = useState(0);
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pointsToRedeem, setPointsToRedeem] = useState(0);
    const [promotionCode, setPromotionCode] = useState("");
    const { accountId } = useParams(); // Extract accountId from useParams
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                if (accountId) {
                    const items = await getAllCartItems(accountId);
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
                if (accountId) {
                    const total = await getTotalCart(accountId);
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

    useEffect(() => {
        calculatePointsToRedeem();
    }, [totalCart]);

    const calculatePointsToRedeem = () => {
        const points = Math.floor(totalCart / 100000); // Assuming 1 point = 100,000 VND
        setPointsToRedeem(points);
    };

    const handlePlaceOrder = async () => {
        if (!deliveryAddress || !phoneNumber) {
            toast.error("Please provide delivery address and phone number.");
            return;
        }

        try {
            const orderData = await createOrder(accountId, deliveryAddress, phoneNumber, pointsToRedeem, promotionCode);
            toast.success("Order placed successfully");
            navigate(`/account/${accountId}`); // Redirect to order confirmation page or wherever you want
        } catch (error) {
            toast.error("Failed to place order");
        }
    };

    return (
        <div>
            <div id="wrapper" className="wrapper">
                {/* Header */}

                {/* Breadcrumb Area */}
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>Checkout</h2>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/product">Shop</Link></li>
                                <li>Checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Page Content */}
                <main className="page-content">
                    {/* Checkout Area */}
                    <div className="tm-section tm-checkout-area bg-white tm-padding-section">
                        <div className="container">
                            <form action="#" className="tm-form tm-checkout-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4 className="small-title">BILLING INFORMATION</h4>
                                        {/* Billing Form */}
                                        <div className="tm-checkout-billingform">
                                            <div className="tm-form-inner">
                                                <div className="tm-form-field">
                                                    <label htmlFor="billingform-phone">Phone </label>
                                                    <input type="text" id="billingform-phone" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                                </div>
                                                <div className="tm-form-field">
                                                    <label htmlFor="billingform-address">Address</label>
                                                    <input type="text" id="billingform-address" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} placeholder="Apartment, Street Address" />
                                                </div>
                                            </div>
                                            <div className="tm-cart-coupon">
                                                <label htmlFor="coupon-field">Have a coupon code?</label>
                                                <input type="text" id="coupon-field" value={promotionCode} onChange={(e) => setPromotionCode(e.target.value)} placeholder="Enter coupon code" required />
                                                <button type="submit" className="tm-button">Submit</button>
                                            </div>
                                        </div>
                                        {/* Different Address Form */}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tm-checkout-orderinfo">
                                            <h4 className="small-title">ORDER INFORMATION</h4>
                                            <div className="table-responsive">
                                                <table className="table table-borderless tm-checkout-ordertable">
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cartItems.map((item, index) => (
                                                            <tr key={`${item.jewelryID}-${index}`}>
                                                                <td>{item.jewelryName} * {item.quantity}</td>
                                                                <td>{item.totalPrice.toLocaleString()} VND</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr className="tm-checkout-total">
                                                            <td>Total</td>
                                                            <td>{totalCart ? totalCart.toLocaleString() : 0} VND</td>
                                                        </tr>
                                                        <tr className="tm-checkout-points">
                                                            <td>Points to Redeem</td>
                                                            <td>{pointsToRedeem}</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            <div className="tm-checkout-paymentmethods">
                                                <div className="tm-form-inner">
                                                    <div className="tm-form-field">
                                                        <input type="radio" name="paymentmethod" id="paymentmethod-paypal" />
                                                        <label htmlFor="paymentmethod-paypal">VNPay</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tm-checkout-submit">
                                                <p>Your personal data will be used to process your order, support your
                                                    experience throughout this website, and for other purposes described in our
                                                    privacy policy.</p>
                                                <div className="tm-form-inner">
                                                    <div className="tm-form-field">
                                                        <input type="checkbox" name="checkout-read-terms" id="checkout-read-terms" />
                                                        <label htmlFor="checkout-read-terms">I have read and agree to the website
                                                            terms and conditions</label>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <button type="button" className="tm-button tm-button-block" onClick={handlePlaceOrder}>Place Order</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default CheckoutPage;
