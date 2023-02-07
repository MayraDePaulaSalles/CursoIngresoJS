/*
Al ingresar una edad debemos informar solo si la persona es mayor de edad*/
function mostrar()
{
	//declaramos nuestras variables
	let edad;

	//le asignamos un valor por Id
	edad = document.getElementById("txtIdEdad").value;

	//parseamos
	edad = parseInt(edad);

	if(edad >=  18)
	{
		alert("Sos mayor de edad");
	}
	

	
	
}	//FIN DE LA FUNCIÓN