import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
function Register() {
  let [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const { username, email, password } = formData;
  let [error, setError] = useState("");
  let navigate = useNavigate();
  // Handle The Register Form Submission
  let handleSubmit = async (e) => {
    e.preventDefault(); // To Prevent The Page Refresh
    if (!username || !email || !password) {
      setError("All Fields Are Required!");
      return;
    }
    setError("");
    await addUser(formData);
  }
  // Register The User
  async function addUser(formData) {
    try {
      let response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      let data = await response.json();
      if (!response.ok) {
        setError(data.message);
        return;
      }
      setError("");
      alert("User Registered Succesfully");
      navigate("/signin");
    } catch (error) {
      console.log(error.message);
      setError("Something Went Wrong");
    }
  }
  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <legend className="legend">Register</legend>
          <div className='form-group'>
            <label htmlFor="username">Name : </label>
            <input type="text" placeholder="Enter Your Name Here..." value={formData.username} name="username" onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input type="email" placeholder="Ex :- abc@gmail.com" value={formData.email} name="email" onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })} />
          </div>
          <div className='form-group'>
            <label htmlFor="password">Password : </label>
            <input type="password" placeholder="Enter Your Password Here..." value={formData.password} name="password" id="password" onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })} />
          </div>

          <button type="submit" className='sign-In-Btn'>Register</button>
          <span className='register-here-link'>Or If You Have An Account ? <Link to="/signin" className="sign-link">Sign In</Link></span>
          <h3 className='error-message'>{error}</h3>
        </form>
      </div>
    </>
  )
}

export default Register;