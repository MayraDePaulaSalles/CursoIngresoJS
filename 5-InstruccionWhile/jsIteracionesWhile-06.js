/*
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
function mostrar()
{
	//declaramos variables
	let numero;
	let contador;
	let acumulador;
	let promedio;
	let i;
    
	contador = 0;
	acumulador = 0;
    i = 0;

	//parseamos e ingresamos por prompt
	numero = parseInt(prompt("Ingresar un numero:"));
	
	while(i < 4)
	{
		numero = parseInt(prompt("Ingresar un numero:"));
		while(isNaN(numero)) //validacion
		{
			numero = prompt("Error, ingrese un numero");
			numero = parseInt(numero);
		}
		
		contador = contador + 1;
		acumulador = acumulador + numero;

		i = i + 1;
	}
	
	//sacamos el promedio
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	
}//FIN DE LA FUNCIÓN*/

/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/
function mostrar()
{
	//declaro variables
	let numeroIngresado;
	let contador = 0;
	let acumulador = 0;
	let promedio;

	for(let i = 0;              i < 5;            i++)
	{
		numeroIngresado = parseInt(prompt("Ingresar un numero:"));
		while(isNaN(numeroIngresado)) //validacion
		{
			numeroIngresado = prompt("Error, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;

	}

	//sacamos el promedio
	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	






}
