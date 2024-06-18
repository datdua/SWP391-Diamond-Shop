import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './OrderSidebar.css';
import { fetchOrderDetail } from '../../api/OrderAPI';

function OrderSidebar({ orderID, show, onHide }) {
  const [orderDetails, setOrderDetails] = useState([]); // State to hold order details array
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        console.log('Fetching order details for orderID:', orderID);
        const response = await fetchOrderDetail(orderID); // Call your API function with orderID
        console.log('API response:', response);

        if (response && response.length > 0) {
          console.log('Setting order details:', response);
          setOrderDetails(response); // Set order details array from the response
        } else {
          console.warn('Order details not found in response:', response);
          setOrderDetails([]);
        }

        setLoading(false); // Update loading state to false
      } catch (error) {
        console.error('Error fetching order details:', error);
        setError(error); // Set error state
        setLoading(false); // Update loading state to false in case of error
      }
    };

    if (orderID) { // Ensure orderID is defined before fetching
      fetchOrder(); // Call the fetchOrder function when component mounts
    }
  }, [orderID]); // Dependency on orderID ensures it refetches when orderID changes

  console.log('Rendering OrderSidebar:', { loading, error, orderDetails });

  if (loading) {
    return (
      <Offcanvas show={show} onHide={onHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="order-detail">Order Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Loading...</p>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  if (error) {
    return (
      <Offcanvas show={show} onHide={onHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="order-detail">Order Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Error fetching order details: {error.message}</p>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  if (orderDetails.length === 0) {
    return (
      <Offcanvas show={show} onHide={onHide}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="order-detail">Order Details</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Order not found.</p>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  const order = orderDetails[0].order; // Assuming all order details have the same order info

  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="order-detail">Order Details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Account Information */}
        <div className="order-section">
          <h5>Account Information</h5>
          <p><span className="detail-title">Account Name:</span> <span className="detail-info">{order.account.accountName}</span></p>
          <p><span className="detail-title">Phone Number:</span> <span className="detail-info">{order.account.phoneNumber}</span></p>
          <p><span className="detail-title">Email:</span> <span className="detail-info">{order.account.email}</span></p>
          <p><span className="detail-title">Address:</span> <span className="detail-info">{order.account.addressAccount}</span></p>
        </div>
        <hr />

        {/* Order Information */}
        <div className="order-section">
          <h5>Order Information</h5>
          <p><span className="detail-title">Order ID:</span> <span className="detail-info">{order.orderID}</span></p>
          <p><span className="detail-title">Start Order Date:</span> <span className="detail-info">{order.startorderDate}</span></p>
          <p><span className="detail-title">Delivery Date:</span> <span className="detail-info">{order.deliveryDate}</span></p>
          <p><span className="detail-title">Status:</span> <span className="detail-info">{order.orderStatus}</span></p>
          <p><span className="detail-title">Delivery Address:</span> <span className="detail-info">{order.deliveryAddress}</span></p>
        </div>
        <hr />

        {/* Product Information */}
        <div className="order-section">
          <h5>Product Information</h5>
          {orderDetails.map(detail => (
            <div key={detail.orderDetailID} className="product-detail">
              <p><span className="detail-title">Product Name:</span> <span className="detail-info">{detail.diamondName || detail.jewelryName}</span></p>
              <p><span className="detail-title">Quantity:</span> <span className="detail-info">{detail.quantity}</span></p>
              <p><span className="detail-title">Price:</span> <span className="detail-info">{detail.price.toLocaleString()}</span></p>
              <p><span className="detail-title">Total Price:</span> <span className="detail-info">{detail.totalPrice.toLocaleString()}</span></p>
              {detail.diamondImage && (
                <p>
                  <span className="detail-title">Diamond Image:</span>
                  <img src={detail.diamondImage} alt={detail.diamondName} className="product-image" />
                </p>
              )}
              {detail.jewelryImage && (
                <p>
                  <span className="detail-title">Jewelry Image:</span>
                  <img src={detail.jewelryImage} alt={detail.jewelryName} className="product-image" />
                </p>
              )}
            </div>
          ))}
        </div>
        <hr />

        {/* Total Amount Information */}
        <div className="order-section">
          <h5>Total Amount Information</h5>
          <p><span className="detail-title">Total:</span> <span className="detail-info">{order.totalOrder.toLocaleString()}</span></p>
          {order.promotionCode && <p><span className="detail-title">Promotion Code:</span> <span className="detail-info">{order.promotionCode}</span></p>}
        </div>

        {/* Certificate and Warranty Images */}
        {order.orderStatus === "Đã thanh toán" ? (
          <div className="order-section">
            <h5>Certificate and Warranty</h5>
            <p><span className="detail-title">Certificate Image:</span> <a href={order.certificateImage} target="_blank" rel="noopener noreferrer"><img src={order.certificateImage} alt="Certificate" className="certificate-image" /></a></p>
            <p><span className="detail-title">Warranty Image:</span> <a href={order.warrantyImage} target="_blank" rel="noopener noreferrer"><img src={order.warrantyImage} alt="Warranty" className="warranty-image" /></a></p>
          </div>
        ) : (
          <p>Certificate and warranty images will be available after payment is completed.</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OrderSidebar;
