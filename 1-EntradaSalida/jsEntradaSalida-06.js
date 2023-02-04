/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaramos las variables
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje; 

	//les asignamos un valor a nuestras variables por "ID"
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	//parseamos las dos variables
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);

	//concatenamos y hacemos la suma para luego mostrar el rsultado por medio de un mensaje
	mensaje = "La suma es:" + (numUno + numDos);


	alert(mensaje);



	
	
	
	
	
	
	
	
	
	
	
}

