<?php
    
    $inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     $conect = new mysqli('127.0.0.1','root','','decoration_shop');
     if($_SERVER['REQUEST_METHOD'] == 'GET'){

        if(isset($_GET['id'])){
            $id = $conect->real_escape_string($_GET['id']);
            $sql = $conect->query("SELECT * FROM products WHERE id = '$id'");
            $data = $sql->fetch_assoc();
        } else{
            $data = array();
            $sql = $conect->query("SELECT * FROM products");
            while ($d = $sql->fetch_assoc()) {
                $data[] = $d;   
            }
        }
        exit(json_encode($data));
    }
    else if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $conect->query("INSERT INTO products (`metal_product`,`type_product`,`rock_product`,`img`,`name`,`cost`,`sku`,`discription`)
         VALUES('$input[metal_product]','$input[type_product]',
         '$input[rock_product]','$input[img]','$input[name]','$input[cost]','$input[sku]','$input[discription]')");

          $sql = $conect->query("SELECT * FROM products ORDER BY id DESC LIMIT 1");
          $data = $sql->fetch_assoc();
          exit(json_encode($data));

    }
    else if($_SERVER['REQUEST_METHOD'] == 'PUT'){

    }
    else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        
    }