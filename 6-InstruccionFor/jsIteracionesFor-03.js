/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/
function mostrar()
{
	//declaramos variables
	let repeticiones;

	repeticiones = parseInt(prompt("Ingrese un numero de repeticiones"));
	
	for(let i = 0;         i < repeticiones;        i++)
	{
		document.write("Hola UTN FRA" + "<br>");
		
	}
	//FIN DE LA ITERACION


	
	


}//FIN DE LA FUNCIÓN