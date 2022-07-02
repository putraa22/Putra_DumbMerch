import React from "react";
import './CardStyle.css';
import {Card , Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

function CardProduct(props) {

    return(
        <>
            <Card className="Header">
                <Card.Img className="img-card" variant="top" src={props.imageUrl}  />
                <Card.Body className="card-body">
                    <Card.Title className="card-title">{props.title}</Card.Title>
                    <Card.Text className="card-text">Rp.{props.harga} <br></br>Stock : {props.stock}</Card.Text>
                    <Button className="w-100 mb-2" variant="danger">Buy</Button>
                    <Button className="w-100" variant="danger"><Link  className="style" to="../detail">Detail</Link></Button>
                    
                </Card.Body>
            </Card>
        </>
    )
}
export default CardProduct;