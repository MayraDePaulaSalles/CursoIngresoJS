/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaramos las variables;
	let nombreIngresado;
	let mensaje;

     //le asignamos un valor a la variable;
    //    HTML            traeme el elemento del ID;
    //nombreIngresado = document.getElementById("txtIdNombre").value;
	nombreIngresado = document.getElementById("txtIdNombre").value;

	mensaje = "tu nombre es" + nombreIngresado;


	
	alert(mensaje);

}


