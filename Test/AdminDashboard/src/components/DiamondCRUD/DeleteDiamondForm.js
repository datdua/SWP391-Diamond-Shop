import React from 'react';
import { Button } from 'react-bootstrap';
import { deleteDiamond } from '../../api/diamondCrud'; // Adjust this import to your file structure

function DeleteDiamondButton({ diamondId, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm('Bạn có chắc muốn XÓA kim cương này ?')) {
      try {
        await deleteDiamond(diamondId);
        onDelete(diamondId);
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

export default DeleteDiamondButton;