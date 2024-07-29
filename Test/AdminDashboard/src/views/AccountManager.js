import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Table,
} from "react-bootstrap";
import { getAllAccount } from "../api/accountCrud";
import AddAccountForm from "../components/AccountCRUD/AddAccountForm.js";
import UpdateAccountForm from "../components/AccountCRUD/UpdateAccountForm";
import DeleteAccountForm from "../components/AccountCRUD/DeleteAccountForm";
import "../assets/css/AccountManager.css";
import { FiRefreshCw } from "react-icons/fi";

function AccountManager() {
  const [accounts, setAccounts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    getAllAccount().then((data) => {
      setAccounts(data);
    });
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setIsUpdating(false);
  };

  const handleShowAdd = () => {
    setSelectedAccount(null);
    setIsUpdating(false);
    setShowModal(true);
  };

  const handleShowUpdate = (account) => {
    setSelectedAccount(account);
    setIsUpdating(true);
    setShowModal(true);
  };

  const handleShowDeleteModal = (account) => {
    setSelectedAccount(account);
    setShowDeleteModal(true);
  };

  const handleDeleteAccount = (accountID) => {
    if (accountID !== null && accountID !== undefined) {
      setAccounts(
        accounts.filter((account) => account.accountID !== accountID)
      );
      setShowDeleteModal(false);
    }
  };

  const refreshTable = () => {
    getAllAccount().then((data) => {
      setAccounts(data);
    });
  };

  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Account Manager</Navbar.Brand>
        <Nav className="mr-auto">
          <Button onClick={handleShowAdd}>Add Account</Button>
        </Nav>
      </Navbar>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h4">
                Account List
                <Button variant="link" onClick={refreshTable}>
                  <FiRefreshCw />
                </Button>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table striped bordered hover className="account-table">
                  <thead>
                    <tr>
                      <th>Account ID</th>
                      <th>Email</th>
                      <th>Account Name</th>
                      <th>Password</th>
                      <th>Phone Number</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accounts.map((account) => (
                      <tr key={account.accountID}>
                        <td>{account.accountID}</td>
                        <td>{account.email}</td>
                        <td>{account.accountName}</td>
                        <td className="password-cell">{account.password}</td>
                        <td>{account.phoneNumber}</td>
                        <td>{account.role}</td>
                        <td>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleShowUpdate(account)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleShowDeleteModal(account)}
                          >
                            Delete
                          </Button>
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
            {isUpdating ? "Update Account" : "Add Account"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdating ? (
            <UpdateAccountForm
              account={selectedAccount}
              onClose={handleClose}
            />
          ) : (
            <AddAccountForm onClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DeleteAccountForm
            accountID={selectedAccount ? selectedAccount.accountID : null}
            onDelete={() =>
              handleDeleteAccount(
                selectedAccount ? selectedAccount.accountID : null
              )
            }
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default AccountManager;
