function ejercicio1(){

    let numero = parseInt(prompt("Escribe un numero"))
    if (numero > 99 && numero < 1000){
        alert("Este numero tiene 3 digitos")
    }else{
        alert("Este numero no tiene 3 digitos")
    }
}

function ejercicio2() {
    let numero_ingresado = parseInt(prompt("Ingrese un número entero"));

    if (numero_ingresado < 0) {
        alert("El número ingresado es negativo");
    } else if (numero_ingresado === 0) {
        alert("El número ingresado es 0, por lo que no es negativo ni positivo.");
    } else if (numero_ingresado > 0) {
        alert("El número ingresado no es negativo.");
    }
}

function ejercicio3() {
    let numero_ingresado = parseInt(prompt("Ingrese un número"));
    
    let ultima_cifra = Math.abs(numero_ingresado) % 10;
    
    if (ultima_cifra === 4) {
        alert("El número ingresado termina en 4.");
    } else {
        alert("El número ingresado no termina en 4.");
    }
}

function ejercicio4() {
    let primer_numero = parseInt(prompt("Ingrese el primer número"), 10);
    let segundo_numero = parseInt(prompt("Ingrese el segundo número"), 10);
    let tercer_numero = parseInt(prompt("Ingrese el tercer número"), 10);

    if (tercer_numero > segundo_numero && segundo_numero > primer_numero) {
        alert("Números de menor a mayor: " + primer_numero + ", " + segundo_numero + ", " + tercer_numero);
    } else if (segundo_numero > tercer_numero && tercer_numero > primer_numero) {
        alert("Números de menor a mayor: " + primer_numero + ", " + tercer_numero + ", " + segundo_numero);
    } else if (tercer_numero > primer_numero && primer_numero > segundo_numero) {
        alert("Números de menor a mayor: " + segundo_numero + ", " + primer_numero + ", " + tercer_numero);
    } else if (primer_numero > tercer_numero && tercer_numero > segundo_numero) {
        alert("Números de menor a mayor: " + segundo_numero + ", " + tercer_numero + ", " + primer_numero);
    } else if (primer_numero > segundo_numero && segundo_numero > tercer_numero) {
        alert("Números de menor a mayor: " + tercer_numero + ", " + segundo_numero + ", " + primer_numero);
    } else if (segundo_numero > primer_numero && primer_numero > tercer_numero) {
        alert("Números de menor a mayor: " + tercer_numero + ", " + primer_numero + ", " + segundo_numero);
    }
}

function ejercicio5(){

}

function ejercicio6(){

}

function ejercicio7(){

}

function ejercicio8(){

}

function ejercicio9(){

}

function ejercicio10(){

}

function ejercicio11(){

}

function ejercicio12(){

}

function ejercicio13(){

}

function ejercicio14(){

}

function ejercicio15(){

}

function ejercicio16(){

}

function ejercicio17(){

}

function ejercicio18(){

}

function ejercicio19(){

}

function ejercicio20(){

}

function ejercicio21(){

}

function ejercicio22(){

}

function ejercicio23(){

}

function ejercicio24(){

}

function ejercicio25(){

}

function ejercicio26(){

}

function ejercicio27(){

}

function ejercicio28(){

}

function ejercicio29(){

}

function ejercicio30(){

}

function ejercicio31(){

}

function ejercicio32(){

}

function ejercicio33(){

}

function ejercicio34(){

}

function ejercicio35(){

}

function ejercicio36(){

}

function ejercicio37(){

}

function ejercicio38(){

}

function ejercicio39(){

}

function ejercicio40(){

}