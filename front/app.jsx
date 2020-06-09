import ReactDOM from 'react-dom';
import React from 'react';
import Admin_page from './adminpage.jsx';
import Navigation from './navigation.jsx';

ReactDOM.render(<Navigation/>,document.getElementById('navigation'));
ReactDOM.render(<Admin_page/>,document.getElementById('admin'));

