/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
//Utilizaremos el FOR. LISTOOO
El tipo (validar "barbijo" , "jabón" o "alcohol") ,
//Validarlo de manera similar al sexo con WHILE. LISTOOO
El precio (validar entre 100 y 300),
//Validar un numero con WHILE y entre rangos, con parseFloat.LISTOOO
La cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
//Validar un numero con WHILE y entre rangos, con parseInt.LISTOOO
La Marca y el fabricante.LISTOOO
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
//Un IF y una Bandera LISTOOO
b) Del tipo con mas unidades, el promedio por compra
//Un IF y una Bandera. Contador de cada uno de los tipos y acumulador de cantidades de cada uno de los tipos(SWITCH)
c) Cuántas unidades de jabones hay en total
//Contador de cada uno de los tipos y acumulador de cantidades de cada uno de los tipos(SWITCH)
*/
function mostrar()
{
	//declaramos variables
	let tipoProducto;
	let precioProducto;
	let unidadesProducto;
	let marcaProducto;
	let fabricanteProducto;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let unidadesCantidadMasBaratoAlcohol;
	let fabricanteMasBaratoAlcohol;
	let precioMasBaratoAlcohol;
	let banderaAlcohol;
	let promedioCompra;
	let mayorTipo;

	banderaAlcohol = true;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;

	for(let i = 0;    i < 5;    i++)
	{
		tipoProducto = prompt("Ingresar el tipo de producto: barbijo, jabon o alcohol");
		while(tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("Error, ingresar el tipo de producto: barbijo, jabon o alcohol");
		}
		precioProducto = parseFloat(prompt("Ingresar el precio del producto unitario"));
		while(isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300)
		{
			precioProducto = parseFloat(prompt("Error, ingresar el precio del producto unitario"));
		}
		unidadesProducto = parseInt(prompt("Ingresar la cantidad de unidades del producto"));
		while(isNaN(unidadesProducto) || unidadesProducto  < 1 || unidadesProducto > 1000)
		{
			unidadesProducto = parseInt(prompt("Error, ingresar la cantidad de unidades del producto"));
		}
		
		marcaProducto = prompt("Ingresar una marca del producto:");
		fabricanteProducto = prompt("ingresar un fabricante del producto:");

		switch(tipoProducto)
		{
			case "alcohol":
				if(banderaAlcohol == true || precioProducto < precioMasBaratoAlcohol)
				{
					fabricanteMasBaratoAlcohol = fabricanteProducto;
					unidadesCantidadMasBaratoAlcohol = unidadesProducto;
					precioMasBaratoAlcohol = precioProducto;
					banderaAlcohol == false;
				}
				contadorAlcohol = contadorAlcohol + 1;
				acumuladorAlcohol = acumuladorAlcohol + unidadesProducto;
				break;
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				acumuladorBarbijo = acumuladorBarbijo + unidadesProducto;
				break;
			case "jabon":
				contadorJabon = contadorJabon + 1;
				acumuladorJabon = acumuladorJabon + unidadesProducto;
				break;
		}
				
	}//FIN DEL FOR

	//punto b para ver quien tiene mas unidades luego de haber cargado los 5 producto en el FOR
	if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)
	{
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
		mayorTipo = "el alcohol"
	}else if(acumuladorJabon > acumuladorBarbijo)
	{
		promedioCompra = acumuladorJabon / contadorJabon;
		mayorTipo = "el jabon"
	}else{
		promedioCompra = acumuladorBarbijo / contadorBarbijo;
		mayorTipo = "el barbijo"
	}
	
	console.log("La cantidad de unidades del mas barato de los alcohol es:" + unidadesCantidadMasBaratoAlcohol + "y su fabricante es:" + fabricanteMasBaratoAlcohol);
	console.log("El tipo con mas unidades es:" + mayorTipo);
	console.log("El promedio de compra del tipo con mas unidades es:" + promedioCompra);
	console.log("Las unidades totales de jabon:" + acumuladorJabon);


}













