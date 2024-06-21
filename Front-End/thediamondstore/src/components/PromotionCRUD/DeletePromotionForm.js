import React from "react";
import { Button } from "react-bootstrap";
import { deletePromotion } from "../../api/PromotionAPI";
import DeleteIcon from "@mui/icons-material/Delete";

function DeletePromotionForm({ promotionID, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm("Bạn có chắc muốn XÓA promotion này ?")) {
      try {
        await deletePromotion(promotionID);
        onDelete(promotionID);
        alert("Xóa thành công");
      } catch (error) {
        alert("Xóa thất bại");
      }
    }
  };

  return (
    <Button variant="link" onClick={handleDelete} style={{ color: "red" }}>
      <DeleteIcon />
      Delete
    </Button>
  );
}
export default DeletePromotionForm;
