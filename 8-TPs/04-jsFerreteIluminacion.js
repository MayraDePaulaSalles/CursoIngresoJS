/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    //A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
    //declaramos las variables
    let lamparitas;
    let precioSinDescuento;
    let descuento;
    let marca;
    let totalPrecioLamparitas;
    let total;
    let precioFinal;
    let mensaje;

    precioSinDescuento = 35;
    descuento = 50;

    lamparitas = document.getElementById("txtIdCantidad").value;
    lamparitas = parseInt(lamparitas);

    marca = document.getElementById("Marca").value;

    if(lamparitas >= 6)
    {
        totalPrecioLamparitas = precioSinDescuento * lamparitas;
        //sacamos porcentaje
        total = totalPrecioLamparitas * descuento / 100;
        
        precioFinal = total - descuento;

        mensaje = precioFinal
        document.getElementById("txtIdprecioDescuento").value = mensaje;


    }

    //B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
   //declaramos variables
    let cantLamparitas;
    let precioSinDesc;
    let marcaLamparas;
    let descuentoUno;
    let descuentoDos;
    let totalLamparitasPrecio;
    let totalUno;
    let precioFinalUno;

    precioSinDesc = 35;
    descuentoUno = 40;
    descuentoDos = 30;

    //tomamos por Id y parseamos
    cantLamparitas = document.getElementById("txtIdCantidad").value;
    cantLamparitas = parseInt(cantLamparitas);

    marcaLamparas = document.getElementById("Marca").value;

    if(cantLamparitas == 5 && (marcaLamparas == "ArgentinaLuz")){

        //sacamos el total de lamparitas
        totalLamparitasPrecio = precioSinDesc * cantLamparitas;
        //sacamos el porcentaje
        totalUno = totalLamparitasPrecio * descuentoUno / 100;

        precioFinalUno = totalUno - descuentoUno;

        mensaje = precioFinalUno
        document.getElementById("txtIdprecioDescuento").value = mensaje;


    }else{
        if(cantLamparitas == 5 && (marcaLamparas == "OtraMarca"))
        //sacamos el total de las lamparitas
        totalLamparitasPrecio = precioSinDesc * cantLamparitas;
        //sacamos el porcentaje
        totalUno = totalLamparitasPrecio * descuentoDos / 100;

        precioFinalUno = totalUno - descuentoDos;

        mensaje = precioFinalUno
        document.getElementById("txtIdprecioDescuento").value = mensaje
        
    }

    //C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
    //declaramos las variables
    let cantLamparas;
    let precioReal;
    let marcaLamparitas;
    let descuentoTres;
    let descuentoCuatro;
    let totalLamparasPrecio;
    let totalDos;
    let precioFinalDos;

    precioReal = 35;
    descuentoTres  = 25;
    descuentoCuatro = 20;
    
    //tomamos por Id y parseamos
    cantLamparas = document.getElementById("txtIdCantidad").value;
    cantLamparas = parseInt(cantLamparas);

    marcaLamparitas = document.getElementById("Marca").value;

    if(cantLamparas = 4 && (marcaLamparitas == "ArgentinaLuz" || "FelipeLamparas")){

        //sacamos el total de las lamparitas
        totalLamparasPrecio = precioReal * cantLamparas;
        //sacamos el porcentaje
        totalDos = totalLamparasPrecio * descuentoTres / 100;

        precioFinalDos = totalDos - descuentoTres;
        
        mensaje = precioFinalDos;
        document.getElementById("txtIdprecioDescuento").value = mensaje;
    }else{
        if(cantLamparas == 4 && (marcaLamparas == "OtraMarca"))
        //sacamos el total de lamaparitas
        totalLamparasPrecio = precioReal * cantLamparas;
        //sacamos el porcentaje
        totalDos = totalLamparasPrecio * descuentoCuatro / 100;

        precioFinalDos = totalDos - descuentoCuatro;

        mensaje = precioFinalDos;
        document.getElementById("txtIdprecioDescuento").value = mensaje;


        
    }

    //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.





    

    


    







 	
}
