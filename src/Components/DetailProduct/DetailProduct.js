import React from 'react';
import './DetailProduct.css';
import { Container , Row , Col , Button  } from 'react-bootstrap';


function DetailProduct() {
  return (

    

      <Container  className='d-container '>
        <div  className='d-Content'>

          <Row>
            <Col className='Col-image' md={6}>
              <img src="https://www.jakartanotebook.com/images/products/40/779/36270/6/azzor-wireless-gaming-mouse-silent-2400-dpi-m6-blue-1.jpg" 
              className='d-img-card ' 
              alt="gambar product" />
            </Col>

            <Col md={6}>
              <h2 className='judul'>Azzor Wireless Gaming Mouse Silent 2400 DPI M6 Blue</h2>
              <div className='Product-Details'>
                <ul>
                  <li>Mouse Gaming Nirkabel</li>
                  <li>Desain Ergonomis</li>
                  <li>Sensor DPI 2400</li>
                  <li>Lampu RGB</li>
                </ul>
              </div>
              <div>
                <p className='Detail-Desc'> 
                    Mouse gaming dari AZZOR ini hadir dengan desain body mouse
                    yang gagah layaknya mouse gaming pada umumnya. Desain
                    ergonomis membuat mouse ini sangat nyaman digunakan,
                    ditambah dengan sensor mouse yang akurat maka performa
                    gaming Anda akan semakin meningkat.
                </p>
              </div>
              <div className='d-price'>
                <h4>Rp. 76.800</h4>
              </div>
              <Button variant="danger" className='btn' type='submit'>Buy</Button>
            </Col>
          </Row>

        </div>
      </Container>

  );
}

export default DetailProduct;