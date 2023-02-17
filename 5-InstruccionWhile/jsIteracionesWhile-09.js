/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
function mostrar()
{	
	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;

	//iniciar variable
	banderaDelPrimero = true;
	respuesta = "si";

	while(respuesta == "si") //principal
	{
		numeroIngresado = parseInt(prompt("Ingresar un numero:"));
		while(isNaN(numeroIngresado)) //validacion
		{
			numeroIngresado = prompt("Error, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if(banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		else if(numeroMaximo < numeroIngresado) //numeroIngresado > numeroMaximo
		{
			numeroMaximo = numeroIngresado;
		}
		else if(numeroMinimo > numeroIngresado) // numeroIngresado < numeroMinimo
		{
			numeroMinimo = numeroIngresado;
		}

		respuesta = prompt("Desea ingresar otro numero?: si/no");
	}   
	  alert("Entoces no ingrese otro numero");

	  document.getElementById("txtIdMaximo").value = numeroMaximo;
	  document.getElementById("txtIdMinimo").value = numeroMinimo;
	    
	//FIN DE WHILE PRINCIPAL
	

	

}//FIN DE LA FUNCIÓN*/

/*
While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay)*/
function mostrar()
{
	//declaramos variables
	let numeroIngresado;
	let numeroMax;
	let numeroMin;
	let minimoPar;
	let maximoNegativo;
	let respuesta;
	let bandera;
	let banderaNegativos;
	let banderaPares;

	//inicializamos variables
	bandera = true;
	banderaNegativos = true;
	banderaPares = true;
	respuesta = 'si';

	while(respuesta == 'si')
	{
		numeroIngresado = parseInt(prompt("Ingresar un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingresar un numero"));
		}
		if(bandera == true)//maximos y minimos
		{
			numeroMax = numeroIngresado;
			numeroMin = numeroIngresado;
			bandera = false;
		}
		else if(numeroMax < numeroIngresado)
		{
			numeroMax = numeroIngresado;
		}
		else if(numeroMin > numeroIngresado)
		{
			numeroMin = numeroIngresado;
		}
		if(numeroIngresado < 0)//mayor negativos
		{
			if(banderaNegativos == true || maximoNegativo < numeroIngresado)
			{
				maximoNegativo = numeroIngresado;
			    banderaNegativos = false;
			}	
		}
		if(numeroIngresado % 2 == 0)//menor pares
		{
			if(banderaPares == true || minimoPar > numeroIngresado)
			{
				minimoPar = numeroIngresado;
				banderaPares = false;
			}
		}
		respuesta = prompt("Desea ingresar otro numero: 'si'/'no'");
		
	}
	alert("Entonces no ingrese otro numero");

	document.write("El numero maximo es:" + numeroMax + "<br>");
	document.write("El numero minimo es:" + numeroMin + "<br>");
	document.write("El numero menor de los pares es:" + minimoPar + "<br>");
	document.write("El numero mayor de los negativos es:" + maximoNegativo + "<br>");












}