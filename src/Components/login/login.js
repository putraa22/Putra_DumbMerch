import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import Logo from "../../Asset/img/logo.png";
import { Form, Button } from 'react-bootstrap';



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
              <Button className='btn-login me-3' variant='danger' type='submit'>Login</Button>
              <Button className='btn-register' variant='danger' type='submit'>Register</Button>
            </div>
          </div>
          <div className="col-4">
            <Form className='right'>
              <h2 className='login mb-4'>Login</h2>
              <Form.Group className='mb-3'>
                <Form.Control type='email' placeholder='Enter Email' />
              </Form.Group>

              <Form.Group>
                <Form.Control type='password' placeholder='Enter Password' />
              </Form.Group>

              <Button className='mt-5' variant="danger" type="submit">Login</Button>

            </Form>
          </div>
        </div>
      </div>
    </div>
    )
}
