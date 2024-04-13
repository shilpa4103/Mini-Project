import React from 'react';
import '../CSS/StudentForm.css'

const StudentForm = () => {
  return (
    <div className="form-container">
      <h2>Student Details</h2>
      <form action="#" method="post">
        <label htmlFor="name">Name:</label><br/>
        <input type="text" id="name" name="name" required/><br/><br/>

        <label htmlFor="usn">USN:</label><br/>
        <input type="text" id="usn" name="usn" required/><br/><br/>

        <label htmlFor="branch">Branch:</label><br/>
        <input type="text" id="branch" name="branch" required/><br/><br/>

        <label htmlFor="email">Email:</label><br/>
        <input type="email" id="email" name="email" required/><br/><br/>

        <label htmlFor="phone">Phone Number:</label><br/>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required/><br/><br/>

        <label htmlFor="password">Password:</label><br/>
        <input type="password" id="password" name="password" required/><br/><br/>

        <label htmlFor="confirm_password">Confirm Password:</label><br/>
        <input type="password" id="confirm_password" name="confirm_password" required/><br/><br/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}

export default StudentForm;
