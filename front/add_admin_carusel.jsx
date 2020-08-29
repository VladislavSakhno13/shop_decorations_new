import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table} from 'react-bootstrap';
export default class Add_admin_carusel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            img_carusel:"",
            login_admin:"",
            password_admin:"",
            discription:""
        }
        this.Post_img_carusel=this.Post_img_carusel.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.discription=this.discription.bind(this);
        this.setAdminLogin=this.setAdminLogin.bind(this);
        this.setAdminPassword=this.setAdminLogin.bind(this);
        this.fileInput = React.createRef();
    }
    Post_img_carusel(){
        let formData = new FormData();
        formData.append('img_carusel',this.state.img_carusel);
        formData.append('discription',this.state.discription);
         axios.post('./backend/shares.php',formData)
         .then(function(response){
            console.log(response.data);
         })
    }
    discription(){
        this.setState({discription:event.target.value});
    }
    onFileChange(event){
        this.setState({img_carusel:event.target.files[0]});
        console.log(event.target.files[0]);
    }
    setAdminLogin(event){
        this.setState({login_admin:event.target.value});
    }
    setAdminPassword(event){
        this.setState({password_admin:event.target.value});
    }
    render(){
        return(
            <div>
                            <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                                <label>
                                Добавить изображение акции:
                                <input type="file" ref={this.fileInput} onChange={this.onFileChange} />
                                </label>
                                <br />
                                <Form.Control as="textarea" rows="3" onChange={this.discription}/>
                                <Button variant="secondary" onClick={this.Post_img_carusel}>Добавить товар</Button>{' '}
                            </form>

                            <form>
                               <span>Добавить нового администратора:</span><br/>
                               <span>Логин:</span><br/>
                               <input type="text" placeholder="Login" onChange={this.setAdminLogin}/><br/>
                               <span>Пароль:</span><br/>
                               <input type="text" placeholder="Password" onChange={this.setAdminPassword}/><br/>
                               <button>Добавить Администратора</button>
                            </form>
            </div>
        )
    }
}