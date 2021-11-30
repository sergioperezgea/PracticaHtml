<?php
require_once "conexion.php";

class crearUsuario2 extends Conexion
{
    public function __construct()
    {
        parent::__construct(); //llamamos al constructor de la clase padre
    }
    public function crearUsuario()
    {
        $nombre = $_POST['nombre'];
        $apellidos = $_POST['apellidos'];
        $clave = $_POST['clave'];
        $telefono = $_POST['telefono'];
        $correo = $_POST['correo'];
        $sexo = $_POST['sexo'];
        $fecha_nacimiento = $_POST['fecha_nacimiento'];
        $comentario = $_POST['comentario'];

        $sql = "INSERT INTO alumno(nombre, apellidos, password, telefono, email ,sexo, fecha_nacimiento, comentario
        )VALUES(:nombre, :apellidos, :clave, :telefono, :correo, :sexo, :fecha_nacimiento, :comentario)";
        $sentencia = $this->conexion_db->prepare($sql);

        $sentencia->execute(array(
            ":nombre" => $nombre, ":apellidos" => $apellidos, ":clave" => $clave, ":telefono" => $telefono,
            ":correo" => $correo, ":sexo" => $sexo, ":fecha_nacimiento" => $fecha_nacimiento, ":comentario" => $comentario
        ));

        $sentencia->closeCursor();
        $this->conexion_db = null;
    }
}
