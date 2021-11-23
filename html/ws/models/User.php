<?php
require("interfaces\IToJson.php");
class User implements IToJson
{
    private $nombre;
    private $apellidos;
    private $clave;
    private $telefono;
    private $email;
    private $sexo;
    private $comentario;

    public function __construct(
        string $nombre,
        string $apellidos,
        string $clave,
        int $telefono,
        string $email,
        string $sexo,
        string $comentario
    ) {
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->clave = $clave;
        $this->telefono = $telefono;
        $this->email = $email;
        $this->sexo = $sexo;
        $this->comentario = $comentario;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(String $nombre)
    {
        $this->nombre = $nombre;
    }

    public function getApellidos(): string
    {
        return $this->apellidos;
    }

    public function setApellidos(String $apellidos)
    {
        $this->apellidos = $apellidos;
    }

    public function getClave(): string
    {
        return $this->clave;
    }

    public function setClave(String $clave)
    {
        $this->clave = $clave;
    }

    public function getTelefono(): int
    {
        return $this->telefono;
    }

    public function setTelefono(int $telefono)
    {
        $this->telefono = $telefono;
    }

    public function getCorreo(): string
    {
        return $this->email;
    }

    public function setCorreo(string $email)
    {
        $this->email = $email;
    }

    public function getSexo(): string
    {
        return $this->sexo;
    }

    public function setSexo(string $sexo)
    {
        $this->sexo = $sexo;
    }

    public function getComentario(): string
    {
        return $this->comentario;
    }

    public function setComentario(string $comentario)
    {
        $this->comentario = $comentario;
    }

    public function toJson(): string
    {
        return (json_encode(
            array(
                "nombre" => $this->getNombre(),
                "apellidos" => $this->getApellidos(),
                "clave" => $this->getClave(),
                "telefono" => $this->getTelefono(),
                "correo" => $this->getCorreo(),
                "sexo" => $this->getSexo(),
                "comentario" => $this->getComentario()
            )
        ));
    }
}
