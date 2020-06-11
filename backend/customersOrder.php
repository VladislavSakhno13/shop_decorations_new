<?php
    $inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     $conect = new mysqli($host,$user,$password,$database);
     if($_SERVER['REQUEST_METHOD'] == 'GET'){
        if(isset($_GET['id'])){
            $id = $conect->real_escape_string($_GET['id']);
            $sql = $conect->query("SELECT * FROM order_customers WHERE id = '$id'");
            $data = $sql->fetch_assoc();
        } else{
            $data = array();
            $sql = $conect->query("SELECT * FROM order_customers");
            while ($d = $sql->fetch_assoc()) {
                $data[] = $d;   
            }
        }
        exit(json_encode($data));
     }
     else if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        /*$sqlmetal = $conect->query("SELECT `id` FROM `metal_products` WHERE `metal`= '$input[metal]' ");
        $sqltype = $conect->query("SELECT `id` FROM `type_products` WHERE `type` = '$input[type]'");
        $id_metal= $sqlmetal->fetch_assoc();
        $id_type= $sqltype->fetch_assoc();*/
        $conect->query("INSERT INTO order_customers (product_id,count_order,customers_id) VALUES('$input[product_id]','$input[count_order]','$input[customers_id]')");

         $sql = $conect->query("SELECT * FROM order_customers ORDER BY id DESC LIMIT 1");
         $data = $sql->fetch_assoc();
         exit(json_encode($data));

     }
     else if($_SERVER['REQUEST_METHOD'] == 'PUT'){

     }
     else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){

     }
     