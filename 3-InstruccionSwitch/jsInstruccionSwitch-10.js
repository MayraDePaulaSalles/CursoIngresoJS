/*
Una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar.
En Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja".
En Verano: Se viaja a Mar del plata y Cataratas solamente.
En Otoño: Se viaja a todos los destinos.
En primavera: solo no se viaja a Bariloche*/
function mostrar()
{
	//declaramos las variables
	let estacion;
	let destino;
	let mensaje;

	//ingresamos un valor por Id
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			if(destino == "Bariloche"){
				mensaje = "Se viaja"
			}else{
				mensaje = "No se viaja"
			}
			break;
		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas"){
				mensaje = "Se viaja"
			}else{
				mensaje = "No se viaja"
			}
			break;
		case "Otoño":
			mensaje = "Se viaja"
			break;
		case "Primavera":
			if(destino != "Bariloche"){
				mensaje = "Se viaja"
			}
			break;
	
	} alert(mensaje);
	
}//FIN DE LA FUNCIÓN