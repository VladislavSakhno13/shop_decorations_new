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
            set_admin_page:"post_products",
            data_products:[]
        }
        this.StateGetProducts=this.StateGetProducts.bind(this);
        this.StateGetProducts=this.StateGetProducts.bind(this);
    }
    StatePostProducts(){
        this.setState({set_admin_page:"post_products"})
     }
     StateGetProducts(){
        this.setState({set_admin_page:"Get_products"})
     }
     StateStatusProducts(){
        this.setState({set_admin_page:"Status_products"})
     }
    render(){
        const {set_admin_page, data_products} = this.state;
        if(set_admin_page == "post_products"){
            return(
                <div>
                   <Nav>
                            <Nav.Item>
                                <Nav.Link>Добавить товары</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={this.StateGetProducts}>Получить список товаров</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            </Nav.Item>
                </Nav>
                <div><Admin_page/></div>
                </div>
            )
        }
        if(set_admin_page == "Get_products"){
            return(
                <div>
                    <Nav>
                                <Nav.Item>
                                    <Nav.Link>Добавить товары</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>Получить список товаров</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                </Nav.Item>
                    </Nav>
                <div><Getproducts/></div>
            </div>
            )
        }
    }

}