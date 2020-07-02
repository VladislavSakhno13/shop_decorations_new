<?php
session_start();
if(isset($_SESSION['username'])){
    unset($_SESSION['username']);
    session_destroy();
    echo 4;
}
else{
    echo 1;
}
?>