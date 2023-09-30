// <!-- Escribe un programa que pida al usuario dos números. 
//       Usa esos 2 números en una función que divide el primero por el segundo
//       y devuelve el resultado. Muestra el resultado que devuelve la función 
//       en un alert. Después vuelve a pedir los números y hacer todo otra vez 
//       hasta que el usuario introduzca un 0 como segundo número. -->


function division(numA, numB) {
    if (numB !== 0) {
        resultado = numA / numB
        alert(resultado)
    }
}

while (true) {
    let num1 = parseInt(prompt("Escribe un numero "))
    let num2 = parseInt(prompt("Escribe un numero "))
    if (num2 !== 0) division(num1, num2)
    else {
        alert("Has introducido 0")
        break;
    }
}