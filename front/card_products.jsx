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
                    <Card.Img variant="top" src="https://pmdn.sokolov.io/pics/76/CB/6FA01C62BD03613B8231B2C26A98.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text value="4">
                            {this.props.id}
                        </Card.Text>
                        <Button variant="primary">Подробнее</Button>
                    </Card.Body>
            </Card>
        )
    }
}