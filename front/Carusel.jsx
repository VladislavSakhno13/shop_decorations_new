import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table,Nav,Navbar,NavDropdown,FormControl,ButtonGroup,Carousel,Item} from 'react-bootstrap';

export default class Carusel extends React.Component{
    render(){
        return(
                    
            
                    <Carousel.Item id="block-carusel">
                    <img
                        className="d-block w-100"
                        src="https://bipbap.ru/wp-content/uploads/2019/07/Nature___Rivers_and_lakes_Pond_in_a_wooden_mill_101286_.jpg"
                        alt="Third slide"
                    />
                
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
          
                    
        )
    }
}