/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	//declaro variable
	let numero;

	//parseamos
	numero = parseInt(numero);
	//ingresamos por prompt
	numero = prompt("Ingresar un numero entre 0 y 9");

	while(isNaN(numero) || numero < 0 || numero > 9)
	{
		//parseamos
		numero = parseInt(numero);
		//ingresamos por prompt
		numero = prompt("Error: Debe ingresar un numero entre 0 y 9");
	}

	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN