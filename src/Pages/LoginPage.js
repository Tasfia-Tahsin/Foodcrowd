import React from 'react';
import '../Styles/LoginPage.css';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

const navigate = useNavigate();
const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log("ok")
        navigate('/welcome');
};
  return (
    <>
      <div className='LoginPage'>
        <Navbar />
        <div className='logincenterdiv'>
            <div className='logintext'>Login</div>
          <form className='login-form'  onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
              />
            </div>
            <button className='login-button' type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
