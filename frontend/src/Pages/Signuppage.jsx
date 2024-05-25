import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Signup.css';

const Signuppage = () => {
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
            <h2 className="title">Sign in</h2>
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
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input type="text" placeholder="USN" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
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
              New one ?
            </h2>
            <p></p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
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

export default Signuppage;
