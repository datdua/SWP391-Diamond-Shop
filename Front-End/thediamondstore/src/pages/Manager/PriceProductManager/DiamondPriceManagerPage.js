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
import { getAllDiamondPrice } from "../../../api/DiamondPriceAPI.js";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddDiamondPriceForm from "../../../components/DiamondPriceCRUD/AddDiamondPriceForm.js";
import UpdateDiamondPriceForm from "../../../components/DiamondPriceCRUD/UpdateDiamondPriceForm.js";
import DeleteDiamondPriceForm from "../../../components/DiamondPriceCRUD/DeleteDiamondPriceForm.js";
import { Pagination } from "@mui/material";
import "../ProductManager.css";

function DiamondPriceManager() {
  const [diamondPriceData, setDiamondPriceData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDiamondPrice, setSelectedDiamondPrice] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const size = 8;
  const startIndex = (currentPage - 1) * size;
  const endIndex = startIndex + size;
  const currentPageData = diamondPriceData.slice(startIndex, endIndex);

  const handleClose = () => {
    setShowModal(false);
    setIsUpdating(false);
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleShowAdd = () => {
    setSelectedDiamondPrice(null);
    setIsUpdating(false);
    setShowModal(true);
  };

  const handleShowUpdate = (item) => {
    setSelectedDiamondPrice(item);
    setIsUpdating(true);
    setShowModal(true);
  };

  const handleDelete = (diamondPriceID) => {
    setDiamondPriceData(
      diamondPriceData.filter(
        (diamondPrice) => diamondPrice.diamondPriceID !== diamondPriceID
      )
    );
  };

  const refreshTable = () => {
    getAllDiamondPrice().then((data) => {
      setDiamondPriceData(data);
    });
  };

  useEffect(() => {
    getAllDiamondPrice()
      .then((data) => setDiamondPriceData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h4">
                Diamond Price Manager
                <Button
                  variant="link"
                  style={{ textDecoration: "none" }}
                  onClick={refreshTable}
                >
                  <RefreshIcon style={{ margin: "0 5px 5px 0" }} /> REFRESH
                </Button>
                <Button
                  variant="link"
                  style={{ textDecoration: "none" }}
                  onClick={handleShowAdd}
                >
                  <AddIcon style={{ margin: "0 5px 5px 0" }} /> ADD
                </Button>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover className="account-table">
                  <thead>
                    <tr>
                      <th>Diamond Price ID</th>
                      <th>Diamond ID</th>
                      <th>Diamond Price</th>
                      <th>Clarity</th>
                      <th>Color</th>
                      <th>Carat Size</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diamondPriceData.length > 0 ? (
                      currentPageData.map((diamondPrice) => (
                        <tr key={diamondPrice.diamondPriceID}>
                          <td>{diamondPrice.diamondpriceID}</td>
                          <td>{diamondPrice.diamondID}</td>
                          <td>
                            {diamondPrice.diamondEntryPrice
                              ? diamondPrice.diamondEntryPrice.toLocaleString() +
                                " VNĐ"
                              : "N/a"}
                          </td>
                          <td>{diamondPrice.clarity}</td>
                          <td>{diamondPrice.color}</td>
                          <td>{diamondPrice.carat_size}</td>
                          <td>
                            <Button
                              variant="link"
                              onClick={() => handleShowUpdate(diamondPrice)}
                            >
                              <EditIcon />
                              Edit
                            </Button>
                            <DeleteDiamondPriceForm
                              diamondPriceID={diamondPrice.diamondPriceID}
                              onDelete={handleDelete}
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="text-center">
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
              <Pagination
                count={Math.ceil(diamondPriceData.length / size)}
                page={currentPage}
                onChange={handleChangePage}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <div className="iframe-container">
            <iframe
              title="Gold Price"
              srcDoc={`<script type="text/javascript" src="https://tygiausd.org/GiavangFullScript/dat-gia-vang/Widgets"></script>
                        <noscript> Vui lòng bật javascript để xem <a href="https://tygiausd.org/giavang/gia-vang-hom-nay">giá vàng</a></noscript>`}
              style={{ width: "100%", height: "1000px", border: "none" }}
            />
          </div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isUpdating ? "Update Gold Price" : "Add Gold Price"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdating ? (
            <UpdateDiamondPriceForm diamondPrice={selectedDiamondPrice} />
          ) : (
            <AddDiamondPriceForm />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default DiamondPriceManager;