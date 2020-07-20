import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table} from 'react-bootstrap';
import axios from 'axios';
import {adminService, getStaus} from './adminService.js';
export default class Openstatus extends React.Component{
    render(){
        axios.get('./backend/')
        return(
            <div>
                <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th >Name_person</th>
                            <th>Цена</th>
                            <th>Название</th>
                            <th>Статус</th>
                            </tr>
                        </thead>
                        <tbody id="table_for_basket">
            
                        </tbody>
            </Table>
            </div>
        )
    }
}