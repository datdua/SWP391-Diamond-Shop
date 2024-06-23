import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { getAccountByID, updateAccount } from "../../api/accountCrud";

const ProfilePage = () => {
  const [account, setAccount] = useState(null);
  const [originalAccount, setOriginalAccount] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const accountID = localStorage.getItem("accountID");

  useEffect(() => {
    if (!accountID) {
      setError("Account ID is not provided");
      return;
    }

    const fetchAccount = async () => {
      try {
        const accountData = await getAccountByID(accountID);
        setAccount(accountData);
        setOriginalAccount(accountData); // Lưu lại thông tin gốc
      } catch (error) {
        setError("Failed to fetch account");
        console.error("Failed to fetch account", error);
      }
    };

    fetchAccount();
  }, [accountID]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateAccount(accountID, account);
      setIsEditing(false);
      setSuccess(true); // Hiển thị thông báo thành công
      setOriginalAccount(account); // Cập nhật thông tin gốc sau khi lưu
    } catch (error) {
      setError("Failed to update account");
      console.error("Failed to update account", error);
    }
  };

  const handleCancel = () => {
    setAccount(originalAccount); // Khôi phục lại thông tin gốc
    setIsEditing(false);
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!account) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Avatar
            alt={account.accountName}
            src="broken-image.jpg"
            sx={{ width: 100, height: 100, marginBottom: 2 }}
          />
          {isEditing ? (
            <TextField
              label="Account Name"
              name="accountName"
              value={account.accountName}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          ) : (
            <Typography variant="h4" gutterBottom>
              {account.accountName}
            </Typography>
          )}
          {isEditing ? (
            <TextField
              label="Email"
              name="email"
              value={account.email}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          ) : (
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {account.email}
            </Typography>
          )}
        </Box>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Role</Typography>
            {isEditing ? (
              <TextField
                label="Role"
                name="role"
                value={account.role}
                onChange={handleChange}
                fullWidth
              />
            ) : (
              <Typography>{account.role}</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Phone Number</Typography>
            {isEditing ? (
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={account.phoneNumber}
                onChange={handleChange}
                fullWidth
              />
            ) : (
              <Typography>{account.phoneNumber}</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Address</Typography>
            {isEditing ? (
              <TextField
                label="Address"
                name="addressAccount"
                value={account.addressAccount}
                onChange={handleChange}
                fullWidth
              />
            ) : (
              <Typography>{account.addressAccount || "N/A"}</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Active</Typography>
            <Typography>{account.active ? "Yes" : "No"}</Typography>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="center" marginTop={4}>
          {isEditing ? (
            <>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancel}
                sx={{ marginLeft: 2 }}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          )}
        </Box>
      </Paper>
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{
            width: "auto",
            position: "fixed",
            top: 0, 
            right: 0, 
            margin: 1, 
          }}
        >
          Thông tin cập nhật thành công!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProfilePage;

