import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react'; // Import useEffect
import { setPassword } from '../../api/accountCrud';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import { toast } from 'react-toastify';
import queryString from 'query-string'; // Ensure you have query-string installed or use URLSearchParams

function ResetPasswordForm() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to access the query parameters

  useEffect(() => {
    // Parse the query parameters from the URL
    const queryParams = queryString.parse(location.search); // If you don't have query-string, use new URLSearchParams(location.search)
    const emailParam = queryParams.email;
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location.search]); // This effect runs whenever the search part of the URL changes

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      await setPassword(email, newPassword);
      setMessage('Password set successfully');
      toast.success('Mật khẩu đã được đổi thành công')
      
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="container" style={{ marginTop: "40px", maxWidth: "50%" }}>
      <div className="row">
        <div className="col-sm-12">
          <div className="horizontal-container">
            <div className="horizontal-form-box">
              <div className="horizontal-info-container text-center">
                <img src="https://static.stayjapan.com/assets/top/icon/values-7dd5c8966d7a6bf57dc4bcd11b2156e82a4fd0da94a26aecb560b6949efad2be.svg" alt="Reset Password" />
                <p className="horizontal-heading">Reset your password</p>
              </div>
              <form className="horizontal-form" onSubmit={handleSubmit}>
                <div className="o3-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="o3-form-control o3-input-lg"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled
                  />
                </div>
                <div className="o3-form-group">
                  <label htmlFor="new_password">New password</label>
                  <input
                    type="password"
                    className="o3-form-control o3-input-lg"
                    id="new_password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="o3-form-group">
                  <label htmlFor="confirm_password">Confirm new password</label>
                  <input
                    type="password"
                    className="o3-form-control o3-input-lg"
                    id="confirm_password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="o3-form-group">
                  <Button type="submit" className="o3-btn o3-btn-primary o3-btn-block">Set new password</Button>
                </div>
              </form>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;