<?php
require("models\User.php");

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$clave = $_POST['clave'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$sexo = $_POST['sexo'];
$comentario = $_POST['comentario'];

$usuario = new User($nombre, $apellidos, $clave, $telefono, $correo, $sexo, $comentario);

$datos = $usuario->toJson();
echo $datos;

$file = fopen("archivo.txt", "a ");
fwrite($file, $usuario->getNombre() . PHP_EOL);
fwrite($file, $usuario->getApellidos() . PHP_EOL);
fwrite($file, $usuario->getClave() . PHP_EOL);
fwrite($file, $usuario->getTelefono() . PHP_EOL);
fwrite($file, $usuario->getCorreo() . PHP_EOL);
fwrite($file, $usuario->getSexo() . PHP_EOL);
fwrite($file, $usuario->getComentario() . PHP_EOL);
fclose($file);
?>