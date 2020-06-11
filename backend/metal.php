<?php
    $inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     $conect = new mysqli($host,$user,$password,$database);
     if($_SERVER['REQUEST_METHOD'] == 'GET'){
        
     }
     else if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $conect->query("INSERT INTO metal_products (`metal`)
        VALUES('$input[metal]')");

         $sql = $conect->query("SELECT * FROM metal_products ORDER BY id DESC LIMIT 1");
         $data = $sql->fetch_assoc();
         exit(json_encode($data));

     }
     else if($_SERVER['REQUEST_METHOD'] == 'PUT'){

     }
     else if($_SERVER['REQUEST_METHOD'] == 'DELETE'){

     }