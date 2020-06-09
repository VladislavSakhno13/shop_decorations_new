import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import axios from 'axios';
export default class Navigation extends React.Component{
    change_product(){
        
    }
    change_add_(){

    }
    render(){
        return(
            <div>
                <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link>Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disabled" disabled>
                            Disabled
                            </Nav.Link>
                        </Nav.Item>
                </Nav>
            </div>
        )
    }

}