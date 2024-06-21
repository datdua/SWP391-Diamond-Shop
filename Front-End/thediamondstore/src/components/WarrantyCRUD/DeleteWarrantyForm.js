import React from "react";
import { Button } from "react-bootstrap";
import { deleteWarranty } from "../../api/WarrantyAPI";
import DeleteIcon from "@mui/icons-material/Delete";

function DeleteWarrantyForm({ warrantyID, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm("Bạn có chắc muốn XÓA warranty này ?")) {
      try {
        await deleteWarranty(warrantyID);
        onDelete(warrantyID);
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
export default DeleteWarrantyForm;
