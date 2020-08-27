import Table_product from './table_admin_product.jsx';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table} from 'react-bootstrap';
import axios from 'axios';
import Basket_show from './basket_show.jsx';
import ReactDOM from 'react-dom';
export default class Getproducts extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data_products: []
        }
    }
    componentDidMount(){
        axios.get('./backend/product.php').then((response) => this.setState({data_products:response.data}))
    }
    render(){
        const{data_products} = this.state;
        return(
            <div>
                <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th >id</th>
                            <th>Метал</th>
                            <th>Тип</th>
                            <th>Камень</th>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>sku</th>
                            <th> Описание</th>
                            </tr>
                        </thead>
                        <tbody id="table_product">
                            {data_products.map(data_products =>(<Table_product id={data_products.id} metal={data_products.metal} type={data_products.type} rock={data_products.rock} 
                             name={data_products.name} cost={data_products.cost} sku={data_products.sku} discription={data_products.discription}/>))}
                        </tbody>
            </Table>
            </div>
        )
    }
}