import React, { useState } from 'react';
import '../Styles/SigninPage.css';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // You can add form validation logic here before navigating
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please check and try again.");
      return;
    }

    // Navigate to another page after successful submission
    navigate('/login'); // Change the route as needed
  };

  return (
    <>
      <div className='SigninPage'>
        <Navbar />
        <div className='signincenterdiv'>
          <div className='signintext'>Sign Up</div>
          <form className='signin-form' onSubmit={handleSubmit}>
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
    </>
  );
}

export default SigninPage;
