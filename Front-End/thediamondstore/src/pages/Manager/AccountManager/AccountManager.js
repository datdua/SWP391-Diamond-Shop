import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Container,
  Row,
  Col,
  Card,
  Table,
  Badge,
} from "react-bootstrap";
import { getAccountHaveNotRoleCustomer, deleteAccounts } from "../../../api/accountCrud.js";
import AddAccountForm from "../../../components/AccountCRUD/AddAccountForm.js";
import UpdateAccountForm from "../../../components/AccountCRUD/UpdateAccountForm.js";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Pagination, Tooltip, Checkbox, FormControlLabel } from "@mui/material";
import { toast } from "react-toastify";
import "./AccountManager.css";


function AccountManager() {
  const [accounts, setAccounts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const userRole = localStorage.getItem("role");
  const size = 8;
  const startIndex = (currentPage - 1) * size;
  const endIndex = startIndex + size;
  const currentPageData = accounts.slice(startIndex, endIndex);

  useEffect(() => {
    getAccountHaveNotRoleCustomer().then((data) => {
      setAccounts(data);
    });
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setIsUpdating(false);
  };

  const handleStatus = (Status) => {
    if (Status === "Đã kích hoạt") {
      return (
        <h6 style={{ marginTop: '10px' }}>
          <Badge pill bg="success">Đã kích hoạt</Badge>
        </h6>
      );
    } else if (Status === "Chưa kích hoạt") {
      return (
        <h6 style={{ marginTop: '10px' }}>
          <Badge pill bg="danger" text="dark">Chưa kích hoạt</Badge>
        </h6>
      );
    }
  };

  const showAlert = () => {
    toast.warning("Chức năng này chỉ dành cho Admin")
  }

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleShowAdd = () => {
    if(userRole !== "ROLE_ADMIN") {
      showAlert();
    }else {
    setSelectedAccount(null);
    setIsUpdating(false);
    setShowModal(true);
    }
  };

  const handleShowUpdate = (account) => {
    if(userRole !== "ROLE_ADMIN") {
      showAlert();
    }else {
    setSelectedAccount(account);
    setIsUpdating(true);
    setShowModal(true);
    }
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
    setSelectAll(newSelected.length === accounts.length);
    setIndeterminate(newSelected.length > 0 && newSelected.length < accounts.length);
  };

  const handleSelectAllChange = (event) => {
    setSelectAll(event.target.checked);
    setSelected(event.target.checked ? accounts.map((account) => account.accountID) : []);
    setIndeterminate(false);
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
    setSelectAll(newSelected.length === accounts.length);
    setIndeterminate(newSelected.length > 0 && newSelected.length < accounts.length);
  };

  const handleDeleteAccounts = async () => {
    if(userRole !== "ROLE_ADMIN") {
      showAlert();
    }else {
    if (window.confirm("Bạn có chắc muốn XÓA các tài khoản này?")) {
      try {
        await deleteAccounts(selected);
        setAccounts(accounts.filter((account) => !selected.includes(account.accountID)));
        setSelected([]);
        alert("Xóa thành công");
      } catch (error) {
        alert("Xóa thất bại");
      }
    }
  }
  };

  const refreshTable = () => {
    getAccountHaveNotRoleCustomer().then((data) => {
      setAccounts(data);
    });
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h4">
                Ban Điều Hành
                <Button
                  variant="link"
                  style={{ textDecoration: "none" }}
                  onClick={refreshTable}
                >
                  <RefreshIcon style={{ margin: "0 5px 5px 0" }} /> Tải Lại
                </Button>
                <Button
                  variant="link"
                  style={{ textDecoration: "none" }}
                  onClick={handleShowAdd}
                >
                  <AddIcon style={{ margin: "0 5px 5px 0" }} /> Thêm Tài Khoản
                </Button>
                {selected.length > 0 && (
                  <Tooltip describeChild title="Xóa các tài khoản đã chọn" arrow placement="top">
                    <Button variant="link" onClick={handleDeleteAccounts} style={{ color: "red" }}>
                      <DeleteIcon />
                    </Button>
                  </Tooltip>
                )}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table hover className="account-table">
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
                      <th>Mã Tài khoản</th>
                      <th>Email</th>
                      <th>Tên Tài Khoản</th>
                      <th>Mật Khẩu</th>
                      <th>SĐT</th>
                      <th>Địa Chỉ</th>
                      <th>Trạng Thái</th>
                      <th>Vai Trò</th>
                      <th>Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPageData.map((account) => {
                      const isItemSelected = isSelected(account.accountID);

                      return (
                        <tr
                          key={account.accountID}
                          style={{ cursor: 'pointer' }}
                        >
                          <td onClick={(event) => handleClick(event, account.accountID)}>
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              onChange={(event) => handleCheckboxChange(event, account.accountID)}
                            />
                          </td>
                          <td>{account.accountID}</td>
                          <td>{account.email}</td>
                          <td>{account.accountName}</td>
                          <td className="password-cell">{account.password}</td>
                          <td>{account.phoneNumber}</td>
                          <td>{account.addressAccount}</td>
                          <td className={account.active ? "active-status" : "inactive-status"}>
                            {handleStatus(account.active ? "Đã kích hoạt" : "Chưa kích hoạt")}
                          </td>
                          <td>{account.role}</td>
                          <td>
                            <Tooltip
                              describeChild
                              title="Cập nhật thông tin"
                              arrow
                              placement="top"
                            >
                              <Button
                                variant="link"
                                onClick={() => handleShowUpdate(account)}
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
                count={Math.ceil(accounts.length / size)}
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
            {isUpdating ? "Cập nhật tài khoản" : "Thêm tài khoản"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isUpdating ? (
            <UpdateAccountForm account={selectedAccount} onClose={handleClose} />
          ) : (
            <AddAccountForm onClose={handleClose} />
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default AccountManager;
