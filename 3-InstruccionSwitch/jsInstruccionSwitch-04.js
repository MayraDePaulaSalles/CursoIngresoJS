/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	//declaramos variables
	let mes;
	let mensaje;

	//ingreso por Id
	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			mensaje = "tiene 28 días."
			break;
		case "Abril":
		case "Junio":
		case "Septimbre":
		case "Noviembre":
			mensaje = "tiene 30 días."
			break;
		default:
			mensaje = "tiene 31 días."

	} alert(mensaje);
	
	

}//FIN DE LA FUNCIÓN