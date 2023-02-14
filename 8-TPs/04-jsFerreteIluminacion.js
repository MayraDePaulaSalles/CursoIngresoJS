/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 
function CalcularPrecio () 
{
    //declaramos las variables
    let cantLamparas;
    let marca;
    let precioSinDescuento;
    let porcentaje;
    let aumento;
    let precio;
    let precioDescuento;
    let precioFinal;
    let precioImpuesto;
    let mensaje;

    //variables fijas
    precioSinDescuento = 35
    porcentaje = 0;
    aumento = 10;
    
    //asigno un valor por Id
    cantLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    //caluculamos el precio inicial
    precio = cantLamparas * precioSinDescuento;

    //agregamos los porcentajes por medio de IF
    if(cantLamparas > 5){
        porcentaje = 50;
    }else if(cantLamparas == 5){
        if(marca == "ArgentinaLuz"){
            porcentaje = 40;
        }else{
            porcentaje = 30;
        }
    }else if(cantLamparas == 4){
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            porcentaje = 25;
        }else{
            porcentaje = 20;
        }
    }else if(cantLamparas == 3){
        if(marca == "ArgentinaLuz"){
            porcentaje = 15;
        }else if(marca == "FelipeLamparas"){
            porcentaje = 10;
        }else{
            porcentaje = 5;
        }
    }else{
        porcentaje = 0;
    }  
    
    //calculamos el precio final con descuento
    precioDescuento = precio * porcentaje / 100;
    precioFinal = precio - precioDescuento;

    //concatenamos el mensaje para el precio final con descuento
    mensaje = "$" + precioFinal;

    //condicion si el precio final supera los $120
    if(precioFinal >= 120){
        impuesto = precioFinal * aumento / 100;
        precioImpuesto = precioFinal + impuesto;
        alert("Usted pago $" + precioImpuesto + "de IIBB., siendo $" + impuesto + "el impuesto que se pagó")
    }

     //muestro los resultados con descuento
    document.getElementById("txtIdprecioDescuento").value = mensaje;


}*/

/* TP4 solo SWITCH (las marcas) y con IF (cantidad)
function CalcularPrecio ()
{
    //declaramos las variables
    let cantLamparas;
    let marca;
    let descuento = 0;
    let aumento = 10;
    let precioInicial;
    let precioDescuento;
    let precioFinal;
    let impuesto;
    let precioImpuesto;
    let mensaje;
    const PRECIO = 35;

    //ingresamos valores por Id
    cantLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    //parseamos
    cantLamparas = parseInt(cantLamparas);

    //calculamos el precio inicial
    precioInicial = cantLamparas * PRECIO;

    switch(marca)
    {
        case "ArgentinaLuz":
            if(cantLamparas >= 6){
                descuento = 50;
            }else{
                if(cantLamparas == 5){
                    descuento = 40;
                }else{
                   if(cantLamparas == 4){
                        descuento = 25;
                    }else{
                       if(cantLamparas == 3){
                            descuento = 15;
                        }else{
                            descuento = 0;
                        }
                    }
                }
            }
            break;
        case "FelipeLamparas":
            if(cantLamparas >= 6){
                descuento = 50;
            }else{
                if(cantLamparas == 5){
                    descuento = 30;
                }else{
                    if(cantLamparas == 4){
                        descuento = 25;
                    }else{
                        if(cantLamparas == 3){
                            descuento = 10;
                        }else{
                            descuento = 0;
                        }
                    }
                }
            }
            break;
        case "JeLuz":
            if(cantLamparas >5){
                descuento = 50;
            }else{
                if(cantLamparas == 5){
                    descuento = 30;
                }else{
                    if(cantLamparas == 4){
                        descuento = 20;
                    }else{
                        if(cantLamparas == 3){
                            descuento = 5;
                        }else{
                            descuento = 0;
                        }

                        
                    }
                }
            }
            break; 
        case "Haslluminacion":
            if(cantLamparas >5){
                descuento = 50;
            }else{
                if(cantLamparas == 5){
                    descuento = 30;
                }else{
                    if(cantLamparas == 4){
                        descuento = 20;
                    }else{
                        if(cantLamparas == 3){
                            descuento = 5;
                        }else{
                            descuento = 0;
                        }
                    }
                }
            }
            break;
        case "Osram":
            if(cantLamparas > 5){
                descuento = 50;
            }else{
                if(cantLamparas == 5){
                    descuento = 30;
                }else{
                    if(cantLamparas == 4){
                        descuento = 20;
                    }else{
                        if(cantLamparas == 3){
                            descuento = 5;
                        }else{
                            descuento = 0
                        }
                    }
                }
            }
            break;
        
    }

    //calculamos el precio final con descuento
    precioDescuento = precioInicial * descuento / 100;
    precioFinal = precioInicial - descuento;

    //concatenamos el mensaje para el precio final con descuento
    mensaje = "Precio Final:" + "$" + precioFinal;

    //condicion si el precio final supera los $120
    if(precioFinal >= 120){
        impuesto = precioFinal * aumento / 100;
        precioImpuesto = precioFinal + impuesto;
        alert("Usted pago $" + precioImpuesto + "de IIBB., siendo $" + impuesto + "el impuesto que se pagó")
    }

    //muestro los resultados con descuento
    document.getElementById("txtIdprecioDescuento").value = mensaje;



}*/
/* 
TP4 solo SWITCH (cantidad) y con IF (las marcas)
function CalcularPrecio ()
{
    //declaramos las variables
    let cantLamparas;
    let marca;
    let descuento = 0;
    let aumento = 10;
    let precioInicial;
    let precioDescuento;
    let precioFinal;
    let impuesto;
    let precioImpuesto;
    let mensaje;
    const PRECIO = 35;

    //ingresamos valores por Id
    cantLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    //parseamos
    cantLamparas = parseInt(cantLamparas);

    //calculamos el precio inicial
    precioInicial = cantLamparas * PRECIO;

    switch(cantLamparas)
    {
        case 5:
            if(marca == "ArgentinaLuz"){
                descuento = 40;
            }else{
                descuento = 30;
            }
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                descuento = 25;
            }else{
                descuento = 20;
            }
        case 3:
            if(marca == "ArgentinaLuz"){
                descuento = 15;
            }else{
                if(marca == "FelipeLamparas"){
                    descuento = 10;
                }else{
                    descuento = 5;
                }
            }
            break;
        default:
            if(cantLamparas > 5){
                descuento = 50;
            }
            break;
    }

    //calculamos el precio final con descuento
    precioDescuento = precioInicial * descuento / 100;
    precioFinal = precioInicial - descuento;

    //concatenamos el mensaje para el precio final con descuento
    mensaje = "Precio Final:" + "$" + precioFinal;

    //condicion si el precio final supera los $120
    if(precioFinal >= 120){
        impuesto = precioFinal * aumento / 100;
        precioImpuesto = precioFinal + impuesto;
        alert("Usted pago $" + precioImpuesto + "de IIBB., siendo $" + impuesto + "el impuesto que se pagó")
    }

    //muestro los resultados con descuento
    document.getElementById("txtIdprecioDescuento").value = mensaje;


}*/

