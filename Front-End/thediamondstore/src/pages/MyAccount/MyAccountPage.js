import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MyAccountPage.css";
import { fetchOrders } from "../../api/OrderAPI";

function MyAccountPage() {
    const accountName = localStorage.getItem('accountName');
    const accountID = localStorage.getItem('accountID'); // Assuming you have the accountID in localStorage
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!accountID) {
            console.error("Account ID is not available in localStorage");
            return;
        }

        async function getOrders() {
            try {
                const fetchedOrders = await fetchOrders(accountID);
                setOrders(fetchedOrders);
            } catch (error) {
                console.error("Failed to fetch orders:", error);
                setError(error.message);
            }
        }

        getOrders();
    }, [accountID]);

    return (
        <div>
            <div id="wrapper" className="wrapper">
                
                <div className="tm-breadcrumb-area tm-padding-section bg-grey" style={{ backgroundImage: `url(assets/images/breadcrumb-bg.jpg)` }}>
                    <div className="container">
                        <div className="tm-breadcrumb">
                            <h2>My Account</h2>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li>My Account</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <main className="page-content">
                    <div className="tm-section tm-my-account-area bg-white tm-padding-section">
                        <div className="container">
                            <div className="tm-myaccount">
                                <ul className="nav tm-tabgroup" id="account" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link " id="account-dashboard-tab" data-toggle="tab"
                                            href="#account-dashboard" role="tab" aria-controls="account-dashboard"
                                            aria-selected="true">Dashboard</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="account-orders-tab" data-toggle="tab" href="#account-orders"
                                            role="tab" aria-controls="account-orders" aria-selected="false">Orders</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="account-acdetails-tab" data-toggle="tab"
                                            href="#account-acdetails" role="tab" aria-controls="account-acdetails"
                                            aria-selected="false">Account Details</a>
                                    </li>
                                </ul>

                                <div className="tab-content" id="account-content">
                                    <div className="tab-pane fade " id="account-dashboard" role="tabpanel"
                                        aria-labelledby="account-dashboard-tab">
                                        <div className="tm-myaccount-dashboard">
                                            <p>Hello <b>{accountName}</b></p>
                                            <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show active" id="account-orders" role="tabpanel"
                                        aria-labelledby="account-orders-tab">
                                        <div className="tm-myaccount-orders">
                                            {error && <p className="error">{error}</p>}
                                            <div className="table-responsive">
                                                <table className="table table-bordered mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th className="tm-myaccount-orders-col-id">ORDER ID</th>
                                                            <th className="tm-myaccount-orders-col-date">DATE</th>
                                                            <th className="tm-myaccount-orders-col-status">STATUS</th>
                                                            <th className="tm-myaccount-orders-col-total">TOTAL</th>
                                                            <th className="tm-myaccount-orders-col-view">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {orders.length > 0 ? (
                                                            orders.map(order => (
                                                                <tr key={order.orderID}>
                                                                    <td>{order.orderID}</td>
                                                                    <td>{order.startorderDate}</td>
                                                                    <td>{order.orderStatus}</td>
                                                                    <td>{order.totalCart}</td>
                                                                    <td><a href="#" className="tm-button tm-button-small">View</a></td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td colSpan="5">No orders found</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="account-acdetails" role="tabpanel"
                                        aria-labelledby="account-acdetails-tab">
                                        <div className="tm-myaccount-acdetails">
                                            <form action="#" className="tm-form tm-form-bordered">
                                                <h4>Account Details</h4>
                                                <div className="tm-form-inner">
                                                    <div className="tm-form-field tm-form-fieldhalf">
                                                        <label htmlFor="acdetails-firstname">First name</label>
                                                        <input type="text" id="acdetails-firstname" />
                                                    </div>
                                                    <div className="tm-form-field tm-form-fieldhalf">
                                                        <label htmlFor="acdetails-lastname">Last name</label>
                                                        <input type="text" id="acdetails-lastname" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <label htmlFor="acdetails-displayname">Display name</label>
                                                        <input type="text" id="acdetails-displayname" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <label htmlFor="acdetails-email">Email address</label>
                                                        <input type="email" id="acdetails-email" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <label htmlFor="acdetails-password">Old password</label>
                                                        <input type="password" id="acdetails-password" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <label htmlFor="acdetails-newpassword">New password</label>
                                                        <input type="password" id="acdetails-newpassword" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <label htmlFor="acdetails-confirmpass">Confirm password</label>
                                                        <input type="password" id="acdetails-confirmpass" />
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <input type="checkbox" name="acdetails-agreeterms"
                                                            id="acdetails-agreeterms" />
                                                        <label htmlFor="acdetails-agreeterms">I have read and agree to the Privacy Policy</label>
                                                    </div>
                                                    <div className="tm-form-field">
                                                        <button type="submit" className="tm-button">Save Changes</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                
                <button id="back-top-top"><i className="ion-arrow-up-c"></i></button>
            </div>
        </div>
    );
}

export default MyAccountPage;
