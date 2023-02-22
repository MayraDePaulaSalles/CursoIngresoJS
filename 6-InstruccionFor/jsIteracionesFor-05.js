/*
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
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





}//FIN DE LA FUNCIÓN*/

/*
For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4)*/
function mostrar()
{
	//declaramos variables
	let alumnos = 7;
	let notaIngresada;
	let sexoIngresado;
	let contadorVaronesPromocionados = 0;
	let contadorDesaprobados = 0;
	let promedioNotas;
	let acumuladorNotas = 0;
	let banderaNotaMasBaja = true;
	let sexoNotaMasBaja;
	let notaMasBaja;


	//iteramos por For
	for(let i = 0;     i < alumnos;     i++)
	{
		notaIngresada = parseInt(prompt("Ingresar nota entre 0 y 10"));
		if(isNaN(notaIngresada) || notaIngresada < 0 || notaIngresada > 10)
		{
			notaIngresada = parseInt(prompt("Error, ingresar nota entre 0 y 10"));
		}
		sexoIngresado = prompt("Ingresar sexo 'f' o 'm' o 'b' ");
		if(sexoIngresado != 'f' && sexoIngresado != 'm' && sexoIngresado != 'b')
		{
			sexoIngresado = prompt("Error, ingresar sexo 'f' o 'm' o 'b' ");
		}
		acumuladorNotas = acumuladorNotas + notaIngresada;
		
		//La nota más baja y el sexo de esa persona.
		if(banderaNotaMasBaja == true)
		{
			notaMasBaja = notaIngresada;
			sexoNotaMasBaja = sexoIngresado;
			banderaNotaMasBaja = false;
		}
		else if(notaMasBaja > notaIngresada)
		{
			notaMasBaja = notaIngresada;
			sexoNotaMasBaja = sexoIngresado;
		}

		//La cantidad de varones que su nota haya sido mayor o igual a 6.
		if(notaIngresada > 5 && sexoIngresado == 'm')
		{
			contadorVaronesPromocionados++;
		}

		//La cantidad de alumnos desaprobados (nota < 4)
		if(notaIngresada < 4)
		{
			contadorDesaprobados++;
		}

	}
	//El promedio de las notas totales.
	promedioNotas = acumuladorNotas / alumnos;

 	console.log("El promedio de las notas totales es: " + promedioNotas);
	console.log("La nota mas baja es: " + notaMasBaja + "y el sexo de esa persona es: " + sexoNotaMasBaja);
	console.log("La cantidad de varones que promocionaron es: " + contadorVaronesPromocionados);
	console.log("La cantidad de desaprobados es: " + contadorDesaprobados);
	


}