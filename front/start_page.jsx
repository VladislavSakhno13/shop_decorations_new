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
    constructor(props){
        super(props);
        this.state={
            state_page: "Start_page",
            data_for_cards: []
        }
        this.changeStateProducts=this.changeStateProducts.bind(this);
        this.changeStateProducts_page=this.changeStateProducts_page.bind(this);
        this.changeStateAdmin=this.changeStateAdmin.bind(this);
        
    }
    
    componentDidMount(){
        axios.get('./backend/product.php').then((response) => this.setState({data_for_cards:response.data}))
    }
    changeStateProducts(){
       this.setState({state_page:"state_products"})
    }
    changeStateProducts_page(){
        this.setState({state_page:"Start_page"})
     }
     changeStateAdmin(){
        this.setState({state_page:"Admin"})
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
        const {state_page, data_for_cards} = this.state;
        if(state_page === "Start_page"){
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
               
                </div>
 
            </div>
        )
        }

        if(state_page === "state_products"){
            return(
                <div>
                    <div>
                    <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link onClick={this.changeStateProducts_page}>Главная страница</Nav.Link>
                            <Nav.Link>Список товаров</Nav.Link>

                        

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
                    <div id="box-for-grid">
                        <div id="box_for_products">{data_for_cards.map(data_for_cards =>(
                            <Card_products name={data_for_cards.name} cost={data_for_cards.cost} img={'data:image/png;base64,'+data_for_cards.img}/>
                        ) )}</div>
                    </div>
                    
                </div>
            )

        }
       
        if((state_page === "Admin")){
            return(
                <div>
                    <div>
                    <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="mr-auto">
                            <Nav.Link onClick={this.changeStateProducts_page}>Главная страница</Nav.Link>
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
                    <div id="navigation">
                        <Navigation/>
                        </div>
                </div>
            )
        }
    }
}
