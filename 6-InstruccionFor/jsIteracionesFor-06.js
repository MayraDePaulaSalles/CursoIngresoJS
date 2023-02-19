/*
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al 
número ingresado, y mostrar la cantidad de numeros pares encontrados.*/
function mostrar()
{
	//declaramos variable
	let numeroIngresado;
	let contadorPares = 0;

	//pido un numero por prompt
	numeroIngresado = parseInt(prompt("Ingrese un numero:"));
	
	//tengo que hacer que una variable tome los valores desde el 1 hasta en numero ingresado
	for(let i = 1;    i <= numeroIngresado;      i++)
	{
		if(i % 2 == 0)    //para cada uno de los valores que toma la variable analizo si es par
		{
			contadorPares++;   //si es par lo cuento y lo muestro
			console.log(i);
		}	
	}
	console.log("Los pares encontrados son:" + contadorPares);// una vez analizados los valores muestro la cantidad de pares


}//FIN DE LA FUNCIÓN