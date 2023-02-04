/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaramos nuestras variables
	let sueldoIngresado;
	let porcentajeAplicado;
	let porcentaje;
	let resultado;

	porcentaje = 10;
	
	//tomo el dato ingresado por ID
	sueldoIngresado = document.getElementById("txtIdSueldo").value;

	//parseamos
	sueldoIngresado = parseInt(sueldoIngresado);

	//sacar el porcentaje
	porcentajeAplicado = porcentaje * sueldoIngresado / 100;

	//sumo
	resultado = sueldoIngresado + porcentajeAplicado;

	document.getElementById("txtIdResultado").value = resultado;




	alert(mensaje);
}
