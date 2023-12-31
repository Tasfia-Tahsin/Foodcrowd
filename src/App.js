import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage  from './Pages/LandingPage'
import LoginPage from './Pages/LoginPage'
import SigninPage from './Pages/SigninPage'
import WelcomePage from './Pages/WelcomePage'
import CreateCampeignPage from './Pages/CreateCampeignPage'
import CreateCampeignContPage from './Pages/CreateCampeignContPage'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signin" element={<SigninPage/>} />
          <Route path="/welcome" element={<WelcomePage/>} />
          <Route path="/createcampeign" element={<CreateCampeignPage/>}/>
          <Route path="/createcampeigncont" element={<CreateCampeignContPage/>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
