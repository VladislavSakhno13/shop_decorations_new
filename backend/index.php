<?php
    session_start();
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, TRUE);
    if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_SESSION['username'])){
            session_start();
            $data_with_user = array('username'=>$_SESSION['username'],
            'status'=>$_SESSION['status'],'id'=>$_SESSION['id']);
            exit(json_encode($_SESSION['username']));
            
    }
        else{  
            echo "сессии не существует";
        }
}
    
    
    
     
    
    
    
    

?>