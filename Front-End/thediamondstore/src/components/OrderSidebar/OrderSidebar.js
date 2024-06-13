import Offcanvas from 'react-bootstrap/Offcanvas';
import './OrderSidebar.css';

function OrderSidebar({ order, show, onHide }) {
  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="order-detail">Order Details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {order ? (
          <>
            {/* Account Information */}
            <div className="order-section">
              <h5>Account Information</h5>
              <p><span className="detail-title">Account Name:</span> <span className="detail-info">{order.account.accountName}</span></p>
              <p><span className="detail-title">Phone Number:</span> <span className="detail-info">{order.phoneNumber}</span></p>
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
              <p><span className="detail-title">Certificate Image:</span> <a href={order.certificateImage} target="_blank" rel="noopener noreferrer"><img src={order.certificateImage} alt="Certificate" className="certificate-image" /></a></p>
              <p><span className="detail-title">Warranty Image:</span> <a href={order.warrantyImage} target="_blank" rel="noopener noreferrer"><img src={order.warrantyImage} alt="Warranty" className="warranty-image" /></a></p>
              {order.promotionCode && <p><span className="detail-title">Promotion Code:</span> <span className="detail-info">{order.promotionCode}</span></p>}
            </div>
            <hr />

            {/* Total Amount Information */}
            <div className="order-section">
              <h5>Total Amount Information</h5>
              <p><span className="detail-title">Total:</span> <span className="detail-info">{order.totalOrder?.toLocaleString() || 'N/A'}</span></p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OrderSidebar;
