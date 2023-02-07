/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".*/

function mostrar()
{
	//"txtIdEdad"

	//declaramos nuestras variables
	let edad;

	//les asignamos un valor por Id
	edad = document.getElementById("txtIdEdad").value;
	 
	//parseamos
	edad = parseInt(edad);

	if(edad == 15);
	{
		alert("niña bonita");
	
	}
	
	//FIN DE LA FUNCIÓN
}