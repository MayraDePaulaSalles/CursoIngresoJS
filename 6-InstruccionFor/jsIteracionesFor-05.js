/*
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/
function mostrar()
{
	//declaramos variable
	let numero;

	for(   ;   ;   )//declaro a for como un bucle infinito
	{
		numero = parseInt(prompt("Ingrese un numero:"));
		if(numero == 9)
		{
			break;
		}

		alert("Usted ingreso el numero " + numero);
	}
	//FIN DE LA ITERACIÓN





}//FIN DE LA FUNCIÓN