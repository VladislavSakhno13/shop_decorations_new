import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class Sign_in extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           login:"",
           password:"",
        };
        this.getlogin = this.getlogin.bind(this);
        this.getpassword = this.getpassword.bind(this);

        this.sign_in_user = this.sign_in_user.bind(this);
        }
    getlogin(event){
        this.setState({login:event.target.value});
       console.log(event.target.value);
    }
    getpassword(event){
        this.setState({password:event.target.value});
        console.log(event.target.value);
    }
    sign_in_user(){
        let data = {
            login:this.state.login,
            password:this.state.password
        }
        console.log(data);
        axios.put('./backend/customers.php',JSON.stringify(data))
        .then(function(response){
            console.log(response.data);
        })
        ReactDOM.unmountComponentAtNode(document.getElementById('sign_up'));
    }
    render(){
        return(
            <div id="form_sign_up">
                 <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Ведите логин</Form.Label>
                        <Form.Control type="email" placeholder="Login" onChange={this.getlogin}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Ведиле пароль</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.getpassword}/>
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.sign_in_user}>
                        Войти
                    </Button>
                </Form>
            </div>
        )
    }
}