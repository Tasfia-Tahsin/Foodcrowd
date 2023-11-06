import React from 'react';
import '../Styles/LoginPage.css';
import Navbar from '../Components/Navbar';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"
import  { useEffect, useState } from "react"


function LoginPage() {

  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

const navigate = useNavigate();
async function handleSubmit(e){
        e.preventDefault(); 
        console.log("ok")

        try{

          await axios.post("http://localhost:3000/",{
              email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  history("/welcome",{state:{id:email}})
              }
              else if(res.data=="notexist"){
                  alert("User have not sign up")
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })
        
        }
        catch(e){
          console.log(e);
        
        }
        //navigate('/');
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
                type='email'
                className='form-control'
                placeholder='Email'
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                onChange={(e) => { setPassword(e.target.value) }} 
              />
            </div>
            <button className='login-button' type="submit" >Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
