import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../CSS/AdminLoginForm.css';

const AdminLoginForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className={`sign-in-form ${isSignUpMode ? 'hidden' : ''}`}>
            <h2 className="title">Sign in(Admin)</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
          <form action="#" className={`sign-up-form ${isSignUpMode ? '' : 'hidden'}`}>
            <h2 className="title">Company details</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input type="text" placeholder="Company Name" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input type="text" placeholder="Designation" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input type="text" placeholder="Package" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input type="text" placeholder="Location" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input type="date" placeholder="Apply before" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input type="text" placeholder="Stream" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input type="text" placeholder="Max Backlogs" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <textarea type="text" placeholder="Description" rows="3" cols="50" />
            </div>
            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className={`panel left-panel ${isSignUpMode ? 'hidden' : ''}`}>
          <div className="content">
          <h3>Get a chance to explore And discover  </h3>
            <p></p>
            <h3>Various ways to enhance yourself</h3>
            <p></p>
            <p></p>
            <h2>
              Want to add company details?
            </h2>
            <p></p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Add
            </button>
          </div>
        </div>
        <div className={`panel right-panel ${isSignUpMode ? '' : 'hidden'}`}>
          <div className="content">
            <h3>Get a chance to explore And discover  </h3>
            <p></p>
            <h3>Various ways to enhance yourself</h3>
            <p></p>
            <p></p>
            <h2>
              Already have an account
            </h2>
            <p></p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdminLoginForm;
