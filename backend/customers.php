<?php
   
    $inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     require_once 'connection.php';
     $conect = new mysqli($host,$user,$password,$database);
     
     if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['id'])){
            $id = $conect->real_escape_string($_GET['id']);
            $sql = $conect->query("SELECT * FROM customers WHERE id = '$id'");
            $data = $sql->fetch_assoc();
        } else{
            $data = array();
            $sql = $conect->query("SELECT * FROM customers");
            while ($d = $sql->fetch_assoc()) {
                $data[] = $d;   
            }
        }
        exit(json_encode($data));
     }
     else if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        
        $date_sign_up = date('l jS \of F Y h:i:s A');
        $sql = $conect->query("SELECT * FROM customers WHERE login = $input[login]");
        $data = $sql->fetch_assoc();
        if(isset($data)){
            $conect->query("INSERT INTO customers (`FIO`,`date`,`login`,`password`,`status_user_id`) VALUES('$input[name]','$date_sign_up','$input[login]','$input[password]',1)");
            
            $sql = $conect->query("SELECT * FROM customers ORDER BY id DESC LIMIT 1");
            $data = $sql->fetch_assoc();
            exit(json_encode($data));
        }
        else{
            exit(json_encode("Такой пользователь уже зарегестрирован"));
        }
        
    
}
     else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
        
        $sql = $conect->query("SELECT * FROM customers WHERE login = '$input[login]' AND password = '$input[password]'");
        $data = $sql->fetch_assoc();
        session_start();
        $_SESSION['username'] = $data['FIO'];
        $_SESSION['status'] = $data['status_user_id'];
        $_SESSION['id'] = $data['id'];
        exit(json_encode($data));

     }
     else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        
     }