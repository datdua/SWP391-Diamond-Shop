import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Container,
  Card,
  Table,
  Row,
  Col,
} from "react-bootstrap";
import { getAllOrderDetail, getOrderDetailById } from "../../../api/OrderDetailAPI";
import RefreshIcon from "@mui/icons-material/Refresh";
import EditIcon from "@mui/icons-material/Edit";
import { Pagination, Tooltip } from "@mui/material";
import { toast } from "react-toastify";

function OrderDetailManagerPage() {
  const [orderDetailData, setOrderDetailData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrderDetail, setSelectedOrderDetail] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const userRole = localStorage.getItem("role");
  const size = 8;

  const startIndex = (currentPage - 1) * size;
  const endIndex = startIndex + size;
  const currentPageData = orderDetailData.slice(startIndex, endIndex);

  const showAlert = () => {
    toast.warning("Rất tiếc, chức năng này chỉ dành cho quản lý và nhân viên bán hàng!")
  }

  const handleClose = () => {
    setShowModal(false);
    setIsUpdating(false);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setSelectedImage("");
  };

  const handleShowUpdate = (orderDetail) => {
    if (userRole !== "ROLE_SALE-STAFF" && userRole !== "ROLE_MANAGER") {
      showAlert();
    } else {
      setSelectedOrderDetail(orderDetail);
      setIsUpdating(true);
      setShowModal(true);
    }
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const refreshTable = () => {
    getAllOrderDetail().then((data) => {
      setOrderDetailData(data);
    });
  };

  const handleShowImage = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  useEffect(() => {
    getAllOrderDetail()
      .then((data) => setOrderDetailData(data))
      .catch((error) => console.error("Failed to fetch order detail data:", error));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title
                as="h4"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <div>
                  Chi Tiết Đơn Hàng
                  <Button
                    variant="link"
                    style={{ textDecoration: "none" }}
                    onClick={refreshTable}
                  >
                    <RefreshIcon style={{ margin: "0 5px 5px 0" }} /> Tải Lại
                  </Button>
                </div>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover className="account-table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã Chi Tiết Đơn Hàng</th>
                      <th>Mã Đơn Hàng</th>
                      <th>Mã Tài Khoản</th>
                      <th>Mã Kim Cương</th>
                      <th>Mã Trang Sức</th>
                      <th>Số Lượng</th>
                      <th>Kích Thước Trang Sức</th>
                      <th>Giá</th>
                      <th>Tổng Giá Giỏ Hàng</th>
                      <th>Tổng Giá</th>
                      <th>Mã Bảo Hành</th>
                      <th>Mã Khuyến Mãi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPageData.map((orderDetail, index) => (
                      <tr key={index}>
                        <td>{startIndex + index + 1}</td>
                        <td>{orderDetail.orderDetailID}</td>
                        <td>{orderDetail.order.orderID}</td>
                        <td>{orderDetail.account.accountID}</td>
                        <td>{orderDetail.diamond ? orderDetail.diamond.diamondID : "Không có kim cương"}</td>
                        <td>{orderDetail.jewelry ? orderDetail.jewelry.jewelryID : "Không có trang sức"}</td>
                        <td>{orderDetail.quantity}</td>
                        <td>{orderDetail.sizeJewelry}</td>
                        <td>{orderDetail.price ? orderDetail.price.toLocaleString() + " VNĐ" : "N/A"}</td>
                        <td>{orderDetail.grossCartPrice ? orderDetail.grossCartPrice.toLocaleString() + " VNĐ" : "N/A"}</td>
                        <td>{orderDetail.totalPrice ? orderDetail.totalPrice.toLocaleString() + " VNĐ" : "N/A"}</td>
                        <td>{orderDetail.warranty ? orderDetail.warranty.warrantyID : "Chưa có giấy bảo hành"}</td>
                        <td>{orderDetail.promotion ? orderDetail.promotion.promotionCode : "Không có mã giảm giá"}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
            <Card.Footer>
              <Pagination
                count={Math.ceil(orderDetailData.length / size)}
                page={currentPage}
                onChange={handleChangePage}
              />
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isUpdating ? "Cập Nhật Chi Tiết Đơn Hàng" : "Thêm Chi Tiết Đơn Hàng"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdating ? (
            <div>Update OrderDetail Form Here</div>
          ) : (
            <div>Add OrderDetail Form Here</div>
          )}
        </Modal.Body>
      </Modal>

      <Modal show={showImageModal} onHide={handleCloseImageModal} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={selectedImage}
            alt="Hình ảnh bị lỗi. Vui lòng kiểu tra lại địa chỉ hình ảnh"
            style={{ width: "100%" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default OrderDetailManagerPage;
