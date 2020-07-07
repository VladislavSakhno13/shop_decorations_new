import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import Sign_up from './sign_up.jsx';
import Sign_in from './sign_in.jsx';
import Admin_page from './adminpage.jsx';
import Navigation from './navigation.jsx';

export default class Start_page extends React.Component{
    comeback(){
        ReactDOM.unmountComponentAtNode(document.getElementById('navigation'));
        ReactDOM.unmountComponentAtNode(document.getElementById('admin'));
    }
    openAdminpage(){
                ReactDOM.render(<Navigation/>,document.getElementById('navigation'));
                ReactDOM.render(<Admin_page/>,document.getElementById('admin'));
    }
    openSign_up(){
        ReactDOM.render(<Sign_up/>,document.getElementById('sign_up'))
    }
    openSign_in(){
        ReactDOM.render(<Sign_in/>,document.getElementById('sign_up'))
    }
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link onClick={this.comeback}>Главная страница</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link id="open_admin_page" onClick={this.openAdminpage}>Admin page</Nav.Link>
                        </Nav>
                        <Form inline>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" id="sign-in" onClick={this.openSign_in}>Авторизация</Button>
                            <Button variant="secondary" id="sign-up" onClick={this.openSign_up}>Регистрация</Button>
                            <Button variant="secondary" id="out">Выход</Button>
                        </ButtonGroup>
                        </Form>
                </Navbar>
  <br />
            </div>
        )
    }
}