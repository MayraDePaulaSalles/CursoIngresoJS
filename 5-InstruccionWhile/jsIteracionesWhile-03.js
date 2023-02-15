/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	//declaro variable
	let claveIngresada;

	//pido el dato por prompt
	claveIngresada = prompt("Ingresar una clave");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error, ingresar clave correcta");
	}

      alert("La clave es correcta");








}//FIN DE LA FUNCIÓN
