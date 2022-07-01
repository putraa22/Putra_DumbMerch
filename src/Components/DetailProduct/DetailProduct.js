import React from 'react';
import './DetailProduct.css';


function DetailProduct() {
  return (

    <div className="container">
      <div className="d-content">
        <div className="row">
          <div className="d-thumbnail col-4">
            <img
              src="https://www.jakartanotebook.com/images/products/40/779/36270/6/azzor-wireless-gaming-mouse-silent-2400-dpi-m6-blue-1.jpg"
              alt=""
              className="d-img-card"
            ></img>
          </div>
          <div className="col-8 text-white">
            <div className="row">
              <div className="col">
                <p className="d-h3">Mouse Gaming</p>
                <p>Stock : 600</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="d-detail">
                  <p className="d-details">- Mouse Gaming Nirkabel</p>
                  <p className="d-details">- Desain Ergonomis</p>
                  <p className="d-details">- Sensor DPI 2400 </p>
                  <p className="d-details">- Lampu RGB</p>
                </div>
                <div>
                  <p>
                    Mouse gaming dari AZZOR ini hadir dengan desain body mouse
                    yang gagah layaknya mouse gaming pada umumnya. Desain
                    ergonomis membuat mouse ini sangat nyaman digunakan,
                    ditambah dengan sensor mouse yang akurat maka performa
                    gaming Anda akan semakin meningkat.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="d-h4">Rp. 76.800</p>
                <button className="btn">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default DetailProduct;