import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [reenteredPassword, setReenteredPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordsMatchError, setPasswordsMatchError] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Validate the password
    const isValidPassword = validatePassword(newPassword);
    if (newPassword.trim() !== "" && !isValidPassword) {
      setPasswordError(
        "Password should contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleReenteredPasswordChange = (e) => {
    const newReenteredPassword = e.target.value;
    setReenteredPassword(newReenteredPassword);

    // Check if passwords match
    if (
      newReenteredPassword.trim() !== "" &&
      password !== newReenteredPassword
    ) {
      setPasswordsMatchError("Passwords do not match.");
    } else {
      setPasswordsMatchError("");
    }
  };

  // Password validation function
  const validatePassword = (password) => {
    // Define your password validation rules here
    const lengthRegex = /^.{8,}$/; // Minimum length of 8 characters
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;

    return (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      numberRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  //Email Validation
  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    // Define a regular expression pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    // Check if the input matches the email pattern
    if (inputValue.trim() !== "" && !emailPattern.test(inputValue)) {
      setErrorMail("Please enter a valid email address.");
    } else {
      setErrorMail("");
    }
  };

  //Phone Number Validation
  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    setPhone(inputValue);

    // Only perform validation when the input is not empty
    if (inputValue.trim() !== "") {
      // Remove any non-digit characters (e.g., spaces, dashes, parentheses)
      const phoneNumber = inputValue.replace(/\D/g, "");

      // Define the allowed prefixes
      const allowedPrefixes = [
        "070",
        "071",
        "072",
        "074",
        "075",
        "076",
        "077",
        "078",
      ];

      if (!allowedPrefixes.some((prefix) => phoneNumber.startsWith(prefix))) {
        setErrorPhone(
          "Your phone number must start with 070, 071, 072, 074, 075, 076, 077, or 078 and contain 10 digits."
        );
      } else if (phoneNumber.length !== 10) {
        setErrorPhone("Your phone number must contain 10 digits.");
      } else {
        // Clear the error message when the input is valid
        setErrorPhone("");
      }
    } else {
      // Clear the error message when the input is empty
      setErrorPhone("");
    }
  };

  //Form Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        address,
        phone,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register | Gizmo.lk"}>
      <div className="body">
        <section className="register">
          <div className="section-header text-center pb-3">
            <h2>Registration Form</h2>
            <p>Fill out the form carefully for registration</p>
          </div>
          <form className="form">
            <div className="input-box">
              <label>
                Full Name<span style={errorStyle}>*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Full Name"
                className="form-control"
                id="exampleInputName"
                required
                autoFocus
              />
            </div>
            <div className="column">
              <div className="input-box">
                <label>
                  Email Address<span style={errorStyle}>*</span>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter Email Address"
                  className="form-control"
                  id="exampleInputEmail"
                  required
                />
                <p className="error-messageNew" style={errorStyles}>
                  {errorMail}
                </p>
              </div>
              <div className="input-box">
                <label>
                  Phone Number<span style={errorStyle}>*</span>
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Enter Phone Number"
                  className="form-control"
                  id="exampleInputPhone"
                  required
                />
                <p className="error-messageNew" style={errorStyles}>
                  {errorPhone}
                </p>
              </div>
            </div>
            <div className="input-box address">
              <label>
                Address<span style={errorStyle}>*</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Address"
                className="form-control"
                id="exampleInputAddress"
                required
              />
            </div>
            <div className="column" id="pass">
              <div className="input-box">
                <label>
                  Password<span style={errorStyle}>*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  id="exampleInputPassword"
                  placeholder="Enter Password"
                  required
                  onChange={handlePasswordChange}
                />
                {passwordError && (
                  <p className="error-messageNew" style={errorStyles}>
                    {passwordError}
                  </p>
                )}
              </div>
              <div className="input-box">
                <label>
                  Re-Enter Password<span style={errorStyle}>*</span>
                </label>
                <input
                  type="password"
                  value={reenteredPassword}
                  className="form-control"
                  placeholder="Re-Enter Password"
                  required
                  onChange={handleReenteredPasswordChange}
                />
                {passwordsMatchError && (
                  <p className="error-messageNew" style={errorStyles}>
                    {passwordsMatchError}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-warning button"
            >
              Submit
            </button>
          </form>
        </section>
        {/* BACK TO TOP BUTTON */}
        <a href="#" className="back-to-top">
          <span className="material-icons">arrow_upward</span>
        </a>
      </div>
    </Layout>
  );
};

const errorStyles = {
  color: "red",
  fontSize: "11.5px",
};

const errorStyle = {
  color: "red",
  fontSize: "16px",
};

export default Register;
