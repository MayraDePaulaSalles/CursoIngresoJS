/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //A.	Ingresar tres precios de productos y mostrar la suma de los mismos.

    //declaramos nuestras variables
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
   

    //ingresamos los precios por Id para asignarle un valor
    precioUno = document.getElementById("txtIdPrecioUno").value;//"10"
    precioDos = document.getElementById("txtIdPrecioDos").value;//"100"
    precioTres = document.getElementById("txtIdPrecioTres").value;//"20"

    //parseo de texto a numero
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //sumaPrecios = precioUno + precioDos + precioTres
    sumaPrecios = precioUno + precioDos + precioTres;


    alert("La suma total de precios es:" + sumaPrecios);



}
function Promedio () 
{
    //B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.

    //declaramos nuestras variables
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    let promedio;
   

    //ingresamos los precios por Id para asignarle un valor
    precioUno = document.getElementById("txtIdPrecioUno").value;//"10"
    precioDos = document.getElementById("txtIdPrecioDos").value;//"100"
    precioTres = document.getElementById("txtIdPrecioTres").value;//"20"

    //parseo de texto a numero
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //sumaPrecios = precioUno + precioDos + precioTres
    sumaPrecios = precioUno + precioDos + precioTres;

    //sacamos el promedio
    promedio = sumaPrecios / 3;

    
    alert("El promedio de los precios es:" + promedio);



}
function PrecioFinal () 
{
    //C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

    //declaramos nuestras variables
    let precioUno;
    let precioDos;
    let precioTres;
    let sumaPrecios;
    let precioFinal;
    let IVA;

    IVA = 21
   

    //ingresamos los precios por Id para asignarle un valor
    precioUno = document.getElementById("txtIdPrecioUno").value;//"10"
    precioDos = document.getElementById("txtIdPrecioDos").value;//"100"
    precioTres = document.getElementById("txtIdPrecioTres").value;//"20"

    //parseo de texto a numero
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //sumaPrecios = precioUno + precioDos + precioTres
    sumaPrecios = precioUno + precioDos + precioTres;

    //le agregamos el 21% (IVA)        sacamos porcentaje
    precioFinal = sumaPrecios + sumaPrecios * IVA / 100;


    alert("El precio final mas IVA es:" + precioFinal);















	
}