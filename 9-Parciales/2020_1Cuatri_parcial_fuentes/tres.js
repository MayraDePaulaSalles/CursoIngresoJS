/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{
    //declaramos variables
    let respuesta;
    let nombre;
    let edad;
    let sexo;
    let estadoCivil;
    let temperaturaCorporal;
    let nombrePersonaMasTemperatura;
    let mayorTemperatura;
    let banderaMasTemperatura;
    let contadorMayoresViudos;
    let contadorSolterosViudos;
    let acumuladorEdadHombresSolteros;
    let contadorSolteros;
    let personasTerceraEdad;
    let promedioHombresSolteros;
    let contadorTerceraEdad;
    let acumuladorTemperaturaTerceraEdad;


    respuesta = 'si';
    banderaMasTemperatura = true;
    mayorTemperatura = 0;
    contadorSolterosViudos = 0;
    acumuladorEdadHombresSolteros = 0;
    contadorSolteros = 0;
    contadorMayoresViudos = 0;
    contadorTerceraEdad = 0;


    while(respuesta == 'si')
    {
        nombre = prompt("Ingresar nombre:");
        
        edad = parseInt(prompt("Ingresar edad:"));
        while(isNaN(edad) || edad < 18 || edad > 110)
        {
            edad = parseInt(prompt("Error, ingresar edad entre 18 y 110 años:"));
        }
       
        sexo = prompt("Ingresar sexo de la persona 'f' para femenino o 'm' para masculino:");
        while(sexo != 'f' && sexo != 'm')
        {
            sexo = prompt("Error, ingresar sexo de la persona 'f' para femenino o 'm' para masculino");
        }
       
        estadoCivil = prompt("Ingrese el estado civil de la persona: soltero, casado o viudo");
        while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
        {
            estadoCivil = prompt("Error, ingrese el estado civil de la persona: soltero, casado o viudo");
        }

        temperaturaCorporal = parseFloat(prompt("Ingrese la temperatura corporal:"));
        while(temperaturaCorporal < 32 || temperaturaCorporal > 43)
        {
            temperaturaCorporal = parseFloat(prompt("Error, ingrese la temperatura corporal valida entre 32 y 43"));
        }

        //a) El nombre de la persona con mas temperatura.
        if(banderaMasTemperatura == true || mayorTemperatura < temperaturaCorporal)
        {
            nombrePersonaMasTemperatura = nombre;
            mayorTemperatura = temperaturaCorporal;
            banderaMasTemperatura = false;
        }

        switch(estadoCivil)
        {
            case "soltero":
                if(sexo == 'm')
                {
                    //c) La cantidad de hombres que hay solteros o viudos.
                    contadorSolterosViudos = contadorSolterosViudos + 1;
                    //e) El promedio de edad entre los hombres solteros.
                    contadorSolteros = contadorSolteros + 1;
                    acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edad;
                }
                break;
            case "casado":

                break;
            case "viudo":
                if(sexo == 'm')
                {
                    //c) La cantidad de hombres que hay solteros o viudos.
                    contadorSolterosViudos = contadorSolterosViudos + 1;
                }
                if(edad > 18 && edad < 110)
                {
                    //b) Cuantos mayores de edad estan viudos
                    contadorMayoresViudos = contadorMayoresViudos + 1;
                }
                break;
                   
                
        }
        //FIN DEL SWITCH

        //d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
        if(edad > 60 && temperaturaCorporal > 38)
        {
            personasTerceraEdad = edad;
            contadorTerceraEdad = contadorTerceraEdad + 1;
            acumuladorTemperaturaTerceraEdad = temperaturaCorporal;
        
        }
        respuesta = prompt("Desea ingresar otro dato?: 'si'/'no'");

    }//FIN DEL WHILE

    //e) El promedio de edad entre los hombres solteros.
    promedioHombresSolteros = acumuladorEdadHombresSolteros / contadorSolteros;

    console.log("El nombre de la persona con mas temperatura es:" + nombrePersonaMasTemperatura);
    console.log("La cantidad de mayores de edad que estan viudos es:" + contadorMayoresViudos);
    console.log("La cantidad de hombres solteros o viudos es:" + contadorSolterosViudos);
    console.log("Las personas de la tercera edad con la temperatura mayor a 38 son:" + contadorTerceraEdad);
    console.log("El promedio de edad entre los hombres solteros es:" + promedioHombresSolteros);

	
}
