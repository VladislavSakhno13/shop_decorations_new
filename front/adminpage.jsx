import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';


export default class Admin_page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           metal:"",
           type:"",
           rock:"",
           SKU:"",
           name:"",
           discription:"",
           cost:"",
           img:""
        };
        this.metal = this.metal.bind(this);
        this.type = this.type.bind(this);
        this.rock = this.rock.bind(this);
        this.SKU = this.SKU.bind(this);
        this.discription = this.discription.bind(this);
        this.name = this.name.bind(this);
        this.cost = this.cost.bind(this);
        this.Post_All_DataProduct=this.Post_All_DataProduct.bind(this);
    }
    metal(event,name){
        this.setState({metal:event.target.value});
    }
    type(event){
        this.setState({type:event.target.value});
    }
    rock(event){
        this.setState({rock:event.target.value});
    }
    discription(event){
        this.setState({discription:event.target.value});
    }
    SKU(event){
        this.setState({SKU:event.target.value});
    }
    name(event){
        this.setState({name:event.target.value});
    }
    cost(event){
        this.setState({cost:event.target.value});
    }
    img(event){
        this.setState({img:event.target.value});
    }
    Post_All_DataProduct(){
       let Products_data = {
            metal:this.state.metal,
            type:this.state.type,
            rock:this.state.rock,
            SKU:this.state.SKU,
            name:this.state.name,
            discription:this.state.discription,
            cost:this.state.cost,
            img:"img"
         };
         axios.post('./back-end/product.php',JSON.stringify(Products_data))
         .then(function(response){
            console.log(123);
         })
         .catch(function(error){
             console.log(error.response)
         })
    }
    render(){
        return(
            <div>
                <Form>
                    
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Тип метала</Form.Label>
                        <Form.Control as="select" onChange={this.metal} name="metal">
                        <option>Серебро</option>
                        <option>Платина</option>
                        <option>Латунь</option>
                        <option>Медь</option>
                        </Form.Control>

                        <Form.Label>Тип Товара</Form.Label>
                        <Form.Control as="select" onChange={this.type}>
                        <option>Кольцо</option>
                        <option>Серьги</option>
                        <option>Цепочка</option>
                        <option>Подвеска</option>
                        </Form.Control>

                        <Form.Label>Тип камня</Form.Label>
                        <Form.Control as="select" onChange={this.rock}>
                        <option>Алмаз</option>
                        <option>Топаз</option>
                        <option>Рубин</option>
                        <option>Фианит</option>
                        </Form.Control>

                        <Form.Label>SKU</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="SKU" onChange={this.SKU}/>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Описание товара</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.discription}/>
                        </Form.Group>

                        <Form.Label>Название</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Нзвание" onChange={this.name} />

                        <Form.Label>Цена на товар</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Цена на товар" onChange={this.cost} />

                        <Form>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="Выберите иконку товара" onChange={this.img}/>
                                </Form.Group>
                        </Form>

                        <Button variant="primary">Получить товары</Button>{' '}
                        <Button variant="secondary" onClick={this.Post_All_DataProduct}>Добавить товар</Button>{' '}
                   

                    </Form.Group>
            </Form>
            </div>
        )
    }
}
