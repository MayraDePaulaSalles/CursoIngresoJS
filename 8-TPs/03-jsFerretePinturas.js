/*3.	Para el departamento de Pinturas:
A.  Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centigrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //A.  Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centigrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
    //(32 °F - 32) * 5/9

    //declaramos nuestras variables
    let Fahrenheit;
    let Centigrados;
    let mensaje;

    //ingresamos nuestra variable por Id
    Fahrenheit = document.getElementById("txtIdTemperatura").value;

    //parseamos
    Fahrenheit = parseFloat(Fahrenheit);
    
    //hacemos el pase a Centigrados con la formula
    Centigrados = (Fahrenheit - 32) * 5/9;
   
    //concatenamos el mensaje
    mensaje = (Fahrenheit + "Fahrenheit son:" + Centigrados + " grados Centigrados");

    alert(mensaje);



}    
function CentigradosFahrenheit () 
{
   // B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
   // (0 °C * 9/5) + 32
   
   //declaramos nuestras variables
   let Centigrados;
   let Fahrenheit;
   let mensaje;

   //ingresamos nuestra variable por Id
   Centigrados = document.getElementById("txtIdTemperatura").value;

   //parseamos
   Centigrados = parseFloat(Centigrados);

   //hacemos el pase a Fahrenheit con la formula
   Fahrenheit = ( Centigrados * 9/5) + 32

   // concatenamos el mensaje
   mensaje = (Centigrados + "Centigrados son:" + Fahrenheit + "Fahrenheit");
   
   alert(mensaje);









	
}

