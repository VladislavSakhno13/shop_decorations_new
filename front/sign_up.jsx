import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class Sign_up extends React.Component{
    close(){
        ReactDOM.unmountComponentAtNode(document.getElementById('sign_up'));
    }
    render(){
        return(
            <div id="form_sign_up">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Ведите логин</Form.Label>
                        <Form.Control type="email" placeholder="Логин" />
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Ведите пароль</Form.Label>
                        <Form.Control type="password" placeholder="пароль" />
                        <Form.Label>Повторите пароль</Form.Label>
                        <Form.Control type="password" placeholder="пароль" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.close}>
                        Зарегестрироваться
                    </Button>
                </Form>
            </div>
        )
    }
}