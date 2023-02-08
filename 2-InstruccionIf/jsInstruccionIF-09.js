/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.*/
function mostrar()
{
	//declaramos variables
	let numRamdom;
	let mensaje;

	//Generamos un numero RAMDOM entre el 1 y 10}
	numRamdom = Math.floor(Math.random() * 10 + 1);

	//concatenamos el mensaje
	mensaje = "numeroRamdom:" + numRamdom;

    console.log(mensaje);


	

}//FIN DE LA FUNCIÓN