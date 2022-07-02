import React from 'react';
import './NavbarUser.css'
import Logo from '../../Asset/img/logo.png';
import { Link } from 'react-router-dom';

function NavbarUser() {
    return(
    <>
        <nav className="navbar">
        <div className="navs row">
          <div className="col-6">
            <Link to="../login">
              <img
                src={Logo}
                alt="Dumb Mechandise Logo"
                className="navbar-brand"
              />
            </Link>
          </div>
          <div className="collink col-6 d-flex justify-content-end">
            <Link className="links" to="../login">
              Complain
            </Link>
            <Link className="links" to="../register">
              Register
            </Link>
            <Link className='links' to="../list">
              Product
            </Link>
            <Link className="links" to="../register">
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </>
    )
}

export default NavbarUser;