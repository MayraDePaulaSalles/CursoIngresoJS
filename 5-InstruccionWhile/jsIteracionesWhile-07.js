/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	//declaramos variables
	let numeroIngresado;
	let acumulador;
	let contador;
	let promedio;
	let respuesta;

	//inicializamos variables
	acumulador = 0;
	contador = 0;
	respuesta = 'si';

	//parseamos e ingresamos por prompt
	numeroIngresado = parseInt(prompt("Ingresa un numero:"));

	while(respuesta == 'si')
	{
		numeroIngresado = parseInt(numeroIngresado)
		numeroIngresado = prompt("Ingrese un numero:")
		
		if(numeroIngresado < 0 && isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error al ingresar numero");
		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado

		respuesta = prompt("Desea ingresar otro numero?:")
	}
	alert("Entonces no ingrese otro numero");

	//sacamos el promedio
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;



	
	
	
	
	
	
	
	
	
	
	
}//FIN DE LA FUNCIÓN