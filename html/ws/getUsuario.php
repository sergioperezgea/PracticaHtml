<?php
require "models\User.php";
require_once "conexion.php";

class getUsuario extends Conexion
{

    public function __construct()
    {

        parent::__construct(); //llamamos al constructor de la clase padre

    }

    public function obtenerUsuario($datos)
    {
        $id = $_GET['id'];

        $sql = "select * from ALUMNO where id = ?";

        $sentencia = $this->conexion_db->prepare($sql);

        $sentencia->execute([$id]);

        while ($datos = $sentencia->fetch()) {
            $nombre = $datos[1];
            $apellidos = $datos[2];
            $clave = $datos[3];
            $telefono =  $datos[4];
            $correo = $datos[5];
            $sexo = $datos[6];
            $fecha_nacimiento = $datos[7];
            $comentario = $datos[8];
            $usuario = new User($nombre, $apellidos, $clave, $telefono, $correo, $sexo, $fecha_nacimiento ,$comentario);
            return $usuario;
        }
    }

    public function obtenerUsuario1($datos1)
    {
        $sql = "select * from ALUMNO";
        $sentencia = $this->conexion_db->prepare($sql);
        $sentencia->execute();
        $usuarios = [];

        while ($datos1 = $sentencia->fetch()) {
            $nombre = $datos1[1];
            $apellidos = $datos1[2];
            $clave = $datos1[3];
            $telefono =  $datos1[4];
            $correo = $datos1[5];
            $sexo = $datos1[6];
            $fecha_nacimiento = $datos1[7];
            $comentario = $datos1[8];
            $usuarios[] = new User($nombre, $apellidos, $clave, $telefono, $correo, $sexo, $fecha_nacimiento ,$comentario);
            
        }
        return $usuarios;
    }
}