/*TP4 solo SWITCH*/
function CalcularPrecio ()
{
    //declaramos las variables
    let cantLamparas;
    let marca;
    let descuento = 0;
    let aumento = 10;
    let precioInicial;
    let precioDescuento;
    let precioFinal;
    let impuesto;
    let precioImpuesto;
    let mensaje;
    const PRECIO = 35;
    
    //ingresamos valores por Id
    cantLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    //parseamos
    cantLamparas = parseInt(cantLamparas);

    //calculamos el precio inicial
    precioInicial = cantLamparas * PRECIO;

    if(cantLamparas > 0){
        switch(cantLamparas)
        {
            case 5:
                switch(marca){
                    case "ArgentinaLuz": descuento = 40;
                    break;
                default: descuento = 30;
                break;
                }
            break;
            
            case 4:
                switch(marca){
                    case "ArgentinaLuz":
                    case "FelipeLamparas": descuento = 25;
                    break;
                default: descuento = 20;
                break;
                }
            break;
            
            case 3:
                switch(marca){
                    case "ArgentinaLuz": descuento = 15;
                    break;
                    case "FelipeLamparas": descuento = 10;
                    break;
                default: descuento = 5;
                break;
                }
            break;
            
            case 2:
                descuento = 0;
            break;
            
            case 1:
                descuento = 0;
            break;
            
            default:
                descuento = 50;

            
        }   
    }

    //calculamos el precio final con descuento
    precioDescuento = precioInicial * descuento / 100;
    precioFinal = precioInicial - descuento;

    //concatenamos el mensaje para el precio final con descuento
    mensaje = "Precio Final:" + "$" + precioFinal;

    //condicion si el precio final supera los $120
    if(precioFinal >= 120){
        impuesto = precioFinal * aumento / 100;
        precioImpuesto = precioFinal + impuesto;
        alert("Usted pago $" + precioImpuesto + "de IIBB., siendo $" + impuesto + "el impuesto que se pagó")
    }

    //muestro los resultados con descuento
    document.getElementById("txtIdprecioDescuento").value = mensaje;



   
 



}



