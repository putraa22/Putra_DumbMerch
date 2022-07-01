import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Pages
import Login from './Components/login/login';
import Register from './Components/register/register';
import HomePage from './Components/Homepage/home';
import NavbarUser from './Components/Navbars/NavbarUser';


function App() {
  return (
    <BrowserRouter>
      <NavbarUser />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
