import React, { useState } from "react";
import { createJewelry } from "../../api/JewelryAPI.js"; // Adjust this import to your file structure
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

function AddJewelryForm() {
  const [jewelry, setJewelry] = useState({
    jewelryID: "",
    jewelryName: "",
    gender: "",
    jewelryImage: "",
    warrantyID: "",
    jewelryEntryPrice: "",
  });

  const [message, setMessage] = useState(""); // New state variable for the message

  const labels = {
    jewelryID: "Mã trang sức",
    jewelryName: "Tên trang sức",
    gender: "Giới tính",
    jewelryImage: "Hình ảnh trang sức",
    warrantyID: "Mã giấy bảo hành",
    jewelryEntryPrice: "Giá nhập",
  };

  const options = {
    gender: ["Nam", "Nữ"],
  }

  const handleChange = (event) => {
    setJewelry({ ...jewelry, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createJewelry(jewelry);
      console.log(response);
      setMessage("Tạo mới Trang Sức thành công "); // Set the message on success
    } catch (error) {
      console.error(error);
      setMessage("Tạo mới Trang Sức thất bại"); // Set the message on failure
    }
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {Object.keys(jewelry).map((key) => {
          if (key === "gender") {
            return (
              <FormControl fullWidth key={key}>
                <InputLabel id="gender-select-label">{labels[key]}</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender-select"
                  value={jewelry[key]}
                  label={labels[key]}
                  onChange={handleChange}
                  name={key}
                >
                  {options.gender.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            );
          } else {
            return (
              <TextField
                key={key}
                id="outlined-basic"
                label={labels[key]}
                variant="outlined"
                name={key}
                value={jewelry[key]}
                onChange={handleChange}
                type="text"
              />
            );
          }
        })}
        <Button type="submit" variant="contained" color="success">Hoàn thành</Button>
        {message && <p style={{ color: '#F2BA59', fontWeight: 'bold' }}>{message}</p>} {/* Render the message if it exists */}
      </Box>
    </div>
  );
}

export default AddJewelryForm;