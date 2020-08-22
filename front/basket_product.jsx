import React from 'react';
export default class Basket_show extends React.Component{
    render(){
        return(
                    
                        <tr>
                            <th>{this.props.index}</th>
                            <th>{this.props.cost}</th>
                            <th>{this.props.name}</th>
                            <th>{this.props.status}</th>
                        </tr>
                    
        )
    }
}