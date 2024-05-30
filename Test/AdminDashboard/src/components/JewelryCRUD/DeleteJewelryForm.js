import React from 'react';
import { Button } from 'react-bootstrap';
import { deleteJewelry } from '../../api/jewelryCrud'; // Adjust this import to your file structure

function DeleteJewelryButton({ jewelryID, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm('Bạn có chắc muốn XÓA trang sức này ?')) {
      try {
        await deleteJewelry(jewelryID);
        onDelete(jewelryID);
        alert('Xóa thành công');
      } catch (error) {
        alert('Xóa thất bại');
      }
    }
  };

  return (
    <Button variant="danger" onClick={handleDelete}>Delete</Button>
  );
}

export default DeleteJewelryButton;