<?php
require("interfaces\IToJson.php");

class User implements IToJson
{
    private $nombre;
    private $apellidos;
    private $password;
    private $telefono;
    private $email;
    private $sexo;

    public function __construct(
        string $nombre,
        string $apellidos,
        string $password,
        int $telefono,
        string $email,
        string $sexo
    ){
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
        $this->password = $password;
        $this->telefono = $telefono;
        $this->email = $email;
        $this->sexo = $sexo;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre)
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

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password)
    {
        $this->password = $password;
    }

    public function getTelefono(): int
    {
        return $this->telefono;
    }

    public function setTelefono(int $telefono)
    {
        $this->telefono = $telefono;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email)
    {
        $this->email = $email;
    }

    public function getSexo(): string
    {
        return $this->sexo;
    }

    public function setSexo(string $sexo)
    {
        $this->email = $sexo;
    }

    public function toJson(): string
    {
        return (json_encode(
            array(
                "nombre" => $this->getNombre(),
                "apellidos" => $this->getApellidos(),
                "password" => $this->getPassword(),
                "telefono" => $this->getTelefono(),
                "email" => $this->getEmail(),
                "sexo" => $this->getSexo()
            )
            ));
    }
}