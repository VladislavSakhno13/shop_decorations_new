<?php
    if(!isset($_SESSION['username'])){
        session_start();
        $data_with_user = array('username'=>$_SESSION['username'],
        'status'=>$_SESSION['status'],'id'=>$_SESSION['id']);
        exit($data_with_user['id']);
        //echo $_SESSION['username'];
        //echo $_SESSION['status'];
        //session_destroy();
    }
    
    
    

?>