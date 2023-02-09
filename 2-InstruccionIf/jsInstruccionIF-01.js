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
mas = eso no se hace
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


}*/

/*
Mayra De Paula Salles - Ejercicio 1.bis bis IF
con if ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso <18.5
Peso normal 18,5-24.9
Preobesidad 25-26.9
Obesidad I 27-29.9
Obesidad II 30-34.9
Obesidad III >40.*/
function mostrar()
{
	//DECLARAMOS VARIABLES
	let nombre;
	let IMC;
	let peso;
	let altura;
	let mensaje;

	//ASIGNAMOS VALOR POR ID
	nombre = document.getElementById("txtIdEdad")

	//INGRESAMOS POR PROMPT
	peso = prompt("Cuanto pesas?");
	altura = prompt("Cuanto medis?");
	
	//PARSEAMOS
	peso = parseInt(peso);
	altura = parseFloat(altura);

	//SACAMOS EL IMC
	IMC = peso / (altura * altura);

	if(IMC < 18.5){
		mensaje = IMC + "Bajo peso";
	}else{
		
		if(IMC > 18.5 && IMC <= 24.9){
			mensaje = IMC + "Peso normal";
		}else{

			if(IMC > 24.9 && IMC <= 26.9){
				mensaje = IMC + "Preobesidad";
			}else{

				if(IMC > 26.9 && IMC <= 29.9){
					mensaje = IMC + "Obesidad I";
				}else{

					if(IMC > 29 && IMC <= 34.9){
						mensaje = IMC + "Obesidad II";
					}else{

						if(IMC > 35){
							mensaje = IMC + "Obesidad III";
						}
					}
				}
			}
			
		}
		
	}
    
	alert(mensaje);








}

