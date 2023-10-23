import React from 'react';
import '../Styles/LandingPage.css'
import Navbar from '../Components/Navbar'
function LandingPage() {
    return (
        <>
        
      <div className='LandingPage'>
        <Navbar />
        <div className='landingcenterdiv'>
            <div className='landingtext'>
                Safely Landed!
            </div>
        </div>
        
      </div>
        </>
    
    );
  }
export default LandingPage;