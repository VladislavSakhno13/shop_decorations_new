<?php
    $inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
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
        $date_sign_up = date('l jS \of F Y h:i:s A');;
        $conect->query("INSERT INTO customers (`FIO`,`date`,`login`,`password`) VALUES('$input[FIO]','$date_sign_up','$input[login]','$input[password]')");

         $sql = $conect->query("SELECT * FROM customers ORDER BY id DESC LIMIT 1");
         $data = $sql->fetch_assoc();
         exit(json_encode($data));

     }
     else if($_SERVER['REQUEST_METHOD'] == 'PUT'){
         

     }
     else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){

     }