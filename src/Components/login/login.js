import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import Logo from "../../Asset/img/logo.png";



export default function Login  () {
    return(
    <div className="container-fluid d-flex">
      <div className="content">
        <div className="row ">
          <div className="left col-8">
            <div>
              <img className='img' src={Logo} alt="Logo"></img>
            </div>
            <div>
              <h1 className="title">Easy, Fast and Reliable</h1>
              <p>
                Go Shopping for merchandise, just go to dumb Merch shopping, the
                biggest merchandise in <b>Indonesia</b>
              </p>
            </div>
            <div className="btns">
              <input class="btn-login btn" type="button" value="Login"></input>
              <input
                class="btn-register btn ms-2"
                type="button"
                value="Register"
              ></input>
            </div>
          </div>
          <div className="col-4">
            <form className="right">
              <h2 className="login">Login</h2>
              <input
                type="email"
                className="form-control mt-5 "
                id="exampleFormControlInput1"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control mt-3"
                id="exampleFormControlInput1"
                placeholder="Password"
              />
              <button class="btn mt-5" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}
