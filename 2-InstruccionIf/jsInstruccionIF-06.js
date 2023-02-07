/*
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/
function mostrar()
{
	//declaramos las variables
	let edad;
	let mensaje;

	//le asignamos un valor a la variable
	edad = document.getElementById("txtIdEdad").value;

	//parseamos
	edad = parseInt(edad);

	if(edad >= 18)
	{
		mensaje = "Es mayor de edad";
	}else{

		if(edad >= 13 && edad <=17)
		{
			mensaje = "Es adolescente";
		}else{
			mensaje = "Es menor de edad";
		}
	}

	alert(mensaje);
	



}//FIN DE LA FUNCIÓN