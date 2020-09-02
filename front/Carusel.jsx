import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup,Carousel,Item} from 'react-bootstrap';


export default class Carusel extends React.Component{
    render(){
        return(
                    
                
                    <Carousel.Item id="g">
                    <img
                        className="d-block w-100"
                        src={this.props.img}
                        alt="Third slide"
                    />
                
                    <Carousel.Caption>
                        <h3>1</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>  
                    
        )
    }
}