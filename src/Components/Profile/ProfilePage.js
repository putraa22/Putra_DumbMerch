import React from 'react'
import Logo from '../../Asset/img/logo.png';
import './ProfileStyle.css'
import { Container , Row , Col , Form } from 'react-bootstrap';

function ProfilePage() {
  return (

    <Container className='P-container'>

        <Row>

            <Col md={6} lg={4}>
                <h2 className='P-judul'>My Profile</h2>
                <div>
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='logo' className='Profile-Image'/>
                </div>
            </Col>

            <Col md={5} lg={3}>
                <Form>
                    <Form.Group>
                        <Form.Label className='P-labels'>Name</Form.Label>
                        <Form.Text>Lauren</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='P-Detail-Profile'>Email</Form.Label>
                        <Form.Text>emialcontoh@gmail.com</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='P-Detail-Profile'>Phone</Form.Label>
                        <Form.Text>08123456799</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='P-Detail-Profile'>Gender</Form.Label>
                        <Form.Text>Wanita</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className='P-Detail-Profile'>Address</Form.Label>
                        <Form.Text >Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Col>

            <Col md={6} lg={4}>
                <h2 className='P-judul'>My Transaction</h2>
                <div className='card Profile-Card mt-3'>
                    <div className='row'>
                        <div className='p-product col-md-4'>
                            <img src="https://www.jakartanotebook.com/images/products/40/779/36270/6/azzor-wireless-gaming-mouse-silent-2400-dpi-m6-blue-1.jpg" 
                            alt="product"
                            className='p-img-card' />
                        </div>
                        <div className='col-4'>
                            <div>
                                <h5 className='p-red'>Mouse</h5>
                                <p className='P-Text-Small'>Staturday, 02 Juli 2022</p>
                                <p className='P-Text-Small'>Price : Rp. 100.000</p>
                            </div>
                            <div>
                                <p className='P-Total'>Sub Total : Rp. 100.000</p>
                            </div>
                        </div>
                        <div className='p-logos col-4'>
                            <img src={Logo} alt="" className='P-Logo' />
                        </div>
                    </div>
                </div>
            </Col>
      </Row>

    </Container>

  )
}

export default ProfilePage;