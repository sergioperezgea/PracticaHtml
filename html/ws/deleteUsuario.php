<?php
require_once "conexion.php";
require "models\User.php";

class deleteUsuario extends Conexion
{
    public function __construct()
    {
        parent::__construct(); //llamamos al constructor de la clase padre
    }
    public function eliminarUsuario($datos)
    {
        $id = $_GET['id'];
        $sql = "select * from ALUMNO where id = ?";
        $sentencia = $this->conexion_db->prepare($sql);
        $sentencia->execute([$id]);

        while ($datos = $sentencia->fetch()) {
            $sql = "DELETE FROM ALUMNO WHERE id = ?";
            $sentencia = $this->conexion_db->prepare($sql);
            $sentencia->execute([$id]);

            $nombre = $datos[1];
            $apellidos = $datos[2];
            $clave = $datos[3];
            $telefono = $datos[4];
            $correo = $datos[5];
            $sexo = $datos[6];
            $fecha_nacimiento = $datos[7];
            $comentario = $datos[8];
            $usuario = new User($nombre, $apellidos, $clave, $telefono, $correo, $sexo, $fecha_nacimiento ,$comentario);

            return $usuario;
        }
    }
}
