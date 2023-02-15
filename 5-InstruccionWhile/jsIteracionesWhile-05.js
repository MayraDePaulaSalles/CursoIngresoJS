/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	//ingresamos la variables
	let sexoIngresado;

	//ingresamos por prompt
	sexoIngresado = prompt("Ingresar f o m");

	while(sexoIngresado != "f" && sexoIngresado != "F" && sexoIngresado != "m" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("Error: Se debe ingresar f o m");
	}
	if(sexoIngresado == "f" || sexoIngresado == "F")
	{
		sexoIngresado = "femenino";
	}else{
		if(sexoIngresado == "m" || sexoIngresado == "M")
		sexoIngresado = "masculino";
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;


}//FIN DE LA FUNCIÓN