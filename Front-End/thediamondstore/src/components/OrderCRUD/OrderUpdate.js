import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { updateOrder } from "../../api/OrderAPI";

function UpdateOrderForm({ order }) {
  const [updatedOrder, setUpdatedOrder] = useState(order);

  const handleChange = (event) => {
    setUpdatedOrder({
      ...updatedOrder,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateOrder(order.orderID, updatedOrder);
      alert("Cập nhật thông tin Kim Cương thành công");
    } catch (error) {
      alert("Cập nhật thông tin Kim Cương thất bại");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Warrantity Image</Form.Label>
        <Form.Control
          type="text"
          name="warrantyImage"
          value={updatedOrder.warrantyImage}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Certification Image</Form.Label>
        <Form.Control
          type="text"
          name="certificationImage"
          value={updatedOrder.certificationqImage}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Order Name</Form.Label>
        <Form.Control
          type="text"
          name="orderName"
          value={updatedOrder.orderName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Order Entry Price</Form.Label>
        <Form.Control
          type="text"
          name="orderEntryPrice"
          value={updatedOrder.orderEntryPrice}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Order Image</Form.Label>
        <Form.Control
          type="text"
          name="orderImage"
          value={updatedOrder.orderImage}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Carat Weight</Form.Label>
        <Form.Control
          type="text"
          name="carat_weight"
          value={updatedOrder.carat_weight}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Carat Size</Form.Label>
        <Form.Control
          type="text"
          name="carat_size"
          value={updatedOrder.carat_size}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          name="color"
          value={updatedOrder.color}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Cut</Form.Label>
        <Form.Control
          type="text"
          name="cut"
          value={updatedOrder.cut}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Clarity</Form.Label>
        <Form.Control
          type="text"
          name="clarity"
          value={updatedOrder.clarity}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Shape</Form.Label>
        <Form.Control
          type="text"
          name="shape"
          value={updatedOrder.shape}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Origin</Form.Label>
        <Form.Control
          type="text"
          name="origin"
          value={updatedOrder.origin}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
  );
}

export default UpdateOrderForm;
