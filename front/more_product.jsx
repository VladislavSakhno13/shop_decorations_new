import React from 'react';
import axios from 'axios';

export default class Start_page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            person_id:this.props.person_data.id,
            product_id:this.props.product_id
        }
        this.Send_to_basket=this.Send_to_basket.bind(this);
    }
    Send_to_basket(){
       let data_basket={
            person_id:this.state.person_id,
            product_id:this.state.product_id
        }
        console.log(data_basket);
        
        axios.post('./backend/basket.php',JSON.stringify(data_basket)).then(function(response){console.log(response.data)})
    }
   render(){
       console.log(this.props.person_data)
       return(
           <div id="prosuct_box">
               <div id="box-for-img">
                   <img id="product_img" src={this.props.img} alt=""/>
               </div>
               <div>
                   <div className="product_text_box">Название: {this.props.name}</div>
                   <div className="product_text_box">Метал изделия: {this.props.metal}</div>
                   <div className="product_text_box">Тип изделия: {this.props.type}</div>
                   <div className="product_text_box">Камент изделия: {this.props.rock}</div>
                   <div className="product_text_box">SKU: {this.props.sku}</div>
                   <div className="product_text_box">Описание: {this.props.discription}</div>
                   <div className="button-basket" onClick={this.Send_to_basket}>В корзину</div>
               </div>
           </div>
       )
   }
}