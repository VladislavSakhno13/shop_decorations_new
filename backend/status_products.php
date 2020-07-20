<?php
$inputJSON = file_get_contents('php://input');
     $input = json_decode($inputJSON, TRUE);
     require_once 'connection.php';
     $conect = new mysqli($host,$user,$password,$database);
     if($_SERVER['REQUEST_METHOD'] == 'GET'){
        $data = array();
        $sql = $conect->query("SELECT `customer_id`,`name`,`status`,`cost` FROM basket b 
        INNER JOIN orders o INNER JOIN products p INNER JOIN metal_products m INNER JOIN type_products t INNER JOIN rocks_products r INNER JOIN order_status os ON b.orders_id = o.id AND o.product_id = p.id_product AND p.metal_product = m.id AND p.type_product = t.id AND p.rock_product = r.id AND b.status_id = os.id");
        while ($d = $sql->fetch_assoc()) {
            $data[] = $d;   
        }
    
    exit(json_encode($data));
}