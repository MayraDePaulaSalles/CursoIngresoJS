/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
function mostrar()
{
	//declaro  una variable
	let i; 
	
	//inicializo una variable
	i = 0;

	while(i < 10)
	{
		//modifico la variable
		i = i + 1;

		//mostrar el contador
		alert(i);
	 
	}



       alert('iteración while');
}//FIN DE LA FUNCIÓN*/

/*
While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven*/
function mostrar()
{
	//declaro las variables
    let bandera;
	let edadIngresada;
	let nombreIngresado;
	let respuesta;
	let edadMayor;
	let edadMenor;
	let nombreMayor;
	let nombreMenor;

	//inicializamos
	respuesta = "si";
	bandera = true;

	//ingresamos por prompt
    nombreIngresado = prompt("Cual es tu nombre?");
    //parseamos e ingresamos por prompt
	edadIngresada = parseInt(prompt("Cuantos años tenes?"));
	
	while(respuesta == "si")
	{
		nombreIngresado = prompt("Cual es tu nombre?");
		edadIngresada = parseInt(prompt("Cuantos años tiene?"));
		while(isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 110){
			edadIngresada = parseInt(prompt("Error al ingresar la edad?"));
		}
		if(bandera == true)
		{
			edadMayor = edadIngresada;
			edadMenor = edadIngresada;
			nombreMayor = nombreIngresado;
			nombreMenor = nombreIngresado;
			bandera = false;
		}
		else if(edadMayor < edadIngresada)
		{
			nombreMayor = nombreIngresado;
			edadMayor = edadIngresada;
		}
		else if(edadMenor > edadIngresada)	
		{
			nombreMenor = nombreIngresado;
			edadMenor = edadIngresada;
		}
		respuesta = prompt("desea ingresar otro numero?: si/no");

	}
	 alert("Entonces no ingrese otro numero");

	 document.write("La persona mas vieja es" + nombreMayor + "y la persona mas joven es" + nombreMenor);
		


}



