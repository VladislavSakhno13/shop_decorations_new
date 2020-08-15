import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table} from 'react-bootstrap';
import axios from 'axios';
import Basket_show from './basket_show.jsx';
import ReactDOM from 'react-dom';
export default class Table_product extends React.Component{
    render(){
        return(
                    
                        <tr>
                            <th>{this.props.id}</th>
                            <th>{this.props.metal}</th>
                            <th>{this.props.type}</th>
                            <th>{this.props.rock}</th>
                            <th>{this.props.name}</th>
                            <th>{this.props.cost}</th>
                            <th>{this.props.sku}</th>
                            <th>{this.props.discription}</th>
                        </tr>
                    
        )
    }
}