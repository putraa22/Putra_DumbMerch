import React, {useRef , useState} from 'react';
import './EditProductStyle.css';
import { Container , Button , Form  } from 'react-bootstrap';



function EditProduct() {

    const fileRef = useRef();

    const handleChange = (e) => {
        const [file] = e.target.files;
        console.log(file);
    };

  return (

    <Container className='Edit-container'>

        <div className='ms-3'>
            <h3>Edit Product</h3>
        </div>

        <Container>
            <div className='file-Product-Name'>
                <Button variant='danger' className='btn-Edit-Product ms-2' onClick={() => fileRef.current.click()}>
                    Upload Image
                </Button>
                <input
                    ref={fileRef}
                    onChange={handleChange}
                    multiple={false}
                    type="file"
                    hidden
                />
            <p className='file-name-product pt-4'>File Name</p>
            </div>

            <Form>
                <Form.Group className='mt-4'>
                    <Form.Control className='Form-Edit-Product' type='text' />
                </Form.Group>
                <Form.Group>
                    <Form.Control as="textarea" 
                    type='text'
                    style={{ height : '100px' }}
                    className='Form-Edit-Product' />
                </Form.Group>
                <Form.Group className='mt-4'>
                    <Form.Control className='Form-Edit-Product' type='text' />
                </Form.Group>
                <Form.Group className='mt-4'>
                    <Form.Control className='Form-Edit-Product' type='text' />
                </Form.Group>
                <Button className='success ' variant='success'>Save</Button>
            </Form>
        </Container>

    </Container>
  )
}

export default EditProduct;