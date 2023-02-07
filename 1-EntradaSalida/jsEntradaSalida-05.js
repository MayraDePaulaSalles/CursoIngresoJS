/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
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
}*/


/* 
Mayra De Paula Salles - Ejercicio 05.bis E/S
 se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan.*/
function mostrar()
{
	//delcramos nuestras variables
	let nombreIngresado;
	let edadIngresada;
	let mensaje;

	//les asignamos un valor por Id
	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	//concatenamos
	mensaje = "De Paula Salles, usted se llama:" + nombreIngresado + " y tiene" + edadIngresada + "años";

	alert(mensaje);







}

