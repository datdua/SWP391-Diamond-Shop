import React, { useState, useEffect } from 'react';
import { Button, Modal, Container, Navbar, Nav, Row, Col, Card, Table, Dropdown } from 'react-bootstrap';
import { getAllJewelry } from '../api/jewelryCrud.js'; // Adjust this import to your file structure
import AddJewelryForm from '../components/JewelryCRUD/AddJewelryForm.js';
import UpdateJewelryForm from '../components/JewelryCRUD/UpdateJewelryForm.js'; // Adjust this import to your file structure
import DeleteJewelryButton from '../components/JewelryCRUD/DeleteJewelryForm.js'; // Adjust this import to your file structure
import AddDiamondForm from '../components/DiamondCRUD/AddDiamondForm.js';
import UpdateDiamondForm from '../components/DiamondCRUD/UpdateDiamondFrom.js'; // Corrected import path
import DeleteDiamondButton from '../components/DiamondCRUD/DeleteDiamondForm.js'; // Adjust this import to your file structure
import { getAllDiamond } from '../api/diamondCrud.js';

function TableList() {
  const [jewelryData, setJewelryData] = useState([]);
  const [diamondData, setDiamondData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJewelry, setSelectedJewelry] = useState(null);
  const [selectedDiamond, setSelectedDiamond] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showDiamondTable, setShowDiamondTable] = useState(false);
  const [showJewelryTable, setShowJewelryTable] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    setIsUpdating(false);
  };
  const handleShowAdd = () => {
    setSelectedJewelry(null);
    setSelectedDiamond(null);
    setIsUpdating(false);
    setShowModal(true);
  };
  const handleShowUpdate = (item) => {
    if (showDiamondTable) {
      setSelectedDiamond(item);
      setSelectedJewelry(null);
    } else {
      setSelectedJewelry(item);
      setSelectedDiamond(null);
    }
    setIsUpdating(true);
    setShowModal(true);
  };

  const handleDelete = (jewelryID, diamondID) => {
    if (jewelryID) {
      setJewelryData(jewelryData.filter(jewelry => jewelry.jewelryID !== jewelryID));
    }
    if (diamondID) {
      setDiamondData(diamondData.filter(diamond => diamond.diamondID !== diamondID));
    }
  };

  const handleShowDiamondTable = () => {
    setShowDiamondTable(true);
    setShowJewelryTable(false);
  };

  const handleShowJewelryTable = () => {
    setShowDiamondTable(false);
    setShowJewelryTable(true);
  };

  useEffect(() => {
    getAllJewelry()
      .then(data => setJewelryData(data))
      .catch(error => console.error(error));

    getAllDiamond()
      .then(data => setDiamondData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Diamond Store</Navbar.Brand>
        <Nav className="mr-auto">
          <Dropdown onSelect={(eventKey) => eventKey === 'diamond' ? handleShowDiamondTable() : handleShowJewelryTable()}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Manager
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="diamond">Diamond Manager</Dropdown.Item>
              <Dropdown.Item eventKey="jewelry">Jewelry Manager</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button onClick={handleShowAdd}>{showDiamondTable ? 'Add Diamond' : 'Add Jewelry'}</Button>
        </Nav>
      </Navbar>
      {showJewelryTable && (
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
                          <DeleteJewelryButton jewelryID={jewelry.jewelryID} onDelete={() => handleDelete(jewelry.jewelryID, null)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {showDiamondTable && (
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                <Card.Title as="h4">Diamond List</Card.Title>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Diamond ID</th>
                      <th>Warranty ID</th>
                      <th>Certification ID</th>
                      <th>Diamond Name</th>
                      <th>Diamond Price</th>
                      <th>Diamond Image</th>
                      <th>Carat Weight</th>
                      <th>Carat Size</th>
                      <th>Color</th>
                      <th>Cut</th>
                      <th>Clarity</th>
                      <th>Shape</th>
                      <th>Origin</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {diamondData.map((diamond, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{diamond.diamondID}</td>
                        <td>{diamond.warrantityID}</td>
                        <td>{diamond.certificationID}</td>
                        <td>{diamond.diamondName}</td>
                        <td>{diamond.diamondPrice}</td>
                        <td><img src={diamond.diamondImage} alt={diamond.diamondName} style={{ width: "100px", height: "100px" }}/></td>
                        <td>{diamond.carat_weight}</td>
                        <td>{diamond.carat_size}</td>
                        <td>{diamond.color}</td>
                        <td>{diamond.cut}</td>
                        <td>{diamond.clarity}</td>
                        <td>{diamond.shape}</td>
                        <td>{diamond.origin}</td>
                        <td>
                          <Button variant="primary" onClick={() => handleShowUpdate(diamond)}>Edit</Button>
                          <DeleteDiamondButton diamondId={diamond.diamondID} onDelete={() => handleDelete(null, diamond.diamondID)} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isUpdating ? (showDiamondTable ? 'Update Diamond' : 'Update Jewelry') : (showDiamondTable ? 'Add Diamond' : 'Add Jewelry')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdating ? (showDiamondTable ? <UpdateDiamondForm diamond={selectedDiamond} /> : <UpdateJewelryForm jewelry={selectedJewelry} />) : (showDiamondTable ? <AddDiamondForm /> : <AddJewelryForm />)}
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
