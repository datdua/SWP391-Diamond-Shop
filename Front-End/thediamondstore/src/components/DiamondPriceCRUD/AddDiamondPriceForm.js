import React, { useState } from "react";
import { createDiamondPrice } from "../../api/DiamondPriceAPI.js";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function AddDiamondPriceForm() {
  const [diamondPrice, setDiamondPrice] = useState({
    diamondEntryPrice: "",
    clarity: "",
    color: "",
    caratSize: "",
  });

  const [message, setMessage] = useState("");

  const labels = {
    diamondEntryPrice: "Giá Kim Cương",
    clarity: "Độ trong",
    color: "Màu sắc",
    caratSize: "Kích thước",
  };

  const options = {
    color: ["F", "E", "J", "D"],
    clarity: ["VS1", "VS2", "VVS1", "VVS2"],
  };

  const handleChange = (event) => {
    setDiamondPrice({ ...diamondPrice, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createDiamondPrice(diamondPrice);
      console.log(response);
      setMessage(response.message || "Tạo mới giá Kim Cương thành công");
    } catch (error) {
      let errorMessage = "Tạo mới giá Kim Cương thất bại";
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      setMessage(errorMessage);
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
        {Object.keys(diamondPrice).map((key) => (
          options[key] ? (
            <TextField
              key={key}
              id={`select-${key}`}
              select
              label={labels[key]}
              value={diamondPrice[key]}
              onChange={handleChange}
              name={key}
              variant="outlined"
            >
              {options[key].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          ) : (
            <TextField
              key={key}
              id="outlined-basic"
              label={labels[key]}
              variant="outlined"
              name={key}
              value={diamondPrice[key]}
              onChange={handleChange}
              type="text"
            />
          )
        ))}
        <Button type="submit" variant="contained" color="success">Thêm giá</Button>
        {message && <p style={{ color: '#F2BA59', fontWeight: 'bold' }}>{message}</p>}
      </Box>
    </div>
  );
}

export default AddDiamondPriceForm;