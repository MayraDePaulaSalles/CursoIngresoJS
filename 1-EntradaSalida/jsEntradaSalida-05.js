/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaramos las variables
	let nombreIngresado;
	let edadIngresada;
	let mensaje;

	//les asignamos un valor
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	//concatenamos
	mensaje = "Tu nombre es" + nombreIngresado + " y tenes" + edadIngresada;
	
	
	
	alert(mensaje);
}

