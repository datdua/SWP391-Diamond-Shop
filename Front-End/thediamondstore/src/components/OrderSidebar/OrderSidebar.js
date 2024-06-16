import React, { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './OrderSidebar.css';
import { fetchOrderDetail } from '../../api/OrderAPI';

function OrderSidebar({ orderID, show, onHide }) {
  const [order, setOrder] = useState(null); // State to hold order data
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    console.log(order);
    const fetchOrder = async () => {
      try {
        
        const response = await fetchOrderDetail(orderID); // Call your API function with orderID
        setOrder(response); // Set the fetched order data to state
        setLoading(false); // Update loading state to false
      } catch (error) {
        console.error('Error fetching order details:', error);
        setLoading(false); // Update loading state to false in case of error
      }
    };

    if (orderID) { // Ensure orderID is defined before fetching
      fetchOrder(); // Call the fetchOrder function when component mounts
    }
  }, [orderID]); // Dependency on orderID ensures it refetches when orderID changes

  if (loading) {
    return <p>Loading...</p>; // Render loading state while fetching data
  }

  if (!order) {
    return <p>No order found.</p>; // Render message if order is not fetched properly
  }

   // Check the structure in the console

  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="order-detail">Order Details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Account Information */}
        <div className="order-section">
          <h5>Account Information</h5>
          <p><span className="detail-title">Account Name:</span> <span className="detail-info">{order.account?.accountName || 'N/A'}</span></p>
          <p><span className="detail-title">Phone Number:</span> <span className="detail-info">{order.account?.phoneNumber || 'N/A'}</span></p>
          <p><span className="detail-title">Email:</span> <span className="detail-info">{order.account?.email || 'N/A'}</span></p>
          <p><span className="detail-title">Address:</span> <span className="detail-info">{order.account?.addressAccount || 'N/A'}</span></p>
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
          {order.orderStatus === "Đã thanh toán" ? (
            <>
              <p><span className="detail-title">Certificate Image:</span> <a href={order.certificateImage} target="_blank" rel="noopener noreferrer"><img src={order.certificateImage} alt="Certificate" className="certificate-image" /></a></p>
              <p><span className="detail-title">Warranty Image:</span> <a href={order.warrantyImage} target="_blank" rel="noopener noreferrer"><img src={order.warrantyImage} alt="Warranty" className="warranty-image" /></a></p>
            </>
          ) : (
            <p>Giấy chứng nhận và phiếu bảo hành sẽ có sau khi thanh toán hoàn tất</p>
          )}
        </div>
        <hr />

        {/* Total Amount Information */}
        <div className="order-section">
          <h5>Total Amount Information</h5>
          <p><span className="detail-title">Total:</span> <span className="detail-info">{order.totalOrder?.toLocaleString() || 'N/A'}</span></p>
          {order.promotionCode && <p><span className="detail-title">Promotion Code:</span> <span className="detail-info">{order.promotionCode}</span></p>}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OrderSidebar;
