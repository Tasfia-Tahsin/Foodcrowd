//WelcomePage

import React from 'react';
import '../Styles/WelcomePage.css'
import Navbar from '../Components/Navbar'
import {useLocation, useNavigate} from 'react-router-dom';


function WelcomePage() {
  const location=useLocation()
    return (
        <>
        
      <div className='WelcomePage'>
        <Navbar />
        <div className='welcomecenterdiv'>
        <h1>Hello {location.state.id} and welcome to the welcome page</h1>
            <div className='welcometext'>
                Welcome!
            </div>
        </div>
        
      </div>
        </>
    
    );
  }
export default WelcomePage;