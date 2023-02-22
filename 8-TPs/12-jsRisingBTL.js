/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//declaramos las variables
 	let respuesta;
	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;
	let mensaje;

	respuesta = 'si';

	while(respuesta == 'si')
	{
		//parseamos, ingresamos por prompt y condicionamos con IF
		edadIngresada = parseInt(prompt("Ingrese una edad entre 18 y 90 años"));//punto A
		if(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
		{
			edadIngresada = parseInt(prompt("Error, ingrese una edad entre 18 y 90 años"));
		}
		//ingresamos por prompt el sexo y condicionamos con IF
		sexoIngresado = prompt("Ingresar sexo 'M' para masculino y 'F' para femenino");//punto B
		if(sexoIngresado != 'M' || sexoIngresado != 'm' || sexoIngresado != 'F' || sexoIngresado != 'f')
		{
			sexoIngresado = prompt("Error, ingresar sexo 'M' para masculino y 'F' para femenino");
		}
		// parseamos, ingresamos por prompt y evaluamos por SWITCH
		estadoCivilIngresado = parseInt(prompt("Cual es el estado civil de la persona?"));//punto C
		switch(estadoCivilIngresado)
		{
			case 1:
				mensaje = "soltero"
				break;
			case 2:
				mensaje = "casado"
				break;
			case 3:
				mensaje = "divorciado"
				break;
			case 4:
				mensaje = "viudo"
				break; 
		}
		//parseamos, ingresamos por prompt y condicionamos por IF
		sueldoBruto = parseInt(prompt("Cuanto es el sueldo bruto de la persona?"));//punto D
		if(!(sueldoBruto > 7999))
		{
			sueldoBruto = parseInt(prompt("Error el sueldo bruto no debe ser menor a $8000"));
		}
									//punto E??????
		//ingresamos por prompt y evaluamos la nacionalidad por SWITCH
		nacionalidad = prompt("Cual es su nacionalidad?");//punto F
		switch(nacionalidad)
		{
			case "A":
				mensaje = "argentino"
				break;
			case "E":
				mensaje = "extrajero"
				break;
			case "N":
				mensaje = "nacionalizados"
				break;
		}

		respuesta = prompt("Desea continuar ingresando datos?: 'si'/'no'");

	}//FIN DEL WHILE
		



}
