import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';
import Admin_page from './adminpage.jsx';
import Navigation from './navigation.jsx';
import Start_page from './start_page.jsx';
ReactDOM.render(<Start_page/>,document.getElementById('page_site'));
axios.get('./backend/i.php')
.then(function(response){
    console.log(response.data);
})

