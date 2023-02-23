/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
//como dice "hasta que el cliente quiera" vamos a iniciar con un WHILE con la condicion respuesta = 'si'.
Tipo validad("arena";"cal";"cemento")//similar a la validacion del sexo con WHILE.
Cantidad de bolsas,// que sea > 0 y < 1000
Precio por bolsa (más de cero ),// que sea > 0 y < 100000

//con IF, variable cantidad, variable de descuento
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

a) El importe total a pagar , bruto sin descuento y...
//IF >10 o <30 hay descuento
b) el importe total a pagar con descuento(solo si corresponde)
//contador SWITCH
d) Informar el tipo con mas cantidad de bolsas.
//Bandera IF
f) El tipo mas caro

*/
function mostrar()
{
  let cantidadBolsas;
  let acumuladorCal;
  let acumuladorCemento;
  let acumuladorArena;
  let tipoDeBolsa;
  let descuento;
  let precioBolsas;
  let importeTotalDescuento;
  let banderaDelMasCaro;
  let precioBolsaMasCara;
  let tipoMasCaro;
  let respuesta;
  let acumuladorDeBolsas;
  let acumuladorPrecio;
  let mensaje;
  let mayorTipoDeBolsa;

  acumuladorDeBolsas = 0;
  banderaDelMasCaro = true;
  respuesta = 'si';
  acumuladorCal = 0;
  acumuladorCemento = 0;
  acumuladorArena = 0;
  cantidadBolsas = 0;
  descuento = 0;
  precioBolsas = 1;


  while (respuesta == 'si') 
  {
    tipoDeBolsa = prompt("ingrese tipo de bolsa: 'cal', 'arena', 'cemento'");
    while (tipoDeBolsa != "cal" && tipoDeBolsa != "arena" && tipoDeBolsa != "cemento") 
    {
      tipoDeBolsa = prompt("error, ingrese tipo de bolsa valido: 'cal', 'arena', 'cemento'");
    }
    precioBolsas = parseFloat(prompt("Ingrese precio de las bolsas, entre 0 y 10000 "));
    while (isNaN(precioBolsas) || precioBolsas < 0 || precioBolsas > 10000) 
    {
      precioBolsas = parseFloat(prompt("Error, ingrese el precio de las bolsas, entre 0 y 10000 "));
    }
    cantidadBolsas = parseInt(prompt("Ingrese cantidad de bolsas"));
    while (isNaN(cantidadBolsas) || cantidadBolsas < 0 || cantidadBolsas > 1000) 
    {
      cantidadBolsas = parseInt(prompt("Error, Ingrese ingrese cantidad de bolsas "));
    }
     
    acumuladorPrecio = acumuladorPrecio + (precioBolsas * cantidadBolsas);
    acumuladorDeBolsas = acumuladorDeBolsas + cantidadBolsas;
      
    switch (tipoDeBolsa) 
    {
      case "cal":
        acumuladorCal = acumuladorCal + cantidadBolsas;
        break;
      case "arena":
        acumuladorArena = acumuladorArena + cantidadBolsas;
        break;
      case "cemento":
        acumuladorCemento = acumuladorCemento + cantidadBolsas;
        break;
    }
    if (banderaDelMasCaro == true || precioBolsaMasCara < precioBolsas) 
    {
      precioBolsaMasCara = precioBolsas;
      tipoMasCaro = tipoDeBolsa;
      banderaDelMasCaro = false;
    }
    
  respuesta = prompt("¿Desea seguir? Ingrese: 'si'");
}//fin del while
  if (cantidadBolsas >29 ) 
      {
        descuento = -25;

      }
      else if (cantidadBolsas > 9) 
      {
        descuento = -15;
      }
      else
      {
        descuento = 0;
      }
      if (acumuladorCal > acumuladorArena && acumuladorCal > acumuladorCemento) 
      {
        mayorTipoDeBolsa = "cal";
      }
      else if (acumuladorArena > acumuladorCal && acumuladorArena >= acumuladorCemento)
      {
        mayorTipoDeBolsa = "arena";
      }
      else
      {
        mayorTipoDeBolsa = "cemento";
      }
      if (descuento != 0) 
      {
        importeTotalDescuento = acumuladorPrecio + (acumuladorPrecio * descuento/100);
        mensaje = "el importe con descuento es: "+ importeTotalDescuento;
      }
      else 
      {
        mensaje = "no se aplico el descuento";
      }
      console.log("el importe total a pagar es: " + acumuladorPrecio);
      console.log(mensaje);
      console.log("el tipo con mas cantidad de bolsas es: " + mayorTipoDeBolsa);
      console.log("el tipo mas caro es: " + tipoMasCaro + "con $ " + precioBolsaMasCara);
      



}
