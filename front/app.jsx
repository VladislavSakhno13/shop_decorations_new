import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import Admin_page from './adminpage.jsx';
import Navigation from './navigation.jsx';
import Start_page from './start_page.jsx';
ReactDOM.render(<Start_page/>,document.getElementById('page_site'));
axios.get('./backend/index.php')
.then(function(response){
    console.log(response.data);
    /*document.getElementById('out').onclick = function(){
        axios('./backend/exit.php')
        .then(function(response){
            document.getElementById('sign-up').style.display = 'block'
            document.getElementById('sign-in').style.display = 'block'
            document.getElementById('out').style.display = 'none'
            console.log(response.data);
        })
    }*/ 
})
document.getElementById('out').onclick=function(){
    axios.get('./backend/exit.php')
    .then(function(response){
        document.getElementById('sign-up').style.display = 'block'
            document.getElementById('sign-in').style.display = 'block'
            document.getElementById('out').style.display = 'none'
        console.log(response.data);
    })
}
