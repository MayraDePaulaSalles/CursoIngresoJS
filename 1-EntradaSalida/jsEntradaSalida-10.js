/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
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
}*/

/*
Mayra De Paula Salles - Ejercicio 10.bis E/S
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"*/
function mostrar()
{
	//declaramos las variables
	let importe;
	let descuentoIngresado;
	let descuento;
	let resultado;

    //tomamos las variable por Id
	//ingreso 100
	importe = document.getElementById("txtIdImporte").value;

	//parseamos
	importe = parseFloat(importe);

	//pedir por prompt
	//25 descuento
	descuentoIngresado = prompt("Ingresar un porcentaje de descuento");

	//tambien hay que parsearlo
	descuentoIngresado = parseFloat(descuentoIngresado);
//               100     *     25
	descuento = importe * descuentoIngresado / 100;
	
	//sacar porcentaje
	//            100    -    25
	 resultado = importe - descuento;

	
	 document.getElementById("txtIdResultado").value = "El resultado es: $ " + resultado;

	

}
