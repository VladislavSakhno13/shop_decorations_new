import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup} from 'react-bootstrap';
import axios from 'axios';


export default class Start_page extends React.Component{
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
                            <Button variant="secondary">Авторизация</Button>
                            <Button variant="secondary">Регистрация</Button>
                        </ButtonGroup>
                        </Form>
                </Navbar>
  <br />
            </div>
        )
    }
}