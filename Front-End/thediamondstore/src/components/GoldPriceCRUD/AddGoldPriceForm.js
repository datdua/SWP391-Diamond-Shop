import React, { useState } from "react";
import { createGoldPrice } from "../../api/GoldPriceAPI.js";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function AddGoldPriceForm() {
  const [goldPrice, setGoldPrice] = useState({
    jewelryID: "",
    goldPrice: "",
    goldAge: "",
  });

  const [message, setMessage] = useState("");

  const labels = {
    jewelryID: "Mã trang sức",
    goldPrice: "Giá vàng",
    goldAge: "Tuổi vàng",
  };

  const handleChange = (event) => {
    setGoldPrice({ ...goldPrice, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createGoldPrice(goldPrice);
      console.log(response);
      alert("Tạo mới Giá Vàng cho Trang Sức thành công"); // Set the message on success
      setMessage("Tạo mới Giá Vàng cho Trang Sức thành công");
    } catch (error) {
      console.error(error);
      if (
        error.response &&
        error.response.data.message === "Giá vàng cho trang sức này đã tồn tại"
      ) {
        alert("Giá vàng cho trang sức này đã tồn tại"); // Set the message if gold price already exists
        setMessage("Giá vàng cho trang sức này đã tồn tại");
      } else {
        alert("Tạo mới Giá Vàng cho Trang Sức thất bại"); // Set the message on failure
        setMessage("Tạo mới Giá Vàng cho Trang Sức thất bại");
      }
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
        {Object.keys(goldPrice).map((key) => (
          <TextField
            key={key}
            id="outlined-basic"
            label={labels[key]}
            variant="outlined"
            name={key}
            value={goldPrice[key]}
            onChange={handleChange}
            type={key.includes("Date") ? "date" : key.includes("Time") ? "time" : "text"}
          />
        ))}
        <Button type="submit" variant="contained" color="success">Hoàn thành</Button>
        {message && <p style={{ color: '#F2BA59', fontWeight: 'bold' }}>{message}</p>}
      </Box>
    </div>
  );
}

export default AddGoldPriceForm;