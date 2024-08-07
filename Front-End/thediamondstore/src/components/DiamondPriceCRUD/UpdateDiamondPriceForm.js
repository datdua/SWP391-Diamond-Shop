import React, { useState } from "react";
import { updateDiamondPrice } from "../../api/DiamondPriceAPI.js";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function UpdateDiamondPriceForm({ diamondPrice }) {
  const [updatedDiamondPrice, setUpdateDiamondPrice] = useState(diamondPrice);
  const [message, setMessage] = useState("");

  const labels = {
    diamondEntryPrice: "Giá Kim Cương",
    clarity: "Độ trong",
    color: "Màu sắc",
    caratSize: "Kích thước",
  };

  const handleChange = (event) => {
    setUpdateDiamondPrice({
      ...updatedDiamondPrice,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await updateDiamondPrice(diamondPrice.diamondPriceID, updatedDiamondPrice);
      console.log(response);
      setMessage(response.message || "Cập nhật giá kim cương thành công");
    } catch (error) {
      let errorMessage = "Cập nhật giá kim cương thất bại";
      if (error.message) {
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
        <TextField
          id="outlined-basic"
          label={labels.diamondEntryPrice}
          variant="outlined"
          name="diamondEntryPrice"
          value={updatedDiamondPrice.diamondEntryPrice}
          onChange={handleChange}
          type="text"
        />
        <FormControl fullWidth>
          <InputLabel id="color-select-label">{labels.color}</InputLabel>
          <Select
            labelId="color-select-label"
            id="color-select"
            value={updatedDiamondPrice.color}
            label={labels.color}
            name="color"
            onChange={handleChange}
          >
            {['F', 'E', 'J', 'D'].map((color) => (
              <MenuItem key={color} value={color}>{color}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="clarity-select-label">{labels.clarity}</InputLabel>
          <Select
            labelId="clarity-select-label"
            id="clarity-select"
            value={updatedDiamondPrice.clarity}
            label={labels.clarity}
            name="clarity"
            onChange={handleChange}
          >
            {['VS1', 'VS2', 'VVS1', 'VVS2'].map((clarity) => (
              <MenuItem key={clarity} value={clarity}>{clarity}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label={labels.caratSize}
          variant="outlined"
          name="caratSize"
          value={updatedDiamondPrice.caratSize}
          onChange={handleChange}
          type="text"
        />
        <Button type="submit" variant="contained" color="success">Cập nhật</Button>
        {message && <p style={{ color: '#F2BA59', fontWeight: 'bold' }}>{message}</p>}
      </Box>
    </div>
  );
}
export default UpdateDiamondPriceForm;