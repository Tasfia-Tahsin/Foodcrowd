import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../Styles/SigninPage.css';

function SigninPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function  handleSubmit(e) {
    e.preventDefault();

    // Form validation logic
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please check and try again.");
      return;
    }

    try {
      console.log(formData.email);
      console.log(formData.password);
      const response = await axios.post('http://localhost:3000/signin', {
        email: formData.email,
        password: formData.password
      });
      console.log("after post request.");
      if (response.data === "exist") {
        alert("User already exists");
      } else if (response.data === "notexist") {
        navigate("/welcome", { state: { id: formData.email } });
      }
    } catch (error) {
      alert("Errooooooor: " + error.message);
      console.error(error);
    }
  };

  return (
    <div className='SigninPage'>
      <Navbar />
      <div className='signincenterdiv'>
        <div className='signintext'>Sign Up</div>
        <form  action="POST" className='signin-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              className='form-control'
              placeholder='Name'
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='form-control'
              placeholder='Email'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              className='form-control'
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='form-control'
              placeholder='Confirm Password'
            />
          </div>
          <button className='signin-button' type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
