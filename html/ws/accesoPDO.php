<?php
require "conexion.php";

class accesoPDO extends Conexion{
	
	public function __construct(){
		
		parent::__construct(); //llamamos al constructor de la clase padre
		
		
		} 
	public function get_productos($datos){
		

		$sql="select * from ALUMNO where nombre=:datos";

		$sentencia=$this->conexion_db->prepare($sql);

		$sentencia->execute(array(':datos'=> 'Maria'));

		while ( $datos = $sentencia->fetch())
			echo $datos[0] . '  ' .$datos[1] . '<br />';
			
			
			



	
	
		
		
		}
		
		}
	
	

?>