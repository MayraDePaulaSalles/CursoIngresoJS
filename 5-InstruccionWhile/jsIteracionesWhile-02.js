/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
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
	 //modifico la variables
		i = i - 1;
	}

	
	alert('iteración while');

}//FIN DE LA FUNCIÓN