import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup,Carousel,Item} from 'react-bootstrap';

export default class Carusel extends React.Component{
    render(){
        return(
                    
            <Carousel>
                    <Carousel.Item>
                    <img className="for-img-carusel"
                        className="d-block w-100"
                        src={this.props.img_carusel}
                        alt="Third slide"
                    />
                
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
          </Carousel>
                    
        )
    }
}