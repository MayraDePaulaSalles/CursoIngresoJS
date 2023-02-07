/*
Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/
function mostrar()
{
	//declaramos variables
	let edad;

	//le asignamos un valor a la variable
	edad = document.getElementById("txtIdEdad").value;

	//parseamos
	edad = parseInt(edad);

	if(edad > 13 || edad > 17)
	{
		alert("No es adolescente")
	}




}//FIN DE LA FUNCIÓN