/*
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/
function mostrar()
{
	//declaramos variables
	let numeroIngresado;
	let contadorDivisores = 0;

    numeroIngresado = parseInt(prompt("Ingrese un numero"));

    for(let i = 1;         i <= numeroIngresado;        i++)
    {
        if(numeroIngresado % i == 0)//si el valor que tengo en la variable i divide al numeroIngresado y me da de resto 0
        {
             contadorDivisores++;
            
        }
    }
    
	if(contadorDivisores == 2)
	{
		alert(numeroIngresado + " es primo");
	}
	else{
		alert(numeroIngresado + " no es primo");
	}

	




	

}//FIN DE LA FUNCIÓN