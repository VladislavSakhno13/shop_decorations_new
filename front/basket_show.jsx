import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table} from 'react-bootstrap';
import axios from 'axios';
export default class Basket_show extends React.Component{
    render(){
        let id = 5;
        let cost_all_product = 0;
        axios.get(`./backend/basket/${id}`)
        .then(function(response){
            for(let i=0;i<response.data.length;i++){
                let tr = document.createElement('tr');

                let td_id = document.createElement('td');
                td_id.innerHTML = i+1;
    
                let td_cost = document.createElement('td');
                td_cost.innerHTML = Number(response.data[i].cost);
                cost_all_product=cost_all_product + Number(response.data[i].cost);
                //console.log(typeof(response.data[i].cost));

                let td_name = document.createElement('td');
                td_name.innerHTML = response.data[i].name;

                let td_count = document.createElement('td');
                td_count.innerHTML = 13;

                let td_status = document.createElement('td');
                td_status.innerHTML = response.data[i].status;           

                tr.appendChild(td_id);
                tr.appendChild(td_cost);
                tr.appendChild(td_name);
                tr.appendChild(td_count);
                tr.appendChild(td_status);
                document.getElementById('table_for_basket').appendChild(tr);
            }
            document.getElementById('cost_all_product').innerHTML = "Общая стоимость равна - " + cost_all_product + " Рублей ";
            //console.log(typeof(cost_all_product));
        })
        return(
            <div>
                <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th >#</th>
                            <th>Цена</th>
                            <th>Название</th>
                            <th>Колличество</th>
                            <th>Статус</th>
                            </tr>
                        </thead>
                        <tbody id="table_for_basket">
            
                        </tbody>
            </Table>
        <div id="cost_all_product"></div>
            </div>
        )
    }
}