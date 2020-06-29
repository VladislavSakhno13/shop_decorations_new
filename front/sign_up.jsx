import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';
export default class Sign_up extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           login:"",
           password:"",
           name:""
        };
        this.getlogin = this.getlogin.bind(this);
        this.getpassword = this.getpassword.bind(this);
        this.getName = this.getName.bind(this);

        this.sent_user = this.sent_user.bind(this);
        }
    getlogin(event){
        this.setState({login:event.target.value});
    }
    getpassword(event){
        this.setState({password:event.target.value});
    }
    getName(event){
        this.setState({name:event.target.value});
    }
    sent_user(){
        let data = {
            login:this.state.login,
            password:this.state.password,
            name:this.state.name
        }
        console.log(data);
        axios.post(`./backend/customers.php`,JSON.stringify(data))
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
                    <Form.Label>Ведите ваше имя</Form.Label>
                    <Form.Control type="text" placeholder="Normal text" onChange={this.getName} />

                        <Form.Label>Ведите логин</Form.Label>
                        <Form.Control type="email" placeholder="Логин" onChange={this.getlogin}/>
                        <Form.Text className="text-muted">
                        
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Ведите пароль</Form.Label>
                        <Form.Control type="password" placeholder="пароль" onChange={this.getpassword}/>
                        <Form.Label>Повторите пароль</Form.Label>
                        <Form.Control type="password" placeholder="пароль" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.sent_user}>
                        Зарегестрироваться
                    </Button>
                </Form>
            </div>
        )
    }
}