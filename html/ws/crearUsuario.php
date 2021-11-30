<?php

use GrahamCampbell\ResultType\Success;

require_once "models\User.php";
require_once "crearUsuario2.php";


$colegio = new crearUsuario2();
$colegio->crearUsuario();



$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$clave = $_POST['clave'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$sexo = $_POST['sexo'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$comentario = $_POST['comentario'];

$usuario = new User($nombre, $apellidos, $clave, $telefono, $correo, $sexo, $fecha_nacimiento, $comentario);

$datos = json_decode($usuario->toJson());

header('Content-Type: application/json; charset=utf-8');
echo json_encode([
    'success' => true,
    'message' => "Usuario creado con exito",
    'data' => $datos
]);

$file = fopen("archivo.txt", "a ");
fwrite($file, $usuario->getNombre() . PHP_EOL);
fwrite($file, $usuario->getApellidos() . PHP_EOL);
fwrite($file, $usuario->getClave() . PHP_EOL);
fwrite($file, $usuario->getTelefono() . PHP_EOL);
fwrite($file, $usuario->getCorreo() . PHP_EOL);
fwrite($file, $usuario->getSexo() . PHP_EOL);
fwrite($file, $usuario->getFechaNacimiento() . PHP_EOL);
fwrite($file, $usuario->getComentario() . PHP_EOL);
fclose($file);
