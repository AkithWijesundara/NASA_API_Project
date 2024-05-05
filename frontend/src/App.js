import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './components/pages/LandingPage';
import Navbar from './components/Navbar';
import APOD from './components/pages/APOD';
import Mars from './components/pages/Mars';
import Signin from './components/pages/Signin';
import SignUp from './components/pages/Signup';
// const dotenv = require("../../node_modules/dotenv");

function App() {

  // dotenv.config();
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/APOD' element={<APOD/>}/>
            <Route path='/Mars' element={<Mars/>}/>
            <Route path='/Signin' element={<Signin/>}/>
            <Route path='/Signup' element={<SignUp/>}/>
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
