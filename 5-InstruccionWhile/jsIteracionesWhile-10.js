/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	//inicializamos las variables
	respuesta = "si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;

	// comenzamos la iteracion
	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado)) //validacion
		{
			numeroIngresado = parseInt(prompt("Error, Ingrese un numero"));
		}  
		if(numeroIngresado < 0)//punto 1 y 4
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;
		}else if(numeroIngresado > 0)//punto 2 y 3
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos = contadorPositivos + 1;
		}else       //punto 5
		{
			contadorCeros = contadorCeros + 1;
		}
		if(numeroIngresado % 2 == 0) //punto 6
		{
			contadorPares = contadorPares + 1;
		}
		
		respuesta=prompt("desea continuar?: si/no");
	}//fin del while

	//saco el promedio de los positivos  punto 7 y 8
	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;

	//hacemos la diferencia  punto 9
	diferencia = sumaPositivos - sumaNegativos;

	//mostramos por document.write
	document.write("la suma de los negativos es:" + sumaNegativos + "<br>");
	document.write("la suma de los positivos es:" + sumaPositivos + "<br>");
	document.write("la cantidad de positivos es:" + contadorPositivos + "<br>");
	document.write("la cantidad de negativos es:" + contadorNegativos + "<br>");
	document.write("la cantidad de ceros es:" + contadorCeros + "<br>");
	document.write("la cantidad de pares es:" + contadorPares + "<br>");
	document.write("el promedio de los positivos es:" + promedioPositivos + "<br>");
	document.write("el promedio de los negativos es:" + promedioNegativos + "<br>");
	document.write("la diferencia es:" + diferencia + "<br>");
	
	
}//FIN DE LA FUNCIÓN