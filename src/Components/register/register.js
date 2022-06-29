import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css"
import Logo from "../../Asset/img/logo.png";

function Register () {
    return(
    <div className="register-container container-fluid d-flex">
      <div className="register-content">
        <div className="register-row row">
          <div className="register-left col-8">
            <div>
              <img className="img" src={Logo} alt=""></img>
            </div>
            <div>
              <h1 className="title">Easy, Fast and Reliable</h1>
              <p>
                Go Shopping for merchandise, just go to dumb Merch shopping, the
                biggest merchandise in <b>Indonesia</b>
              </p>
            </div>
            <div className="register-btns">
              <input class="btn-login btn" type="button" value="Login"></input>
              <input
                class="btn-register btn ms-2"
                type="button"
                value="Register"
              ></input>
            </div>
          </div>
          <div className="col-4">
            <form className="register-right">
              <h2 className="login">Register</h2>
              <input
                type="text"
                className="form-control mt-5 "
                id="exampleFormControlInput1"
                placeholder="Name"
              />
              <input
                type="email"
                className="form-control mt-3 "
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

export default Register;