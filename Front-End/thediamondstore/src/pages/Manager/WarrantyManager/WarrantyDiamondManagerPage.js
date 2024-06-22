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
import {
  getAllWarranties,
  getWarrantyJewelryIDIsNull,
} from "../../../api/WarrantyAPI";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddWarrantyForm from "../../../components/WarrantyCRUD/AddWarrantyForm";
import UpdateWarrantyDiamondForm from "../../../components/WarrantyCRUD/UpdateWarrantyDiamondForm";
import DeleteWarrantyForm from "../../../components/WarrantyCRUD/DeleteWarrantyForm";
import { Pagination } from "@mui/material";
import "../ProductManager.css";

function WarrantyManagerPage() {
  const [warrantyData, setWarrantyData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedWarranty, setSelectedWarranty] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const size = 8;

  const startIndex = (currentPage - 1) * size;
  const endIndex = startIndex + size;
  const currentPageData = warrantyData.slice(startIndex, endIndex);

  const handleClose = () => {
    setShowModal(false);
    setIsUpdating(false);
  };

  const handleShowUpdate = (warranty) => {
    setSelectedWarranty(warranty);
    setIsUpdating(true);
    setShowModal(true);
  };

  const handleDelete = async (warrantyID) => {
    setWarrantyData(
      warrantyData.filter((warranty) => warranty.warrantyID !== warrantyID)
    );
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const refreshTable = () => {
    getWarrantyJewelryIDIsNull().then((data) => {
      setWarrantyData(data);
    });
  };

  useEffect(() => {
    getWarrantyJewelryIDIsNull()
      .then((data) => {
        setWarrantyData(data);
      })
      .catch((error) => {
        console.error("Error fetching warranty data:", error);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h4">
                Warranty List
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
                  onClick={() => setShowModal(true)}
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
                      <th>#</th>
                      <th>Warranty ID</th>
                      <th>Diamond ID</th>
                      <th>Expiration Date</th>
                      <th>Warranty Image</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPageData.map((warranty, index) => (
                      <tr key={index}>
                        <td>{startIndex + index + 1}</td>
                        <td>{warranty.warrantyID}</td>
                        <td>{warranty.diamondID || "N/A"}</td>
                        <td>{warranty.expirationDate}</td>
                        <td>
                          <img
                            src={warranty.warrantyImage}
                            alt="Warranty"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </td>
                        <td>{warranty.warrantyStatus}</td>
                        <td>
                          <Button
                            variant="link"
                            onClick={() => handleShowUpdate(warranty)}
                          >
                            <EditIcon />
                          </Button>
                          <DeleteWarrantyForm
                            warrantyID={warranty.warrantyID}
                            onDelete={() => handleDelete(warranty.warrantyID)}
                          >
                            <DeleteIcon />
                          </DeleteWarrantyForm>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
            <Card.Footer>
              <Pagination
                count={Math.ceil(warrantyData.length / size)}
                page={currentPage}
                onChange={handleChangePage}
              />
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isUpdating ? "Update Warranty" : "Add Warranty"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdating ? (
            <UpdateWarrantyDiamondForm
              warranty={selectedWarranty}
              onClose={handleClose}
            />
          ) : (
            <AddWarrantyForm onClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default WarrantyManagerPage;
