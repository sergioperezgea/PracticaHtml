<?php
require "deleteUsuario.php";

$id = $_GET["id"];
$eliminar = new deleteUsuario();
$usuario = $eliminar-> eliminarUsuario($id);
$datos = json_decode($usuario->toJson());

echo json_encode([
    'success'=>true,
    'message'=>"Usuario eliminado con exito",
    'data'=> $datos
]);










