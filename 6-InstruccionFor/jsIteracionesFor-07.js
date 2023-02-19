/*
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
    //declaramos las variables
    let numeroIngresado;
    let contadorDivisores = 0;

    numeroIngresado = parseInt(prompt("Ingrese un numero"));

    for(let i = 1;         i <= numeroIngresado;        i++)
    {
        if(numeroIngresado % i == 0)//si el valor que tengo en la variable i divide al numeroIngresado y me da de resto 0
        {
            contadorDivisores++;
            console.log(i);
        }
    }
    console.log("La cantidad de divisores encontrados son:" + contadorDivisores);


}//FIN DE LA FUNCIÓN