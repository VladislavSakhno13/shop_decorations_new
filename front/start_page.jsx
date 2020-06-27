import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import Sign_up from './sign_up.jsx';
import Sign_in from './sign_in.jsx';

export default class Start_page extends React.Component{
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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary" onClick={this.openSign_in}>Авторизация</Button>
                            <Button variant="secondary" onClick={this.openSign_up}>Регистрация</Button>
                        </ButtonGroup>
                        </Form>
                </Navbar>
  <br />
            </div>
        )
    }
}