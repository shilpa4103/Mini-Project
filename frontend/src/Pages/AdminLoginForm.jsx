// AdminLoginForm.js
import React from 'react';
import '../CSS/AdminLoginForm.css'

const AdminLoginForm = () => {
  return (
    <div className="admin-login-form">
      <h2>Admin (Login Page)</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLoginForm;
