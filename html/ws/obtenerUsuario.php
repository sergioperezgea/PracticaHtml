<?php
require "getUsuario.php";

$obtener = new getUsuario();

if ($id = $_GET) {
    $usuario = $obtener->obtenerUsuario($id);

    if ($obtener = $usuario) {
        $datos = json_decode($usuario->toJson());

        echo json_encode([
            'success' => true,
            'message' => "Usuario encontrado con exito",
            'data' => $datos
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => "Usuario no encontrado",
            'data' => "null"
        ]);
    }
} else {
    $usuarios = $obtener->obtenerTodosUsuarios("");
    $datosUsuarios = [];

    foreach ($usuarios as $usuario) {
        $datosUsuarios[] =  json_decode($usuario->toJson());
    }
    echo json_encode([
        'success' => true,
        'message' => "Usuarios encontrados con exito",
        'data' => $datosUsuarios
    ]);
}
