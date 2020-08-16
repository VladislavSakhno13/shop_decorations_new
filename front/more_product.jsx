import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup,Carousel,Item} from 'react-bootstrap';
import axios from 'axios';
import Sign_up from './sign_up.jsx';
import Sign_in from './sign_in.jsx';
import Buy_status from './buy_status.jsx';
import Admin_page from './adminpage.jsx';
import Navigation from './navigation.jsx';
import {adminService, getStaus, GetProduct} from './adminService.js';
import Basket_show from './basket_show.jsx';
import Card_products from './card_products.jsx';


export default class Start_page extends React.Component{
   render(){
       return(
           <div>
               <div>
                   <img src={this.props.img} alt=""/>
               </div>
               <div>
                   <div>{this.props.name}</div>
                   <div>{this.props.metal}</div>
                   <div>{this.props.type}</div>
                   <div>{this.props.rock}</div>
                   <div>{this.props.sku}</div>
                   <div>{this.props.discription}</div>
                   <div>В корзину</div>
               </div>
           </div>
       )
   }
}