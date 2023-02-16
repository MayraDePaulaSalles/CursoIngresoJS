/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variable
	banderaDelPrimero = true;
	respuesta = "si";

	while(respuesta == "si") //principal
	{
		numeroIngresado = parseInt(prompt("Ingresar un numero:"));
		while(isNaN(numeroIngresado)) //validacion
		{
			numeroIngresado = prompt("Error, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		else if(numeroMaximo < numeroIngresado) //numeroIngresado > numeroMaximo
		{
			numeroMaximo = numeroIngresado;
		}
		else if(numeroMinimo > numeroIngresado) // numeroIngresado < numeroMinimo
		{
			numeroMinimo = numeroIngresado;
		}

		respuesta = prompt("Desea ingresar otro numero?: si/no");
	}   
	  alert("Entoces no ingrese otro numero");

	  document.getElementById("txtIdMaximo").value = numeroMaximo;
	  document.getElementById("txtIdMinimo").value = numeroMinimo;
	    
	//FIN DE WHILE PRINCIPAL
	

	

}//FIN DE LA FUNCIÓN