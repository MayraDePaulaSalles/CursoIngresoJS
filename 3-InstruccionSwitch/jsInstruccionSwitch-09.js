/*
Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia 
como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder 
calcular el precio final.
En Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento 
del 10% Mar del plata tiene un descuento del 20%.
En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento 
del 10% Mar del plata tiene un aumento del 20%.
En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento.*/
function mostrar()
{
	//declaro variables
	let destino;
	let estaciones;
	let aumento = 0;
	let descuento = 0;
	let precioFinal;
	const PRECIO = 15000;

	//ingresamos valor por Id
	destino = document.getElementById("txtIdDestino").value;
	estaciones = document.getElementById("txtIdEstacion").value;

	switch(estaciones)
	{
		case "Invierno":
			if(destino == "Bariloche"){
				aumento = 20;
			}else{

				if(destino == "Mar del plata"){
					descuento = 20;
				}else{
					descuento = 10;
				}
			}
	        break;
		case "Verano":
			if(destino == "Bariloche"){
				descuento = 20;
			}else{

				if(destino == "Mar del plata"){
					aumento = 20;
				}else{
					aumento = 10;
				}
			}
	        break;
	    case "Otoño":
		case "Primavera":
			if(destino != "Cordoba"){
				aumento = 10;
				break;
			}
	
	}  

	//calculamos los aumentos y descuentos
	if(aumento != 0){
		precioFinal = PRECIO + PRECIO * aumento / 100;
	}else{

		if(descuento != 0){
			precioFinal = PRECIO - PRECIO * descuento / 100;
		}else{
			precioFinal = PRECIO;
		}
	}
       
	alert("Precio final:" + "$" + precioFinal);
 

	
}//FIN DE LA FUNCIÓN