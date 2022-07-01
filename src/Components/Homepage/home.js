import React from 'react';
import './home.css';


function HomePage() {
    return(
    <div className="homepage-content d-flex justify-content-start">
      <h2 className="homepage-h2">Product</h2>
      <div className="homepage-contents d-flex">
        <div className="homepage-card card">
          <img
            src="https://www.jakartanotebook.com/images/products/40/779/36270/6/azzor-wireless-gaming-mouse-silent-2400-dpi-m6-blue-1.jpg"
            alt=""
            className="img-card"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Mouse Gaming</h5>
            <p className="card-text">
              Rp. 76.800 <br></br>Stock : 600
            </p>
          </div>
        </div>
        <div className="homepage-card card">
          <img
            src="https://www.jakartanotebook.com/images/products/41/1020/39390/2/taffware-air-mouse-wireless-mini-keyboard-rgb-24ghz-dengan-touch-pad-i8-black-141.jpg"
            alt=""
            className="img-card"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Keyboard Mini</h5>
            <p className="card-text">
              Rp. 55.400 <br></br>Stock : 900
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default HomePage;