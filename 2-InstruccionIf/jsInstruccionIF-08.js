/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 
'Es soltero y no es menor.'*/
function mostrar()
{
	//declaramos las variables
	let edad;
	let estadoCivil;
	let mensaje;

	//le asignamos un valor por Id
	edad = document.getElementById("txtIdEdad").value;
    //parseamos
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edad >= 18 && estadoCivil == "Soltero")
	{
		mensaje = "Es soltero y no es menor";

		alert(mensaje);
	}
	


}//FIN DE LA FUNCIÓN