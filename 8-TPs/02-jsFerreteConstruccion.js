/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //A. mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

    //declaramos nuestras variables
    let largo;
    let ancho;
    let perimetro;
    let alambre;
    


    //ingresamos nuestras variables por Id 
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    //parseamos
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    //saco el perimetro
    perimetro = largo * 2 + ancho *2;

    //hago la multiplicacion 
    alambre = perimetro * 3;



    alert("La cantidad de alambre que se debe comprar es:" + alambre);



}
function Circulo () 
{
   // B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
   
   //declaramos las variables
   let radio;
   let perimetro;
   let alambre;
   let Pi;

   Pi= 3,14;

   //ingresamos nuestra variable por id
   radio = document.getElementById("txtIdRadio").value;
   
   //parseamos
   radio = parseFloat(radio);

   //saco el peimetro
   perimetro = 2 * Pi * radio;

   //hago la multiplicacion
   alambre = perimetro * 3;


   alert("La cantidad de alambre que se debe comprar es:" + alambre);



}
function Materiales () 
{
    //C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

    //declaramos nuestras variables
    let largo;
    let ancho;
    let area;
    let bolsasCemento;
    let bolsasCal;
    const CEMENTO = 2;
    const CAL = 3;
    let mensaje;

    //asignamos un valor a nuestras variables
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    //parseamos
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    //saco el area del rectangulo
    area = (largo * ancho);

    //multiplico metro cuadrado por cemento y luego por cal
    bolsasCemento = (area * CEMENTO);
    bolsasCal = (area * CAL);

   
    mensaje = " Se necesitan:" + bolsasCemento + "bolsas de cemento" + bolsasCal + "bolsas de cal";

    alert(mensaje);



}