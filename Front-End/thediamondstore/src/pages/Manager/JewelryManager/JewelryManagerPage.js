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
import { getAllJewelry } from "../../../api/JewelryAPI.js";
import AddJewelryForm from "../../../components/JewelryCRUD/AddJewelryForm.js";
import UpdateJewelryForm from "../../../components/JewelryCRUD/UpdateJewelryForm.js";
import DeleteJewelryButton from "../../../components/JewelryCRUD/DeleteJewelryForm.js";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../ProductManager.css";

function JewelryManagerPage() {
  const [jewelryData, setJewelryData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJewelry, setSelectedJewelry] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setIsUpdating(false);
  };

  const handleShowAdd = () => {
    setSelectedJewelry(null);
    setIsUpdating(false);
    setShowModal(true);
  };

  const handleShowUpdate = (item) => {
    setSelectedJewelry(item);
    setIsUpdating(true);
    setShowModal(true);
  };

  const handleDelete = (jewelryID) => {
    setJewelryData(
      jewelryData.filter((jewelry) => jewelry.jewelryID !== jewelryID)
    );
  };

  const refreshTable = () => {
    getAllJewelry().then((data) => {
      setJewelryData(data);
    });
  };

  useEffect(() => {
    getAllJewelry()
      .then((data) => setJewelryData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h4">
                Jewelry List
                <Button variant="link" onClick={refreshTable}>
                  <RefreshIcon />
                </Button>
                <Button variant="link" onClick={handleShowAdd}>
                  <AddIcon />
                </Button>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover className="account-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Jewelry ID</th>
                      <th>Jewelry Name</th>
                      <th>Gender</th>
                      <th>Jewelry Image</th>
                      <th>Jewelry Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jewelryData.map((jewelry, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{jewelry.jewelryID}</td>
                        <td>{jewelry.jewelryName}</td>
                        <td>{jewelry.gender}</td>
                        <td>
                          <img
                            src={jewelry.jewelryImage}
                            alt={jewelry.jewelryName}
                            style={{ width: "50px", height: "50px" }}
                          />{" "}
                        </td>
                        <td>
                          {jewelry.jewelryEntryPrice.toLocaleString() + " VNĐ"}
                        </td>
                        <td>
                          <Button
                            variant="link"
                            onClick={() => handleShowUpdate(jewelry)}
                          >
                            <EditIcon />
                          </Button>
                          <DeleteJewelryButton
                            jewelryID={jewelry.jewelryID}
                            onDelete={() => handleDelete(jewelry.jewelryID)}
                          >
                            <DeleteIcon />
                          </DeleteJewelryButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isUpdating ? "Update Jewelry" : "Add Jewelry"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdating ? (
            <UpdateJewelryForm
              jewelry={selectedJewelry}
              onClose={handleClose}
            />
          ) : (
            <AddJewelryForm onClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default JewelryManagerPage;
