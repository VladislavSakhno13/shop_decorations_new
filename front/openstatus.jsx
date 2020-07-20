import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table} from 'react-bootstrap';
import axios from 'axios';
import {adminService, getStaus} from './adminService.js';
export default class Openstatus extends React.Component{
    render(){
        axios.get('./backend/status_products.php')
        .then(function(response){
            console.log(response.data);
            for(let i=0;i<response.data.length;i++){
                let tr = document.createElement('tr');

                let td_id = document.createElement('td');
                td_id.innerHTML = response.data[i].customer_id;
    
                let td_cost = document.createElement('td');
                td_cost.innerHTML = response.data[i].cost;

                let td_name = document.createElement('td');
                td_name.innerHTML = response.data[i].name;

                let td_status = document.createElement('td');
                td_status.innerHTML = response.data[i].status;
                
                tr.appendChild(td_id);
                tr.appendChild(td_cost);
                tr.appendChild(td_name);
                tr.appendChild(td_status);
                document.getElementById('table_for_status').appendChild(tr);
            }
            
        })
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
                        <tbody id="table_for_status">
            
                        </tbody>
            </Table>
            </div>
        )
    }
}