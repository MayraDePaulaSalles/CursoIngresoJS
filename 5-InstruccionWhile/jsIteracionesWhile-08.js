/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//declaro las variables
	let numeroIngresado;
	let sumaPositivos;
	let multiplicacionNegativos;
	let contador;
	let respuesta;

	//inicializo las variables
	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';

	while(respuesta == 'si')
	{
		numeroIngresado = parseInt(numeroIngresado)
		numeroIngresado = prompt("Ingrese un numero:")
		contador = contador + 1;
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(numeroIngresado);
		    numeroIngresado = prompt("Error, debe ingresar un numero");
		}
		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}else{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		
		respuesta = prompt("Desea ingresar otro numero?:")
	
	}
	 alert("Entonces no ingrese otro numero");

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;


}//FIN DE LA FUNCIÓN