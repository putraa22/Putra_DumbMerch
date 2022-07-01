import React from "react";
import "./register.css"
import Logo from "../../Asset/img/logo.png";
import {Form , Button } from "react-bootstrap";

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
            <Button className='btn-login me-3' variant='danger' type='submit'>Login</Button>
            <Button className='btn-register' variant='danger' type='submit'>Register</Button>
            </div>
          </div>
          <div className="col-4">
            <Form className="register-right">
              <h2 className="text mb-4">Register</h2>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="btn mt-4" variant="danger" type="submit">Register</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Register;