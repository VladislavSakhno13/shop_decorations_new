<?php
$inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     require_once 'connection.php';
     $conect = new mysqli($host,$user,$password,$database);
     if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $conect->query("INSERT INTO basket (`orders_id`,`status`) VALUES('$input[order_id]','Ожидает оплаты')");
        
         $sql = $conect->query("SELECT * FROM `basket` ORDER BY `id` DESC LIMIT 1");
         $data = $sql->fetch_assoc();
         exit(json_encode($data));

     }