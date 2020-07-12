import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table} from 'react-bootstrap';
import axios from 'axios';
import Basket_show from './basket_show.jsx';
import ReactDOM from 'react-dom';
export default class Getproducts extends React.Component{
    Get_All_Product(){
        axios.get('./backend/product.php')
        .then(function(response){
            for(let i=0;i<response.data.length;i++){
                let tr = document.createElement('tr');

                let td_id = document.createElement('td');
                td_id.innerHTML = response.data[i].id_product;
    
                let td_metal = document.createElement('td');
                td_metal.innerHTML = response.data[i].metal;

                let td_type = document.createElement('td');
                td_type.innerHTML = response.data[i].type;

                let td_rock = document.createElement('td');
                td_rock.innerHTML = response.data[i].rock;

                let td_img = document.createElement('td');
                td_img.innerHTML = response.data[i].img;

                let td_name = document.createElement('td');
                td_name.innerHTML = response.data[i].name;

                let td_cost = document.createElement('td');
                td_cost.innerHTML = response.data[i].cost;
                let td_sku = document.createElement('td');
                td_sku.innerHTML = response.data[i].sku;
                
                let td_discription = document.createElement('td');
                td_discription.innerHTML = response.data[i].discription;
                
                tr.appendChild(td_id);
                tr.appendChild(td_metal);

                tr.appendChild(td_type);
                tr.appendChild(td_rock);
                tr.appendChild(td_img);
                tr.appendChild(td_name);
                tr.appendChild(td_cost);
                tr.appendChild(td_sku);
                tr.appendChild(td_discription);
                tr.appendChild(add_to_basket);
                document.getElementById('table_product').appendChild(tr);
            }
            
        })
    }
    render(){
        return(
            <div>
                <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th >id</th>
                            <th>Метал</th>
                            <th>Тип</th>
                            <th>Камень</th>
                            <th>Иконка</th>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>sku</th>
                            <th> Описание</th>
                            </tr>
                        </thead>
                        <tbody id="table_product">
            
                        </tbody>
            </Table>
            <Button variant="primary" onClick={this.Get_All_Product}>Получить товары</Button>{' '}
            <div id="basket"></div>
            </div>
        )
    }
}