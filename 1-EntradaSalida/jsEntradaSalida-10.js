/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaramos nuestras variables
	let sueldoIngresado;
	let porcentajeAplicado;
	let porcentaje;
	let resultado;

	porcentaje = 25;
	
	//tomo el dato ingresado por ID
	sueldoIngresado = document.getElementById("txtIdImporte").value;

	//parseamos
	sueldoIngresado = parseInt(sueldoIngresado);

	//saco porcentaje
	porcentajeAplicado = porcentaje * sueldoIngresado / 100;

	//resto
	resultado = sueldoIngresado - porcentajeAplicado;

	document.getElementById("txtIdResultado").value = resultado;




	alert(mensaje);
}
