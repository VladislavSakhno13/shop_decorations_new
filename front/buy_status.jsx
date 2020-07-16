import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table} from 'react-bootstrap';
import axios from 'axios';
import {adminService, getStaus} from './adminService.js';
export default class Admin_page extends React.Component{
   
    render(){
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
                    let add_to_basket = document.createElement('td');
                    add_to_basket.innerHTML = "Добавить в корзину";
                    add_to_basket.onclick=function(){
                        let product_id = response.data[i].sku;
                        let cost = response.data[i].cost;
                        getStaus().then(function(response){
                            let  data = {
                                product_id: product_id,
                                customer_id: response.id,
                                cost: cost
                            }
                            axios.post('./backend/orders.php',JSON.stringify(data))
                                .then(function(response){
                                console.log(response.data);
                                let data_for_basket = {
                                    order_id: response.data.id
                            }
                                axios.post('./backend/basket.php',JSON.stringify(data_for_basket))
                                .then(function(response){
                                    console.log(response.data);
                                })
                        })
                            console.log(data);
                        })
                    }
                    
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
                            <th>Добавить в корзину</th>
                            </tr>
                        </thead>
                        <tbody id="table_product">
            
                        </tbody>
                </Table>
            </div>
        )
    }
}