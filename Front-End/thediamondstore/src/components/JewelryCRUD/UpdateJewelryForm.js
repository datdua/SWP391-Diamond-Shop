import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { updateJewelry } from "../../api/JewelryAPI.js"; // Adjust this import to your file structure

function UpdateJewelryForm({ jewelry }) {
  const [updatedJewelry, setUpdatedJewelry] = useState(jewelry);

  const handleChange = (event) => {
    setUpdatedJewelry({
      ...updatedJewelry,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateJewelry(jewelry.jewelryID, updatedJewelry);
      alert("Cập nhật thông tin Trang Sức thành công");
    } catch (error) {
      alert("Cập nhật thông tin Trang Sức thất bại");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Jewelry Name</Form.Label>
        <Form.Control
          type="text"
          name="jewelryName"
          value={updatedJewelry.jewelryName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Control
          type="text"
          name="gender"
          value={updatedJewelry.gender}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Size</Form.Label>
        <Form.Control
          type="text"
          name="size"
          value={updatedJewelry.size}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Jewelry Image</Form.Label>
        <Form.Control
          type="text"
          name="jewelryImage"
          value={updatedJewelry.jewelryImage}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
}

export default UpdateJewelryForm;
