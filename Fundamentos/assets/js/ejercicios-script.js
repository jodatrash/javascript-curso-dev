/* 
Crea una función que reciba dos números
como parámetros y determine cual es el mayor
entre ellos.
*/
function numMayor(num1, num2) {
  return Math.max(num1, num2);
};
let resultado = numMayor(5, 10);
console.log(resultado);


/* 
Crear un función 
que tome un número como argumento y devuelva 
la cadena si es par o impar
*/
function pairOrNot(num1) {
  if (num1 % 2 === 0) {
    console.log('Es par');
  } else {
    console.log('Es impar');
  }
};
pairOrNot(101);


/* 
Crear una función que reciba tres
números como parámetros y 
devuelva su promedio
*/
function average(num1, num2, num3) {
  return ((num1 + num2 + num3) / 3)
};
let result = average(5, 6, 5);
console.log(result);