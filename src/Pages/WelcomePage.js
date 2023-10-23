//WelcomePage

import React from 'react';
import '../Styles/WelcomePage.css'
import Navbar from '../Components/Navbar'

function WelcomePage() {
    return (
        <>
        
      <div className='WelcomePage'>
        <Navbar />
        <div className='welcomecenterdiv'>
            <div className='welcometext'>
                Welcome!
            </div>
        </div>
        
      </div>
        </>
    
    );
  }
export default WelcomePage;