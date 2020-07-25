import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Card} from 'react-bootstrap';
import axios from 'axios';
import Basket_show from './basket_show.jsx';
import ReactDOM from 'react-dom';
export default class Card_products extends React.Component{
    render(){
        return(
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text value="ggg">
                        
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
            </Card>
        )
    }
}