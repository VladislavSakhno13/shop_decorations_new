<?php
    $inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     $conect = new mysqli('127.0.0.1','root','','decoration_shop');
     if($_SERVER['REQUEST_METHOD'] == 'GET'){
        
    }
    else if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $conect->query("INSERT INTO rocks_products (`rock`)
        VALUES('$input[rock]')");

         $sql = $conect->query("SELECT * FROM rocks_products ORDER BY id DESC LIMIT 1");
         $data = $sql->fetch_assoc();
         exit(json_encode($data));

    }
    else if($_SERVER['REQUEST_METHOD'] == 'PUT'){

    }
    else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){

    }