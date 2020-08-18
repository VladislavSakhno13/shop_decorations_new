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
       console.log(this.props.person_data)
       return(
           <div id="prosuct_box">
               <div id="box-for-img">
                   <img id="product_img" src={this.props.img} alt=""/>
               </div>
               <div>
                   <div className="product_text_box">Название: {this.props.name}</div>
                   <div className="product_text_box">Метал изделия: {this.props.metal}</div>
                   <div className="product_text_box">Тип изделия: {this.props.type}</div>
                   <div className="product_text_box">Камент изделия: {this.props.rock}</div>
                   <div className="product_text_box">SKU: {this.props.sku}</div>
                   <div className="product_text_box">Описание: {this.props.discription}</div>
                   <div id="button-basket">В корзину</div>
               </div>
           </div>
       )
   }
}