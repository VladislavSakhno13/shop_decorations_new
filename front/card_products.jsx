import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Card_products extends React.Component{
    render(){
        return(
            <div id="box-for-product">
                <img src={this.props.img} alt="" id="img-product"/>
                <div>{this.props.name}</div>
                <div>{this.props.cost}</div>
                <div id="open-more" onClick={()=>this.props.handleChange(this.props.index)}>Подробнее</div>
            </div>
        )
    }
}