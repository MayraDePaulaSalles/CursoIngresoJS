/*
Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".

function mostrar()
{
	//"txtIdEdad"

	//declaramos nuestras variables
	let edad;

	//les asignamos un valor por Id
	edad = document.getElementById("txtIdEdad").value;
	 
	//parseamos
	edad = parseInt(edad);

	if(edad == 15);
	{
		alert("niña bonita");
	
	}
	
	//FIN DE LA FUNCIÓN
}*/

/*
Mayra De Paula Salles - Ejercicio 1.bis IF
con if pedir a una persona que fue de vacaciones , la distancia que viajo y 
el tiempo que tardo, para calcular la velocidad e informar:
60 km/hr = muy lento 
hasta 80km/h= lento 
hasta 100= buen ritmo
hasta 120= ahi de la ley 
mas = eso no se hace*/
function mostrar()
{
	//declaramos las variables
	let distanciaDeViaje;
	let tiempoDeViaje;
	let mensaje;

	distanciaDeViaje = document.getElementById("txtIdEdad").value;
	tiempoDeViaje = prompt("Cuantos km/hr recorrio?");
	
	//parseamos
	distanciaDeViaje = parseInt(distanciaDeViaje);
	tiempoDeViaje = parseInt(tiempoDeViaje);

	
   if(distanciaDeViaje && tiempoDeViaje == 60){
		mensaje= "Muy lento";
	}else{
		
		if(distanciaDeViaje && tiempoDeViaje == 80){
			mensaje= "Lento";
		}else{
			
			if(distanciaDeViaje && tiempoDeViaje == 100){
				mensaje= "Buen ritmo";
			}else{

				if(distanciaDeViaje && tiempoDeViaje == 120){
					mensaje= "Ahi de la ley";
				}else{
                     mensaje= "Eso no se hace";
					
				}
			}
		}
	}

	 alert(mensaje);


}

