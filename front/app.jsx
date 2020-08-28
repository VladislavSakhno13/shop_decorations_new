import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import Start_page from './start_page.jsx';
import {adminService, getStaus} from './adminService.js';
ReactDOM.render(<Start_page/>,document.getElementById('page_site'));

getStaus().then(function(response){
    if(response.id == undefined){
        document.getElementById('sign-up').style.display = 'block'
        document.getElementById('sign-in').style.display = 'block'
        document.getElementById('out').style.display = 'none'
        document.getElementById('menu-for-user').style.display = 'none'
    }
    else{
        document.getElementById('sign-up').style.display = 'none'
        document.getElementById('sign-in').style.display = 'none'
        document.getElementById('out').style.display = 'block'
        document.getElementById('menu-for-user').style.display = 'block'
        if(response.status){
            document.getElementById('open_admin_page').style.display = 'block'
        }
    }
})

document.getElementById('out').onclick=function(){
    axios.get('./backend/exit.php')
    .then(function(response){
            ReactDOM.unmountComponentAtNode(document.getElementById('main_page'));
            document.getElementById('sign-up').style.display = 'block'
            document.getElementById('sign-in').style.display = 'block'
            document.getElementById('out').style.display = 'none'
            document.getElementById('menu-for-user').style.display = 'none'
            document.getElementById('open_admin_page').style.display = 'none'
        console.log(response.data);
    })
}
