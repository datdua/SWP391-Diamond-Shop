import React, { useState } from "react";
import { createJewelry } from "../../api/jewelryCrud.js";

function AddJewelryForm() {
  const [jewelry, setJewelry] = useState({
    jewelryID: "",
    diamondID: "",
    jewelryName: "",
    size: "",
    gender: "",
    jewelryImage: "",
    jewelryEntryPrice: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setJewelry({ ...jewelry, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createJewelry(jewelry);
      console.log(response);
      setMessage("Tạo mới Trang Sức thành công ");
    } catch (error) {
      console.error(error);
      setMessage("Tạo mới Trang Sức thất bại");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="jewelryID"
          value={jewelry.jewelryID}
          onChange={handleChange}
          placeholder="Jewelry ID"
        />
        <input
          name="diamondID"
          value={jewelry.diamondID}
          onChange={handleChange}
          placeholder="Diamond ID"
        />
        <input
          name="jewelryName"
          value={jewelry.jewelryName}
          onChange={handleChange}
          placeholder="Jewelry Name"
        />
        <input
          name="size"
          value={jewelry.size}
          onChange={handleChange}
          placeholder="Size"
        />
        <input
          name="gender"
          value={jewelry.gender}
          onChange={handleChange}
          placeholder="Gender"
        />
        <input
          name="jewelryImage"
          value={jewelry.jewelryImage}
          onChange={handleChange}
          placeholder="Jewelry Image URL"
        />
        <input
          name="jewelryEntryPrice"
          value={jewelry.jewelryEntryPrice}
          onChange={handleChange}
          placeholder="Jewelry Price"
        />
        <button type="submit">Create Jewelry</button>
      </form>
      {message && <p>{message}</p>} {/* Render the message if it exists */}
    </div>
  );
}

export default AddJewelryForm;
