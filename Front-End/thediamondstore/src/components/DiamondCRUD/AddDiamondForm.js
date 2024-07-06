import React, { useState } from "react";
import { createDiamond } from "../../api/DiamondAPI.js";
// import { Form, Button } from "react-bootstrap";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function AddDiamondForm() {
  const [diamond, setDiamond] = useState({
    maSo: "",
    maBaoHanh: "",
    maChungNhan: "",
    tenKimCuong: "",
    giaNhap: "",
    hinhAnh: "",
    trongLuongCarat: "",
    kichThuocCarat: "",
    mauSac: "",
    vetCat: "",
    doTinhKhiet: "",
    hinhDang: "",
    xuatXu: "",
  });

  const [message, setMessage] = useState("");

  const labels = {
    maSo: "Mã số",
    maBaoHanh: "Mã bảo hành",
    maChungNhan: "Mã chứng nhận",
    tenKimCuong: "Tên kim cương",
    giaNhap: "Giá nhập",
    hinhAnh: "Hình ảnh",
    trongLuongCarat: "Trọng lượng carat",
    kichThuocCarat: "Kích thước carat",
    mauSac: "Màu sắc",
    vetCat: "Vết cắt",
    doTinhKhiet: "Độ tinh khiết",
    hinhDang: "Hình dạng",
    xuatXu: "Xuất xứ",
  };

  const handleChange = (event) => {
    setDiamond({ ...diamond, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createDiamond(diamond);
      console.log(response);
      setMessage("Tạo mới Kim Cương thành công");
    } catch (error) {
      console.error(error);
      setMessage("Tạo mới Kim Cương thất bại");
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
        {Object.keys(diamond).map((key) => (
          <TextField id="outlined-basic" label={labels[key]} variant="outlined" onChange={handleChange} />
        ))}
        <Button type="submit" variant="contained" color="success">Hoàn thành</Button>
        {message && <p style={{color: '#F2BA59', fontWeight:'bold'}}>{message}</p>}
      </Box>
      {/* <Form onSubmit={handleSubmit}>
        {Object.keys(diamond).map((key) => (
          <Form.Group controlId={key} key={key}>
            <Form.Label>{labels[key]}</Form.Label>
            <Form.Control
              type="text"
              name={key}
              value={diamond[key]}
              onChange={handleChange}
              placeholder={labels[key]}
            />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          Tạo Kim Cương
        </Button>
      </Form> */}
    </div>
  );
}

export default AddDiamondForm;
