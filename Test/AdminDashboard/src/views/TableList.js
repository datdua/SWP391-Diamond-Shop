import React, { useState, useEffect } from 'react';
import { Button, Modal, Container, Navbar, Nav, Row, Col, Card, Table } from 'react-bootstrap';
import { getAllJewelry } from '../api/jewelryCrud.js'; // Adjust this import to your file structure
import AddJewelryForm from '../components/JewelryCRUD/AddJewelryForm.js';
import UpdateJewelryForm from '../components/JewelryCRUD/UpdateJewelryForm.js'; // Adjust this import to your file structure
import DeleteJewelryButton from '../components/JewelryCRUD/DeleteJewelryForm.js'; // Adjust this import to your file structure

function TableList() {
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
  const handleShowUpdate = (jewelry) => {
    setSelectedJewelry(jewelry);
    setIsUpdating(true);
    setShowModal(true);
  };

  const handleDelete = (jewelryID) => {
    setJewelryData(jewelryData.filter(jewelry => jewelry.jewelryID !== jewelryID));
  };

  useEffect(() => {
    getAllJewelry()
      .then(data => setJewelryData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Jewelry Store</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Button onClick={handleShowAdd}>Add Jewelry</Button>
        </Nav>
      </Navbar>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h4">Jewelry List</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Jewelry ID</th>
                    <th>Diamond ID</th>
                    <th>Jewelry Name</th>
                    <th>Size</th>
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
                      <td>{jewelry.diamondID}</td>
                      <td>{jewelry.jewelryName}</td>
                      <td>{jewelry.size}</td>
                      <td>{jewelry.gender}</td>
                      <td><img src={jewelry.jewelryImage} alt={jewelry.jewelryName} style={{ width: "100px", height: "100px" }} /> </td>
                      <td>{jewelry.jewelryPrice}</td>
                      <td>
                        <Button variant="primary" onClick={() => handleShowUpdate(jewelry)}>Edit</Button>
                        <DeleteJewelryButton jewelryID={jewelry.jewelryID} onDelete={handleDelete} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isUpdating ? 'Update Jewelry' : 'Add Jewelry'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdating ? <UpdateJewelryForm jewelry={selectedJewelry} /> : <AddJewelryForm />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default TableList;