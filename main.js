// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parOImpar(numero) {
  if (numero % 2 === 0) {
    return "El número " + numero + " es par";
  } else {
    return "El número " + numero + " es impar";
  }
}

console.log(parOImpar(10));

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayorOMenor(num1, num2) {
  if (num1 > num2) {
    console.log("El número mayos es " + num1);
  } else if (num1 < num2) {
    console.log("El número mayos es " + num2);
  } else {
    console.log("Ambos números son iguales");
  }
}

mayorOMenor(8, 8);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDeCinco(number) {
  if (number % 5 === 0) {
    console.log("El nro " + number + " SI es múltiplo de 5");
  } else {
    console.log("El nro " + number + " NO es múltiplo de 5");
  }
}

multiploDeCinco(14);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function contarHasta(nro) {
  for (let i = 0; i <= nro; i++) {
    console.log(i);
  }
}

contarHasta(5);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function repetirPalabra(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra, i);
  }
}

repetirPalabra("JavaScript", 6);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

function mostrarArray(verArray) {
  for (comp of verArray) {
    console.log(comp);
  }
}

const pc = ["teclado", "mouse", "cpu", "pantalla"];
mostrarArray(pc);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

function saltarQuinto(cuenta) {
  for (let i = 0; i < cuenta.length; i++) {
    if (cuenta[i] === cuenta[4]) {
      continue;
    }
    console.log(cuenta[i]);
  }
}

const unArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
saltarQuinto(unArray);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

function multiplicoPor(valores, multiplo) {
  for (let i = 0; i < valores.length; i++) {
    console.log(valores[i] * multiplo);
  }
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
multiplicoPor(numeros, 2);
