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
  deleteCertificate,
  getAllCertificates,
} from "../../../api/CertificateAPI";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCertificateForm from "../../../components/CertificateCRUD/AddCertificateForm";
import UpdateCertificateForm from "../../../components/CertificateCRUD/UpdateCertificateForm";
import { Pagination, Tooltip, Checkbox, FormControlLabel } from "@mui/material";
import "../ProductManager.css";

function CertificateManagerPage() {
  const [certificateData, setCertificateData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const size = 8;
  const startIndex = (currentPage - 1) * size;
  const endIndex = startIndex + size;
  const currentPageData = certificateData.slice(startIndex, endIndex);

  const handleClose = () => {
    setShowModal(false);
    setIsUpdating(false);
  };

  const handleShowUpdate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsUpdating(true);
    setShowModal(true);
  };

  const handleDelete = async (certificateID) => {
    setCertificateData(
      certificateData.filter(
        (certificate) => certificate.certificateID !== certificateID
      )
    );
  };


  const handleCheckboxChange = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else if (selectedIndex === 0) {
      newSelected = selected.slice(1);
    } else if (selectedIndex === selected.length - 1) {
      newSelected = selected.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelected = [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)];
    }

    setSelected(newSelected);
    setSelectAll(newSelected.length === certificateData.length);
    setIndeterminate(newSelected.length > 0 && newSelected.length < certificateData.length);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = [...selected, id];
    } else if (selectedIndex === 0) {
      newSelected = selected.slice(1);
    } else if (selectedIndex === selected.length - 1) {
      newSelected = selected.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelected = [...selected.slice(0, selectedIndex), ...selected.slice(selectedIndex + 1)];
    }

    setSelected(newSelected);
    setSelectAll(newSelected.length === certificateData.length);
    setIndeterminate(newSelected.length > 0 && newSelected.length < certificateData.length);
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
    setSelected(event.target.checked ? certificateData.map((certificate) => certificate.certificateID) : []);
    setIndeterminate(false);
  };

  const handleDeleteCertificate = async () => {
    if (window.confirm("Bạn có chắc muốn XÓA các chứng chỉ này?")) {
      try {
        await deleteCertificate(selectedCertificate);
        setCertificateData(certificateData.filter((certificate) => !selectedCertificate.includes(certificate.certificateID)));
        setSelected([]);
        alert("Xóa thành công");
      } catch (error) {
        alert("Xóa thất bại");
      }
    }
  };

  const refreshTable = () => {
    getAllCertificates().then((data) => {
      setCertificateData(data);
    });
  };

  const handleShowImage = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setShowImageModal(false);
    setSelectedImage("");
  };

  useEffect(() => {
    getAllCertificates()
      .then((data) => {
        setCertificateData(data);
      })
      .catch((error) => {
        console.error("Error fetching certificate data:", error);
      });
  }, []);

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h4">
                Certificate List
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
                {selected.length > 0 && (
                  <Tooltip describeChild title="Xóa các chứng chỉ đã chọn" arrow placement="top">
                    <Button variant="link" onClick={handleDeleteCertificate} style={{ color: "red" }}>
                      <DeleteIcon />
                    </Button>
                  </Tooltip>
                )}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover className="account-table">
                  <thead>
                    <tr>
                      <th>
                        <FormControlLabel
                          className="checkbox-align"
                          control={
                            <Checkbox
                              color="primary"
                              indeterminate={indeterminate}
                              checked={selectAll}
                              onChange={handleSelectAllChange}
                            />
                          }
                        />
                      </th>
                      <th>Certificate ID</th>
                      <th>Expiration Date</th>
                      <th>Certificate Image</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPageData.map((certificate) => {
                      const isItemSelected = isSelected(certificate.certificateID);

                      return (
                        <tr
                          key={certificate.certificateID}
                          style={{ cursor: 'pointer' }}
                        >
                          <td onClick={(event) => handleClick(event, certificate.certificateID)}>
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              onChange={(event) => handleCheckboxChange(event, certificate.certificateID)}
                            />
                          </td>
                        <td>{certificate.certificateID}</td>
                        <td>{certificate.expirationDate}</td>
                        <td>
                          <img
                            src={certificate.certificateImage}
                            alt="Certificate"
                            style={{
                              width: "50px",
                              height: "50px",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              handleShowImage(certificate.certificateImage)
                            }
                          />
                        </td>
                        <td>{certificate.certificateStatus}</td>
                        <td>
                          <Tooltip
                            describeChild
                            title="Cập nhật thông tin"
                            arrow
                            placement="top"
                          >
                            <Button
                              variant="link"
                              onClick={() => handleShowUpdate(certificate)}
                            >
                              <EditIcon />
                            </Button>
                          </Tooltip>
                        </td>
                      </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
            <Card.Footer>
              <Pagination
                count={Math.ceil(certificateData.length / size)}
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
            {isUpdating ? "Update Certificate" : "Add Certificate"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdating ? (
            <UpdateCertificateForm
              certificate={selectedCertificate}
              onClose={handleClose}
            />
          ) : (
            <AddCertificateForm onClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>

      <Modal show={showImageModal} onHide={handleCloseImageModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Certificate Image</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={selectedImage}
            alt="Certificate"
            style={{ width: "100%", height: "500px" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default CertificateManagerPage;
