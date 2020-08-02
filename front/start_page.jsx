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
import Main_component from './main_component.jsx';

export default class Start_page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            state: "A"
        }
        this.changeStateProducts=this.changeStateProducts.bind(this);
        this.changeStateProductsA=this.changeStateProductsA.bind(this);
        this.changeStateAdmin=this.changeStateAdmin.bind(this);
    }
    changeStateProducts(){
       this.setState({state:"B"})
    }
    changeStateProductsA(){
        this.setState({state:"A"})
     }
     changeStateAdmin(){
        this.setState({state:"Admin"})
     }
    open_basket(){
        ReactDOM.render(<Basket_show/>,document.getElementById('main_page'));
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
                            <Nav.Link>Главная страница</Nav.Link>
                            <Nav.Link onClick={this.changeStateProducts}>Список товаров</Nav.Link>

                        

                            <Nav.Link id="open_admin_page" onClick={this.changeStateAdmin}>Admin page</Nav.Link>
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
                <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://cdn.gold24.ru/s/ru/deals/x3adcad90b4922cb549f60e49d569be0e94c72d2c.jpg.pagespeed.ic.Kcdu4ad3Hc.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://trcmoscow.ru/Upload/objects/Events.Event/picture/53/ba/dd/e3/4128102_7111629.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://www.hotevents.ru/img/m/valtera/val_2013-09-20.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                </Carousel>
                </div>
 
            </div>
        )
        }

        if(this.state.state === "B"){
            GetProduct().then(function(response){
                for(let i=0;i<response.length;i++){
                    let div_for_product =  document.createElement('div');
                     ReactDOM.render(<Card_products  img={'data:image/png;base64,'+response[i].img} name = {response[i].name} cost = {response[i].cost}/>,div_for_product);
                     document.getElementById('box_for_products').appendChild(div_for_product);
                     }
            })
            return(
                <div>
                    <div>
                    <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link onClick={this.changeStateProductsA}>Главная страница</Nav.Link>
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
                    <div id="box-for-grid">
                        <div id="box_for_products"></div>
                    </div>
                    
                </div>
            )

        }
        if(this.state.state === "Admin"){
            getStaus().then(function(response){
                if(response.status){
                    ReactDOM.render(<Navigation/>,document.getElementById('navigation'));
                    ReactDOM.render(<Admin_page/>,document.getElementById('admin'));
                }
                else{
                    alert("вы не админ");
                }
            })
            return(
                <div>
                    <div>
                    <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link onClick={this.changeStateProductsA}>Главная страница</Nav.Link>
                            <Nav.Link onClick={this.changeStateProducts}>Список товаров</Nav.Link>

                        

                            <Nav.Link id="open_admin_page">Admin page</Nav.Link>
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
                    <div id="navigation"></div>
                    <div id="admin"></div>
                </div>
            )
        }
    }
}