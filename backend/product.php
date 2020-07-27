<?php
$inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     require_once 'connection.php';
     $conect = new mysqli($host,$user,$password,$database);
     if($_SERVER['REQUEST_METHOD'] == 'GET'){
            $data = array();
            $sql = $conect->query("SELECT id_product,metal,type,rock,cost,img,sku,discription, name FROM products LEFT JOIN metal_products ON products.metal_product = metal_products.id LEFT JOIN rocks_products ON products.rock_product = rocks_products.id LEFT JOIN type_products ON products.type_product = type_products.id");
            while ($d = $sql->fetch_assoc()) {
                $d['img'] = base64_encode($d['img']);
                $data[] = $d;   
            }
        
        exit(json_encode($data));
    }
    else if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        $img = addslashes(file_get_contents($_FILES['img']['tmp_name']));
        $sqlmetal = $conect->query("SELECT `id` FROM `metal_products` WHERE `metal`= '$_POST[metal]'");
        $sqltype = $conect->query("SELECT `id` FROM `type_products` WHERE `type` = '$_POST[type]'");
        $sqlrock = $conect->query("SELECT `id` FROM `rocks_products` WHERE `rock`= '$_POST[rock]'");
        $id_metal= $sqlmetal->fetch_assoc();
        $id_type= $sqltype->fetch_assoc();
        $id_rock= $sqlrock->fetch_assoc();
        

        $conect->query("INSERT INTO products (metal_product,type_product,rock_product,img,name,cost,sku,discription) VALUES($id_metal[id],$id_type[id],$id_rock[id],'$img','$_POST[name]','$_POST[cost]','$_POST[sku]','$_POST[discription]')");

          $sql = $conect->query("SELECT * FROM `products` ORDER BY id_product DESC LIMIT 1");
          $data = $sql->fetch_assoc();
          exit(json_encode($data));
        
          

    }
    else if($_SERVER['REQUEST_METHOD'] == 'PUT'){

    }
    else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        
    }