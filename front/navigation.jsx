import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import axios from 'axios';
import Getproducts from './get_products.jsx';
import Admin_page from './adminpage.jsx';
export default class Navigation extends React.Component{
    open_product(){
        ReactDOM.render(<Getproducts/>,document.getElementById('admin'));
    }
    add_products(){
        ReactDOM.render(<Admin_page/>,document.getElementById('admin'));
    }
    render(){
        return(
            <div>
               <Nav>
                        <Nav.Item>
                            <Nav.Link onClick={this.add_products}>Добавить товары</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={this.open_product}>Получить список товаров</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Статус оплаты</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        </Nav.Item>
            </Nav>
            </div>
        )
    }

}