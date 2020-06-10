import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table} from 'react-bootstrap';
import axios from 'axios';
export default class Getproducts extends React.Component{
    render(){
        return(
            <div>
                <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>id</th>
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
            </div>
        )
    }
}