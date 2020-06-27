import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class Sign_in extends React.Component{
    close(){
        ReactDOM.unmountComponentAtNode(document.getElementById('sign_up'));
    }
    render(){
        return(
            <div id="form_sign_up">
                 <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Ведите логин</Form.Label>
                        <Form.Control type="email" placeholder="Login" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Ведиле пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.close}>
                        Войти
                    </Button>
                </Form>
            </div>
        )
    }
}