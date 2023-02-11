/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{ 
	//declaramos variables
	let destino;
	let mensaje;
	
	//ingresamos valor por Id
	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			mensaje = "hace FRIO"
			break;
		case "Cataratas":
			mensaje = "hace CALOR"
			break;
		case "Mar del plata":
			mensaje = "hace CALOR"
			break;
		case "Ushuaia":
			mensaje = "hace FRIO"
			break;

	} alert(mensaje);
	
}//FIN DE LA FUNCIÓN