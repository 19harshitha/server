import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
  });
  const { name, userName, email, phone } = userData;
  const [check, setChecked] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [checkError, setCheckError] = useState("");

//------------- FUNCTIONS -------------------

  const handleErrors = () => {
    if (!name) {
      setNameError("This is a required field");
    } else {
      setNameError("");
    }
    if (!userName) {
      setUserNameError("This is a required field");
    } else {
      setUserNameError("");
    }
    if (!email) {
      setEmailError("This is a required field");
    } else {
      setEmailError("");
    }
    if (!phone) {
      setPhoneError("This is a required field");
    } else {
      setPhoneError("");
    }

    if (check === false) {
      setCheckError("This is a required field");
    } else {
      setCheckError("");
    }
  };

  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });


    
  };

  const handleFormSubmit = async() => {

    handleErrors();
    if (name && userName && email && phone && check) {
      // saving to local storage
      localStorage.setItem("userData", JSON.stringify(userData));
      // redirecting to categories page
      navigate("/categories");

    }

    
    }



  
    

 

  return (
    <div className="form" >
      {/*  -----------------------FORM TITLE ------------------------ */}
      <div className="form-title-div">
      <h1 className="logo">Super app</h1>
        <p className="form-title-subtext">Create your new account</p>
        <div className="signin-options-div">
          <p>Email</p>
          <div className="line"></div>
          <p>Google</p>
        </div>
      </div>
      {/* =========================FORM INPUTS START========================= */}

      <div className="form-inputs" >

        {/* -----------------------NAME INPUT ------------------------ */}
        <div className="input-div name">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            className={`form-input ${nameError ? "error" : ""}`}
            onChange={handleUserDataChange}
          />
          {nameError && <span className="form_error">{nameError}</span>}
        </div>

        {/* -----------------------USERNAME INPUT ------------------------ */}

        <div className="input-div userName">
          <input
            type="text"
            placeholder="UserName"
            name="userName"
            value={userName}
            className={`form-input ${userNameError ? "error" : ""}`}
            onChange={handleUserDataChange}
          />
          {userNameError && <span className="form_error">{userNameError}</span>}
        </div>

        {/* -----------------------EMAIL INPUT ------------------------ */}

        <div className="input-div email">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            className={`form-input ${emailError ? "error" : ""}`}
            onChange={handleUserDataChange}
          />
          {emailError && <span className="form_error">{emailError}</span>}
        </div>

        {/* -----------------------MOBILE INPUT ------------------------ */}

        <div className="input-div mobile">
          <input
            type="tel"
            placeholder="Mobile"
            name="phone"
            value={phone}
            className={`form-input ${phoneError ? "error" : ""}`}
            onChange={handleUserDataChange}
          />
          {phoneError && <span className="form_error">{phoneError}</span>}
        </div>
        {/* -----------------------CHECKBOX INPUT ------------------------ */}
        <div className="checkbox-div">
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              className="checkbox-input"
              checked={check}
              onClick={() => setChecked(!check)}
            />
            <p className="checkbox-text">
              Share my registration data with Superapp
            </p>
          </div>
          {checkError && <span className="form_error">{checkError}</span>}
        </div>

        <button className="form-button" onClick={()=>handleFormSubmit()}>
          SIGN UP
        </button>
      </div>
       {/* =========================FORM INPUTS END========================= */}

      {/* -----------------------FORM TERMS ------------------------ */}

      <div className="form-terms-div">
        <p>
          By clicking on Sign up. you agree to Superapp
          <span className="span"> Terms and Conditions of Use</span>
        </p>
        <p>
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <span className="span">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Form;
