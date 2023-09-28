// Escribe una función a la que le damos dos números 
//     y que devuelva true si el primer número es más grande 
//     que el segundo número y false en el caso contrario. 
//     Pide dos números al usuario, y pásalos a la función. 
//     Muestra en consola “El primer número es más grande” o 
//     “El primer número no es más grande”



function valores(num1, num2) {
    if (num1 > num2) {
        console.log(num1 > num2)
        console.log("el primer numero es mas grande");
    } else {
        console.log(num1 > num2);
        console.log("El primer numero no es mas grande");
    }
}


let numero1 = parseInt(prompt("Indica un numero"));
let numero2 = parseInt(prompt("Indica un numero"));

valores(numero1, numero2)