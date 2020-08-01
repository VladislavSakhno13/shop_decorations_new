import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import Sign_up from './sign_up.jsx';
import Sign_in from './sign_in.jsx';
import Buy_status from './buy_status.jsx';
import Admin_page from './adminpage.jsx';
import Navigation from './navigation.jsx';
import {adminService, getStaus, GetProduct} from './adminService.js';
import Basket_show from './basket_show.jsx';
import Card_products from './card_products.jsx';
import Main_component from './main_component.jsx';

export default class Start_page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            state: "A"
        }
        this.changeStateProducts=this.changeStateProducts.bind(this);
    }
    changeStateProducts(){
       this.setState({state:"B"})
    }
    get_prducts(){
        //ReactDOM.unmountComponentAtNode(document.getElementById('main_page'));
        if(document.querySelectorAll('#list-product>div').length === 0){
            GetProduct().then(function(response){
                for(let i=0;i<response.length;i++){
                    let div_for_product =  document.createElement('div');
                     ReactDOM.render(<Card_products  img={'data:image/png;base64,'+response[i].img} name = {response[i].name} cost = {response[i].cost}/>,div_for_product);
                     document.getElementById('list-product').appendChild(div_for_product)
                     }
            })
        }
            
    }
    open_basket(){
        ReactDOM.render(<Basket_show/>,document.getElementById('main_page'));
    }
    comeback(){
        ReactDOM.unmountComponentAtNode(document.getElementById('navigation'));
        ReactDOM.unmountComponentAtNode(document.getElementById('admin'));
        ReactDOM.render(<Main_component/>,document.getElementById('main_page'));
    }
    openAdminpage(){
        getStaus().then(function(response){
            if(response.status){
                ReactDOM.render(<Navigation/>,document.getElementById('navigation'));
                ReactDOM.render(<Admin_page/>,document.getElementById('admin'));
            }
            else{
                alert("вы не админ");
            }
        })
                
    }
    openSign_up(){
        ReactDOM.render(<Sign_up/>,document.getElementById('sign_up'))
    }
    openSign_in(){
        ReactDOM.render(<Sign_in/>,document.getElementById('sign_up'))
    }
    render(){
        if(this.state.state === "A"){
        return(
            <div>
                <div>
                    <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link >Главная страница</Nav.Link>
                            <Nav.Link onClick={this.changeStateProducts}>Список товаров</Nav.Link>

                        

                            <Nav.Link id="open_admin_page" onClick={this.openAdminpage}>Admin page</Nav.Link>
                            </Nav>
                            <Form inline>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary" id="sign-in" onClick={this.openSign_in}>Авторизация</Button>
                                <Button variant="secondary" id="sign-up" onClick={this.openSign_up}>Регистрация</Button>
                                

                                <NavDropdown title="Пользователь" id="basic-nav-dropdown" id="menu-for-user">
                                    <NavDropdown.Item onClick={this.open_basket}>Моя корзина</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>

                                <Button variant="secondary" id="out">Выход</Button>
                            </ButtonGroup>
                            </Form>
                    </Navbar>
                </div>
                <div id="main_inform">
                    hh
                </div>
 
            </div>
        )
        }

        if(this.state.state === "B"){
            return(
                <div>
                    <div>123</div>
                    <div>123</div>
                </div>
            )
        }
    }
}