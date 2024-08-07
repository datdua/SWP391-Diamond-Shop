import React, { useState } from 'react';
import { createDiamond } from '../../api/diamondCrud'; 

function AddDiamondForm() {
  const [diamond, setdiamond] = useState({
    diamondID: '',
    warrantyID: '',
    certificationID: '',
    diamondName: '',
    diamondPrice: '',
    diamondImage: '',
    weight: '',
    caratSize: '',
    color: '',
    cut: '',
    clarity: '',
    shape: '',
    origin: '',
  });

  const [message, setMessage] = useState(''); 

  const handleChange = (event) => {
    setdiamond({ ...diamond, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await createDiamond(diamond);
      console.log(response);
      setMessage('Tạo mới Kim Cương thành công'); 
    } catch (error) {
      console.error(error);
      setMessage('Tạo mới Kim Cương thất bại'); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="diamondID" value={diamond.diamondID} onChange={handleChange} placeholder="diamond ID" />
        <input name="warrantyID" value={diamond.warrantyID} onChange={handleChange} placeholder="warranty ID" />
        <input name="certificationID" value={diamond.certificationID} onChange={handleChange} placeholder="certification ID" />
        <input name="diamondName" value={diamond.diamondName} onChange={handleChange} placeholder="diamond Name" />
        <input name="diamondPrice" value={diamond.diamondPrice} onChange={handleChange} placeholder="diamond Price" />
        <input name="diamondImage" value={diamond.diamondImage} onChange={handleChange} placeholder="diamond Image" />
        <input name="weight" value={diamond.weight} onChange={handleChange} placeholder="carat weight" />
        <input name="caratSize" value={diamond.caratSize} onChange={handleChange} placeholder="carat size" />
        <input name="color" value={diamond.color} onChange={handleChange} placeholder="color" />
        <input name="cut" value={diamond.cut} onChange={handleChange} placeholder="cut" />
        <input name="clarity" value={diamond.clarity} onChange={handleChange} placeholder="clarity" />
        <input name="shape" value={diamond.shape} onChange={handleChange} placeholder="shape" />
        <input name="origin" value={diamond.origin} onChange={handleChange} placeholder="origin" />
        <button type="submit">Create diamond</button>
      </form>
      {message && <p>{message}</p>} {/* Render the message if it exists */}
    </div>
  );
}

export default AddDiamondForm;