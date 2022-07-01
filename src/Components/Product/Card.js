import React from "react";
import '../Homepage/home.css';
import {Card , Button} from 'react-bootstrap';

function CardProduct(props) {
    return(
        <>
            <Card className="card">
                <Card.Img className="img-card" variant="top" src={props.imageUrl}  />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{props.title}</Card.Title>
                    <Card.Text className="card-text">Rp.{props.harga} <br></br>Stock : {props.stock}</Card.Text>
                    <Button className="w-100" variant="danger">Buy</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default CardProduct;