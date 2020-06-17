<?php
$inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     require_once 'connection.php';
     $conect = new mysqli($host,$user,$password,$database);
     if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $id_product = $conect->query("SELECT `id_product` FROM `products` WHERE `sku`= '$input[product_id]'");
        $id_for_basket= $id_product->fetch_assoc();

        $conect->query("INSERT INTO orders (`product_id`,`customer_id`,`cost`) VALUES('$id_for_basket[id_product]','$input[customer_id]','$input[cost]')");
        
         $sql = $conect->query("SELECT * FROM `orders` ORDER BY `id` DESC LIMIT 1");
         $data = $sql->fetch_assoc();
         exit(json_encode($data));

     }
     if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        $conect->query("DELETE  FROM `basket`");
        exit(json_encode("5"));
    }