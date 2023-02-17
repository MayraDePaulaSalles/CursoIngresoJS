/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
function mostrar()
{
	//declaro  una variable
	let i; 
	
	//inicializo una variable
	i = 10;

	while(i >= 1)
	{
		//mostrar el contador
		console.log(i);
	 //modifico la variable
		i = i - 1;
	}

	
	alert('iteración while');

}//FIN DE LA FUNCIÓN*/

/*
while 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores 
que 10 y menores 20 (inclusive en ambos casos)*/
function mostrar()
{
	//declaramos las variables
	let numeroIngresado;
	let i;
	let contadorMayor;
	let contadorMenor;
	let mensaje;

	//inicializo las variables
	i = 0;
	contadorMayor = 0;
	contadorMenor = 0;

	while(i < 5)
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un numero"));
		}
		if(numeroIngresado > 10)
		{
			contadorMayor = contadorMayor + 1;
		}
		else if(numeroIngresado < 20)
		{
			contadorMenor = contadorMenor + 1;
		}
		
		i = i + 1;
	}   
	mensaje = "Los numeros mayores que 10 son" + contadorMayor + "y los numeros menores que 20 son" + contadorMenor;
	alert(mensaje);















}