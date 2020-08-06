import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import axios from 'axios';
import Getproducts from './get_products.jsx';
import Admin_page from './adminpage.jsx';
import Openstatus from './openstatus.jsx';
export default class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            state: "Set_products"
        }
    }
     Get_products(){
        this.setState({state:"Get_products"})
     }
     Open_status(){
        this.setState({state:"Open_status"})
     }
    openstatus(){
        ReactDOM.unmountComponentAtNode(document.getElementById('admin'));
        ReactDOM.render(<Openstatus/>,document.getElementById('admin'));
    }
    open_product(){
        ReactDOM.unmountComponentAtNode(document.getElementById('admin'));
        ReactDOM.render(<Getproducts/>,document.getElementById('admin'));
    }
    add_products(){
        ReactDOM.unmountComponentAtNode(document.getElementById('admin'));
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
                            <Nav.Link onClick={this.openstatus}>Статус оплаты</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        </Nav.Item>
            </Nav>
            </div>
        )
    }

}