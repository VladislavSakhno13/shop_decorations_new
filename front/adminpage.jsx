import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';

export default class Admin_page extends React.Component{
    alert(){
        alert("55");
    }
    render(){
        return(
            <div>
                <Form>
                    
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Тип метала</Form.Label>
                        <Form.Control as="select">
                        <option>Серебро</option>
                        <option>Платина</option>
                        <option>Латунь</option>
                        <option>Медь</option>
                        </Form.Control>

                        <Form.Label>Тип Товара</Form.Label>
                        <Form.Control as="select">
                        <option>Кольцо</option>
                        <option>Серьги</option>
                        <option>Цепочка</option>
                        <option>Подвеска</option>
                        </Form.Control>

                        <Form.Label>Тип камня</Form.Label>
                        <Form.Control as="select">
                        <option>Алмаз</option>
                        <option>Топаз</option>
                        <option>Рубин</option>
                        <option>Фианит</option>
                        </Form.Control>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Описание товара</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                        </Form.Group>

                        <Form.Label>Цена на товар</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Цена на товар" />

                        <Form>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="Выберите иконку товара" />
                                </Form.Group>
                        </Form>

                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button>{' '}
                   

                    </Form.Group>
            </Form>
            </div>
        )
    }
}
