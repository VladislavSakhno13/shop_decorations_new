<?php
$inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     require_once 'connection.php';
     $conect = new mysqli($host,$user,$password,$database);
     if($_SERVER['REQUEST_METHOD'] == 'GET'){
         /*SELECT name,customer_id,status,cost FROM basket b INNER JOIN customers c INNER JOIN products p INNER JOIN order_status os ON b.customer_id = c.id*/
        $data = array();
        $sql = $conect->query("SELECT name,customer_id,status,cost FROM basket b INNER JOIN customers c INNER JOIN products p INNER JOIN order_status os ON b.customer_id = c.id AND b.orders_id = p.id_product WHERE customer_id = $_GET[customer_id]  AND status = 'Ожидание оплаты'");
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;   
        }
    
    exit(json_encode($data));
}
     if($_SERVER['REQUEST_METHOD'] == 'POST'){

        $conect->query("INSERT INTO basket (`orders_id`,`status_id`,`customer_id`) VALUES('$input[product_id]',1,'$input[person_id]')");
        
         $sql = $conect->query("SELECT * FROM `basket` ORDER BY `id` DESC LIMIT 1");
         $data = $sql->fetch_assoc();
         exit(json_encode($data));

     }
     if($_SERVER['REQUEST_METHOD'] == 'PUT'){
        $conect->query("UPDATE basket b INNER JOIN orders o ON b.orders_id = o.id SET status_id = 2 WHERE customer_id = $_GET[id] AND status_id = 1");
        exit(json_encode( $_GET['id']));
     }