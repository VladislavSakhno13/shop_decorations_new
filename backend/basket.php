<?php
$inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     $conect = new mysqli($host,$user,$password,$database);
     if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $id_product = $conect->query("SELECT `id` FROM `products` WHERE `sku`= '$input[sku]' ");
        $id_for_basket= $id_product->fetch_assoc();

        $conect->query("INSERT INTO basket (`product_id`,`customer_id`,`count`,`cost`) VALUES('$id_for_basket','$input[customer_id]','$input[count]','$input[cost]')");
        
         $sql = $conect->query("SELECT * FROM basket ORDER BY id DESC LIMIT 1");
         $data = $sql->fetch_assoc();
         exit(json_encode($data));

     }