import axios from 'axios';

  export function getStaus(){
        return axios.get('./backend/index.php')
        .then(function(response){
            
            let data = {
                id: response.data['id'],
                username: response.data['username'],
                status: response.data['status']==3
            }
           return  data;   
        })
        
    }

export function GetProduct(){
   return axios.get('./backend/product.php')
    .then(function(response){
        return response.data;
    })
}