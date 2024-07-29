import Offcanvas from 'react-bootstrap/Offcanvas';
import './OrderSidebar.css';

function OrderSidebar({ order, show, onHide }) {
  console.log("OrderSidebar props:", order, show);

  const renderOrderInfo = (orderItem) => (
    <>
      <div key={orderItem.orderDetailID} className="order-section">
        {orderItem.diamond && orderItem.diamond.diamondName && <p><span className="detail-title">Tên kim cương:</span> <span className="detail-info">{orderItem.diamond.diamondName}</span></p>}
        {orderItem.jewelry && orderItem.jewelry.jewelryName && <p><span className="detail-title">Tên trang sức:</span> <span className="detail-info">{orderItem.jewelry.jewelryName}</span></p>}
        <p><span className="detail-title">Số lượng:</span> <span className="detail-info">{orderItem.quantity}</span></p>
        {orderItem.sizeJewelry && <p><span className="detail-title">Kích thước trang sức:</span> <span className="detail-info">{orderItem.sizeJewelry}</span></p>}
        {orderItem.diamond && orderItem.diamond.diamondEntryPrice && <p><span className='detail-title'>Giá:</span> <span className='detail-info'>{orderItem.diamond.diamondEntryPrice.toLocaleString()}</span></p>}
        {orderItem.jewelry && orderItem.jewelry.jewelryEntryPrice && <p><span className='detail-title'>Giá:</span> <span className='detail-info'>{orderItem.jewelry.jewelryEntryPrice.toLocaleString()}</span></p>}
        {orderItem.diamond && orderItem.diamond.grossDiamondPrice && <p><span className='detail-title'>Giá đã bao gồm phí:</span> <span className='detail-info'>{orderItem.diamond.grossDiamondPrice.toLocaleString()}</span></p>}
        {orderItem.jewelry && orderItem.jewelry.grossJewelryPrice && <p><span className='detail-title'>Giá đã bao gồm phí:</span> <span className='detail-info'>{orderItem.jewelry.grossJewelryPrice.toLocaleString()}</span></p>}
      </div>
      <hr />
      <div className="order-section">
        <h5>Hình ảnh</h5>
        {orderItem.diamond && orderItem.diamond.diamondImage && (
          <p><span className="detail-title">Hình ảnh kim cương:</span> <br /><a href={orderItem.diamond.diamondImage} target="_blank" rel="noopener noreferrer"><img src={orderItem.diamond.diamondImage} alt="Diamond" className="diamond-image" /></a></p>
        )}
        {orderItem.jewelry && orderItem.jewelry.jewelryImage && (
          <p><span className="detail-title">Hình ảnh trang sức:</span> <br /><a href={orderItem.jewelry.jewelryImage} target="_blank" rel="noopener noreferrer"><img src={orderItem.jewelry.jewelryImage} alt="Jewelry" className="jewelry-image" /></a></p>
        )}
      </div>
      <hr />
      <div className="order-section">
        <h5>Thông tin chứng nhận</h5>
        {orderItem.diamondCertificateImage && (
          <p><span className="detail-title">Chứng nhận kim cương:</span> <br /><a href={orderItem.diamondCertificateImage} target="_blank" rel="noopener noreferrer"><img src={orderItem.diamondCertificateImage} alt="Diamond Certificate" className="certificate-image" /></a></p>
        )}
        {orderItem.warranty && orderItem.warranty.diamondID && (
          <>
            <p><span className="detail-title">Bảo hành kim cương:</span> <br /><a href={orderItem.warranty.warrantyImage} target="_blank" rel="noopener noreferrer"><img src={orderItem.warranty.warrantyImage} alt="Diamond Warranty" className="warranty-image" /></a></p>
            <p><span className='detail-title'>Ngày bắt đầu bảo hành: </span><span className='detail-info'>{new Date(orderItem.warrantyHistories[0].effectiveDate).toLocaleDateString()}</span></p>
            <p><span className="detail-title">Ngày hết hạn bảo hành:</span> <span className="detail-info">{new Date(orderItem.warrantyHistories[0].expirationDate).toLocaleDateString()}</span></p>      
          </>
        )}
        {orderItem.warranty && orderItem.warranty.jewelryID && (
          <>
            <p><span className="detail-title">Bảo hành trang sức:</span> <br /><a href={orderItem.warranty.warrantyImage} target="_blank" rel="noopener noreferrer"><img src={orderItem.warranty.warrantyImage} alt="Jewelry Warranty" className="warranty-image" /></a></p>
            <p><span className='detail-title'>Ngày bắt đầu bảo hành: </span><span className='detail-info'>{new Date(orderItem.warrantyHistories[0].effectiveDate).toLocaleDateString()}</span></p>
            <p><span className="detail-title">Ngày hết hạn bảo hành:</span> <span className="detail-info">{new Date(orderItem.warrantyHistories[0].expirationDate).toLocaleDateString()}</span></p>
            
          </>
        )}
      </div>
      <hr />
    </>
  );

  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="order-detail">Thông tin chi tiết</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {order && order.length > 0 ? (
          <>
            {order[0].account && (
              <div className="order-section">
                <h5>Thông tin tài khoản</h5>
                <p><span className="detail-title">Tên Tài Khoản:</span> <span className="detail-info">{order[0].account.accountName}</span></p>
                {order[0].account.phoneNumber && <p><span className="detail-title">Số điện thoại:</span> <span className="detail-info">{order[0].account.phoneNumber}</span></p>}
                {order[0].account.email && <p><span className="detail-title">Email:</span> <span className="detail-info">{order[0].account.email}</span></p>}
                {order[0].account.addressAccount && <p><span className="detail-title">Địa chỉ:</span> <span className="detail-info">{order[0].account.addressAccount}</span></p>}
              </div>
            )}
            <hr />           
            {order[0].order && (
              <div className="order-section">
                <h5>Thông tin đơn hàng</h5>
                {order[0].order.deliveryAddress && <p><span className="detail-title">Địa chỉ giao hàng:</span> <span className="detail-info">{order[0].order.deliveryAddress}</span></p>}
                {order[0].order.phoneNumber && <p><span className="detail-title">Số điện thoại:</span> <span className="detail-info">{order[0].order.phoneNumber}</span></p>}
                {order[0].order.startorderDate && <p><span className="detail-title">Ngày đặt hàng:</span> <span className="detail-info">{new Date(order[0].order.startorderDate).toLocaleString()}</span></p>}
                {order[0].order.deliveryDate && <p><span className="detail-title">Ngày giao hàng dự kiến:</span> <span className="detail-info">{new Date(order[0].order.deliveryDate).toLocaleString()}</span></p>}
                {order[0].order.transactionNo && <p><span className="detail-title">Mã giao dịch:</span> <span className="detail-info">{order[0].order.transactionNo}</span></p>}        
              </div>
            )}
             <hr />
            <h5 style={{ fontWeight: "bold" }}>Thông tin sản phẩm</h5>
            {order.map((orderItem) => (
              <div key={orderItem.orderDetailID}>
                {renderOrderInfo(orderItem)}
              </div>
            ))}
            <div className="order-section">
              <h5>Thông tin tổng đơn đặt hàng</h5>
              {order[0].order && (
                <>
                {order[0].order.accountPoint != null && <p><span className="detail-title">Điểm sử dụng:</span> <span className='detail-info'>{order[0].order.accountPoint}</span></p>}
                  {order[0].order.promotionCode && (                    
                    <p><span className="detail-title">Mã khuyến mãi:</span> <span className="detail-info">{order[0].order.promotionCode}</span></p>
                  )}
                  <p><span className="detail-title">Tổng giá trước giảm:</span> <span className="detail-info">{order[0].order.subtotalOrder.toLocaleString()} VND</span></p>
                  <p><span className="detail-title">Giá đã giảm:</span> <span className="detail-info">- {(order[0].order.subtotalOrder - order[0].order.totalOrder).toLocaleString()} VND</span></p>
                  <p><span className="detail-title">Tổng giá đơn hàng:</span> <span className="detail-info">{order[0].order.totalOrder.toLocaleString()} VND</span></p>
                </>
              )}
            </div>
          </>
        ) : (
          <p>Thông tin chi tiết của đơn hàng sẽ được hiển thị khi bạn đã thanh toán thành công</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default OrderSidebar;
