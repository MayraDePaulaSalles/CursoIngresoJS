/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
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
}*/

/*
Mayra De Paula Salles - Ejercicio 08.bis E/S
Ingresar dos numeros por id
Se pide:
mostrar por alert:
a) La suma de los dos numeros
b) El promedio de los numeros
c) El resto de los numeros (el primero en modulo del segundo)*/
function SacarResto()
{

	
	//declaramos nuestras variables
	let numeroUno;
	let numeroDos;
	let suma;
	let promedio;
	let modulo;
	let mensajeUno;
	let mensajeDos;
	let mensajeTres;

	//ingresamos por Id
	numeroUno = document.getElementById("txtIdDividendo").value;
	numeroDos = document.getElementById("txtIdDivisor").value;

	//parseamos
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//a) La suma de los dos numeros
	suma = numeroUno + numeroDos

	mensajeUno = ("la suma de los dos numeros es:" + suma);

	

	//b) El promedio de los numeros
	promedio = suma / 2;

	mensajeDos = ("El promedio de los numeros es:" + promedio);

	


	//c) El resto de los numeros (el primero en modulo del segundo)
	modulo = numUno % numeroDos;

	mensajeTres = "El resto de los numeros es:" + modulo;

	alert(mensajeUno + mensajeDos + mensajeTres);





}

