import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Table} from 'react-bootstrap';
import axios from 'axios';


export default class Admin_page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           metal:"",
           type:"",
           rock:"",
           sku:"",
           name:"",
           discription:"",
           cost:"",
           img:""
        };
        this.metal = this.metal.bind(this);
        this.type = this.type.bind(this);
        this.rock = this.rock.bind(this);
        this.sku = this.sku.bind(this);
        this.discription = this.discription.bind(this);
        this.name = this.name.bind(this);
        this.cost = this.cost.bind(this);
        this.Post_All_DataProduct=this.Post_All_DataProduct.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({img:this.fileInput.current.files[0]})
        console.log(this.fileInput.current.files[0]);

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
    sku(event){
        this.setState({sku:event.target.value});
    }
    name(event){
        this.setState({name:event.target.value});
    }
    cost(event){
        this.setState({cost:event.target.value});
    }
    Post_All_DataProduct(){
        let formData = new FormData();
        formData.append('image',this.state.img);
       let Products_data = {
            metal:this.state.metal,
            type:this.state.type,
            rock:this.state.rock,
            sku:this.state.sku,
            name:this.state.name,
            discription:this.state.discription,
            cost:this.state.cost,
            img:formData
         };
         axios.post('./backend/product.php',JSON.stringify(Products_data))
         .then(function(response){
            console.log(response.data);
         })
    }
    render(){
        return(
            <div>
                <Form>
                    
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Тип метала</Form.Label>
                        <Form.Control as="select" onChange={this.metal} name="metal">
                        <option>Выберите метал изделия</option>
                        <option>Серебро</option>
                        <option>Платина</option>
                        <option>Латунь</option>
                        <option>Медь</option>
                        </Form.Control>

                        <Form.Label>Тип Товара</Form.Label>
                        <Form.Control as="select" onChange={this.type}>
                        <option>Выберите тип изделия</option>
                        <option>Кольцо</option>
                        <option>Серьги</option>
                        <option>Цепочка</option>
                        <option>Подвеска</option>
                        </Form.Control>

                        <Form.Label>Тип камня</Form.Label>
                        <Form.Control as="select" onChange={this.rock}>
                        <option>Выберите камень изделия</option>
                        <option>Алмаз</option>
                        <option>Топаз</option>
                        <option>Рубин</option>
                        <option>Фианит</option>
                        </Form.Control>

                        <Form.Label>sku</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="sku" onChange={this.sku}/>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Описание товара</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.discription}/>
                        </Form.Group>

                        <Form.Label>Название</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Нзвание" onChange={this.name} />

                        <Form.Label>Цена на товар</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Цена на товар" onChange={this.cost} />


                        <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                            <label>
                            Upload file:
                            <input type="file" ref={this.fileInput} />
                            </label>
                            <br />
                            <button type="submit">Submit</button>
                        </form>

                        <Button variant="secondary" onClick={this.Post_All_DataProduct}>Добавить товар</Button>{' '}
                    </Form.Group>
            </Form>

            </div>
        )
    }
}
