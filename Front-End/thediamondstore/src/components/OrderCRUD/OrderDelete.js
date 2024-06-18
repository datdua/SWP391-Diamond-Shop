import React from "react";
import { Button } from "react-bootstrap";
import { deleteOrder } from "../../api/OrderAPI";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteOrderForm({ orderID, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm("Bạn có chắc muốn XÓA order này ?")) {
      try {
        await deleteOrder(orderID);
        onDelete(orderID);
        alert("Xóa thành công");
      } catch (error) {
        alert("Xóa thất bại");
      }
    }
  };

  return (
    <Button variant="link" onClick={handleDelete} style={{ color: "red" }}>
      <DeleteIcon />
    </Button>
  );
}
export default DeleteOrderForm;
