<?php
require "modificarUsuario.php";

$id = $_GET['id'];
$modificar = new modificarUsuario();
$usuario = $modificar->userModificado($id);
