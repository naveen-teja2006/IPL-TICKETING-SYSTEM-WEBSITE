import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "../styles/auth.css";
// SignIn Component
function SignIn() {
  let [formData, setFormData] = useState({ email: "", password: "" });
  let { email, password } = formData;
  let [message, setMessage] = useState("");
  let navigate = useNavigate();
  // Run Function On Submit Button
  let handleSubmit = async (e) => {
    e.preventDefault(); // To prevent the page refresh
    if (!email || !password) {
      setMessage("All Fields Are Required!");
      return;
    }
    setMessage("");
    await findUserByEmail(formData);
  }
  // Check The SignIn History
  async function findUserByEmail(formData) {
    try {
      let response = await fetch("http://localhost:3000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      let data = await response.json();
      console.log(data.userId);
      localStorage.setItem("userId",data.userId);
      if (data.success) {
        setMessage("");
        alert("Login Successful ✔");
        navigate("/home");
      }
      else {
        setMessage(data.message);
        alert(data.message);
      }
    } catch (error) {
      setMessage(error.message);
      console.log("Sign In Error ", error.message)
    }
    setMessage("");
  }
  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <legend className="legend">Sign In</legend>
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
          <button type="submit" className='sign-In-Btn'>Sign In</button>
          <span className='register-here-link'>Or Don't Have Account ? <Link to="/register" className='register-link'>Register Here</Link></span>
          <h3 className='error-message'>{message}</h3>
        </form>
      </div>
    </>
  )
}

export default SignIn;