/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaramos nuestras variables
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje; 

	//les asignamos un valor 
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	//parseamos
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);

	//concatenamos y hacemos la suma
	mensaje = "la suma es:" + (numUno + numDos);


    
	alert(mensaje);	
}

function restar()
{
	//declaramos nuestras variables
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje; 

	//les asignamos un valor 
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	//parseamos
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);

	//concatenamos y hacemos la resta
	mensaje = "la resta es:" + (numUno - numDos);


    
	alert(mensaje);	
}
	

function multiplicar()
{ 
	//declaramos nuestras variables
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje; 

	//les asignamos un valor 
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	//parseamos
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);

	//concatenamos y hacemos la multiplicacion
	mensaje = "la multiplicacion es:" + (numUno * numDos);


    
	alert(mensaje);	


}

function dividir()
{
	//declaramos nuestras variables
	let numUnoTexto;
	let numDosTexto;
	let numUno;
	let numDos;
	let mensaje; 

	//les asignamos un valor 
	numUnoTexto = document.getElementById("txtIdNumeroUno").value;
	numDosTexto = document.getElementById("txtIdNumeroDos").value;

	//parseamos
	numUno = parseInt(numUnoTexto);
	numDos = parseInt(numDosTexto);

	//concatenamos y hacemos la division
	mensaje = "la division es:" + (numUno / numDos);


    
	alert(mensaje);	







}

