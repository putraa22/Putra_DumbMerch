import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// Pages
import Login from './Components/login/login';
import Register from './Components/register/register';
import HomePage from './Components/Homepage/home';
import NavbarUser from './Components/Navbars/NavbarUser';
import DetailProduct from './Components/DetailProduct/DetailProduct';
import ProfilePage from './Components/Profile/ProfilePage';


function App() {
  return (
    <BrowserRouter>
      <NavbarUser />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/detail' element={<DetailProduct />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
