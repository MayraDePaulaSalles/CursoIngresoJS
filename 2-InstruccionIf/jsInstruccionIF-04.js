/*
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive).*/
function mostrar()
{
	//declaramos nuestra variables 
	let edad;

	//le asignamos un valor por Id
	edad = document.getElementById("txtIdEdad").value;

	//parseamos
	edad = parseInt(edad);

	if(edad >= 13 && edad < 18)
	{
		alert("Es adolescente");
    }


	


}//FIN DE LA FUNCIÓN