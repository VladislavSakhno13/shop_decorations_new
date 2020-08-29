<?php
$inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     require_once 'connection.php';
     $conect = new mysqli($host,$user,$password,$database);
     if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $img = addslashes(file_get_contents($_FILES['img_carusel']['tmp_name']));
        $conect->query("INSERT INTO shares (`img_shares`,`description`) VALUES('$img','$_POST[discription]')");
        
         $sql = $conect->query("SELECT * FROM `basket` ORDER BY `id` DESC LIMIT 1");
         $data = $sql->fetch_assoc();
         exit(json_encode($data));

     }