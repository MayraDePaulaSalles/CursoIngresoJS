/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaramos nuestras variables
	let numDividendo;
	let numDivisor;
	let mensaje;

	//les asignamos un valor
	numDividendo = document.getElementById("txtIdNumeroDividendo").value;
	numDivisor = document.getElementById("txtIdNumeroDivisor").value;

	//los parseamos
	numDividendo = parseInt(numDividendo);
	numDivisor = parseInt(numDivisor);

	//sacamos el resto
	mensaje = "El resto es:" + (numDividendo % numDivisor);
	
	
	
	alert(mensaje);
}
