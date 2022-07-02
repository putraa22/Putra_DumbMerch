import React from 'react';
import './CategoryStyle.css';
import { Container , Row , Col , Button  } from 'react-bootstrap';

function CategoryPage() {
  return (

<Container className='Category-Container'>
    <div>
        <h3>List Category</h3>
    </div>

    <Container className='Category-Container-content'>
  
        
        <Row className='Row'>
            <Col md>No</Col>
            <Col md className='Category-Header'>Category Name</Col>
            <Col md className='Category-Header'>Action</Col>
        </Row>
        
        <Row className='Row-2'>
            <Col md>1</Col>
            <Col md className='Category-Name'>Fashion</Col>
            <Col md className='action'>
                <Button className='btn-edit me-2' variant="success" type='submit'>Edit</Button>
                <Button className='btn-delete' variant="danger" type='submit'>Delete</Button>
            </Col>
        </Row>
        <Row className='Row'>
            <Col md>2</Col>
            <Col md className='Category-Name'>Fashion Pria</Col>
            <Col md className='action'>
                <Button className='btn-edit me-2' variant="success" type='submit'>Edit</Button>
                <Button className='btn-delete' variant="danger" type='submit'>Delete</Button>
            </Col>
        </Row>
        <Row className='Row-2'>
            <Col md>3</Col>
            <Col md className='Category-Name'>Sepatu</Col>
            <Col md className='action'>
                <Button className='btn-edit me-2' variant="success" type='submit'>Edit</Button>
                <Button className='btn-delete' variant="danger" type='submit'>Delete</Button>
            </Col>
        </Row>
        <Row className='Row'>
            <Col md>4</Col>
            <Col md className='Category-Name'>Mouse</Col>
            <Col md className='action'>
                <Button className='btn-edit me-2' variant="success" type='submit'>Edit</Button>
                <Button className='btn-delete' variant="danger" type='submit'>Delete</Button>
            </Col>
        </Row>
        <Row className='Row-2'>
            <Col md>5</Col>
            <Col md className='Category-Name'>Alat Rumah Tangga</Col>
            <Col md className='action'>
                <Button className='btn-edit me-2' variant="success" type='submit'>Edit</Button>
                <Button className='btn-delete' variant="danger" type='submit'>Delete</Button>
            </Col>
        </Row>

    </Container>

</Container>

  )
}

export default CategoryPage;