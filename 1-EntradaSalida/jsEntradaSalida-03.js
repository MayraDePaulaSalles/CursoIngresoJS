/*
     Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
function mostrar()
{
	//declaramos las variables;
	let nombreIngresado;
	let mensaje;

     //le asignamos un valor a la variable;
    //    HTML            traeme el elemento del ID;
    nombreIngresado = document.getElementById("txtIdNombre").value;
	nombreIngresado = document.getElementById("txtIdNombre").value;

	mensaje = "tu nombre es" + nombreIngresado;


	alert(mensaje); 
	                    
}*/


/*
Mayra De Paula Salles - Ejercicio 03.bis E/S
Ingresar descripcion (por prompt) y precio de un producto (por Id).
El programa debera mostrar por alert la descripcion del producto
junto al precio aumentado en un 30%.*/
function mostrar()
{ 
	//declaramos las variables
	let descripcion;
	let precioProducto;
	let aumento;
	let nuevoPrecio;

	
	//ingresamos por prompt
	descripcion = prompt("dame la descripcion de un producto");

	//ingresamos por Id
	precioProducto = document.getElementById("txtIdNombre").value;

	//parseamos
	precioProducto = parseFloat(precioProducto);

	//sacar porcentaje
	aumento = precioProducto * (30 / 100);
	
	nuevoPrecio = precioProducto + aumento;

	alert(descripcion + "cuesta" + nuevoPrecio);











}




                                

