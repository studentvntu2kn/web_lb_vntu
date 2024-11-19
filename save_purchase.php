<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $product_id = $_POST['product_id'];
    $product_name = $_POST['product_name'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $timestamp = date("Y-m-d H:i:s");

    $data = [
        "ID Продукта" => $product_id,
        "Продукт" => $product_name,
        "Ім'я" => $name,
        "Email" => $email,
        "Адреса" => $address,
        "Час заповнення" => $timestamp
    ];

    $jsonData = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    $filename = "purchases/" . date("Y-m-d_H:m") . "_purchase.json";

    file_put_contents($filename, $jsonData);
}
?>
