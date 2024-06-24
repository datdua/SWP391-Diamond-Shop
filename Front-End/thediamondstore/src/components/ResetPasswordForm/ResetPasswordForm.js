import { Button } from '@mui/material'
import React from 'react'

function ResetPasswordForm() {
  return (
    <div className="container" style={{ marginTop: "40px", maxWidth: "50%" }}>
      <div className="row">
        <div className="col-sm-12">
          <div className="horizontal-container">
            <div className="horizontal-form-box">
              <div className="horizontal-info-container text-center">
                <img src="https://static.stayjapan.com/assets/top/icon/values-7dd5c8966d7a6bf57dc4bcd11b2156e82a4fd0da94a26aecb560b6949efad2be.svg" />
                <p className="horizontal-heading">Reset your password</p>
              </div>
              <form className="horizontal-form">
                <div className="o3-form-group">
                  <label for="email">Email</label>
                  <input type="email" className="o3-form-control o3-input-lg" id="email" />
                </div>
                <div className="o3-form-group">
                  <label for="new_password">New password</label>
                  <input type="password" className="o3-form-control o3-input-lg" id="new_password" />
                </div>
                <div className="o3-form-group">
                  <label htmlFor="confirm_password">Confirm new password</label>
                  <input type="password" className="o3-form-control o3-input-lg" id="confirm_password" />
                </div>
                <div className="o3-form-group">
                  <Button className="o3-btn o3-btn-primary o3-btn-block">Set new password</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ResetPasswordForm