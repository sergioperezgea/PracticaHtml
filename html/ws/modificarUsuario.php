<?php
require_once "conexion.php";
require "models\User.php";

class modificarUsuario extends Conexion
{
    public function __construct()
    {
        parent::__construct(); //llamamos al constructor de la clase padre
    }
    public function userModificado($datos)
    {
        $concatenacion = array();
        $parametros = array();
        $concatenacion[] = 'UPDATE ALUMNO SET id=:id';

        if (isset($_POST['nombre'])) {
            $concatenacion[] = ', nombre=:nombre';
            $parametros[':nombre'] = $_POST['nombre'];
        }

        if (isset($_POST['apellidos'])) {
            $concatenacion[] = ', apellidos=:apellidos';
            $parametros[':apellidos'] = $_POST['apellidos'];
        }

        if (isset($_POST['clave'])) {
            $concatenacion[] = ', password=:clave';
            $parametros[':clave'] = $_POST['clave'];
        }

        if (isset($_POST['telefono'])) {
            $concatenacion[] = ', telefono=:telefono';
            $parametros[':telefono'] = $_POST['telefono'];
        }

        if (isset($_POST['correo'])) {
            $concatenacion[] = ', email=:correo';
            $parametros[':correo'] = $_POST['correo'];
        }

        if (isset($_POST['sexo'])) {
            $concatenacion[] = ', sexo=:sexo';
            $parametros[':sexo'] = $_POST['sexo'];
        }

        if (isset($_POST['fecha_nacimiento'])) {
            $concatenacion[] = ', fecha_nacimiento=:fecha_nacimiento';
            $parametros[':fecha_nacimiento'] = $_POST['fecha_nacimiento'];
        }

        if (isset($_POST['comentario'])) {
            $concatenacion[] = ', comentario=:comentario';
            $parametros[':comentario'] = $_POST['comentario'];
        }

        $concatenacion[] = 'WHERE id=:id';
        $parametros[':id'] = $_GET['id'];
        $sql = implode(' ', $concatenacion);

        $sentencia = $this->conexion_db->prepare($sql);
        $sentencia->execute($parametros);
    }
}
