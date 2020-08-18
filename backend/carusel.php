<?php
   
    $inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     require_once 'connection.php';
     $conect = new mysqli($host,$user,$password,$database);
     if($_SERVER['REQUEST_METHOD'] == 'GET'){
        $data = array();
        $sql = $conect->query("SELECT * FROM shares");
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;   
        }
        exit(json_encode($data));
     }