<?php
    if(!isset($_SESSION['username'])){
        session_start();
        $data_with_user = array('username'=>$_SESSION['username'],
        'status'=>$_SESSION['status'],'id'=>$_SESSION['id']);
        exit(json_encode($data_with_user));
        //echo $_SESSION['username'];
        //echo $_SESSION['status'];
        //session_destroy();
    }
    
    
    

?>