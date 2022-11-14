<?php
require_once "models\User.php";

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$password = $_POST['password'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$sexo = $_POST['sexo'];

$usuario = new User($nombre, $apellidos, $password, $telefono, $email, $sexo);

header('Content-Type: application/json; charset=utf-8');

$datos = json_decode($usuario->toJson());

echo json_encode($datos);

$file = fopen("usuarios.txt", "a ");
    fwrite($file, $usuario->getNombre() .PHP_EOL);
    fwrite($file, $usuario->getApellidos() .PHP_EOL);
    fwrite($file, $usuario->getPassword() .PHP_EOL);
    fwrite($file, $usuario->getTelefono() .PHP_EOL);
    fwrite($file, $usuario->getEmail() .PHP_EOL);
    fwrite($file, $usuario->getSexo() .PHP_EOL);
fclose($file);